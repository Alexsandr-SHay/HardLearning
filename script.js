"use strict";

const inputText = document.querySelector(".input-text");
const textPar = document.querySelector(".text-p");

function debounce(callback, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
}

const text = () => {
  textPar.textContent = inputText.value;
};

inputText.addEventListener("keyup", debounce(text, 300));
