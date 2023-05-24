// Promises
console.log("start");

// function changeBackgroundColor(color, delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// }
// ! Writing the same task with a promise
// changeBackgroundColor("red", 2000)
//   .then(() => changeBackgroundColor("yellow", 4000))
//   .then(() => changeBackgroundColor("orange", 6000))
//   .then(() => console.log("done"));

// const smallPromises = new Promise((resolve, reject) => {
//   if (2 > 5) {
//     resolve("cool");
//   } else {
//     reject("Sorry");
//   }
// });
// smallPromises
//   .then((val) => console.log(val))
//   .catch((message) => console.log(message));

const miniPromises = (userAge) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = "green";
      resolve("Done ✅");
    }, 3000);
    if (userAge < 18) {
      reject("Sorry, you stay home");
    }
  });
};

miniPromises(9)
  .then((val) => console.log(val))
  .catch((message) => console.log(message));
