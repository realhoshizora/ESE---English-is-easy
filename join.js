// ==============================================================================
// CLIENT HỌC SINH (JOIN.JS) - MÀN HÌNH THAM GIA & CHƠI KIỂU KAHOOT
// ==============================================================================
const socket = io();

let myPlayerId = null;
let myName = "";
let lastQuestionOptions = [];

const screens = {
  join: document.getElementById("screen-join"),
  lobby: document.getElementById("screen-lobby"),
  eliminated: document.getElementById("screen-eliminated"),
  question: document.getElementById("screen-question"),
  answered: document.getElementById("screen-answered"),
  reveal: document.getElementById("screen-reveal"),
  gameover: document.getElementById("screen-gameover")
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

function submitJoin() {
  const pin = document.getElementById("inputPin").value.trim();
  const name = document.getElementById("inputName").value.trim();
  document.getElementById("joinError").textContent = "";
  if (!pin || !name) {
    document.getElementById("joinError").textContent = "Please enter both PIN and name!";
    return;
  }
  myName = name;
  socket.emit("student:join", { name, pin });
}

document.getElementById("btnJoin").addEventListener("click", submitJoin);
document.getElementById("inputName").addEventListener("keydown", (e) => { if (e.key === "Enter") submitJoin(); });
document.getElementById("inputPin").addEventListener("keydown", (e) => { if (e.key === "Enter") submitJoin(); });

socket.on("join:error", ({ message }) => {
  document.getElementById("joinError").textContent = message;
});

socket.on("join:success", ({ playerId }) => {
  myPlayerId = playerId;
  document.getElementById("lobbyName").textContent = myName;
  showScreen("lobby");
});

socket.on("kicked", () => {
  alert("Bạn đã bị host loại khỏi trò chơi.");
  location.reload();
});

const OPTION_COLORS = ["opt-red", "opt-blue", "opt-yellow", "opt-green"];

socket.on("question:show", (data) => {
  lastQuestionOptions = data.options;
  document.getElementById("qCounter").textContent = `Question ${data.index + 1}/${data.total}`;
  document.getElementById("qText").textContent = data.text;

  const optionsEl = document.getElementById("qOptions");
  optionsEl.innerHTML = "";
  data.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = `q-option-btn ${OPTION_COLORS[i % OPTION_COLORS.length]}`;
    btn.textContent = opt;
    btn.onclick = () => submitAnswer(i);
    optionsEl.appendChild(btn);
  });

  const timerBar = document.getElementById("timerBar");
  timerBar.style.transition = "none";
  timerBar.style.width = "100%";
  requestAnimationFrame(() => {
    timerBar.style.transition = `width ${data.durationMs}ms linear`;
    timerBar.style.width = "0%";
  });

  showScreen("question");
});

function submitAnswer(choiceIndex) {
  document.querySelectorAll(".q-option-btn").forEach((b) => { b.disabled = true; });
  socket.emit("student:submitAnswer", { choiceIndex });
}

socket.on("answer:ack", ({ correct, score, hearts }) => {
  document.getElementById("answerResultIcon").textContent = correct ? "✅" : "❌";
  document.getElementById("answerResultText").textContent = correct ? "Correct! 🎉" : "Wrong answer!";
  document.getElementById("qHearts").textContent = "❤️".repeat(Math.max(0, hearts)) + "🖤".repeat(3 - Math.max(0, hearts));
  if (hearts <= 0) {
    document.getElementById("eliminatedScore").textContent = score;
  }
  showScreen("answered");
});

function renderLeaderboard(container, leaderboard) {
  container.innerHTML = "";
  leaderboard.forEach((p, i) => {
    const row = document.createElement("div");
    row.className = "leaderboard-row" + (p.name === myName ? " me" : "");
    row.innerHTML = `
      <span class="leaderboard-rank">#${i + 1}</span>
      <span class="leaderboard-name"></span>
      <span class="leaderboard-score">${p.score} PTS</span>
    `;
    row.querySelector(".leaderboard-name").textContent = p.name + (p.hearts <= 0 ? " 💔" : "");
    container.appendChild(row);
  });
}

socket.on("question:reveal", ({ correctIndex, hint, leaderboard }) => {
  document.getElementById("revealCorrectText").textContent = lastQuestionOptions[correctIndex] || "";
  document.getElementById("revealHint").textContent = hint || "";
  renderLeaderboard(document.getElementById("leaderboardList"), leaderboard);

  const me = leaderboard.find((p) => p.name === myName);
  if (me && me.hearts <= 0) {
    document.getElementById("eliminatedScore").textContent = me.score;
    showScreen("eliminated");
  } else {
    showScreen("reveal");
  }
});

socket.on("game:over", ({ leaderboard }) => {
  renderLeaderboard(document.getElementById("finalLeaderboardList"), leaderboard);
  showScreen("gameover");
});

socket.on("room:update", ({ phase }) => {
  // Khi host mở phiên chơi mới sau khi đã kết thúc, đưa học sinh về phòng chờ.
  if (phase === "lobby" && myPlayerId && screens.gameover.classList.contains("active")) {
    showScreen("lobby");
  }
});
