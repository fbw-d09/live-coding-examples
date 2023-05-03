//change font of body

// document.body.style.fontFamily = "Arial";
//
const body = document.querySelector("body");
body.style.fontFamily = "Arial";

//styling of title and section
const title = document.querySelector(".title");
title.style.textAlign = "center";

const mainSection = document.querySelector(".main");
mainSection.style.display = "flex";
mainSection.style.flexFlow = "row wrap";
mainSection.style.justifyContent = "space-around";
mainSection.style.boxSizing = "border-box";

//change styling label of category elements
const menuCat = document.querySelectorAll(".category");
// console.log(menuCat);
menuCat.forEach(({ style }) => {
  style.fontSize = "2rem";
  style.color = "red";
});

//change font size of warning at bottom of page
const warning = document.querySelector("#warning");
warning.style.color = "orange";

//color generator
// const colorGen = () => {
//   let letters = "0123456789abcdef";
//   let randomColor = "#";
//   for (let i = 0; i < 6; i++) {
//     randomColor += letters[Math.floor(Math.random() * 16)];
//   }
//   randomColor += "50";
//   return randomColor;
// };
// rgba(0-255,0-255,0-255,0-1)
const colorGen = () => {
  return `rgba(${Math.random() * 255},${Math.random() * 255},${
    Math.random() * 255
  },${Math.random()})`;
};
const foodCat = document.querySelectorAll(".food-category");
foodCategories.forEach(({ style: categoryBox }) => {
  categoryBox.backgroundColor = colorGen();
  categoryBox.minWidth = "300px";
  categoryBox.height = "10rem";
  categoryBox.textAlign = "center";
  categoryBox.padding = "1rem";
  categoryBox.borderRadius = "5px";
});

const foodItems = document.querySelectorAll(".food-item");
foodItems.forEach(({ style: item }) => {
  item.marginTop = "1rem";
  item.listStyle = "none";
});

// allergies section - add styling
const allergySection = document.querySelector(".allergy-warning");
allergySection.style.display = "flex";
allergySection.style.flexFlow = "column";
allergySection.style.justifyContent = "center";
allergySection.style.alignItems = "center";

const allergyList = document.querySelector(".allergies");
allergyList.style.width = "20rem";
allergyList.style.listStyle = "none";
allergyList.style.marginTop = "1rem";

const allergyItems = document.querySelectorAll(".allergy-info");
allergyItems.forEach(({ style: item }, i) => {
  if (i % 2 === 1) {
    item.backgroundColor = "skyblue";
  }
  item.paddingLeft = "1rem";
  item.lineHeight = "1.75";
});

//footer descriptions
const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";

const description = document.querySelectorAll(".food-desc");
description.forEach(({ style: desc }) => {
  desc.border = "5px solid orange";
  desc.borderRadius = "100%";
  desc.height = "7rem";
  desc.width = "7rem";
  desc.display = "flex";
  desc.justifyContent = "center";
  desc.alignItems = "center";
  desc.margin = "1rem";
});
