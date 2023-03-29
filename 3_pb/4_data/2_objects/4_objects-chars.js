console.clear();

const divider = (input) =>
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("Object chars");

// wir können properties auch sonderzeichen geben, dafür legen wir sie als string an:
const testObject = 
{
    "firstName": "Max",
    "ist fahrbereit": true,
    "hallo!": [ "erster eintrag", "zweiter eintrag" ],
    "isAdmin": false
}

// hier ist es zwingend notwendig, das wir die [] pattern nutzen, um die property anzusprechen:
console.log(testObject["ist fahrbereit"]);
console.log(testObject["hallo!"][0]);
console.log(testObject.firstName);

const alleKeys = Object.keys(testObject);
const alleValues = Object.values(testObject);

console.log(alleKeys);
console.log(alleValues);

console.log();

// const alleKeys = ["name", "alter", "stadt"];
// const alleValues = ["Herbert", 55, "Dortmund"];
const arr = [];

for (let i = 0; i < alleKeys.length; i++)
{
   arr.push({ [alleKeys[i]]: alleValues[i] });
}

console.log(arr);
