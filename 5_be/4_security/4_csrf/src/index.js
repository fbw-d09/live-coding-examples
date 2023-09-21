const express = require('express');
const path = require('path');

// wir importieren den cookie-parser, express-session und csurf, zu dem hier mehr informationen finden: http://expressjs.com/en/resources/middleware/csurf.html
const cookieParser = require('cookie-parser');
const session = require('express-session'); // express-session wird benutzt um session basierende middleware nutzen zu können
const csrf = require('csurf');

const app = express();
const port = 3000;

// wir erstellen ein secret:
const secret = "SuperGeheimesGeheimnis";

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// wir erstellen eine middlware in der wir csurf zusammen mit dem cookie benutzen wollen:
app.use(csrf({ cookie: true }));

// wir erstellen eine route, auf der wir unser testFormular anbieten wollen:
app.get('/', (req, res) =>
{
    try {
        res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
    } catch (err) {
        console.log(err)
    }
});

// wir erstellen eine GET route, die wir auf dem frontend abrufen können, um den token zu bekommen
app.get('/getToken', (req, res) =>
{
    // wir senden den token aus dem request an das frontend:
    res.status(200).json({ CSRFToken: req.csrfToken() });
});

// wir schreiben eine post route, auf der wir unsere daten verarbeiten:
app.post('/sendData', (req, res) =>
{
    // wir lassen uns den request in der konsole ausgeben:
    // console.log(req);

    res.status(200).json({
        success: true,
        data: req.body,
        message: "Die datenübertragung hat geklappt"
    });
});

app.listen(port, () => console.log("Server läuft auf port", port));

// da csurf deprecated ist, wäre es sinnvoll zu schauen, ob es andere csrf module gibt, die man ausprobieren könnte, eines davon ist tiny-csrf.
