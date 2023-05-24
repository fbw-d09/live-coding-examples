import data from "./data.json" assert { type: "json" };
// JSON ->  JavaScript Object Notation
// leichtes Format zum Speichern und Transportieren von Daten

const obj = {
  name: "Hadi",
  age: 33,
};

console.log("obj:", obj);
// Convert from Js -> to JSON
const stringify = JSON.stringify(obj);
console.log("JSON", stringify);
// Convert from JSON -> to Js
const parsed = JSON.parse(stringify);
// console.log(typeof parsed);
console.log("parsed", parsed);
console.log(data);
