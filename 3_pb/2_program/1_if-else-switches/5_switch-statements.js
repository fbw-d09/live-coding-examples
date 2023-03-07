console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

/**
 * Switch statements
 * @see https://love2dev.com/blog/javascript-switch-statement/
 */

divider('SWITCH STATEMENTS');

divider('Beispiel');

// eine beispielvariable:
const testValue = 2;

// wir prüfen den wert der variable, indem wir ihn in die klammern des switches übergeben:
switch (testValue)
{
    // der fall, den wir überprüfen wollen
    case 1:
        
        console.log('testValue ist 1');
        // break; sorgt dafür, das nach dem ausführen des inhaltes des cases, der switch verlassen wird.
        break;

    case 2:

        console.log('testValue ist 2');
        break;

    // wie "else", wird default ausgeführt, wenn kein anderer vergleich zutrifft.
    default:

        console.log('testValue hat einen anderen wert...');
        break;
}

console.log('Hallo');

divider('Realitätsbezogener switch');

const position = 1;

switch (position) {
    case 0:
        
        console.log('Ausgeschaltet');
        break;

    case 1:

        console.log('Eingeschaltet');
        break;

}

divider('Ein weiteres Beispiel');

const today = 'Freitag';

switch(today)
{
    case 'Montag':
        console.log(1, 'Heute ist Montag.');
        break;
    case 'Dienstag':
        console.log(2, 'Heute ist Dienstag.');
        break;
    case 'Mittwoch':
        console.log(3, 'Heute ist Mittwoch.');
        break;
    case 'Donnerstag':
        console.log(4, 'Heute ist Donnerstag.');
        break;
    case 'Freitag':
        console.log(5, 'Heute ist Freitag.');
        break;
    case 'Samstag':
        console.log(6, 'Heute ist Samstag');
        break;
    case 'Sonntag':
        console.log(7, 'Heute ist Sonntag')
        break;
    default:
        console.log(8, 'Diesen Tag gibt es nicht!');
}

/**
 * 
 * | frage                  | antwort    | ergebnis | aktion                                       |
 * |------------------------|------------|----------| ---------------------------------------------|
 * | Ist today welcher tag? | Montag     | nein     | zum nächsten case springen                   |
 * | Ist today welcher tag? | Dienstag   | nein     | zum nächsten case springen                   |
 * | Ist today welcher tag? | Mittwoch   | nein     | zum nächsten case springen                   |
 * | Ist today welcher tag? | Donnerstag | nein     | zum nächsten case springen                   |
 * | Ist today welcher tag? | Freitag    | ja       | ausführen des cases und abbruch des switches |
 * | -                      |            |          |                                              |
 */

console.log('Prüfung zuende');

divider('Advanced Switch');

// bei leeren cases, springt der switch zum nächsten case, der inhalt hat, um diesen auszuführen, bis zum break;.

// arbeitswochenbeispiel
const dayOfWeek = 'tuesday';

switch(dayOfWeek.toLowerCase())
{
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thurday':
    case 'friday':
        console.log('Wir müssen leider arbeiten!', dayOfWeek);
        break;
    case 'saturday':
    case 'sunday':
        console.log('WOCHENENDEEEEE!!!', dayOfWeek);
        break;
    default:
        console.log('Den folgenden wochentag gibt es überhauptnicht', dayOfWeek);
}

console.log('Prüfung zuende');

divider('Funktionales Beispiel');

const currentDate = new Date();
const currentDay = currentDate.getDay();
let currentDayName;

switch(currentDay)
{
    case 1:
        currentDayName = 'Montag';
        break;
    case 2:
        currentDayName = 'Dienstag';
        break;
    case 3:
        currentDayName = 'Mittwoch';
        break;
    case 4:
        currentDayName = 'Donnerstag';
        break;
    case 5:
        currentDayName = 'Freitag';
        break;
    case 6:
        currentDayName = 'Samstag';
        break;
    case 7:
        currentDayName = 'Sonntag';
        break;
}

console.log(currentDay, currentDayName);

if(currentDay < 6)
{
    console.log(`Heute ist ${ currentDayName }, und ich muss arbeiten!`);
}
else
{
    console.log(`Heute ist ${ currentDayName }, und ich hab wochenende!`);
}

divider('Berechnung in switches');

const speed = 33;

switch(speed)
{
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:

        if(speed === 33)
        {
            console.log('33 km/h');
        }

        console.log('Nicht zu schnell');
        break;
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
        console.log('Etwas schneller');
        break;
    default:

        if(speed >= 120)
        {
            console.log('Extrem schnell')
        }
        else
        {
            console.log('Zu schnell');
        }

        break; 
}
