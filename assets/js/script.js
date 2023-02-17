import { quizQuestions } from "./questions.js";

const quizQuestion = document.getElementById('quizQuestion')
const quizChoices = document.getElementById('quizChoices')
const indResult = document.getElementById('indResult')


/* 

create another HTML with same header.
"Press Start button when you're ready to begin the quiz."
[start button]

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