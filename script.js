"use strict";

function setInterval() {
  let now = new Date();
  document.getElementById("time").innerHTML = allData(now);
  document.getElementById("time1").innerHTML = now
    .toLocaleString("ru")
    .replace(",", " -"); // за счёт подобранного формата функция для 3 задания не нужна
  setTimeout(setInterval, 1000);
}

function numDecline(n, titles) {
  return titles[
    1 === n % 10 && 11 !== n % 100
      ? 0
      : 2 <= n % 10 && 4 >= n % 10 && (10 > n % 100 || 20 <= n % 100)
      ? 1
      : 2
  ];
}

function allData(now) {
  let date = new Intl.DateTimeFormat("ru", {
    dateStyle: "full",
  }).format(now);

  return (
    date +
    " " +
    now.getHours() +
    " " +
    numDecline(now.getHours(), ["час", "часа", "часов"]) +
    " " +
    now.getMinutes() +
    " " +
    numDecline(now.getMinutes(), ["минута", "минуты", "минут"]) +
    " " +
    now.getSeconds() +
    " " +
    numDecline(now.getSeconds(), ["секунда", "секунды", "секунд"])
  );
}

setInterval();
