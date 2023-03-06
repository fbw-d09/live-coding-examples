console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('Shortcode für if statements');

const testBool = true;

// normales If statement:
if(testBool)
{
    console.log('Dies ist wahr');
}

if(testBool)
{
    console.log('Dies ist wahr');
}
else
{
    console.log('Dies ist falsch');
}

// Ein einzeiliges If statement
if(testBool) console.log('Ich bin ein einzeiliges if statement');

if(testBool) console.log('Ich bin einzeilig');
else console.log('ich bin das einzeilige else');

// Ein befehl mit nur einer zeile code im codeblock des if statements, können wir abkürzen, in dem wir es ohne die klammern direkt in die gleiche zeile wie die abfrage schreiben.if statement.
