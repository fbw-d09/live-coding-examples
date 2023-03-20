// wir können inhalte von arrays auch verändern
const carBrands = [ "BMW", "Ford", "Volvo", "Toyota", "Trabant" ];

// Eine array kann auch const sein, und trotzdem verändert werden.

console.log(carBrands);

console.log("=".repeat(50));

// Indem wir die Position wie vorher ansprechen, und wie eine variable behandeln, können wir den wert ändern:
carBrands[0] = "Volkswagen";

console.log(carBrands);

console.log("=".repeat(50));

// mit dem .push(); befehl, können wir einen wert an das ende der array anfügen.
carBrands.push("Jaguar");
carBrands.push("Tesla");

console.log(carBrands);

console.log("=".repeat(50));

// mit dem .pop(); befehl löschen wir das letzte element der array.
carBrands.pop();

console.log(carBrands);

console.log("=".repeat(50));

// mit .shift(); löschen wir das erste element aus der array.
carBrands.shift();

console.log(carBrands);

console.log("=".repeat(50));

// mit .unshift(); können wir ein element an den anfang der array setzen.
carBrands.unshift("Opel");

console.log(carBrands);

console.log("=".repeat(50));

// mit .reverse(); drehen wir den inhalt der array um.
carBrands.reverse();

console.log(carBrands);

console.log("=".repeat(50));

// mit .splice(); löschen wir an einem bestimmten index eine bestimmte anzahl von elementen.
carBrands.splice(2, 1);

// delete carBrands[3];

console.log(carBrands);
