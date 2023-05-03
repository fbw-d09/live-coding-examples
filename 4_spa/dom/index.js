console.log(document.getElementsByClassName("mainText"));
console.log(document.getElementsByTagName("h1"));
const list = document.querySelectorAll("ul *");
const colorGen = () => {
  const hex = "0123456789abcdef";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * 16)];
  }
  return hexColor;
};
// for (let i = 0; i < list.length; i++) {
//   let ele = list[i];
//   ele.style.color = colorGen();
// }
list.forEach((li) => (li.style.color = colorGen()));

const userNames = document.querySelector("#userNames");
console.log(userNames);
// const userName = document.querySelector("input").value;
// console.log(userName);
userNames.innerHTML = `<li>Hadi</li>`;
document.write("<li>something</li> <li>something</li> <li>something</li>");

console.log(document);

console.log(`


😎
-------
|||||||
-------
😎


`);
// adding more classes
// Method 1
document.querySelector("h2").classList.add("darkText", "Hadi");
// Method 2
const classArr = ["classOne", "classTwo", "darkText"];
document.querySelector("h2").classList.add(...classArr);
document.querySelector("h2").classList.remove("classTwo");
document.querySelector("h2").style.marginLeft = "3rem";

document.write("window.innerWidth:", window.innerWidth);
