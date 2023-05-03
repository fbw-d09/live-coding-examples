/*
- JavaScript Engines
V8 (Chrome, Node, Edge) 
SpiderMonkey (Firefox) 
- window object
 https://developer.mozilla.org/en-US/docs/Web/API/Document
- document object
 https://developer.mozilla.org/en-US/docs/Web/API/Window

- User input and messages to window: `window.prompt()` and `window.alert()`

-  DOM 
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

*/
console.log("I'm external");
// window.alert("Welcome back");
// const userName = window.prompt("hej, Please enter your name");
// console.log(userName);
// DOM
console.log(document);
console.log(document.getElementById("main"));
console.log(document.getElementsByClassName("mainStl")[0]);
console.log(document.querySelector("[title='welcome page']"));
console.log(document.querySelectorAll("h1"));
document.getElementById("main").style.fontSize = "3rem";
