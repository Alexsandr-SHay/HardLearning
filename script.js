"use strict";

const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const divElem = document.createElement("div");
document.body.append(divElem);
const getDay = new Date();

week.forEach(function (item) {
  const element = document.createElement("p");
  element.textContent = item;
  divElem.appendChild(element);
});
const days = document.querySelectorAll("p");

days.forEach(function (item, index) {
  if (index == getDay.getDay() - 1) {
    item.style.fontWeight = "bold";
  }
  if (index > 4) {
    item.style.fontStyle = "italic";
  }
});
