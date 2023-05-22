// Promises
console.log("start");
function changeBackgroundColor(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}
changeBackgroundColor("red", 2000)
  .then(() => changeBackgroundColor("yellow", 4000))
  .then(() => changeBackgroundColor("orange", 6000))
  .then(() => console.log("done"));

const smallPromises = new Promise((resolve, reject) => {
  if (2 > 5) {
    resolve("cool");
  } else {
    reject("Sorry");
  }
});
smallPromises
  .then((val) => console.log(val))
  .catch((message) => console.log(message));
