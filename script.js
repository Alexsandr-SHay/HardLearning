"use strict";

const DomElement = {
  selector: "123",
  height: 100 + "px",
  width: 350 + "px",
  bg: "red",
  fontSize: 100 + "px",

  createElement: function () {
    switch (this.selector[0]) {
      case ".":
        console.log("Создан div элемент с классом " + this.selector);
        this.createDivElement();
        break;
      case "#":
        console.log("Создан параграф с id " + this.selector);
        this.createParagrafElement();
        break;
      default:
        console.log("Неподходящий запрос");
    }
  },

  createDivElement: function () {
    let divElement = document.createElement("div");
    this.selector = this.selector.substring(1, this.selector.length);
    divElement.className = this.selector + "";
    divElement.innerHTML = this.selector;
    divElement.style.height = this.height;
    divElement.style.width = this.width;
    divElement.style.background = this.bg;
    divElement.style.fontSize = this.fontSize;
    document.body.append(divElement);
  },

  createParagrafElement: function () {
    let paragrafElement = document.createElement("p");
    this.selector = this.selector.substring(1, this.selector.length);
    paragrafElement.id = this.selector + "";
    paragrafElement.innerHTML = this.selector;
    paragrafElement.style.height = this.height;
    paragrafElement.style.width = this.width;
    paragrafElement.style.background = this.bg;
    paragrafElement.style.fontSize = this.fontSize;
    document.body.append(paragrafElement);
  },
};

const element1 = Object.create(DomElement);
// Создание объекта с данными по умолчанию (div)
element1.selector = ".car";
element1.createElement();
console.log(document.querySelectorAll(".car")); // Проверка наличия класса

// Создание объекта с полным переопределением данных (div)
element1.selector = ".train";
element1.height = "auto";
element1.width = "auto";
element1.bg = "yellow";
element1.fontSize = "150px";
element1.createElement();
console.log(document.querySelectorAll(".train")); // Проверка наличия класса

// Создание объекта с частичным переопредлением данных (p)
element1.selector = "#plane";
element1.bg = "green";
element1.fontSize = "75px";
element1.createElement();
console.log(document.querySelectorAll("#plane")); // id наличия класса
