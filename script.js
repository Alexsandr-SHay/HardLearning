"use strict";

let ruWeek = [
  "Понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];
let enWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let lang = "ru";

if (lang === "ru") {
  console.log(ruWeek);
} else {
  console.log(enWeek);
}

lang = "en";
switch (true) {
  case lang === "ru":
    console.log(ruWeek);
    break;
  case lang === "en":
    console.log(enWeek);
    break;
}

let array = [];
array.ru = ruWeek;
array.en = enWeek;
console.log(array[lang]);

let namePerson = "Alex";
console.log(
  namePerson === "Артем"
    ? "Директор"
    : namePerson === "Александр"
    ? "Преподователь"
    : "Студент"
);
