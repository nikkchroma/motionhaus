gsap.registerPlugin(ScrollTrigger);
/* ==========================================
   MotionHaus Script v1
========================================== */

/* Loader */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},2200);

});


/* Navbar Background */

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

nav.style.background="rgba(0,0,0,.75)";
nav.style.padding="18px 8%";
nav.style.backdropFilter="blur(18px)";

}else{

nav.style.background="rgba(0,0,0,.35)";
nav.style.padding="22px 8%";

}

});


/* GSAP Hero */

gsap.from(".hero-content p",{

y:50,
opacity:0,
duration:1

});

gsap.from(".hero h1",{

y:100,
opacity:0,
duration:1.2,
delay:.2

});

gsap.from(".hero-buttons",{

y:60,
opacity:0,
duration:1,
delay:.6

});



/* Section Animation */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});


document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});


/* Portfolio Hover */

const projects=document.querySelectorAll(".project");

projects.forEach(project=>{

project.addEventListener("mousemove",(e)=>{

const rect=project.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

project.style.transform=

`perspective(1000px)
rotateX(${-(y-rect.height/2)/30}deg)
rotateY(${(x-rect.width/2)/30}deg)`;

});

project.addEventListener("mouseleave",()=>{

project.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});


/* Button Hover */

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

gsap.to(btn,{
scale:1.06,
duration:.25
});

});

btn.addEventListener("mouseleave",()=>{

gsap.to(btn,{
scale:1,
duration:.25
});

});

});


/* Scroll Reveal */

gsap.utils.toArray(".service-card").forEach(card=>{

gsap.from(card,{

scrollTrigger:card,

opacity:0,

y:80,

duration:1

});

});

