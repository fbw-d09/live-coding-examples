console.clear();

// Ein callback ist eine funktion, die innerhalb einer funktion aufgerufen wird und werte übergeben bekommt.
// Dies ermöglicht uns , nach einem funktionsaufruf, mit den werten aus der funktion, in einem weiteren code block zu arbeiten.
// Dies macht vor allem bei asyncrhonen operationen sinn,bei denen wir auf werte warten, und sie danach erst verarbeiten können.

// Eine funktion zum addieren:
const add = function(a, b)
{
    return a + b;
}

// Eine funktion zum multiplizieren:
const multiply = function(a, b)
{
    return a * b;
}

// Eine funktion zum dividieren:
const divide = function(a, b)
{
    return a / b;
}

// Die funktion calculator ruft eine der mathematischen funktionen als callback auf, und übergibt beide zahlen weiter.
// funktion                             // funktion die wir als callback übergeben.
const calculator = function(num1, num2, callback)
{
    return callback(num1, num2);
}

console.log(calculator(4, 6, add));
console.log(calculator(2, 4, multiply));
console.log(calculator(4, 2, divide));

console.log("=".repeat(50));

// Wir können werte berechnen und dann den berechnet wert weiter geben an das callback.

const consoleOutput = function(input)
{
    // benutzung des wertes
    console.log(input);
}

const testFunktion = function(num1, num2, callback)
{
    // berechnung
    const sum = num1 + num2;

    callback(sum);
}

testFunktion(3, 5, consoleOutput);

// wie bei .forEach(); und anderen methoden können wir im code block direkt mit den ausgewerteten daten arbeiten:
testFunktion(3, 5, (sumTest) =>
{
    console.log(sumTest);
});

console.log("=".repeat(50));

const arrFunction = function(callback)
{
    callback([ 1, 2, 3, 3, 4, 5 ])
}

arrFunction(wurst =>
{
    wurst.push(7);

    console.log(wurst);
});

console.log("=".repeat(50));

const currentUserId = 2244;

const selectCurrentUser = (auth, callback) => 
{
    const selectedUser = auth.users.filter((user) => user.id === currentUserId)

    return callback(selectedUser[0]);
}

const auth = { state: true, users: [{ id: 1234, name: "rick"}, { id: 2244, name: "behzad" }]}

const selectedUser = selectCurrentUser(auth, (currentUser) =>
{
    console.log(currentUser.name);
    
    return currentUser;
});

console.log(selectedUser.name);

console.log("=".repeat(50));

const testArr = ["Hansi", "Behzad", "Dirk K.", "Dirk S.", "Mandy", "Jana", "Pawel"];

const forEach = (arr, callback) =>
{
    for (let i = 0; i < arr.length; i++)
    {
        callback(arr[i], i, arr);
    }
}

// im orignal: Array.prototype.forEach(); ... der gleich code wie wir oben geschrieben haben...

testArr.forEach((element, index, array) =>
{
    console.log(`original version  - ${ index + 1 }: ${ element } \t- [${array}]`);
});

forEach(testArr, (element, index, array) => {
    console.log(`unsere version    - ${ index + 1}: ${ element } \t- [${ array }]`);
})
