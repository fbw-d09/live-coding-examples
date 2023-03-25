console.clear();

/**
 * @function teeKochen
 * @see http://google.de
 * @description Die Funktion teeKochen(); sorgt dafür, das der tee gekocht wird.
 * @param { Number } wassermenge Die menge an wasser, die gekocht werden soll
 * @param { Number } temperatur Die temperatur des wassers, die erreicht werden soll
 * @returns { Boolean }
 */
function teeKochen(wassermenge, temperatur)
{
    // Hier wird returned
    return true;
}

const testObject =
{
    /**
     * @method addPlayer
     * @description Adds a player
     * @param { String } id Players User ID
     * @returns { Boolean }
     */
    addPlayer: (id) => 
    {
        return true;
    }
}

// let NummerDieRechnenSoll = [];

// for (let i = 0; i < 10; i++)
// {
//     NummerDieRechnenSoll.push(i);
// }

// console.log(NummerDieRechnenSoll);

const rechenFunktion = (menge) =>
{
    let ergebnis = [];

    for (let i = 0; i < menge; i++)
    {
        if(i === 1)
        {
            ergebnis.push(i);
        }
        else if(i === 3)
        {
            ergebnis.push("Käse");
        }
    }

    return ergebnis;
}

console.log(rechenFunktion(5));

const testSatz = "Heute ist Montag";

// Ich brauch ein array das ich aus dem satz erstelle
const wortArr = testSatz.split(' ');

// ein array in dem ich die zahlen speichere
const wortLaengenArr = [];

// ein for loop, der durch die wörter loopt, und mir die länge zurück gibt
for (let i = 0; i < wortArr.length; i++)
{
   wortLaengenArr.push(wortArr[i].length);
}

console.log(wortLaengenArr);


const tabellenDings =
[
    {
        name: "bla",
        columns: 
        [
            {
                value: 1
            },
            {
                value: 2
            }
        ]
    },
    {
        name: "blergh",
        columns: 
        [
            {
                value: 5
            },
            {
                value: 2
            }
        ]
    },
    {
        name: "wuhuuu",
        columns: 
        [
            {
                value: 3
            },
            {
                value: 8
            }
        ]
    },
];

for (let r = 0; r < tabellenDings.length; r++)
{
    console.log("Zeile:", tabellenDings[r].name);

    const aktuelleZeile = tabellenDings[r];

    for (let c = 0; c < aktuelleZeile.columns.length; c++)
    {
        const aktuelleSpalte = tabellenDings[r].columns[c]

        console.log("Spalte:", aktuelleSpalte.value)   
    }
}
