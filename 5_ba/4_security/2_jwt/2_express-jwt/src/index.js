require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// wir importieren jwt:
const jwt = require('jsonwebtoken');

const User = require('./models/User');

const app = express();
const port = process.env.PORT;
const databaseUrl = `${ process.env.DB_URL }/${ process.env.DB_NAME }`;

const db = mongoose.connect(databaseUrl);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// wir erstellen eine funktion um den token zu erstellen:
const signAccessToken = data =>
{
    return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

// wir schreiben eine middleware, um die token verifikation zwischen unsere gewünschten requests zu schieben:
const verifyToken = (req, res, next) =>
{
    // wir nutzen diesmal try/catch um entweder eine fehlernachricht auszugeben, oder die angefragten daten
    try {
        // wir holen uns den token aus dem authorization header, da wird dort das wort Bearer (also den halter des tokens) vor dem token stehen haben müssen, um zu sagen welche art der authentifikation wir nutzen, löschen wir den "Bearer" teil aus dem string und holen uns nur den token.
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        const decodedData = jwt.verify(token, process.env.TOKEN_SECRET);

        next();
    } catch (err) {
        res.status(401).json({ message: "NOT AUTHORIZED" });
    }
}

// wir legen eine route an, um einen user zu erstellen, wir lassen den validator hier weg, damit wir uns nicht darauf konzentrieren müssen.
app.post('/users/', (req, res) =>
{
    // wir holen uns username und password aus dem body:
    const { username, password } = req.body;

    const newUser = new User();
    newUser.username = username;
    newUser.password = newUser.hashPassword(password);

    newUser
        .save()
        .then(user => {
            res.status(201).json({
                success: true,
                message: `New user ${ user.username } created!`
            });
        })
});

// wir schreiben eine post methode, mit der wir den user authentifizieren
app.post('/auth', (req, res) =>
{
    // wir holen uns den usernamen und password aus dem body
    const { username, password } = req.body;

    // wir machen unsere user und password kontrolle, und bei erfolgreichem login übergeben wir den token:
    User.findOne({ username }).then(foundUser =>
    {
        if(foundUser)
        {
            if(foundUser.comparePassword(password))
            {
                res.status(200).json({
                    success: true,
                    // wir übergeben dem user den token, speichern ihn aber nirgenswo ab, er wird nur ein einziges mal gezeigt und sollte sicher abgelegt werden
                    token: signAccessToken({ username })
                })
            }
            else
            {
                res.status(401).json({
                    success: false,
                    message: "Incorrect login data"
                })
            }
        }
        else
        {
            res.status(404).json({ 
                success: false,
                message: "User not found!"
            })
        }
    });
});

// wir sind jetzt sozusagen eingeloggt, denn wir können bei jedem request den token mitsenden, bis er abläuft:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RVc2VyIiwiaWF0IjoxNjk0NTA4NzgxLCJleHAiOjE2OTQ1MTA1ODF9.jBt8H165xSJbkPNsz8OWqMVZTXLi_IUeLOmOKE3TO0Q

// wir schreiben eine GET route, in der wir unsere middleware hineinschieben:
app.get('/protected', verifyToken, (req, res) => {
    // um die route nutzen zu können, müssen wir als authentication method die Bearer methode im header nutzen, dies erreichen wir in postman oder thunder client, indem wir auf Auth klicken, dort Bearer auswählen und unseren token einfügen, oder im header Authorization: Bearer ...token eingeben.

    // wenn wir jetzt den request absenden, sollten wir daten bekommen

    // wir können unsere route von hier aus danach ganz normal benutzen
    res.status(200).json({
        success: true,
        hallo: "Welt"
    })
});

app.get('/unprotected', (req, res) =>
{
    res.status(200).json({
        success: true,
        message: "Hey!"
    })
});

app.listen(port, () =>
{
    console.log('Server läuft auf port', port);
})