/* ================= MOBILE MENU TOGGLE ================= */

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ================= ACTIVE NAV LINK ON SCROLL ================= */

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* Sticky Header Effect */
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove mobile menu on scroll */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ================= SCROLL REVEAL ANIMATION ================= */

function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);

/* ================= TYPING TEXT ANIMATION ================= */

const typingText = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "UI Designer",
    "Responsive Web Expert",
    "Creative Coder"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    typingText.textContent = currentChar;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    }
    else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    }
    else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, 1000);
    }
}

typeEffect();

/* ================= RIPPLE CLICK EFFECT ================= */

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {

        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple-effect");

        const ripple = button.getElementsByClassName("ripple-effect")[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    });
});

/* ================= PROJECT FILTER SYSTEM ================= */

/*
To use filter system:
1. Add buttons like:
<button data-filter="all">All</button>
<button data-filter="web">Web</button>
<button data-filter="design">Design</button>

2. Add data-category="web" inside project-card
*/

const filterButtons = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        const filter = btn.getAttribute("data-filter");

        projects.forEach(card => {
            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
                card.style.animation = "fadeIn .5s ease";
            } else {
                card.style.display = "none";
            }
        });

    });
});

/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* ================= PAGE LOAD ANIMATION ================= */

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
// Scroll Animation for Project Cards
const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {

            // Stagger effect (one by one animation)
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, index * 200);

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
});


// Button Click Animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {

        btn.style.transform = "scale(0.9)";

        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});


// Optional: Smooth Page Load Animation
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 200);
});
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};