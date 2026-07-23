/* ==========================================
   SPEAKUP ACADEMY
   language.js
========================================== */

const translations = {

pt: {

home:"Início",
about:"Sobre",
courses:"Cursos",
library:"Biblioteca",
contact:"Contacto",
test:"Fazer Teste"

},

en: {

home:"Home",
about:"About",
courses:"Courses",
library:"Library",
contact:"Contact",
test:"Take Test"

}

};

const ptButton = document.getElementById("pt");
const enButton = document.getElementById("en");

function changeLanguage(lang){

const menu = document.querySelectorAll("nav ul li a");

menu[0].textContent = translations[lang].home;
menu[1].textContent = translations[lang].about;
menu[2].textContent = translations[lang].courses;
menu[4].textContent = translations[lang].library;
menu[5].textContent = translations[lang].contact;

document.querySelector(".btn-header").textContent =
translations[lang].test;

localStorage.setItem("language",lang);

}

ptButton.addEventListener("click",()=>{

changeLanguage("pt");

});

enButton.addEventListener("click",()=>{

changeLanguage("en");

});

const savedLanguage=localStorage.getItem("language");

if(savedLanguage){

changeLanguage(savedLanguage);

}
