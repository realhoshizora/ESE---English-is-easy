// ==============================================================================
// SERVER ONLINE (KAHOOT-STYLE) CHO ESE - ENGLISH IS EASY
// Quan ly 1 phong choi duy nhat: hoc sinh nhap ten + PIN de vao, host dieu khien.
// ==============================================================================
const path = require("path");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const LESSON_DATABASE = require("./lessonData.js");

const PORT = process.env.PORT || 3000;
// Dat bien moi truong HOST_PASSWORD neu muon bao ve trang /host.html khoi nguoi la.
const HOST_PASSWORD = process.env.HOST_PASSWORD || "";
const QUESTION_DURATION_MS = 20000;

const app = express();
app.use(express.static(__dirname));

const server = http.createServer(app);
const io = new Server(server);

function generatePin() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createRoom() {
  return {
    pin: generatePin(),
    hostSocketId: null,
    phase: "lobby", // lobby | question | reveal | over
    lessonKey: "directions",
    questionOrder: [],
    questionIndex: -1,
    questionStartedAt: 0,
    questionTimer: null,
    players: new Map() // socketId -> player
  };
}

let room = createRoom();

function lessonList() {
  return Object.keys(LESSON_DATABASE).map((key) => ({ key, title: LESSON_DATABASE[key].title }));
}

function publicPlayerList() {
  return Array.from(room.players.values()).map((p) => ({
    id: p.id,
    name: p.name,
    score: p.score,
    hearts: p.hearts,
    connected: p.connected,
    answered: p.answeredThisRound
  }));
}

function hostSnapshot() {
  return {
    pin: room.pin,
    phase: room.phase,
    lessonKey: room.lessonKey,
    lessonList: lessonList(),
    players: publicPlayerList()
  };
}

function broadcastRoomUpdate() {
  io.emit("room:update", {
    pin: room.pin,
    phase: room.phase,
    lessonKey: room.lessonKey,
    players: publicPlayerList()
  });
}

function currentQuestionData() {
  const lesson = LESSON_DATABASE[room.lessonKey];
  const qIdx = room.questionOrder[room.questionIndex];
  return lesson.grammar[qIdx];
}

function startQuestion() {
  room.questionIndex++;
  if (room.questionIndex >= room.questionOrder.length) {
    endGame();
    return;
  }

  room.phase = "question";
  room.questionStartedAt = Date.now();
  room.players.forEach((p) => {
    p.answeredThisRound = false;
  });

  const q = currentQuestionData();
  io.emit("question:show", {
    index: room.questionIndex,
    total: room.questionOrder.length,
    text: q.q,
    options: q.options,
    durationMs: QUESTION_DURATION_MS
  });

  clearTimeout(room.questionTimer);
  room.questionTimer = setTimeout(() => revealQuestion(), QUESTION_DURATION_MS + 500);
  broadcastRoomUpdate();
}

function allAnswered() {
  const active = Array.from(room.players.values()).filter((p) => p.connected && p.hearts > 0);
  if (active.length === 0) return false;
  return active.every((p) => p.answeredThisRound);
}

function leaderboardSnapshot() {
  return Array.from(room.players.values())
    .sort((a, b) => b.score - a.score)
    .map((p) => ({ name: p.name, score: p.score, hearts: p.hearts }));
}

function revealQuestion() {
  clearTimeout(room.questionTimer);
  room.phase = "reveal";
  const q = currentQuestionData();

  io.emit("question:reveal", {
    correctIndex: q.ans,
    hint: q.hint,
    leaderboard: leaderboardSnapshot()
  });
  broadcastRoomUpdate();
}

function endGame() {
  room.phase = "over";
  io.emit("game:over", { leaderboard: leaderboardSnapshot() });
  broadcastRoomUpdate();
}

function computeScore(elapsedMs, durationMs) {
  // Diem cang cao neu tra loi cang nhanh, kieu Kahoot: 500 - 1000 diem cho moi cau dung.
  const ratio = Math.max(0, 1 - elapsedMs / durationMs);
  return Math.round(500 + 500 * ratio);
}

