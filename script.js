"use strict";

const DomElement = {
  selector: "123",
  height: 100 + "px",
  width: 350 + "px",
  bg: "red",
  fontSize: 100 + "px",
  position: "relative", //

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
    divElement.style.position = this.position;
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

const start = function () {
  createElement();
  squareMovement();
};

const createElement = function () {
  const element = Object.create(DomElement);
  element.selector = ".square";
  element.width = "100px";
  element.height = "100px";
  element.bg = "black";
  element.position = "absolute";
  element.createElement();
};

const squareMovement = function () {
  let square = document.querySelector(".square");
  square.innerHTML = "";
  square.style.top = "100px";
  square.style.left = "100px";

  window.addEventListener("keydown", function (event) {
    if (event.code == "ArrowUp") {
      square.style.top = parseInt(square.style.top) - 10 + "px";
    }
    if (event.code == "ArrowDown") {
      square.style.top = parseInt(square.style.top) + 10 + "px";
    }
    if (event.code == "ArrowLeft") {
      square.style.left = parseInt(square.style.left) - 10 + "px";
    }
    if (event.code == "ArrowRight") {
      square.style.left = parseInt(square.style.left) + 10 + "px";
    }
  });
};

start();
