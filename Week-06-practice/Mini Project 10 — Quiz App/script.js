let questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Mark Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used to style a webpage?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correct: 1
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            "variable",
            "define",
            "let",
            "declare"
        ],
        correct: 2
    },
    {
        question: "Which method selects an element by its ID?",
        answers: [
            "getElementById()",
            "querySelectorAll()",
            "getElement()",
            "selectById()"
        ],
        correct: 0
    },
    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        answers: [
            "/* */",
            "//",
            "#",
            "<!-- -->"
        ],
        correct: 1
    }
];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let question = document.getElementById("question");
let answerButtons = document.querySelectorAll(".answer");
let nextButton = document.getElementById("nextButton");
let scoreDisplay = document.getElementById("score");
function showQuestion() {
    let current = questions[currentQuestion];
    question.textContent = current.question;
    answerButtons.forEach(function (button, index) {
        button.textContent = current.answers[index];
        button.disabled = false;
        button.classList.remove("selected");
        button.classList.remove("correct");
        button.classList.remove("wrong");
    });
    selectedAnswer = null;
    nextButton.disabled = true;
}
answerButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        answerButtons.forEach(function (button) {
            button.classList.remove("selected");
        });
        button.classList.add("selected");
        selectedAnswer = index;
        nextButton.disabled = false;
    });
});
nextButton.addEventListener("click", function () {
    if (selectedAnswer === null) {
        return;
    }
    if (selectedAnswer === questions[currentQuestion].correct) {
        score++;
        answerButtons[selectedAnswer].classList.add("correct");
    } else {
        answerButtons[selectedAnswer].classList.add("wrong");
        answerButtons[questions[currentQuestion].correct].classList.add("correct");
    }
    answerButtons.forEach(function (button) {
        button.disabled = true;
    });
    nextButton.disabled = true;
    setTimeout(function () {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            question.textContent = "Quiz Completed!";
            scoreDisplay.textContent =
                "Your Score: " + score + " / " + questions.length;
            answerButtons.forEach(function (button) {
                button.style.display = "none";
            });
            nextButton.style.display = "none";
        }
    }, 800);
});
showQuestion();