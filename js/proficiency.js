/* ===========================================
   SPEAKUP ACADEMY
   PROFICIENCY PROJECT
=========================================== */

const questions = [

{
question:"Choose the correct sentence.",
answers:[
"She go to school every day.",
"She goes to school every day.",
"She going to school every day.",
"She gone to school every day."
],
correct:1
},

{
question:"What is the past tense of 'eat'?",
answers:[
"Eated",
"Ate",
"Eaten",
"Eat"
],
correct:1
},

{
question:"Choose the correct option.",
answers:[
"I have lived here for five years.",
"I lived here since five years.",
"I am living here since five years.",
"I has lived here for five years."
],
correct:0
}

];

let currentQuestion = 0;
let score = 0;

const intro = document.getElementById("intro");
const testSection = document.getElementById("test-section");
const resultSection = document.getElementById("result-section");

const question = document.getElementById("question");
const answers = document.getElementById("answers");

const nextBtn = document.getElementById("next-btn");

const startBtn = document.getElementById("start-test");

const progressFill = document.getElementById("progress-fill");
const questionNumber = document.getElementById("question-number");
const progressPercent = document.getElementById("progress-percent");

let selectedAnswer = null;

startBtn.onclick = function(e){

e.preventDefault();

intro.style.display="none";

testSection.style.display="block";

loadQuestion();

};

function loadQuestion(){

selectedAnswer=null;

const q=questions[currentQuestion];

question.innerHTML=q.question;

answers.innerHTML="";

q.answers.forEach((answer,index)=>{

const button=document.createElement("button");

button.className="answer-btn";

button.innerHTML=answer;

button.onclick=function(){

document.querySelectorAll(".answer-btn").forEach(btn=>{

btn.classList.remove("selected");

});

button.classList.add("selected");

selectedAnswer=index;

};

answers.appendChild(button);

});

questionNumber.innerHTML=`Pergunta ${currentQuestion+1} de ${questions.length}`;

const percent=((currentQuestion)/questions.length)*100;

progressFill.style.width=percent+"%";

progressPercent.innerHTML=Math.round(percent)+"%";

}

nextBtn.onclick=function(){

if(selectedAnswer===null){

alert("Selecione uma resposta.");

return;

}

if(selectedAnswer===questions[currentQuestion].correct){

score++;

}

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}else{

showResult();

}

};

function showResult(){

testSection.style.display="none";

resultSection.style.display="block";

let level="A1";

if(score>=1) level="A2";
if(score>=2) level="B1";
if(score>=3) level="B2";

document.getElementById("level").innerHTML=level;

document.getElementById("description").innerHTML=

`Acertou ${score} de ${questions.length} perguntas.`;

}
