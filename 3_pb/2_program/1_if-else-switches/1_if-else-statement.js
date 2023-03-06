console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

/**
 * IF/ELSE Statement
 * @description Mit einem if/else statement können wir bestimmen, das etwas passiert, wenn ein bestimer fall eintritt, oder etwas anderes passiert, wenn dieser fall nicht eintritt.
 */

divider('If/Else');

const today = 'Mittwoch';

if(today === 'Montag' || today === "Dienstag")
{
    console.log('Ich brauche mehr kaffee!');
}
else
{
    console.log('Bald ist wochenende!');
}

// Das else statement wird nur ausgeführt, wenn das if statement "false" zurückgibt.

/**
 * IF/ELSE IF
 * @description mit einem if/else if können wir bstimmen das sowohl bei einem zutreffenden vergleich, wie auch bei einem weiteren vergleich etwas ausgeführt wir.
 */

divider('IF/ELSE IF');

if(today === 'Montag')
{
    console.log('Ich brauche mehr kaffee!');
}
else if(today === 'Dienstag')
{
    console.log('Mein kaffe ist alle...');
}
else if(today === 'Mittwoch')
{
    console.log('Heute bringt mir Benni kaffee');
}
else
{
    console.log('Schlafen...');
}


