console.clear();

const divider = (input) =>
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("Destructuring");

/**
 * Destructuring
 * @description
 * Destructuring bedeutet das wir elemente aus Arrays und Objekten extrahieren, also herausnehmen können.
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Destrukturierende_Zuweisung
 * @see https://codeburst.io/es6-destructuring-the-complete-guide-7f842d08b98f
 * @example
 * [ value, value, ...] = [ value, value, ... ];
 * @example
 * { key, key, ... } = { key, key, ...}
 */

// wir erstellen ein array mit werten:
const rgb = [ 255, 128, 200 ];

// red, green, blue.
const [ red, green, blue ] = rgb;
// const red = 255;
// const green = 128;
// const blue = 200;

console.log("red", red); // rgb[0]
console.log("green", green); // rgb[1]
console.log("blue", blue); // rgb[2]
console.log(rgb);

// Objekte

const userObject =
{
    firstName: "Max",
    lastName: "Mustermann"
}

// wenn wir auf der linken seite, die namen der schlüssel matchen, erstellen wir damit neue variablen:
const { firstName, lastName } = userObject;
// const firstName = "Max";
// const lastName = "Mustermann";

console.log(firstName); // userObject.firstName;
console.log(lastName); // userObject.lastName;

const fruitObject =
{
    fruit: "apple",
    color: "red",
    taste: "bitter"
}
// wenn wir auf der linken seite werte zuweisen, erstellen wir eine variable mit dem default wert:
const { fruit, color, taste = "sweet" } = fruitObject;

console.log("fruit:", fruit);
console.log("color:", color);
console.log("taste:", taste);

console.log();

const carObject =
{
    brand: "Ford",
    model: "Kuga",
    year: 2019,
    wheels:
    [
        "FrontewpotnierwjjrepzoLeft",
        "fwrwe",
        "RearLeetjhbtiuwreot34ft",
        "RearRtbjh5687059t0io43püight"
    ]
};

// Wenn wir auf elemente in einem array zugreifen wollen, bennen wir die einzelnen indexpositionen mit variablennamen:
const { brand, model, year, wheels, wheels: [ frontLeft, frontRight, rearLeft, rearRight]} =  carObject;
// const brand = "Ford";
// const model = "Kuga";
// const year = 2019;
// const wheels = ["FrontewpotnierwjjrepzoLeft", "fwrwe", "RearLeetjhbtiuwreot34ft", "RearRtbjh5687059t0io43püight"];
// const frontLeft = "FrontewpotnierwjjrepzoLeft";
// const frontRight = "fwrwe";
// const rearLeft = "RearLeetjhbtiuwreot34ft";
// const rearRight = "RearRtbjh5687059t0io43püight";

console.log(brand); // const brand = carObject.brand;
console.log(model); // const model = carObject.model;
console.log(year); // const year = carObject.year;
console.log(wheels); // const wheels = carObject.wheels;
console.log(frontLeft); // const frontLeft = carObject.wheels[0];
console.log(frontRight); // const frontRight = carObject.wheels[1];
console.log(rearLeft); // const rearLeft = carObject.wheels[2];
console.log(rearRight); // const rearRight = carObject.wheels[3];

console.log();

// wenn wir die vorhandenen variablen mit anderes benannten variablen überschrieben wollen, geben wir den veränderten namen einfach auf der rechten seite an:
const countryObject =
{
    city: "Berlin",
    name: "Germany"
}

const name = "Max";

const { name: countryName, city, continent = "Europe" } = countryObject;
// const countryName = countryObject.name;

console.log(countryName);
console.log(city);
console.log(continent);

console.log();
