console.log("Hej");
try {
  const x = 0;
  x = 7;
  console.log(x);
} catch (error) {
  console.log(error.name);
}

console.log("the new result");

function multi(a, b) {
  if (typeof a !== "number") {
    throw new Error("Sorry, you need to enter a number");
  }
  if (typeof b == "boolean") {
    throw new Error("Hej you added a new value");
  }
  return a * b;
}
try {
  console.log(multi("Hi", true));
} catch (error) {
  console.log(error.name);
  console.log(error.stack);
  console.log(error.message);
}
console.log("This is cool");
