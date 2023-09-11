const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// wir importieren express-validator, mehr informationen zu express-validator finden wir hier: 
// https://express-validator.github.io/docs/
const validator = require('express-validator');

const User = require('./models/User.js');

// wir importieren unsere validationsmiddleware:
const passwordConfirmationMethod = require('./validation/validationPasswordConfirmation.js');

const app = express();
const port = 3000;
const databaseUrl = 'mongodb://localhost:27017/validator-example';
const db = mongoose.connect(databaseUrl);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// wir erstellen eine POST route, zum anlegen von neuen benutzern:
app.post('/users/test', (req, res) =>
{
    // wir holen us die daten aus dem body, wenn wir unsere route testen, sollten wir den username, und password zurückbekommen
    const { username, password } = req.body;

    // wir geben username und password diesmal als test tatsächlich als string zurück, wenn wir speichern würden, müssten wir aber natürlich das password encrypten.
    res.status(200).json({
        username,
        password
    });
});

// da wir sicher gehen wollen, das die daten korrekt sind, nutzen wir exress-validator um diese zu prüfen.

// express-validator hakt sich als middleware in express ein, deshalb können wir die methode .body(); direkt als middleware nutzen, um auf unsere body daten zugreifen zu können und rufen dann die jeweilige überprüfungsmethode von validator.js aus.
app.post('/users/validator',
    // wir wollen wissen ob der username eine email ist und löschen überflüssigen whitespace:
    validator.body('username').trim().isEmail(),
    // wir wollen dass das passwort mindestens 8 zeichen hat, und maximal 16 zeichen lang ist:
    validator.body('password').isLength({ min: 8, max: 16 }),
    (req, res) =>
    {
        const { username, password } = req.body;

        // jetzt können wir innerhalb unserer express methode die fehler ausgeben lassen, und mit ihnen arbeiten. Dafür nutzen wir den return der methode .validationResult(); und übergeben den request body.
        const errors = validator.validationResult(req).errors;
 
        // wir können jetzt anhand dieser informationen dem user eine nachricht zurückgeben, oder den user speichern

        // wenn errors inhalt hat
        if(errors.length > 0)
        {
            // wir retunen damit das programm nach dem aufruf die methode verlässt
            return res.status(400).json({ errors });
        }

        res.status(200).json({
            success: true
        });
    }
);

// wir können fehlermeldungen spezifischer validierungen auch selbst anlegen, indem wir die methode .withMessage(); innerhalb des validationschains benutzen:
app.post('/users/message', 
    validator.body('username').isEmail().withMessage('Username muss eine email-adresse sein!'),
    (req, res) => {
        const { username, password } = req.body;

        const errors = validator.validationResult(req).errors;

        console.log(errors);

        if(errors.length > 0)
        {
            return res.status(400).json({ errors });
        }

        res.status(200).json({ success: true })
    }
);

// gerade für passwörter ist der validator sehr gut, da wir sehr viele optionen haben, um passwörter zu überprüfen.
app.post('/users/sicherespasswort', 
    validator.body('username').isEmail().withMessage('Username muss eine email-adresse sein!'),
    validator.body('password')
        // die länge wollen wir wieder zwischen 8 und 16 zeichen haben:
        .isLength({ min: 8, max: 16 })
        // wir geben eine nachricht zurück:
        .withMessage('Passwort zu kurz oder zu lang')
        // wir können den method chain weiter führen, und sagen mit .not(); das wir etwas NICHT haben wollen:
        .not()
        // mit der methode .isIn(); geben wir jetzt ein array an werten an, das wir nicht als passwort erlauben
        .isIn(["pässwörd", "12345678", "test1234", "hallo123", "password"])
        // auch hier geben wir eine nachricht aus:
        .withMessage('Passwort ist nicht zulässig'),
    (req, res) =>
    {
        const { username, password } = req.body;

        const errors = validator.validationResult(req).errors;

        if(errors.length > 0)
        {
            return res.status(400).json({ errors });
        }

        res.status(200).json({ success: true });
    }
);

// express-validator besitzt ein objekt namens "Schema", um mehrere validationsanfragen auf einmal einzurichten. DIES IST NICHT VERWAND MIT MONGOOSE SCHEMA, es ist allerdings, wie ein mongoose schema, eine vorlage für einträge. In diesem Schema können wir werte angeben und überprüfen, dies ist gleichwertig wie mit method chaining, wir können also beides machen.
app.post('/users/schema',
    // mit .checkSchema(); erstellen wir ein neues schema,
    // das schema das wir jetzt erstellen wäre gleichwertig mit dem folgenenen method chain:
    // validator.body('password').isLength({ min: 8 }).withMessage('Passwortlänge nicht zulässig'),
    validator.checkSchema({
        // wir wollen das passwort validieren, und geben hierfür das query feld an:
        password:
        {
            // mit isLength überprüfen wir die länge
            isLength:
            {
                // die fehlermeldung die wir angeben wollen, schreiben wir in errorMessage:
                errorMessage: "Passwortlänge nicht zulässig",
                // wir wollen optionen angbeen, die wir überprüfen wollen, diese geben wir in einem array an:
                options: 
                [
                    // das passwort soll mindestens 8 zeichen lang sein:
                    {
                        min: 8
                    }
                ]
            }
        }
    }),
    (req, res) => {
        const { username, password } = req.body;

        const errors = validator.validationResult(req).errors;

        if(errors.length > 0)
        {
            return res.status(400).json({ errors });
        }

        res.status(200).json({ success: true }); // hier würden wir den user speichern.
    }
);

// express-validator ermöglicht uns, eigene prüfungen zu schreiben, so können wir zum beispiel prüfen ob das eingegebene passwort bei einer registrierung dem "confirmation password" entspricht, also der zweiten eingabe, zur sicherheit der richtigen eingebenene passwortdaten.

// wenn wir größere validationsmiddleware schreiben und ordentlich vorgeben wollen, schreiben wir diese validationen in eigenen dateien, diese sind normalerweise im ordner "validation" hinterlegt. Wir erstellen also einen ordner namens validation und erstellen dort die datei "validationPasswordConfirmation.js", diese importieren wir dann, um sie in unserem code nutzen zu können.
app.post('/users/confirmation', 
    validator.body('username').isEmail(),
    validator.body('password').isLength({ min: 8, max: 16 }),
    // um eigenen validationsmiddleware nutzen zu können, übergeben wir die funktion an die methode .custom();
    validator.body('passwordConfirmation').custom(passwordConfirmationMethod),
    (req, res) =>
    {
        const { username, password } = req.body;

        const errors = validator.validationResult(req).errors;

        // wir fügen dem body das feld passwordConfirmation hinzu, und schreiben ein anderes passwort um die fehler zu prüfen
        if(errors.length > 0)
        {
            return res.status(400).json({ errors });
        }

        res.status(200).json({ success: true });
    }
);

app.listen(port, () => {
    console.log(`Server läuft auf port ${ port }`);
});
