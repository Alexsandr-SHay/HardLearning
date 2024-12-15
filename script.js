"use script";

let books = document.querySelectorAll(".book");
console.log(books);

//Задание №1
books[0].before(books[1]);
books[3].before(books[4]);
books[5].after(books[2]);

//Задание №2
document.querySelector("body").style.backgroundImage = "url(./image/adv.jpg)";

//Задание №3
let tittle3 = document.querySelectorAll("h2");
tittle3[2].innerText = "Книга 3. this и Прототипы Объектов";

//Задание №4
document.querySelector(".adv").remove();

//Задание №5
let book2 = books[0].querySelectorAll("li");
let book5 = books[5].querySelectorAll("li");

book2[10].before(book2[2]);
book2[9].before(book2[7]);
book2[4].before(book2[8]);
book2[8].before(book2[6]);

book5[1].after(book5[9]);
book5[4].after(book5[2]);
book5[7].after(book5[5]);

//Задание №6
const newElem = document.createElement("li");
newElem.textContent = "Глава 8: За пределами ES6";
let book6 = books[2].querySelectorAll("li");
book6[8].append(newElem);
