const questions = [
    {
    question:"Which sentence is correct?",
    answers:[
        {text: "At this time tomorrow I take my driving test.", correct: false},
        {text: "At this time tomorrow I will be taking my driving test.", correct: true},
        {text: "At this time tomorrow I will take my driving test.", correct: false},
    ]
},

{
    question:"What is part of a flower?",
    answers:[
        {text: "a nib", correct: false},
        {text: "a kernel", correct: false},
        {text: "a stem", correct: true},
    ]
},

{
    question:"What is a synonym to rude?",
    answers:[
        {text: "brave", correct: false},
        {text: "impolite", correct: true},
        {text: "stupid", correct: false},
    ]
},

{
    question:"Which word is closest in meaning to these three: love, like, enjoy?",
    answers:[
        {text: "hope", correct: false},
        {text: "adore", correct: true},
        {text: "want", correct: false},
    ]
},
{
    question:"Which sentence is correct?",
    answers:[
        {text: "I want to have a word with you before you go.", correct: true},
        {text: "I want to have a word with you before you will go.", correct: false},
        {text: "I want to have a word with you before you will have gone.", correct: false},
    ]
},

{
    question:"Where does a porter work?",
    answers:[
        {text: "in the library", correct: false},
        {text: "in the supermarket", correct: false},
        {text: "at the station", correct: true},
    ]
},

{
    question:"The middle of an apple which we don't eat is called the:",
    answers:[
        {text: "centre", correct: false},
        {text: "core", correct: true},
        {text: "heart", correct: false},
    ]
},

{
    question:"Which sentence is correct?",
    answers:[
        {text: "The rent is to be paid at advance.", correct: false},
        {text: "The rent is to be paid for advance.", correct: false},
        {text: "The rent is to be paid in advance.", correct: true},
    ]
},

{
    question:"A woman who has never married is called a:",
    answers:[
        {text: "bachelor", correct: false},
        {text: "spinster", correct: true},
        {text: "virgin", correct: false},
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

