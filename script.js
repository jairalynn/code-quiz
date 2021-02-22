var startBtnEl = document.getElementById("start-button");
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion() {
    questionElement.innerHTML = question.question
    question.answers.forEach(answer => {
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

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

const questions = [
    {
        question: "What are variables?",
        answers: [
            "They are used to store information to be referenced to and manupulated",
            "Data values",
            "Both of the above",
            "None of the above",
        ],
        answer: "Both of the above"
    },
    {
        question: "What does a string do?",
        choices: [
            "Store a series of characters or a name",
            "Pulls information",
            "Something in the CSS",
            "None of the above",

        ],
        answer: "Store a series of characters or a name"
    },
    {
        question: "What is Javascript?",
        choices: [
            "A Program that allows you to listen to your local server and navigate through the designed web page",
            "A program that designs web pages",
            "A programming language used both on the client-side and server-side to make the web pages interactive",
            "None of the above",

        ],
        answer: "A programming language used both on the client-side and server-side to make the web pages interactive"
    },
    {
        question: "Where does the script go in the HTML?",
        choices: [
            "Head",
            "Body",
            "The bottom of the HTML",
            "None of the above",

        ],
        answer: "Body"
    },
    {
        question: "What does click() do?",
        choices: [
            "A function that simulates a mouse click on an element",
            "Clicks a button connected to an id",
            "Change the style of a button",
            "None of the above",

        ],
        answer: "A function that simulates a mouse click on an element"
    },
    {
        question: "What is a function?",
        choices: [
            "Getting an input",
            "Gathering information",
            "Connecting elements in the javascript",
            "None of the above",

        ],
        answer: "None of the above"
    }];

startBtnEl.addEventListener("click", function() {
        event.preventDefault();
        timerId = setInterval(function(){
            time--;
            timeLeftDisplay.textContent = time;
            if (time <= 0){
                clearInterval(timerId);
            }
    }, 1000)
    
});

function countdownTimer() {
    interval = setInterval(function() {
        time--;
        timer.textContent = time;
        if (time <= 0 ){
            endQuiz();
        }
    }, 1000);

}
console.log(startBtnEl);


var timerId;
var time = questions.length * 15;
var timer = document.querySelector("#timer");
var interval = 0
var currentQuestion = 0;
var startingSeconds = 60;
var countdownEl = document.getElementById('countdown');
var timeLeftDisplay = document.querySelector("#time");










function showQuestion(){

}

function showQuestion(){

}
function showQuestion(){

}



// function updateCountdown() {
//     time--
// }

// //Events
// // * start game
// // * timer countdown increment
// // * selecting an answer
// // * game over
// // * view high scores
// // * enter a high score

// // variables
// // * timer
// // * time left
// // * score
// // * current question
// // * questions and their choies and the correct answer

// // State Variables
// // var bodyEl = document.createElement("div");

// // function countDown(){
// //     setInterval(function(){
// //         if(timeLeft <= 0) {
// //             clearInterval(timeLeft = 0)
// //         }
// //         timeLeftDisplay.innerHTML = timeLeft
// //         timeLeft -=1
// //     }, 100)
// // };

// // startBtnEl.addEventListener("click", countDown) {
// //     event.preventDefault();

//     // timeLeft--
//     // timerEl.textContent = timeLeft;
//     // if (timeLeft <= 0) {
//     //     quizOver()
//     //};

// // function timer(){
// //     timeLeft--
// //     timerEl.textContent = timeLeft;
// //     if (timeLeft <= 0) {
// //         quizOver()
// //     }
// // }

// // // function setTime() {
// // //     var timerInterval = setInterval(function() {
// // //         secondsLeft--;
// // //         timeEl.textContent = secondsLeft + " seconds left";

// // //         if(secondsLeft ===0) {
// // //             clearInterval(timerInterval);
// // //             sendMessage();
// // //         }
// // //     }, 1000);
// // // }

// // // function sendMessage() {
// // //     timeEl.textContent = " ";
    

// // ]
// // function startQuiz(){
    
// // }

// // function showQuestion(){

// // }




// //     }
// // }

// // var timer = null;
// // var score = 0;
// // var currentQuestion = 0;

// // //Application variable
// // var startBtnEl = document.getElementById("startBtn");
// // var introContainerEl = document.querySelector(".intro-container");

// // startBtnEl.addEventListener("click", function(event){
// //     alert("start game");
// // });