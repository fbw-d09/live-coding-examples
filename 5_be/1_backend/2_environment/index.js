// Wir importieren "dotenv" mit dem zusatz .config(); um unsere process.env mit unseren zusatzvariablen auszustatten.
require("dotenv").config();

console.log("Hello World");

// mit process.env.____ können wir die environmentvariablen laden.
console.log("env.NAME:", process.env.NAME);
console.log("env.PASSWORD:", process.env.PASSWORD);
console.log("env.URL_TOKEN:", process.env.URL_TOKEN);
