console.clear();
// Eine app die aus klassen oder funktionen besteht, hat immer eine index.js datei, die aufgerufen wird, um das programm zu starten, hier wird alles verbunden, was die app beinhaltet.

// require(); importiert ein JavaScript modul, also den code inhalt einer datei, um ihn hier zu verwenden.
const Bird = require('./src/Bird');
const Dog = require('./src/Dog');

console.log("Unsere app...");

// Nach dem import können wir die klasse verwenden und eine neue instanz erstellen:

const tier = new Bird('Max', 'Parrot', true);
const doggydogdog = new Dog('Herbert', 'Bulldog');

console.log(tier);
console.log(tier.eat("Donut"));

console.log(doggydogdog);
console.log(doggydogdog.bark());
