import { quizQuestions } from "./questions.js";
const startScreen = document.getElementById("startScreen");
const startQuizBtn = document.getElementById("startQuizBtn");
const quizScreen = document.getElementById("quizScreen");
const timer = document.getElementById("timer");
const quizQuestion = document.getElementById("quizQuestion");
const quizChoices = document.getElementById("quizChoices");
const indResult = document.getElementById("indResult");
const resultScreen = document.getElementById("resultScreen");

let countdown = 5;
let timerVar;

quizScreen.style.display = "none";
resultScreen.style.display = "none";

startQuizBtn.onclick = () => {
  startScreen.style.display = "none";
  quizScreen.style.display = "flex";
 timerVar = setInterval(timerElapse, 1000);
};

/* timer function: */
function timerElapse() {
  timer.innerText = countdown--;
  countdown === -1 ? clearInterval(timerVar) : null;
}

/* 

startButton on click:

start timer countdown from 60 in one-second intervals.
stop timer when it gets to 0 and set #startScreen to display: none,
swap resultScreen to display: block.

#saveInitialsBtn onclick should store #initialInputBox.value to local storage
swap to highscores.html




Example of swapping HTMLs:
var button = document.getElementById("button1");
button.addEventListener('click', function() {
console.log('I just moved a page')
window.location.href = "#your-url-here";
});


*/
