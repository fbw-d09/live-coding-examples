console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('Booleans');

const isTestBool = true;

// wenn etwas WAHR ist, führe diesen fall aus.
if(isTestBool === true)
{
    console.log('Dies ist wahr');
}

if(isTestBool)
{
    console.log('Dies ist wahr');
}

// die folgende variable beinhaltet einen String, wenn dieser mit text gefüllt ist, dann hat die variable einen inhalt. Wenn dort kein text steht, ist der inhalt "null", also garnichts. Da der text dann GARKEINEN inhalt hat, kann man auf ihn auch nicht prüfen. ergo ist er "false";

const testString = "Dies ist ein string";

if(testString)
{
    console.log('Dies wird ausgeführt, wenn der testString inhalt hat');
}

// alle nummern über 0 und unter 0 sind true, denn 0 ist false
const testNummer = 0;

if(testNummer)
{
    console.log("Dies ist eine nummer");
}

let testStringName;
const isAdmin = true;
const hasCookies = true;

if(isAdmin)
{
    testStringName = "Behzad";
}
else if(isAdmin && hasCookies)
{
    testStringName = "Benni";
}
else
{
    testStringName = "Jana";
}

console.log(testStringName);
