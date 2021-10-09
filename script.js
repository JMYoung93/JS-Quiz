const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('questions')
const answerButtonsElement = document.getElementById('answer-buttons')
var sec = 60;
let shuffleQuestions, currentQuestionIndex

let questions = [
  {
  numb: 1,
  question: "What does HTML stand for?",
  answer: "Hyper Text Markup Language",
  options: [
    "Hyper Text Preprocessor",
    "Hyper Text Markup Language",
    "Hyper Text Multiple Language",
    "Hyper Tool Multi Language"
  ]
},
  {
  numb: 2,
  question: "What does CSS stand for?",
  answer: "Cascading Style Sheet",
  options: [
    "Common Style Sheet",
    "Colorful Style Sheet",
    "Computer Style Sheet",
    "Cascading Style Sheet"
  ]
},
  {
  numb: 3,
  question: "What does PHP stand for?",
  answer: "Hypertext Preprocessor",
  options: [
    "Hypertext Preprocessor",
    "Hypertext Programming",
    "Hypertext Preprogramming",
    "Hometext Preprocessor"
  ]
},
  {
  numb: 4,
  question: "What does SQL stand for?",
  answer: "Structured Query Language",
  options: [
    "Stylish Question Language",
    "Stylesheet Query Language",
    "Statement Question Language",
    "Structured Query Language"
  ]
},
  {
  numb: 5,
  question: "What does XML stand for?",
  answer: "eXtensible Markup Language",
  options: [
    "eXtensible Markup Language",
    "eXecutable Multiple Language",
    "eXTra Multi-Program Language",
    "eXamine Multiple Language"
  ]},
  //the array ends at this close bracket, so the function above that is inside of the array.
]

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion ()
})

function startTimer(){
  console.log('timer suppose to go')
  var timer = setInterval(function(){
      sec--;

      document.getElementById('timerDisplay').innerHTML='00:'+ sec;
      console.log(sec)
      if (sec <= 0) {
          clearInterval(timer);
          alert("Time is up!")
      }
  }, 1000);

}

function startGame() {
startTimer()
console.log('Started')
startButton.classList.add('hide')
shuffleQuestions = questions.sort(() => Math.random() - .5)
currentQuestionsIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion () {
    resetState()
    showQuestion (shuffleQuestions[currentQuestionsIndex])
}

function showQuestion(questions) {
questionElement.innerText = questions.questions
questions.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}

function resetState () {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct

// setStatusClass(document.body, correct)
// Array.from(answerButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)

  
}
if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else {
   startButton.innerText = 'Restart'
   startButton.classList.remove('hide')
}

if (selectedButton.dataset.correct === false) {sec = sec -2}
  
// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//         sec = sec - 2;
//         // document.getElementById('timerDisplay').innerHTML='00:'+ newSecond;
//     }
// }

function clearStatusClass(element) {
  element.classList.remove ('correct')  
  element.classList.remove ('wrong')
}