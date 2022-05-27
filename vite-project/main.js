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

import {gsap} from "gsap";