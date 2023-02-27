// Undefined is a type and null is an object
// https://codeburst.io/javascript-null-vs-undefined-20f955215a2

// Undefined bedeutet eine varaible ist deklariert, aber hat keinen wert.
// Undefined means a variable is declared but no value has been assigned.

// Null ist ein deklarierbarer wert, den man zu einer variable anfügen kann.
// Null is an assignable value, you can assign it to a variable.

// Type:
let demo1;

demo1;
// returns undefined

typeof demo1;
// reuturns undefined

// Object:
const demo2 = null;
demo2;

typeof demo2; // returns object

null == undefined; // returns true

null === undefined; // returns false
