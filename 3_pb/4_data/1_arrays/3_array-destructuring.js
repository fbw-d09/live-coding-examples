


const fruits =
[
    "Orange",
    "Strawberry",
    "Apple"
];

// Wir können variablen direkt anlegen, spezifiziert auf die inhalte der array.
const [ firstFruit, secondFruit, thirdFruit ] = fruits;

console.log(firstFruit);

console.log("=".repeat(50));

// wir können arrays returnen
function cars()
{
    return [ "VW", "Ford", "BMW" ];
}

// wir können den variablen der array auch default werte zuteilen
const [ firstCar, secondCar, thirdCar, fouthCar = "Opel" ] = cars();
console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);
console.log(fouthCar);

console.log("=".repeat(50));

// einen wert können wir mit leerem komma auch auslasssen
const books =
[
    "Der Hobbit",
    "James Bond",
    "Sherlock Holmes"
];

const [ bookOne, , bookThree ] = books;
console.log(bookOne);
console.log(bookThree);

console.log("=".repeat(50));

// Ein sehr beliebter neuer operator, seit ES6 ist der sogenannte "Rest - Parameter oder Operator"
const planets =
[
    "Merkur",
    "Erde",
    "Venus",
    "Melmac",
    "Pluto",
    "Vulkan"
]

const [ firstPlanet, secondPlanet, thirdPlanet, ...otherPlanets ] = planets;
console.log(firstPlanet);
console.log(secondPlanet);
console.log(thirdPlanet);
console.log(otherPlanets);

console.log("=".repeat(50));

// Wenn der ...(operator) auf der rechten seite steht, nennt man ihn den spread operator.
const users =
[
    "Max",
    "James",
    "Henry",
    "Michael",
    "Richard"
];

const [ firstUser, secondUser, ...rest ] = [ ...users ];

console.log(firstUser);
console.log(secondUser);
console.log(rest);
