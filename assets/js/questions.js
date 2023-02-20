// &lt = < ; &gt = >; Allows HTML to append the character.

export const quizQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      `A. &ltscript&gt`,
      `B. &ltjs&gt`,
      `C. &ltjavascript&gt`,
      `D. &ltscripting&gt`,
    ],
    correctAnswer: 0, // goes by index
  },
  {
    question: "Where is the correct place to insert a JavaScript file?",
    answers: [
      `A. The &ltlink&gt section.`,
      `B. The &ltbody&gt section.`,
      `C. The &ltfooter&gt section.`,
      `D. The &ltheader&gt section.`,
    ],
    correctAnswer: 1,
  },
  {
    question: `How do you write "Hello World" in an alert box?`,
    answers: [
      `A. msg("Hello World")`,
      `B. alertBox("Hello World")`,
      `C. msgBox("Hello World")`,
      `D. alert("Hello World")`,
    ],
    correctAnswer: 3,
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      "A. function = myFunction()",
      "B. function myFunction()",
      "C. function:myFunction",
      "D. myFunction() =&gt function",
    ],
    correctAnswer: 1,
  },
  {
    question: `How do you call a function named "myFunction"?`,
    answers: [
      "A. myFunction()",
      "B. export myFunction",
      "C. call myFunction()",
      "D. call function myFunction()",
    ],
    correctAnswer: 0,
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: [
      "A. if i = 5",
      "B. if(i == 5)",
      "C. if i == 5 then",
      "D. if i = 5 then",
    ],
    correctAnswer: 1,
  },
  {
    question: "How does a WHILE loop start?",
    answers: [
      "A. while i &lt= 10",
      "B. while(i &lt=10; i++)",
      "C. while i = 1 to 10",
      "D. while(i &lt= 10)",
    ],
    correctAnswer: 3,
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      "A. for(i &lt= 5; i++)",
      "B. for i = 1 to 5",
      "C. for(i = 0; i &lt= 5; i++)",
      "D. for(i = 0; i &lt= 5)",
    ],
    correctAnswer: 2,
  },
  {
    question: "How can you add a one-line comment in a JavaScript?",
    answers: [
      "A. &lt-- This is a comment--&gt ",
      "B. // This is a comment",
      `C. 'This is a comment`,
      "D. *This is a comment*",
    ],
    correctAnswer: 1,
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    answers: [
      "A. Math.round(7.25) ",
      "B. round(7.25)",
      "C. rnd(7.25)",
      "D. Math.rnd(7.25)",
    ],
    correctAnswer: 0,
  },
];
