const express = require('express');
const jwt = require('jsonwebtoken');

// wir importieren den cookie-parser
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

// wir erstellen ein secret:
const secret = "abcdefghijklmnop";

// wir sagen das express den cookie-parser benutzen soll:
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// wir schreiben eine middleware für die authorization, also die genemigung das wir auf daten zugreifen können:
const authorize = (req, res, next) =>
{
    // wir holen ubns den token aus den cookies, anhand des namens, In konvention werden cookie namen mit unterstrich zwischen den worten getrennt:
    const token = req.cookies.access_token;

    // wenn kein cookie gefunden wurde, senden iwr einen status 403: Forbidden, da wir dem nutzer verbieten die route zu besuchen
    if(!token)
    {
        // mit .sendStatus(); aus der response, geben wir ausschließlich die statusmeldung zurück
        return res.sendStatus(403);
    }

    // mit try/catch versuchen wir den token zu verifizieren, und die daten zu holen, sollte dies nicht klappen, senden wir wieder eine 403:
    try {
        // wir versuchen den token zu verifzieren:
        const data = jwt.verify(token, secret);

        // schauen ob der user existiert...

        // wir übergeben alle gewünschten informationne aus dem token an den request:
        req.username = data.username;
        req.role = data.role;

        // wir nutzen next(); um aus der middleware unsere daten weiterzugeben.
        next();
    } catch (err) {
        return res.sendStatus(403);
    }
}

// wir erstellen eine simple login route, als POST methode, und holen uns den user aus dem body:
app.post('/login', (req, res) => {
    const { username, role } = req.body;

    // ...hier sollte die datenbank nach dem user überprüft werden

    // wir signieren einen token:
    const token = jwt.sign({ username, role }, secret);

    // wir schreiben unsere response:
    return res
    // wir geben mit der methode .cookie(); einen cookie weiter, gefplgt von unseren standardangaben:
    .cookie('access_token', token,
    {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true
    })
    .status(200)
    .json({
        success: true,
        message: `User ${ username } eingeloggt`
    });

    // wenn wir die route jetzt besuchen und unserer daten eingeben, sehen wir den cookie auf unserer response, im header sehen wir auch das ein schlüssel namens Set-Cookie angegeben wurde, in dem wir die werte des cookies sehen können.
});

// wir schreiben eine GET route, in der wir den cookie testen können, diese route ist also nur verfügbar, wenn der token verifiziert wurde:
app.get('/users/dashboard', authorize, (req, res) =>
{
    // da wir den username und die rolle direkt an den request übergeben haben, können wir jetzt auf diese daten zugreifen
    const {username, role} = req;

    if(role === "admin")
    {
        // ...user hat adminrechte...
        console.log("User is admin");
    }

    // wir können jetzt mit den werten aus dem request arbeiten, die tatsächlich nicht aus dem body, sondern aus der tokeninformation, des cookies kommen:
    res.status(200).json({
        success: true,
        username,
        role,
        message: "User is allowed to visit this resource"
    })
});

// wir erstellen eine route mit der wir uns ausloggen, also den cookie löschen, wir übergeben auch hier die authorize middleware:
app.post('/logout', authorize, (req, res) =>
{
    return res
    // wir nutzen die methode .clearCookie();
    .clearCookie('access_token')
    .status(200)
    .json({
        success: true,
        message: 'User wurder erfolgreich ausgeloggt'
    });
});

app.listen(port, () => {
    console.log('Server läuft auf port', port);
})
