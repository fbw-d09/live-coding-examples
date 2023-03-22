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
