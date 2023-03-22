console.clear();

const divider = (input) =>
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("Object Change");

// erstellen wir uns einen neuen user, um seine daten zu ändern:
const user =
{
    firstName: "Max",
    lastName: "Mustermann"
};

console.log(user);

// werte innerhalb eines objektes können wir ganz einfach ändern, indem wir den schlüssel mit einem neuen wert belegen:
user.firstName = "Henry";

console.log(user);

// wir können auf die gleiche weise auch neue werte und schlüssel zum objekt hinzufügen:
user.age = 25;
user.secondName = "Julius";

console.log(user);

// Natürlich kann der schlüsselname auch woanders herkommen, zum beispiel aus einer variable:
const roleState = "isAdmin";
user[roleState] = true;

console.log(user);

// löschen können wir werte und schlüssel mit dem keyword "delete", dieses existiert spezifisch für objekte.
delete user.age;

console.log(user);

// wemm wir ein objekt in eine variable legen, erstellen wir KEINE kopie sondern arbeiten direkt mit de objekt, dies nennt man "mutable";
const currentUser = user;

currentUser.firstName = "James";

// Wenn wir also jetzt currentUser ausgeben, ist dort der firstName James.
console.log(currentUser);

// Bei user auch.
console.log(user);

// mit dem spread operator können wir die inhalte unserers objektes in ein neues objekt schieben, und überschrieben so nicht unser original:
const newUser = { ...user };

console.log(newUser);
newUser.firstName = "Melanie";

console.log(newUser.firstName);
console.log(user.firstName);
