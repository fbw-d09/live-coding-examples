console.clear();

const math = Math.max(1, 2, 6, 8, 4, 10);
console.log(math, "e", 2, false, "bla");

console.log();

// mit rest parametern können wir unendlich viele parameter übergeben, wir schreiben den gewollten parameternamen angeführt von 3 punkten, der "rest parameter" muss immer am ende stehen.

// Wenn wir nicht wissen wieviele parameter wir übergeben werden, können wir den rest parameter nutzen, um "alles" übergeben zu können. 
const showName = (title, age, ...names) =>
{
    console.log("title:", title);
    
    console.log("age:", age);

    console.log("names:");

    // hatten wir noch nicht:
    // const [ firstName, lastName ] = names;

    // console.log(firstName);
    // console.log(lastName);

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

//      title      age       ...names(rest)
showName("Caesar", 55, "Gaius", "Julius");

// Beispiel mit sum (Umut):
const sumZweiZahlen = (x, y) => x + y;

const result1 = sumZweiZahlen(5, 10);
console.log(result1);

const sum = (...rest) => {
    let sum = 0;
    
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
};

const result2 = sum(5, 10, 8, 22);
console.log(result2);
