import { quizQuestions } from "./questions.js";
const startScreen = document.getElementById("startScreen");
const startQuizBtn = document.getElementById("startQuizBtn");
const quizScreen = document.getElementById("quizScreen");
const timer = document.getElementById("timer");
const quizQuestion = document.getElementById("quizQuestion");
const answerChoicesParent = document.getElementById("answerChoicesParent");
const indResult = document.getElementById("indResult");
const resultScreen = document.getElementById("resultScreen");
const a = document.getElementById("0");
const b = document.getElementById("1");
const c = document.getElementById("2");
const d = document.getElementById("3");
let countdown = 60;
let i = 0;
let timerVar;
let score = 0;

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

  if (countdown <= -1) {
    clearInterval(timerVar);
    timer.innerText = 0;
    quizBody.style.display = "none";
    resultScreen.style.display = "flex";
  }
};

const newQuestion = (i) => {
  // Question Title
  quizQuestion.innerHTML = quizQuestions[i].question;

  //Answer Buttons
  a.innerHTML = quizQuestions[i].answers[0];
  b.innerHTML = quizQuestions[i].answers[1];
  c.innerHTML = quizQuestions[i].answers[2];
  d.innerHTML = quizQuestions[i].answers[3];

  let children = answerChoicesParent.childNodes;
  children.forEach((child) => {
    child.addEventListener("click", function () {
      if (child.id == quizQuestions[i].correctAnswer) {
        indResult.innerText = "That's Correct!";
        i++;
        newQuestion(i);
      } else {
        indResult.innerText = "That's Incorrect.";
        countdown -= 10;
        i++;
        newQuestion(i);
      }
    });
  });
};

/* 
#saveInitialsBtn onclick should store #initialInputBox.value to local storage
swap to highscores.html

Example of swapping HTMLs:
var button = document.getElementById("button1");
button.addEventListener('click', function() {
console.log('I just moved a page')
window.location.href = "#your-url-here";
});
*/
