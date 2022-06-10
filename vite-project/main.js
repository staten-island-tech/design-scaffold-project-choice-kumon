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

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});
$(".abt").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".people");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(targetElement, {
        width: "35rem",
        height: "35rem",
        borderRadius:"35rem",
        duration: 1
      },
      {
        width: "100vw",
        height: "100vh",
        borderRadius:"0em",
        duration: 1
      }
    );
  });