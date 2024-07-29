import { movieArray, cardMakeFunc } from "./movie.js";
import { searchFunc } from "./search.js";
import { scrollStart, prvent } from "./topBtn.js";

document.addEventListener("DOMContentLoaded", cardMakeFunc);

let inputBox = document.getElementById("inputBox");
inputBox.addEventListener("input", searchFunc);

window.addEventListener("scroll", scrollStart);

topBtn.addEventListener("click", prvent);
