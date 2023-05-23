// mini task
console.log("First log");
setTimeout(() => {
  console.log("I'm delay with 3000ms");
}, 3000);

setTimeout(() => {
  console.log("I'm delay with 0ms");
}, 0);
console.log("last line");
// mini task
Promise.resolve({ name: "Zain" }).then((val) => console.log(val));
const div = document.querySelector("#root");
const users = ["Nancy", "Olga", "Zain", "Jack"];
function getUsers() {
  setTimeout(() => {
    users.forEach((user) => {
      const p = document.createElement("p");
      p.innerText = user;
      div.appendChild(p);
    });
  }, 1500);
}
function addUser(userName, callback) {
  setTimeout(() => {
    users.push(userName);
    callback();
  }, 2000);
}
// getUsers();
addUser("Ali", getUsers);
