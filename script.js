let num = 266219;
num = num.toString();
let result = 1;
for (let i = 0; i <= num.length - 1; i++) {
  result *= number(num[i]);
}
console.log(result);

console.log(result ** 3);
console.log((result ** 3).toString().substring(0, 2));

console.log(
  num
    .toString()
    .split("")
    .reduce((acc, item) => acc * item, 1)
);
