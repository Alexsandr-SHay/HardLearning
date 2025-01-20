const btn = document.querySelector(".btn");
// let obj = {
//   user: "Alex",
//   age: 32,
//   role: "worker",
// };

const getData = () => {
  return fetch("db.json").then((response) => response.json());
};

const sendData = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: data,
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then((response) => response.json());
};

btn.addEventListener("click", () => {
  getData()
    .then((data) => {
      sendData(
        "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify(data)
      )
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
});
