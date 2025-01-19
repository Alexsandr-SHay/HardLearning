const btn = document.querySelector(".btn");
let obj = {
  user: "Alex",
  age: 32,
  role: "worker",
};

getData = () => {
  fetch("db.json")
    .then((response) => response.json())
    .then((data) => {
      return (obj = data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const sendData = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: data,
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then((response) => response.json());
};

btn.addEventListener("click", () => {
  getData();
  setTimeout(() => {
    sendData("https://jsonplaceholder.typicode.com/posts", JSON.stringify(obj))
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, 1000);
});
