"use strict";

const editingString = function (string) {
  if (typeof string === "string") {
    string = string.trim().slice(0, 31);
    if (string.length >= 30) {
      for (let i = 29; i <= 31; i++) {
        string = string.substring(0, i) + "." + string.substring(i + 1);
      }
      return string;
    } else return string;
  } else return "В качестве аргумента представленная не строка";
};

console.log(editingString("fd,kifgjkgjkfldljdhsdjjdggghhhjllllllllllljj"));
console.log(editingString(" fd,kifgjkgjkfldljdhsdjj "));
console.log(editingString(true));
