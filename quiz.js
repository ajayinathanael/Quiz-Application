

const data=[
    {
        id: 1,
        question: 'How many states are in Nigeria?',
        answers: [
            { answer: "36", isCorrect: true },
            { answer: "35", isCorrect: false },
            { answer: "30", isCorrect: false },
            { answer: "26", isCorrect: false }
        ],
    },
    {
        id: 2,
        question: 'Who is the president of Nigeria',
        answers: [
            { answer: "Buhari", isCorrect: false },
            { answer: "Jonathan", isCorrect: false },
            { answer: "Tinubu", isCorrect: true },
            { answer: "Obasanjo", isCorrect: false }
        ]
    },
    {
        id: 3,
        question: 'American president is',
        answers: [
            { answer: "Barack Obama", isCorrect: false },
            { answer: "Joe Biden", isCorrect: true },
            { answer: "Donald Trump", isCorrect: false }
        ],
    },
    {
        id: 4,
        question: 'The president of Russia is',
        answers: [
            { answer: "Elizabeth", isCorrect: false },
            { answer: "Putin", isCorrect: true },
            { answer: "Bush", isCorrect: false }
        ],
    },
    {
        id: 5,
        question: 'The name of my school is',
        answers: [
            { answer: "Rufus Giwa Polytechnic", isCorrect: false },
            { answer: "Federal Polytechnic Ede", isCorrect: false },
            { answer: "Imesi-Ile Polytechnic", isCorrect: true },
            { answer: "Esa Oke Polytechnic", isCorrect: false }
        ],
    },
    {
        id: 6,
        question: 'The name of the rector of my school is',
        answers: [
            { answer: "Dr Gbola Adeshina", isCorrect: true },
            { answer: "Mr Sunday Ajayi", isCorrect: false },
            { answer: "Mr Monday Osere", isCorrect: false },
            { answer: "Mr Femi Ignatus", isCorrect: false }
        ],
    },
    {
        id: 7,
        question: 'The name of the registrar of my school is',
        answers: [
            { answer: "Dr Gbola Adeshina", isCorrect: false },
            { answer: "Mr Tope Oni", isCorrect: false },
            { answer: "Mr Taiwo", isCorrect: false },
            { answer: "Mr Sunday Ajayi", isCorrect: true }
        ],
    },
    {
        id: 8,
        question: 'The name of Computer science HOD is ',
        answers: [
            { answer: "Mr Natahanel Ajayi", isCorrect: false },
            { answer: "Mr Tope Oni", isCorrect: true },
            { answer: "Mr Taiwo", isCorrect: false },
            { answer: "Mrs Ajiboye", isCorrect: false }
        ],
    },
    {
        id: 9,
        question: 'My school is situated at',
        answers: [
            { answer: "Ede", isCorrect: false },
            { answer: "Ibokun", isCorrect: false },
            { answer: "Imesi-Ile", isCorrect: true },
            { answer: "Ife", isCorrect: false },
        ],
    },
    {
        id: 10,
        question: 'My school has how many campus(es)',
        answers: [
            { answer: "1", isCorrect: true },
            { answer: "2", isCorrect: false },
            { answer: "3", isCorrect: false },
        ],
    }
]

// select all html elements
const gameScreen =document.querySelector(".game");
const resultScreen =document.querySelector(".result");
const question =document.querySelector(".question");
const answersContainer =document.querySelector(".answers");
const submit =document.querySelector(".submit");
const play =document.querySelector(".play");
const pass =document.querySelector(".isPassed");

// question index i.e data index 
let qIndex=0;
let correctCount=0;
let wrongCount=0;
let total=0;
let selectedAnswer;

const playAgain = () =>{
    qIndex=0;
    correctCount=0;
    wrongCount=0;
    total=0;
    selectedAnswer;

    showQuestion(qIndex)
};

play.addEventListener("click", ()=>{
    resultScreen.style.display="none";
    gameScreen.style.display="block";
    playAgain();
})

// result page
const showResult = () =>{
    resultScreen.style.display="block";
    gameScreen.style.display="none";

    let grade=((10-wrongCount) * 10);

    resultScreen.querySelector(".correct").textContent =
    `Correct Answer is: ${correctCount}`

    resultScreen.querySelector(".wrong").textContent =
    `Wrong Answer is: ${wrongCount}`

    resultScreen.querySelector(".score").textContent =
    `Score: ${grade}%`

    grade >=50 ? pass.textContent="Congratulations 😀✨" : pass.textContent="Uh ☹☹ Kindly retake the exam"
}

// questions heading
const showQuestion = (qNumber)=>{
    // change the question text to value of question in data array
    if(qIndex === data.length) return showResult()
    selectedAnswer=null;
    question.textContent = data[qNumber].question; //question heading

    answersContainer.innerHTML = data[qNumber].answers.map((item, index)=>
        `
        <div class="answer">
			<input name="answer" type="radio" id=${index} value=${item.isCorrect}>
			<label for=${index}>${item.answer}</label>
		</div>
`).join("");

 selectAnswer()
};

// select anser
const selectAnswer=()=>{
    // from showQuestion method. answersContainer(54) now has access to the div 
    answersContainer.querySelectorAll("input").forEach(el=>{
        el.addEventListener("click", (e)=>{

            //console.log(e.target.value); value is now true or false
            selectedAnswer = e.target.value; //value is now true or false
            // console.log(selectedAnswer);
        });
    });
}; 

const submitAnswer = () =>{
    submit.addEventListener("click", ()=>{
        if(selectedAnswer !== null){
            // when submit btn is clicked, 
            selectedAnswer === "true" ? correctCount++ : wrongCount++
            qIndex++
            showQuestion(qIndex)
        }else{
            alert("please select an answer!")
        }
    })
}

showQuestion(qIndex);
submitAnswer();