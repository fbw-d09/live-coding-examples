/**
 * Strings
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

// Strings escapen
    // mit \n können wir einen zeilenumbruch einfügen (newline)
    const escapeZeile = 'Dies ist\nein mehrzeiliger\nString';
    console.log(escapeZeile);

    // mit \t können wir einen tabulator einfügen (tab)
    const escapeTab = 'Dies ist ein g\te\tt\ta\tb\tb\tt\te\tr string';
    console.log(escapeTab);

    // \" oder \' können wir innerhalb von strings unsere anführungszeichen benutzen.
    const escapeGans = "Dies ist ein Text mit doppelten \" im String";
    console.log(escapeGans); 

    const escapeGans2 = 'Dies ist ein Text mit einfachen \' im String';
    console.log(escapeGans2);

console.log("===============================================================================");

// String Funktionen/Methoden/Properties
    // .length; gibt uns die anzahl der zeichen ub euben string.
    const exampleString = 'Dies ist ein string';
    const lengthExample = exampleString.length;
    console.log('Anzahl der zeichen im string:', lengthExample);

    /**
     * 00 = D
     * 01 = i
     * 02 = e
     * 03 = s
     * 04 = 
     * 05 = i
     * 06 = s
     * 07 = t
     * 08 = 
     * 09 = e
     * 10 = i
     * 11 = n
     * 12 =
     * 13 = S
     * 14 = t
     * 15 = r
     * 16 = i
     * 17 = n
     * 18 = g
     */

    // .charAt(); zeigt uns ein zeichen innerhalb des strings an der gewünschten position, gezählt von 0.
    const charAtExample = exampleString.charAt(11);
    console.log(charAtExample);

    const charAtExample2 = exampleString[2];
    console.log(charAtExample2);

    // .toLowerCase();
    // mit .toLowerCase(); können wir einen sting zum kleinschreiben zwingen.
    const lowerCaseExample = 'Dies ist ein STRING'.toLowerCase();
    console.log('Klein geschrieben:', lowerCaseExample);

    // .toUpperCase();
    // mit .toUpperCase(); könnenn wir einen string zur großschreibung zwingen.
    const upperCaseExample = 'dies ist ein String'.toUpperCase();
    console.log('Groß geschrieben:', upperCaseExample);

    // .includes();
    // mit .includes(); können wir prüfen, ob ein zeichen, oder mehrere zeichen innerhalb eines strings existieren.
    const includesExample = 'Dies ist ein String'.toLowerCase().includes('string');

    /**
     * das obere method-chaining müssen wir uns so vorstellen:
     * const stringExample = 'Dies ist ein String'; // Dies ist ein String
     * const lowerCaseExample = stringExample.toLowerCase(); // dies ist ein string
     * const includesExmple = lowerCaseExample.includes('string'); // beinhaltet "dies ist ein string" das wort "string"? ja. = true
     */

    console.log('Beinhaltet \'String\':', includesExample);

    // .replace();
    // mit .replace(); können wir zeichen oder zeichenketten innerhalb eines strings ersetzen.
    // der erste wert ist der gesuchte, und der zweite wert ist der ersatz dafür:
    const replaceExample = 'Dies ist ein String'.replace('String', 'Käsekuchen');
    console.log('Ersetzter string:', replaceExample);

    // mit .replace(); ersetzen wir normalerweise das erste vorkommnis eines gesuchten strings, wir können aber auch dafür sorgen das er alle vorkommnisse innerhalb eines strings ersetzt.
    const replaceExampleGlobal = 'Dies ist ein String String mit Strings drin'.replace(/String/g, 'Käsekuchen');
    console.log(replaceExampleGlobal);

    // .trim();
    // mit .trim(); können wir whitespace (leerzeichen) aus einem string am anfang und am ende löschen.
    const trimExample = '   Test Wert         ';
    console.log('Ungetrimmte string:', trimExample, "|");
    console.log('Getrimmter string :', trimExample.trim(), "|");

    // .substring();
    // mit .substring(); können wir teile des strings ausschneiden, die erste stelle sagt von wo, und die zweite optionale stelle, bis wohin.
    const substringExample = 'Dies ist ein String';

    console.log('Von der 0-4 stelle:', substringExample.substring(0, 4));
    console.log('Ab der 5. stelle abschneiden:', substringExample.substring(5));

    //          Dies                                      ist ein String
    console.log(substringExample.substring(0, 4), "hier", substringExample.substring(5));

    console.log("===============================================================================");

// Template literals
    /**
     * @see https://css-tricks.com/template-literals/
     */

    // mit template literals, die wir mit ` einleiten, können wir werte berechnen oder ganze code strukturen in einen string einfügen.

    const berechnung = 3 * 2;
    const templateLiteralExample1 = `Ich hätte ${ 2 - 1 } gerne einen tisch für ${ berechnung } Personen`;
    console.log(templateLiteralExample1);

    const personName = 'Hansi';
    console.log(`Hallo, mein name ist ${ personName.toUpperCase() }.`);

    console.log("===============================================================================");

// Multiline und zusammenfügungs beispiele:
    const testString1 = 'Dies\nsind\nmehrere\zeilen';
    console.log(testString1);

    const testString2 = "Dies \
sind \
mehrere \
zeilen \
die \
zu \
einer \
werden";
    console.log(testString2);

    const testString3 = "Dies " +
    "ist " + 
    "etwas " + 
    "text";
    console.log(testString3);

    const username = "Rick"

    const testString4 = `Dies ${ username }
ist
etwas
${ "Käse" }
${ 8 - 2 }
text`;
    console.log(testString4);

    const name = "Jana";
    const tag = "Dienstag";
    const laune = "Nicht so toll";

    const brief = `
Mein Brief

Hallo ${ name }, wie geht es dir?
Heute ist ${ tag }.
Mir geht es ${ laune }!
`;
console.log(brief);
