const pastScores = document.getElementById("pastScores");
const clearScoresBtn = document.getElementById("clearScoresBtn");

clearScoresBtn.onclick = () => {
  localStorage.clear();
  pastScores.innerText = "";
  pastScores.style.backgroundColor = "inherit";
};

// get the past scores and append text.
let highscores = JSON.parse(localStorage.getItem("highscores"));
highscores.sort(function (a, b) {
  return b.score - a.score;
});
highscores.forEach(function (user) {
  let liEl = document.createElement("li");
  liEl.classList.add("users");
  liEl.innerText = user.name + " - " + user.score;

  pastScores.appendChild(liEl);
});
