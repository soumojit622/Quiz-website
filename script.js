const quizData = [
  {
    question: "Q1: Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    ans: "ans4",
  },
  {
    question: "Q2: What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    ans: "ans2",
  },
  {
    question: "Q3: What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    ans: "ans1",
  },
  {
    question: "Q4: What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    ans: "ans2",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const showScore = document.querySelector("#showScore");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionList = quizData[questionCount];
  question.innerHTML = questionList.question;

  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};
loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((currAnsElem) => {
    if (currAnsElem.checked) {
      answer = currAnsElem.id;
    }
  });
  return answer;
};

  const deselectAll = () => {
  answers.forEach((currAnsElem) => currAnsElem.checked = false);
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer == quizData[questionCount].ans) {
    score++;
  }
  questionCount++;

  deselectAll();
  // const deselectAll=()=>{
  //     answers.forEach((currAnsElem)=>currAnsElem.checked=false);
  // }
  if (questionCount < quizData.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
        <h3>You scored: ${score}/${quizData.length}</h3>
        <button class="btn" onclick="location.reload()">Play again</button>
        `;

    showScore.classList.remove("scoreArea");
  }
});
