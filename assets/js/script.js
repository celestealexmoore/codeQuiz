import { quizQuestions } from "./questions.js";
const startScreen = document.getElementById("startScreen");
const startQuizBtn = document.getElementById("startQuizBtn");
const quizScreen = document.getElementById("quizScreen");
const timer = document.getElementById("timer");
const quizQuestion = document.getElementById("quizQuestion");
const answerChoicesParent = document.getElementById("answerChoicesParent");
const indResult = document.getElementById("indResult");
const resultScreen = document.getElementById("resultScreen");
const finalScoreEl = document.getElementById("finalScoreEl");
const initialInputBox = document.getElementById("initialInputBox");
const saveInitialsBtn = document.getElementById("saveInitialsBtn");
const a = document.getElementById("0");
const b = document.getElementById("1");
const c = document.getElementById("2");
const d = document.getElementById("3");

let countdown = 60;
let i = 0;
let score = 0;
let feedback;
let timerVar;

quizScreen.style.display = "none";
resultScreen.style.display = "none";

startQuizBtn.onclick = () => {
  startScreen.style.display = "none";
  quizScreen.style.display = "flex";
  timerVar = setInterval(timerElapse, 1000);
  newQuestion(i);
};

/* timer function: */
const timerElapse = () => {
  timer.innerText = countdown--;
  countdown <= -1 ? endQuiz() : null;
};

const newQuestion = (i) => {
  // Question Title
  quizQuestion.innerHTML = i + 1 + ". " + quizQuestions[i].question;
  //Answer Buttons
  a.innerHTML = quizQuestions[i].answers[0];
  b.innerHTML = quizQuestions[i].answers[1];
  c.innerHTML = quizQuestions[i].answers[2];
  d.innerHTML = quizQuestions[i].answers[3];

  questionClick();
};

const questionClick = () => {
  let children = answerChoicesParent.childNodes;
  children.forEach((child) => {
    child.onclick = function () {
      if (child.id == quizQuestions[i].correctAnswer) {
        indResult.innerText = "That's Correct!";
        i++;
        score += 10;
        i < 9 ? newQuestion(i) : endQuiz();
      } else {
        indResult.innerText = "That's Incorrect.";
        countdown -= 10;
        i++;
        newQuestion(i);
      }
    };
  });
  feedback = setTimeout(function () {
    indResult.innerText = "";
  }, 500);
};

const endQuiz = () => {
  clearInterval(timerVar);
  timer.innerText = 0;
  quizBody.style.display = "none";
  resultScreen.style.display = "flex";
  finalScoreEl.innerHTML = "Your Final Score Is: " + score;
};

saveInitialsBtn.onclick = () => {
  if (initialInputBox.value === "") {
    alert("Please enter your initials.");
  } else {
    localStorage.setItem("username", initialInputBox.value);
    localStorage.setItem("scoreIs", score);
    //switch to highscores.html
    window.location.href = "../../highscores.html";
  }
};
