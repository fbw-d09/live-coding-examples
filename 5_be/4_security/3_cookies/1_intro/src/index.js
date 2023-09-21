const express = require('express');

// mit dem modul cookie-parser lassen sich die cookies per middleware extrahieren.
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// wir geben an, das wir den cookie-parser als middleware nutzen wollen:
app.use(cookieParser());

// als erstes erstellen wir eine route in der wir cookies erstellen können:
app.get('/cookie/erstellen', (req, res) =>
{
    // wir können daten in unserer response als cookie speichern, dafür müssen wir die response methode .cookie(); aufrufen, dies führt die Set-Coookie methode im header aus.
    res
    .cookie(
        // als erstes geben wir den namen des cookies ein (cookie-key):
        "test-cookie",
        // dann geben wir den wert oder inhalt des cookies an:
        "cookie-wert",
        // wenn wir wollen, können wir hier noch ein paar optionen hinzufügen, zum beispiel, die zeit in sekunden, die der cookie existieren soll.
        {
            maxAge: 24 * 60 * 60 * 1000, // ein tag
            httpOnly: true, // mit dieser option sorgen wir dafür, das der cookie nur vom server ausgelesen werden kann
            // es gibt noch einige andere optionen, die wir hier angeben könnten, eine referenz dazu gibt es hier: https:/expressjs.com/en/api.html
        }
    )
    // wir können per method chaining noch weitere cookies hinzufügen, indem wir die .cookie(); methode wieder aufrufen:
    .cookie('anderercookie', 'anderercookiewert')
    .cookie('eindrittercookie', 'nochmehrdaten');

    // jetzt geben wir unsere response an:
    res.status(200).json({ success: true });

    // rufen wir jetzt die adresse auf, und schauen unter cookies nach, sehen wir, das wir einen cookie gesetzt haben

});

// dank des cookie parser, sind wir in der lage cookies auszulesen und können auf diese, über das request objekt zugreifen:
app.get('/cookie/lesen', (req, res) =>
{
    res.status(200).json({
        success: true,
        cookies: req.cookies // das objekt req.cookies; gibt uns die cookies, die auf dem pfad gespeichert sind, wieder.
    });
});

// befindet sich das balufdatum des cookies in der vergangenheit, wird der cookie automatisch gelöscht. um den client anzuweisen einen cookie zu löschen, zum beispiel bei einem logout, nutzen wir die response methode .clearCookie(); dies setzt das maximale alter des cookies auf 0, also auf den 1.1.1970, um 0 uhr, und führt dadurch die automatische löschung durch, einen cookie auf 0 zu setzen ist eine gängige praxis, um einen cookie zu löschen.
app.get('/cookie/loeschen', (req, res) =>
{
    // wir löschen einen cookie, indem wir seinen namen angeben
    res.clearCookie('test-cookie');
    res.clearCookie('anderercookie');
    res.clearCookie('eindrittercookie');
    // oder:
    // res.cookie('cookiename', '', { maxAge: 0 }); // wir überschreiben den vorhandene cookie, mit dem datum 0
    res.status(200).json({
        success: true,
        cookies: res.cookies // cookies sollte leer sein.
    });
});

app.listen(port, () => {
    console.log("Server läuft auf port", port);
});
