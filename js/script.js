/* ==========================================
   SPEAKUP ACADEMY
   script.js
========================================== */

// ===========================
// MENU MOBILE
// ===========================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

// ===========================
// HEADER AO ROLAR
// ===========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.padding = "0 40px";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.12)";

    } else {

        header.style.padding = "0 60px";
        header.style.boxShadow = "0 3px 15px rgba(0,0,0,.08)";

    }

});

// ===========================
// BOTÃO VOLTAR AO TOPO
// ===========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ===========================
// CONTADORES
// ===========================

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const targetText = counter.innerText;

    const target = parseInt(targetText.replace(/\D/g, ""));

    if (isNaN(target)) return;

    let count = 0;

    const increment = Math.ceil(target / 100);

    const update = () => {

        count += increment;

        if (count >= target) {

            counter.innerText = targetText;

            return;

        }

        counter.innerText = count + "+";

        requestAnimationFrame(update);

    };

    update();

});

// ===========================
// ANIMAÇÃO AO APARECER
// ===========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

console.log("SpeakUp Academy carregada com sucesso.");
/* ==========================================
SCRIPT.JS SUPPORT
========================================== */

.hidden{
    opacity:0;
    transform:translateY(40px);
    transition:all .8s ease;
}

.show{
    opacity:1;
    transform:translateY(0);
}

.top-button{
    position:fixed;
    right:25px;
    bottom:25px;
    width:50px;
    height:50px;
    border:none;
    border-radius:50%;
    background:#0A3D91;
    color:white;
    font-size:22px;
    cursor:pointer;
    display:none;
    z-index:9999;
    box-shadow:0 8px 20px rgba(0,0,0,.2);
    transition:.3s;
}

.top-button:hover{
    background:#2D6CDF;
}

nav.active{
    display:block;
}
