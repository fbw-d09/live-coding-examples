console.clear();

const divider = (input) =>
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("Objects");

/**
 * Ein objekt in javascript ist eine sammlung von werten, die bearbeitet und ausgegeben werden können.
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

// Als beispiel stellen wir uns mal ein auto vor. Ein auto hat werte wie:
// - hersteller, name, farbe, gewicht, pferdestärke

const manufacturer = "Ford";
const model = "Kuga";
const color = "RubyRed";
const weight = 1760;
const horsePower = 283;

// Diese werte können wir ausgeben:
console.log(model);
console.log(color);

divider("Objects simple");

// Allerdings können wir mit geschwungenen klammern objekte anlegen, in der wir unsere werte einfügen:
// wir geben immer einen namen (ein sogenannter schlüssel, oder key) und einen wert, der sogenannten "peroperty" an, wie in JSON (JavaScript Object Notation):

const car =
{
    manufacturer: "Ford",
    model: "Kuga",
    color: "RubyRed",
    weight: 1760,
    horsePower: 283,
    isDiesel: false,
    doors:
    [
        "FrontLeft",
        "FrontRight",
        "RearLeft",
        "RearRight",
        "Trunk"
    ],
    wheels:
    {
        amount: 4,
        size: 18
    }
};

// wir können das objekt ausgeben, und sehen die verschiedenen informationen aufgelistet in der konsole:
console.log(car);

// Auf die werte innerhalb des objektes können wir jetzt ganz einfach zugreifen:
// Entweder, ähnlich wie bei arrays, mit eckigen klammern um den namen der information:
console.log(car.doors[4]);

const gibMirDasAus = "doors";

console.log(car[gibMirDasAus]);

console.log(car.wheels["amount"]);

// oder wie bei mehtoden, mit dem namen direkt hinter einem punkt:
console.log(car.wheels.amount);

// Autocomplete zeigt uns die schlüssel an den richtigen stellen sogar an.
const car2 =
{
    manufacturer: "DMC",
    model: "Delorean",
    color: "SpaceGray",
    weight: 1500,
    horsePower: 120,
    isDiesel: false,
    doors:
    [
        "FrontLeft",
        "FrontRight",
        "RearLeft",
        "RearRight",
    ],
    wheels:
    {
        amount: 4,
        size: 16
    }
};

console.log(car.model);
console.log(car2.model);

divider("User Beispiel");

// Ein anderes beispiel wäre zum beispiel ein benutzer, oder user:
const user = 
{
    firstName: "Jana",
    lastName: "Mustermann",
    age: 21,
    country: "Germany",
    isAdmin: true
};

console.log(user);

console.log("Hallo,", user.firstName);
console.log(user.age < 18 ? "Du bist nicht volljährig" : "willkommen in der adult zone");
console.log(user.country === "Germany" ? "Diese seite wird in deutsch angezeigt" : "English please");
console.log(user.isAdmin ? "Du darfst hier posten" : "Bitte geh...");

// um die vorhandenen keys eines objektes aufzulisten, können wir das Keys keyword von Object nutzen. Dies gibt uns ein array mit den keys zurück.
console.log(Object.keys(user));

// auf die gleiche weise können wir auch die werte auslesen, mit values:
console.log(Object.values(user));

// undefinierte properties geben undefined zurück:
console.log(user.wurst);

user.wurst = "käse";

console.log(user.wurst);

user.wurst = "lampe";

user.country = "Uganda";

console.log(user);
