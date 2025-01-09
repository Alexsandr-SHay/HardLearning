'use strict'

const square = document.querySelector('.square');
const buttonStart = document.querySelector('.start');
const buttonStop = document.querySelector('.stop');
const buttonReset = document.querySelector('.reset');
let requestId;
let valueSquare = 0;

const request = () => {
    requestId = requestAnimationFrame(() => {
        valueSquare = parseFloat(valueSquare) + 10 + "px"
        square.style.left = valueSquare
        console.log(valueSquare)
        request();
    })
}

buttonStart.addEventListener("click", () => {
    buttonStart.style.display = "none"
    buttonStop.style.display = "block"
    request()

})

buttonStop.addEventListener("click", () => {
    buttonStart.style.display = "block"
    buttonStop.style.display = "none"
    cancelAnimationFrame(requestId);
})

buttonReset.addEventListener('click', () => {
    square.style.left = 10 + "px"
})




