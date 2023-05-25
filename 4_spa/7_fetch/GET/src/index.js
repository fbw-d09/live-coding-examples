// Classes overview
class Person {
  constructor(name) {
    this.name = name;
  }
  display() {
    console.log(this.name);
  }
}

const user = new Person("Hadi");
user.display();

// API: Application Programming Interface
// kostenlos API: https://jsonplaceholder.typicode.com/
const root = document.querySelector("#root");
let text = "";
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    console.log(res);
    res.json();
  })
  .then((info) => (text = `<div>${info}</div>`));

console.log("This is cool");
root.innerHTML = text;
// ! Example using promises

// ! Example using async await
