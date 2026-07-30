/* ==========================================
   SPEAKUP ACADEMY
   PROFICIENCY PROJECT
========================================== */

let currentQuestion = 0;
let score = 0;

const totalQuestions = 40;

let selectedAnswer = null;

let timer;
let timeLeft = 30 * 60;

/* ==========================
ELEMENTOS
========================== */

const startButton =
document.getElementById("startTest");

const instructionSection =
document.getElementById("instructions");

const testArea =
document.getElementById("testArea");

const resultArea =
document.getElementById("resultArea");

const timerElement =
document.getElementById("time");

const progress =
document.getElementById("progress");

const currentQuestionElement =
document.getElementById("currentQuestion");

const totalQuestionElement =
document.getElementById("totalQuestions");

totalQuestionElement.textContent = totalQuestions;

/* ==========================
INICIAR TESTE
========================== */

startButton.addEventListener("click", () => {

instructionSection.style.display = "none";

testArea.style.display = "block";

startTimer();

loadQuestion();

});
/* ==========================================
PERGUNTAS
========================================== */

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
},

{
question:"Choose the correct sentence.",
answers:[
"They doesn't like coffee.",
"They don't like coffee.",
"They isn't like coffee.",
"They not like coffee."
],
correct:1
},

{
question:"Which word is an adjective?",
answers:[
"Quickly",
"Beautiful",
"Run",
"Tomorrow"
],
correct:1
}

];

/* ==========================================
MOSTRAR PERGUNTA
========================================== */

function loadQuestion(){

selectedAnswer = null;

const q = questions[currentQuestion];

document.getElementById("question").textContent = q.question;

const answersContainer =
document.getElementById("answers");

answersContainer.innerHTML = "";

q.answers.forEach((answer,index)=>{

const option = document.createElement("div");

option.className = "answer";

option.textContent = answer;

option.addEventListener("click",()=>{

document.querySelectorAll(".answer")
.forEach(a=>a.classList.remove("selected"));

option.classList.add("selected");

selectedAnswer = index;

});

answersContainer.appendChild(option);

});

currentQuestionElement.textContent = currentQuestion + 1;

updateProgress();

}
/* ==========================================
CRONÓMETRO
========================================== */

function startTimer(){

timer = setInterval(()=>{

timeLeft--;

const minutes = Math.floor(timeLeft / 60);

const seconds = timeLeft % 60;

timerElement.textContent =
`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

if(timeLeft <= 0){

clearInterval(timer);

showResult();

}

},1000);

}

/* ==========================================
BARRA DE PROGRESSO
========================================== */

function updateProgress(){

const percent =
((currentQuestion + 1) / questions.length) * 100;

progress.style.width = percent + "%";

}

/* ==========================================
PRÓXIMA PERGUNTA
========================================== */

document
.getElementById("nextBtn")
.addEventListener("click",()=>{

if(selectedAnswer === null){

alert("Selecione uma resposta antes de continuar.");

return;

}

if(selectedAnswer === questions[currentQuestion].correct){

score++;

}

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}else{

clearInterval(timer);

showResult();

}

});
/* ==========================================
RESULTADO FINAL
========================================== */

function showResult(){

resultArea.style.display = "block";

testArea.style.display = "none";

let percentage =
Math.round((score / questions.length) * 100);

let level = "";
let description = "";
let recommendation = "";

if(percentage < 25){

level = "A1";
description = "Iniciante. Compreende expressões muito básicas e consegue comunicar em situações simples.";
recommendation = "Curso A1 - Beginner";

}else if(percentage < 40){

level = "A2";
description = "Elementar. Consegue compreender frases frequentes e comunicar em situações do dia a dia.";
recommendation = "Curso A2 - Elementary";

}else if(percentage < 60){

level = "B1";
description = "Intermédio. Consegue lidar com situações do quotidiano e compreender textos simples.";
recommendation = "Curso B1 - Intermediate";

}else if(percentage < 80){

level = "B2";
description = "Intermédio Superior. Comunica com confiança em ambientes académicos e profissionais.";
recommendation = "Curso B2 - Upper Intermediate";

}else if(percentage < 95){

level = "C1";
description = "Avançado. Utiliza o inglês de forma eficaz em contextos complexos.";
recommendation = "Curso C1 - Advanced";

}else{

level = "C2";
description = "Proficiência. Domina a língua inglesa praticamente ao nível de um falante altamente competente.";
recommendation = "Curso C2 - Proficiency";

}

document.getElementById("level").textContent = level;

document.getElementById("description").innerHTML = `
<strong>${description}</strong>
<br><br>
Acertou <strong>${score}</strong> de <strong>${questions.length}</strong> perguntas.
<br><br>
Percentagem: <strong>${percentage}%</strong>
<br><br>
Curso recomendado:
<strong>${recommendation}</strong>
`;

document.getElementById("score").textContent =
`${score}/${questions.length}`;

document.getElementById("percentage").textContent =
`${percentage}%`;

}
