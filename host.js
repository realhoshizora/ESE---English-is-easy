// ==============================================================================
// CLIENT GIÁO VIÊN (HOST.JS) - ĐIỀU KHIỂN PHIÊN CHƠI
// ==============================================================================
const socket = io();

let lastQuestionOptions = [];

const screens = {
  setup: document.getElementById("host-screen-setup"),
  question: document.getElementById("host-screen-question"),
  reveal: document.getElementById("host-screen-reveal"),
  gameover: document.getElementById("host-screen-gameover")
};

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

document.getElementById("joinUrlText").textContent = `${location.protocol}//${location.host}/`;

socket.emit("host:connect", {});

socket.on("host:error", ({ message }) => {
  document.getElementById("hostError").textContent = message;
});

socket.on("host:state", (state) => {
  const select = document.getElementById("lessonSelect");
  select.innerHTML = "";
  state.lessonList.forEach((l) => {
    const opt = document.createElement("option");
    opt.value = l.key;
    opt.textContent = l.title;
    if (l.key === state.lessonKey) opt.selected = true;
    select.appendChild(opt);
  });
  document.getElementById("pinValue").textContent = state.pin;
  renderPlayerGrid(state.players);
  if (state.phase === "lobby") showScreen("setup");
});

document.getElementById("lessonSelect").addEventListener("change", (e) => {
  socket.emit("host:selectLesson", { lessonKey: e.target.value });
});

document.getElementById("btnNewSession").addEventListener("click", () => {
  socket.emit("host:newSession");
});

document.getElementById("btnStartGame").addEventListener("click", () => {
  document.getElementById("hostError").textContent = "";
  socket.emit("host:startGame");
});

document.getElementById("btnForceReveal").addEventListener("click", () => {
  socket.emit("host:forceReveal");
});

document.getElementById("btnNextQuestion").addEventListener("click", () => {
  socket.emit("host:nextQuestion");
});

document.getElementById("btnEndGame").addEventListener("click", () => {
  socket.emit("host:endGame");
});

document.getElementById("btnBackToSetup").addEventListener("click", () => {
  socket.emit("host:newSession");
});

function renderPlayerGrid(players) {
  document.getElementById("playerCount").textContent = players.length;
  const grid = document.getElementById("playerGrid");
  grid.innerHTML = "";
  players.forEach((p) => {
    const chip = document.createElement("div");
    chip.className = "player-chip" + (p.connected ? "" : " offline");
    chip.textContent = p.name;
    grid.appendChild(chip);
  });
}

socket.on("room:update", (state) => {
  renderPlayerGrid(state.players);
  document.getElementById("pinValue").textContent = state.pin;
});

socket.on("question:show", (data) => {
  lastQuestionOptions = data.options;
  document.getElementById("hostQCounter").textContent = `Question ${data.index + 1}/${data.total}`;
  document.getElementById("hostQText").textContent = data.text;
  document.getElementById("hostAnswerProgress").textContent = "0 answered";

  const timerBar = document.getElementById("hostTimerBar");
  timerBar.style.transition = "none";
  timerBar.style.width = "100%";
  requestAnimationFrame(() => {
    timerBar.style.transition = `width ${data.durationMs}ms linear`;
    timerBar.style.width = "0%";
  });

  showScreen("question");
});

socket.on("host:answerProgress", ({ answeredCount, totalPlayers }) => {
  document.getElementById("hostAnswerProgress").textContent = `${answeredCount}/${totalPlayers} answered`;
});

function renderLeaderboard(container, leaderboard) {
  container.innerHTML = "";
  leaderboard.forEach((p, i) => {
    const row = document.createElement("div");
    row.className = "leaderboard-row";
    row.innerHTML = `<span class="leaderboard-rank">#${i + 1}</span><span class="leaderboard-name"></span><span class="leaderboard-score">${p.score} PTS</span>`;
    row.querySelector(".leaderboard-name").textContent = p.name + (p.hearts <= 0 ? " 💔" : "");
    container.appendChild(row);
  });
}

socket.on("question:reveal", ({ correctIndex, hint, leaderboard }) => {
  document.getElementById("hostCorrectAnswer").textContent = lastQuestionOptions[correctIndex] || "";
  document.getElementById("hostHint").textContent = hint || "";
  renderLeaderboard(document.getElementById("hostLeaderboardList"), leaderboard);
  showScreen("reveal");
});

socket.on("game:over", ({ leaderboard }) => {
  renderLeaderboard(document.getElementById("hostFinalLeaderboard"), leaderboard);
  showScreen("gameover");
});
