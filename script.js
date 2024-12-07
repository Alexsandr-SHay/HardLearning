"use strict";

// //первое задание
// let numbers = [123, 234, 3456, 45678, 569, 6897, 279];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i].toString()[0] == 2 || numbers[i].toString()[0] == 4) {
//     console.log(
//       "Число начинается на 2 или 4 - " +
//         numbers[i] +
//         " Индекс числа в массиве " +
//         i
//     );
//   }
// }

//Второе задание

const n = 100;
for (let i = 1; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if (i % j === 0 && j < i) {
      break;
    } else if (j === i) {
      console.log(i);
    }
  }
}
