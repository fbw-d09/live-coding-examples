console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

/**
 * Ternary Operator
 * @description Mit einem ternary operator können wir if/else abfragen abkürzen, und zum beispiel die gefragte ausgabe direkt in einer variable speichern, der ternary operator wird vor allem in react excessiv benutzt.
 */

divider('Ternary Operator IF/ELSE');

const isTestBool = true;

// unser typisches if-statement
if(isTestBool === true)
{
    console.log('Boolean sagt ja');
}
else
{
    console.log('Boolean sagt nein');
}

// unser vorheriges if statement als ternary operator
const ternaryCheck =
isTestBool
?                    // IF
'Boolean sagt ja'    // IF
:                    // ELSE
'Boolean sagt nein';  // ELSE

console.log(ternaryCheck);

/*
    <div style={`
        background: ${ 
            isLoggedIn ? 
                "#00FF00"
            :
                "#FFFF00"
            }`
        }
    >
        Hallo Welt!
    </div>
*/

divider('Ternary Operator IF/ELSE IF');

const speed = 33;

const ternaryCheck2 = 
speed >= 120 ? 'Zu Schnell!' // IF: speed gröser als gleich 120
:
speed >= 80 ? 'Schnell!' // ELSE IF: speed größer als gleich 80
:
speed <= 30 ? 'Zu langsam!' // ELSE IF: speed kleiner gleich 30
:
'Alles gut'; // ELSE

//                       if {                      } else if {              }  else {       }
// const ternaryCheck2 = speed >= 120 ? 'ZU SCHNELL' : speed >= 80 ? 'SCHNELL' : 'ALLES GUT';

console.log(ternaryCheck2);

const testValue = 1;
let isTrue;

// ist es wahr das testValue 1 ist? ja : nein

// if(testValue === 1)
// {
//     isTrue = true;
//     console.log(isTrue);
// }
// else
// {
//     isTrue = false;
//     console.log(isTrue);
// }

// ist es wahr das testvalue 1 ist? ja : nein
// isTrue = testValue === 1 ? true : false;

isTrue = testValue === 1;

console.log(isTrue);

// Das && innerhalb eines vergleiches sagt aus, das das folgende statement nur ausgeführt wird, wenn die abfrage zutrifft, sonst wird NICHTS getan.
speed === 33 && console.log('Du fährst zu schnell');

/*
<div>
{
    isVerfied === false && <Message text="verfizier dich, DU DOOF"/>
}
</div>
 */

// Equivalent zu:
/*
    if(speed === 33)
    {
        console.log('Du fährst zu schnelll');
    }
*/
