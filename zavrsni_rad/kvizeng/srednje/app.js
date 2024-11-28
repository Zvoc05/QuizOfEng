const questions = [
    {
    question:"I __________ a bigger house if I had a better job.",
    answers:[
        {text: "would buy", correct: true},
        {text: "will buy", correct: false},
        {text: "so much", correct: false},
        {text: "too little", correct: false},
    ]
},

{
    question:"John isn't __________ Diana.",
    answers:[
        {text: "intelligent", correct: false},
        {text: "intelligenter than", correct: false},
        {text: "more intelligent as", correct: false},
        {text: "as intelligent as", correct: true},
    ]
},

{
    question:"This is a classroom. You can't use your mobile/cellphone. Please",
    answers:[
        {text: "turn off it", correct: false},
        {text: "turn it off", correct: true},
        {text: "turn it", correct: false},
        {text: "must turn it off", correct: false},
    ]
},

{
    question:"I am a lawyer. I __________ here for five years.",
    answers:[
        {text: "have been working", correct: true},
        {text: "have working", correct: false},
        {text: "work", correct: false},
        {text: "am working", correct: false},
    ]
},
{
    question:"_________ late on a Sunday morning makes me really happy.",
    answers:[
        {text: "Wake up", correct: false},
        {text: "Awake", correct: false},
        {text: "Waking up", correct: true},
        {text: "Woke up", correct: false},
    ]
},

{
    question:"When I got to work I realized I __________ the house door open.",
    answers:[
        {text: "had left", correct: true},
        {text: "left", correct: false},
        {text: "have left", correct: false},
        {text: "was left", correct: false},
    ]
},

{
    question:"It was raining __________ I took my umbrella.",
    answers:[
        {text: "because", correct: false},
        {text: "so", correct: true},
        {text: "although", correct: false},
        {text: "if", correct: false},
    ]
},

{
    question:"James asked __________ we wanted to go for dinner.",
    answers:[
        {text: "if", correct: true},
        {text: "weather", correct: false},
        {text: "us", correct: false},
        {text: "what", correct: false},
    ]
},

{
    question:"Don't __________ any noise. Lauren is still asleep.",
    answers:[
        {text: "do", correct: false},
        {text: "let", correct: false},
        {text: "make", correct: true},
        {text: "talk", correct: false},
    ]
},

{
    question:"I can't go to the cinema with you. I __________ my homework.",
    answers:[
        {text: "have finished", correct: false},
        {text: "haven't finished", correct: true},
        {text: "are finished", correct: false},
        {text: "did finish", correct: false},
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

