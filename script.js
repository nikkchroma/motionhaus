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

/* ==========================================
   MotionHaus Script v2
   Premium Effects
========================================== */

/* ========= Custom Cursor ========= */

const cursor = document.createElement("div");
cursor.className = "cursor";

const follower = document.createElement("div");
follower.className = "cursor-follower";

document.body.appendChild(cursor);
document.body.appendChild(follower);

document.addEventListener("mousemove",(e)=>{

gsap.to(cursor,{
x:e.clientX,
y:e.clientY,
duration:.08
});

gsap.to(follower,{
x:e.clientX,
y:e.clientY,
duration:.25
});

});

/* ========= Cursor Hover ========= */

document.querySelectorAll("a,.project,.service-card").forEach(el=>{

el.addEventListener("mouseenter",()=>{

gsap.to(follower,{
scale:2,
borderColor:"#d90429",
duration:.25
});

});

el.addEventListener("mouseleave",()=>{

gsap.to(follower,{
scale:1,
borderColor:"#ffffff",
duration:.25
});

});

});

/* ========= Magnetic Buttons ========= */

document.querySelectorAll(".primary,.secondary,.btn-nav,.contact-btn").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

gsap.to(btn,{
x:x*.18,
y:y*.18,
duration:.3
});

});

btn.addEventListener("mouseleave",()=>{

gsap.to(btn,{
x:0,
y:0,
duration:.4
});

});

});

/* ========= Hero Parallax ========= */

const hero=document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX-window.innerWidth/2)/50;

const y=(e.clientY-window.innerHeight/2)/50;

gsap.to(hero,{
backgroundPosition:`${50+x}% ${50+y}%`,
duration:1
});

});

/* ========= Floating Cards ========= */

gsap.to(".service-card",{

y:-12,

duration:2,

repeat:-1,

yoyo:true,

stagger:.15,

ease:"power1.inOut"

});

/* ========= Smooth Fade ========= */

gsap.utils.toArray(".project").forEach(project=>{

gsap.from(project,{

scrollTrigger:{

trigger:project,

start:"top 85%"

},

opacity:0,

y:80,

duration:1

});

});

/* ========= Text Reveal ========= */

gsap.utils.toArray("h2").forEach(title=>{

gsap.from(title,{

scrollTrigger:title,

opacity:0,

y:100,

duration:1

});

});

/* ========= Footer ========= */

gsap.from("footer",{

scrollTrigger:"footer",

opacity:0,

y:100,

duration:1

});

});

