// write your code here
const modal = document.querySelector("#myModal");

let promiseOfModal = new Promise((resolve) => {
  window.setTimeout(() => {
    resolve(modal);
  }, 1000 * 5);
});

promiseOfModal.then((val) => {
  console.log("User has been waiting for 5 seconds");
  val.style.display = "block";
});

modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "close":
    case "modal":
      modal.style.display = "none";
      break;
  }
});
