"use strict";
let date = new Date();
let dayWeek = date.toLocaleString("ru-ru", { weekday: "long" });

const dateOutput = () => {
  console.log(`${partOfTheDay(date)}
Сегодня: ${dayWeek.charAt(0).toUpperCase() + dayWeek.slice(1)}
Текущее время: ${currentTime(date)}
До нового года осталось ${dateBeforeNewYear(date)} дней`);
};

const partOfTheDay = (date) => {
  if (date.getHourse >= 0 || date.getHourse < 6) {
    return "Доброй ночи";
  } else if (date.getHourse >= 6 || date.getHourse < 12) {
    return "Доброе утро";
  } else if (date.getHourse >= 12 || date.getHourse < 18) {
    return "Добрый день";
  } else return "Добрый вечер";
};

const currentTime = (date) => {
  return date.toLocaleString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};

const dateBeforeNewYear = (date) => {
  const dateNewYear = new Date("01 january 2026");
  return Math.floor((dateNewYear - date) / 1000 / 3600 / 24);
};

dateOutput();
