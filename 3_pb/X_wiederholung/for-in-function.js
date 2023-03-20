const val = 5;

for (let i = 0; i < val; i++) {
    console.log("hallo Welt");
}

// ...

const val2 = 10;

for (let i = 0; i < val2; i++) {
    console.log("hallo Ich");
}

console.log("=".repeat(50));

const func = (anzahl, name) =>
{
    for (let i = 0; i < anzahl; i++) {
        console.log("hallo " + name);   
    }
}

func(5, "welt");

console.log("ich häng hier so dazwischen")

func(10, "Ich");

func(2, "Jana");
