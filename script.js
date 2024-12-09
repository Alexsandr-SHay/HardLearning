"use script";

let number = Math.trunc(Math.random() * 100);
let count = 10;

const requestingNumber = function () {
  return prompt("Угадай число от 1 до 100");
};

const checkingTheNumberForNull = function () {
  let number = requestingNumber();
  if (number === null) {
    alert("Игра окончена");
  } else if (!isNaN(Number(number))) {
    return +number;
  } else {
    alert("Введи число!");
    checkingTheNumberForNull();
  }
};

const restartGames = function () {
  number = Math.trunc(Math.random() * 100);
  count = 10;
  checkingTheNumber(number, checkingTheNumberForNull());
};

const checkingTheNumber = function (number, numberClient) {
  if (count > 1) {
    switch (true) {
      case number < numberClient:
        count--;
        alert("Загаданное число меньше, осталось попыток " + count);
        checkingTheNumber(number, checkingTheNumberForNull());
        break;
      case number > numberClient:
        count--;
        alert("Загаданное число больше, осталось попыток " + count);
        checkingTheNumber(number, checkingTheNumberForNull());
        break;
      case number == numberClient:
        if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
          restartGames();
        } else alert("Игра окончена");
        break;
    }
  } else {
    if (confirm("Попытки закончились, хотите сыграть еще?")) {
      restartGames();
    } else alert("Игра окончена");
  }
};

checkingTheNumber(number, checkingTheNumberForNull());

// let number = Math.trunc(Math.random() * 100);

// const requestingNumber = function () {
//   return prompt("Угадай число от 1 до 100");
// };

// const checkingTheNumberForNull = function () {
//   let number = requestingNumber();
//   if (number === null) {
//     alert("Игра окончена");
//   } else if (!isNaN(Number(number))) {
//     return +number;
//   } else {
//     alert("Введи число!");
//     checkingTheNumberForNull();
//   }
// };

// const checkingTheNumber = function (number, numberClient) {
//   switch (true) {
//     case number < numberClient:
//       alert("Загаданное число меньше");
//       checkingTheNumber(number, checkingTheNumberForNull());
//       break;
//     case number > numberClient:
//       alert("Загаданное число больше");
//       checkingTheNumber(number, checkingTheNumberForNull());
//       break;
//     case number == numberClient:
//       alert("Поздравляю, Вы угадали!!!");
//       break;
//   }
// };

// checkingTheNumber(number, checkingTheNumberForNull());
