import { quizQuestions } from "./questions.js";
const startScreen = document.getElementById("startScreen");
const startQuizBtn = document.getElementById("startQuizBtn");
const quizScreen = document.getElementById("quizScreen");
const timer = document.getElementById("timer");
const quizQuestion = document.getElementById("quizQuestion");
const answerChoicesParent = document.getElementById("answerChoicesParent");
const indResult = document.getElementById("indResult");
const resultScreen = document.getElementById("resultScreen");

let countdown = 60;
let timerVar;

quizScreen.style.display = "none";
resultScreen.style.display = "none";

startQuizBtn.onclick = () => {
  startScreen.style.display = "none";
  quizScreen.style.display = "flex";
  timerVar = setInterval(timerElapse, 1000);
  newQuestion();
};

/* timer function: */
let timerElapse = () => {
  timer.innerText = countdown--;

  if (countdown === -1) {
    clearInterval(timerVar),
      (quizBody.style.display = "none"),
      (resultScreen.style.display = "flex");
  }
};

let newQuestion = () => {
  let a, b, c, d;
  let i = 0;

  for (i = i; i < 1; i++) {
    // console.log(i);
    // Question Title
    quizQuestion.innerHTML = quizQuestions[i].question;

    //Answer Buttons
    a = document.createElement("button");
    a.innerHTML = quizQuestions[i].answers[0];
    b = document.createElement("button");
    b.innerHTML = quizQuestions[i].answers[1];
    c = document.createElement("button");
    c.innerHTML = quizQuestions[i].answers[2];
    d = document.createElement("button");
    d.innerHTML = quizQuestions[i].answers[3];

    answerChoicesParent.append(a, b, c, d);

    let children = answerChoicesParent.childNodes;
    children.forEach((child) => {
      child.classList.add("quizChoices");
      child.setAttribute("type", "submit");
      child.setAttribute("id", i++);
      child.addEventListener("click", function () {
        if (child.id == quizQuestions[0].correctAnswer) {
          indResult.innerText = "That's Correct!";
          //   i += 1;
          //   newQuestion()
        } else {
          indResult.innerText = "That's Incorrect.";
          countdown = countdown - 10;
          //   i += 1;
        }
      });
    });
  }
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

each time a question is answered and feedback provided, run quiz.
*/
