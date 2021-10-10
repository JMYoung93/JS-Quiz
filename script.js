const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('questions')
const answerButtonsElement = document.getElementById('answer-buttons')
const timeLeft = document.getElementById('timerDisplay')
const answerBtn = document.querySelectorAll('.btn')
const ldrBoard = document.getElementById('leadership-board')
const submitBtn = document.getElementById('submit-btn')

var userScore = 0
var currentQuestionsIndex = 0
var sec = 60
var timerInterval ; 



let questions = [
  {
  numb: 1,
  question: "What does HTML stand for?",
  options1: "Hyper Text Preprocessor",
  options2: "Hyper Text Markup Language",
  options3: "Hyper Text Multiple Language",
  options4: "Hyper Tool Multi Language",
  answer: "Hyper Text Markup Language",
},
  {
  numb: 2,
  question: "What does CSS stand for?",
  options1:"Common Style Sheet",
  options2: "Colorful Style Sheet",
  options3:"Computer Style Sheet",
  options4: "Cascading Style Sheet",
  answer: "Cascading Style Sheet",
},
  {
  numb: 3,
  question: "What does PHP stand for?",
  options1: "Hypertext Preprocessor",
  options2: "Hypertext Programming",
  options3: "Hypertext Preprogramming",
  options4:"Hometext Preprocessor",
  answer: "Hypertext Preprocessor",
},
  {
  numb: 4,
  question: "What does SQL stand for?",
  options1: "Stylish Question Language",
  options2: "Stylesheet Query Language",
  options3: "Statement Question Language",
  options4: "Structured Query Language",
  answer: "Structured Query Language", 
},
  {
  numb: 5,
  question: "What does XML stand for?",
  options1: "eXtensible Markup Language",
  options2:"eXecutable Multiple Language",
  options3: "eXTra Multi-Program Language",
  options4:"eXamine Multiple Language",
  answer: "eXtensible Markup Language",
  },
]

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    sec--;
    timeLeft.textContent = "00:" + sec;

    if(sec === 0) {
      // Stops execution of action at set interval
      clearInterval(sec);
    }

  }, 1000);
}

var startGame = function () {
  setTime()
  startButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  questionIndex()
}

var userSelect = function (e) {
var selectBtn = e.target.textContent
// console.log(selectBtn)
if (selectBtn === questions[currentQuestionsIndex].answer) {
  alert('Correct!')
  userScore++
} else {
  alert('Incorrect 😢')
  sec -= 5
  console.log(sec)
}
currentQuestionsIndex++

if (currentQuestionsIndex === questions.length) {
  clearInterval(timerInterval)
  questionContainerElement.classList.add('hide')
  ldrBoard.classList.remove('hide')
  timeLeft.classList.add('hide')
} else {
  questionIndex()
}
}
var questionIndex = function () {
questionElement.textContent = questions[currentQuestionsIndex].question
answerBtn[0].textContent = questions[currentQuestionsIndex].options1
answerBtn[1].textContent = questions[currentQuestionsIndex].options2
answerBtn[2].textContent = questions[currentQuestionsIndex].options3
answerBtn[3].textContent = questions[currentQuestionsIndex].options4
}

var scoreDisplay = function (e) {
e.preventDefault ()
var playerName = document.querySelector('.endGame').value.trim()
var playerInfo = {
  name: playerName,
  score: userScore,
}
// var playerScore = document.querySelector('.player-scores')
localStorage.setItem('playerInfo', JSON.stringify(playerInfo))
var fetch = JSON.parse(localStorage.getItem('playerInfo'))
fetch.playerName
document.querySelector(".player-scores").innerHTML = playerName + " " + fetch.score
console.log(playerName)
}

startButton.addEventListener('click', startGame)
answerButtonsElement.addEventListener('click', userSelect)
submitBtn.addEventListener('click', scoreDisplay)