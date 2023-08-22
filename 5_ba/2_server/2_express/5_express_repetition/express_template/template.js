// --- IMPORTS ---

// 1. Wir importieren wir dotenv:
// damit wir von außerhalb der applikation variablen einfügen können, und so zum beispiel ports oder passwörter extern handlen.
require('dotenv').config();

// 2. Wir importieren unsere module
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // optional
const cors = require('cors');

// --- VARIABLEN ---

// 3. Wir legen eine instanz von express an
const app = express();

// 4. wir legen den port fest
const port = process.env.PORT;

// --- EXPRESS KONFIGURATION ---

// 5. wir fügen middleware in unsere express applikation ein, wenn wir sie global (auf jeder route) nutzen wollen

app.use(express.json());
app.use(cors());

// 6. Wir legen unsere routen fest
           //ANFRAGE
                // ANTWORT
app.get("/", (req, res) =>
{
    // wir brauchen immer eine antwort
    // res.
    try {
        res.status(200).json({ 
            success: true
        });
    } catch (error) {
        res.status(404).json({
            success: false
        });
    }
});

// 7. Wir erstellen einen listener für den server
app.listen(port, () =>
{
    // wenn anfrage mit methode und adresse, dann schau, ob es dafür eine methode gibt, und übergebe daten wie den body.

    // wenn wir hier ein console log hineinschreiben, ist dies nur für UNS, damit WIR sehen, dass der server läuft
    console.log(`Server läuft auf port ${port}`);
});



users = [
    {
        id: 0,
        name: "Mandy",
        city: "Berlin",
        color: "Red",
        OperatingSystem: "Linux"
    },
    {
        ...
    },
    {
        ...
    }
]


const newUserData = {
    name: "Rick",
    city: "Dortmund"
}

const userIndex = 0;

users[userIndex] = { ...users[userIndex], ...newUserData };

// originalDaten                   neue Daten               upgedateter user
// id: 0                                                    id: 0
// name: "Mandy"                   name: "Rick"             name: "Rick"
// city: "Berlin"                  city: "Dortmund"         city: "Dortund"
// color: "red"                                             color: "red"
// operatingSystem: "Linux"                                 operatingSystem: "Linux"
