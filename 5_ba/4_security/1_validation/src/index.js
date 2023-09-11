// wir importieren validator.js
// const validator = require('validator');
import validator from 'validator';

// mit validator.js können wir herausfinden, ob strings den gefragten inhalt haben. Validator arbeitet ausschließlich mit strings, wir sollten also sicher sein, das der eingegebene wert ein string ist. Dies können wir zum beispiel erreichen, indem wir die string methode .toString(); auf den zu überprüfenden wert anweden, oder am ende des übergebenen wertes "+ ''" eingeben, dies wandelt jeden wert in einen string um.

// wir können zum beispiel überprüfen, ob ein string eine email adresse ist:

// wir erstellen eine variabke, die eine emal adresse beinhaltet
const testEmail1 = 'ich@du.de'; 
// regeln für eine email adresse:
// - ein string mit 0 bis X punkten,
// - ein string mit 0 bis X bindestrichen
// - ein @, 
// - ein string mit 0 bis X bindestrichen 
// - und/oder einem punkt
// - einem punkt für eine domain
// - oder einem weiteren punkt, mit noch einer domain.

// wir erstellen eine variable die keine email adresse beinaltet
const testEmail2 = 'käsekuchen';

// wir nutzen die validator methode .isEmail(); um die werte zu überprüfen.
console.log('E-Mail:', testEmail1, validator.isEmail(testEmail1)); // wir bekommen true zurück
console.log('E-Mail:', testEmail2, validator.isEmail(testEmail2)); // wir bekommen false zurück

// wir können auch andere stringtests machen, zum beispiel, ob ein string lowercase ist.
const testLowercase1 = 'hallowelt';
const testLowercase2 = 'HalloWelt';

// wir nutzen die methode .isLowerCase(); um zu überprüfen, ob der string in lowercase geschrieben wurde.
console.log('Lowercase:', testLowercase1, validator.isLowercase(testLowercase1)); // wir bekommen true zurück
console.log('Lowercase:', testLowercase2, validator.isLowercase(testLowercase2)); // wir bekommen false zurück

// wir können mit validator niht nur strings überprüfen, sondern auch ändern, so können wir zum beispiel mit der methode .escape(); html in einem escape string umwandeln, und damit unsere applikation sicherer machen, oder die daten escaped speichern.
const htmlString = '<script>...code...</script>';
console.log('HTML:', htmlString);
console.log('HTML:', validator.escape(htmlString));

// wir können den string auch wieder "unescapen", mit der methode .unescape();
const escapedHTMLString = validator.escape(htmlString);
console.log('HTML:', escapedHTMLString);
console.log('HTML:', validator.unescape(escapedHTMLString));

// wir können werte aus strings auch umwandeln
const boolString = 'true';
const numberString = '5';
const floatString = '2.5';

// mit .toBoolean(); können wir einen string in einen boolean umwandeln
console.log('Boolean:', boolString, validator.toBoolean(boolString));

// mit .toInt(); können wir einen string in einen integer also einen nummer umwandeln:
console.log('Int:', numberString, validator.toInt(numberString));

// mit .toFloat(); können wir einen string in eine floating number, also eine kommazahl umwandeln:
console.log('Float:', floatString, validator.toFloat(floatString));

// validator kann noch viel mehr, aber wir wechseln als nächstes zu einer anderen version von validator, die mit express und mongoose im backend zusammenarbeiten kann. Mehr informationen zu validator.js finden wir hier: 
// https://github.com/validatorjs/validator.js

/*
    // mit validator.js
    app.post(
        '/users',
        (req, res) =>
    {
        const isThisAnEmail = validator.isEmail(req.body.email);
    });

    // mit express-validator
    app.post(
        '/users', 
        validator.body(email).isEmail(), 
        (req, res) =>
    {

    });
*/