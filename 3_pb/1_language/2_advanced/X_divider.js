console.log("========================================");

// Divider ohne funktion:
const spacer = "=".repeat(20);
console.log(spacer, "Thema", spacer);

// Divider mit funktion
function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("Aufgabe");

console.log("blah....");
