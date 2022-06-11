import './style.css'
const DOMSelectors = {
    input1: document.getElementById('title'),
};

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    erase();
});
function erase () {
    DOMSelectors.input1.value = " ";
}

gsap.from('.header', {duration: 1, y:'-100%', ease:'bounce'})
gsap.from('.fade', {duration: 1.5, opacity:0, delay:1, stagger:4})

let about = document.querySelector("#about");
let MS = document.querySelector("#MS");
let program = document.querySelector("#program");
let prog = document.querySelector("#prog");
let faq = document.querySelector("#faq");
let frq = document.querySelector("#frq");

about.addEventListener("click" ,navigateHome, false);
function navigateHome(e){
    MS.scrollIntoView({behavior:"smooth"});
}

program.addEventListener("click" ,navigateprogram, false);
function navigateprogram(e){
    prog.scrollIntoView({behavior:"smooth"});
}
faq.addEventListener("click" ,navigatefaq, false);
function navigatefaq(e){
    frq.scrollIntoView({behavior:"smooth"});
}
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.hw',
  }
});
tl.from('.people',{x:-200,opacity:0,duration:1.5})

let td = gsap.timeline({
  scrollTrigger: {
    trigger: '.kid',
  }
});
td.from('.word',{x:200,opacity:0,duration:1.5})

let tb = gsap.timeline({
  scrollTrigger: {
    trigger: '.kids',
  }
});
tb.from('.apply',{x:-200,opacity:0,duration:1.5})

let tt = gsap.timeline({
  scrollTrigger: {
    trigger: '.how',
  }
});
tt.from('.crazy',{x:200,opacity:0,duration:1.5})