// write your code here
const modal = document.querySelector("#myModal");
console.log(typeof modal);
//  const userAge = get user age
const promiseOfModal = new Promise((resolve) => {
  window.setTimeout(() => {
    resolve(modal);
  }, 5000);
});

promiseOfModal.then((ele) => {
  console.log("User has been waiting for 5 seconds");
  ele.style.display = "block";
});
console.log("nice");
modal.addEventListener("click", (e) => {
  if (e.target.className == "close" || e.target.className == "modal") {
    modal.style.display = "none";
  }
});