io.on("connection", (socket) => {
  socket.on("host:connect", (payload = {}) => {
    if (HOST_PASSWORD && payload.password !== HOST_PASSWORD) {
      socket.emit("host:error", { message: "Sai mật khẩu host!" });
      return;
    }
    room.hostSocketId = socket.id;
    socket.emit("host:state", hostSnapshot());
  });

  socket.on("host:newSession", () => {
    if (socket.id !== room.hostSocketId) return;
    clearTimeout(room.questionTimer);
    const keepLessonKey = room.lessonKey;
    room = createRoom();
    room.lessonKey = keepLessonKey;
    room.hostSocketId = socket.id;
    socket.emit("host:state", hostSnapshot());
    broadcastRoomUpdate();
  });

  socket.on("host:selectLesson", ({ lessonKey } = {}) => {
    if (socket.id !== room.hostSocketId) return;
    if (!LESSON_DATABASE[lessonKey]) return;
    room.lessonKey = lessonKey;
    broadcastRoomUpdate();
  });

  socket.on("host:startGame", () => {
    if (socket.id !== room.hostSocketId) return;
    if (room.players.size === 0) {
      socket.emit("host:error", { message: "Chưa có học sinh nào tham gia!" });
      return;
    }
    const lesson = LESSON_DATABASE[room.lessonKey];
    room.questionOrder = shuffle(lesson.grammar.map((_, i) => i));
    room.questionIndex = -1;
    room.players.forEach((p) => {
      p.score = 0;
      p.hearts = 3;
      p.answeredThisRound = false;
    });
    startQuestion();
  });

  socket.on("host:nextQuestion", () => {
    if (socket.id !== room.hostSocketId) return;
    if (room.phase !== "reveal") return;
    startQuestion();
  });

  socket.on("host:forceReveal", () => {
    if (socket.id !== room.hostSocketId) return;
    if (room.phase !== "question") return;
    revealQuestion();
  });

  socket.on("host:endGame", () => {
    if (socket.id !== room.hostSocketId) return;
    clearTimeout(room.questionTimer);
    endGame();
  });

  socket.on("host:kickPlayer", ({ playerId } = {}) => {
    if (socket.id !== room.hostSocketId) return;
    room.players.delete(playerId);
    io.to(playerId).emit("kicked");
    broadcastRoomUpdate();
  });

  socket.on("student:join", ({ name, pin } = {}) => {
    const cleanName = (name || "").trim().slice(0, 20).replace(/[<>]/g, "");
    if (!cleanName) {
      socket.emit("join:error", { message: "Vui lòng nhập tên!" });
      return;
    }
    if (pin !== room.pin) {
      socket.emit("join:error", { message: "Mã PIN không đúng!" });
      return;
    }
    const nameTaken = Array.from(room.players.values()).some(
      (p) => p.connected && p.name.toLowerCase() === cleanName.toLowerCase()
    );
    if (nameTaken) {
      socket.emit("join:error", { message: "Tên này đã có người dùng, hãy chọn tên khác!" });
      return;
    }

    room.players.set(socket.id, {
      id: socket.id,
      name: cleanName,
      score: 0,
      hearts: 3,
      answeredThisRound: false,
      connected: true
    });

    socket.emit("join:success", { playerId: socket.id, phase: room.phase });
    broadcastRoomUpdate();
  });

  socket.on("student:submitAnswer", ({ choiceIndex } = {}) => {
    const player = room.players.get(socket.id);
    if (!player || room.phase !== "question") return;
    if (player.answeredThisRound || player.hearts <= 0) return;

    const q = currentQuestionData();
    const elapsed = Date.now() - room.questionStartedAt;
    const isCorrect = choiceIndex === q.ans;
    player.answeredThisRound = true;

    if (isCorrect) {
      player.score += computeScore(elapsed, QUESTION_DURATION_MS);
    } else if (player.hearts > 0) {
      player.hearts--;
    }

    socket.emit("answer:ack", { correct: isCorrect, score: player.score, hearts: player.hearts });

    const hostSocket = room.hostSocketId && io.sockets.sockets.get(room.hostSocketId);
    if (hostSocket) {
      const answeredCount = Array.from(room.players.values()).filter((p) => p.answeredThisRound).length;
      hostSocket.emit("host:answerProgress", { answeredCount, totalPlayers: room.players.size });
    }

    if (allAnswered()) {
      revealQuestion();
    }
  });

  socket.on("disconnect", () => {
    if (socket.id === room.hostSocketId) {
      room.hostSocketId = null;
      return;
    }
    const player = room.players.get(socket.id);
    if (player) {
      player.connected = false;
      broadcastRoomUpdate();
    }
  });
});

server.listen(PORT, () => {
  console.log(`ESE Online server dang chay tai cong ${PORT}`);
  console.log(`Hoc sinh vao: http://localhost:${PORT}/`);
  console.log(`Giao vien vao: http://localhost:${PORT}/host.html`);
});
