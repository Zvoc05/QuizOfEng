const questions = [
    {
    question:"She works ---- Saturday.",
    answers:[
        {text: "at", correct: false},
        {text: "to", correct: false},
        {text: "in", correct: false},
        {text: "on", correct: true},
    ]
},

{
    question:"I stay at home ---- the morning.",
    answers:[
        {text: "at", correct: false},
        {text: "to", correct: false},
        {text: "in", correct: true},
        {text: "on", correct: false},
    ]
},

{
    question:"How do you get to work? ----.",
    answers:[
        {text: "By car", correct: true},
        {text: "In car", correct: false},
        {text: "By the car", correct: false},
        {text: "On car", correct: false},
    ]
},

{
    question:"I am hungry. ---- something to eat, please.",
    answers:[
        {text: "I like", correct: false},
        {text: "I'd want", correct: false},
        {text: "I'd like", correct: true},
        {text: "I'm like", correct: false},
    ]
},
{
    question:"He ---- born in 1963 in America.",
    answers:[
        {text: "had", correct: false},
        {text: "is", correct: false},
        {text: "was", correct: true},
        {text: "did", correct: false},
    ]
},

{
    question:"Switzerland is ---- than Britain.",
    answers:[
        {text: "as small", correct: false},
        {text: "smallest", correct: false},
        {text: "more small", correct: false},
        {text: "smaller", correct: true},
    ]
},

{
    question:"Motor racing is the ---- sport in the world.",
    answers:[
        {text: "most expensive", correct: true},
        {text: "more expensive", correct: false},
        {text: "expensivest", correct: false},
        {text: "as expensive", correct: false},
    ]
},

{
    question:"He passed his English exam very ----.",
    answers:[
        {text: "easy", correct: false},
        {text: "easier", correct: false},
        {text: "good", correct: false},
        {text: "easily", correct: true},
    ]
},

{
    question:"When ---- you go to the USA? Last year",
    answers:[
        {text: "did", correct: true},
        {text: "was", correct: false},
        {text: "went", correct: false},
        {text: "have", correct: false},
    ]
},

{
    question:"Where is Mary? She ---- over there.",
    answers:[
        {text: "is stand", correct: false},
        {text: "is standing", correct: true},
        {text: "stand", correct: false},
        {text: "standing", correct: false},
    ]
}
];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Sljedeće";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display= "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

