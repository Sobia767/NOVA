const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


menu.addEventListener("click", ()=>{

    navLinks.classList.toggle("active");

});
const reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll", () => {

    reveals.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;


        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

});
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

    reveals.forEach((element)=>{

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});