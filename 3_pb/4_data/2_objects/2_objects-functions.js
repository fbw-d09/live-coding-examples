console.clear();

const divider = (input) =>
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("Object Functions");

// In objekten können wir alle möglichen werte speichern, auch methoden.
// in denne wir mit dem keyword "this" auf die werte innerhalb des objekt blocks zugreifen können.
const user =
{
    firstName: "Max",
    lastName: "Mustermann",
    age: 25,
    country: "de",
    isAdmin: false,
    fullName()
    {
        return this.firstName + " " + this.lastName
    },
    isAdult(adultAge)
    {
        return this.age >= adultAge;
    }
}

console.log("ohne funktion:", user.firstName, user.lastName);
console.log("funktion:", user.fullName());

console.log("ist volljährig:", user.isAdult(18));
