const square = document.querySelector("#square");
const circle = document.querySelector("#circle");
const btn = document.querySelector("#btn");
const eBtn = document.querySelector("#e_btn");
const text = document.querySelector("#text");
const range = document.querySelector("#range");
let color;

const colorSquare = function () {
  square.style.backgroundColor = color;
};

const readText = function (event) {
  color = event.target.value;
};

const changeCircle = function (event) {
  circle.style.height = event.target.value + "%";
  circle.style.width = event.target.value + "%";
};

eBtn.style.display = "none";

text.addEventListener("input", readText);
btn.addEventListener("click", colorSquare);
range.addEventListener("input", changeCircle);
