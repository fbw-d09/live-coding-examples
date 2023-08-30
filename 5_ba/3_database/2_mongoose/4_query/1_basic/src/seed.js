require('dotenv').config();

const Chance = require('chance');
const mongoose = require('mongoose');

const User = require('./models/User.js');

const databaseUrl = `${ process.env.DB_URL }/${ process.env.DB_NAME }`;
const chance = new Chance();

mongoose.connect(databaseUrl);

// ich erstelle eine funktion, it der ich user generieren kann
const createUser = () =>
{
    return {
        role: Math.random() < 0.3 ? 'admin' : 'member', // wir lassen den zufall entscheiden, ob das mitglied admin oder member ist.
        username: chance.first(),
        age: chance.integer({ min: 16, max: 65 }),
        email: chance.email({ domain: 'example.com' }),
        password: chance.hash(),
        country: chance.country({ full: true })
    }
}

// ich erstelle eine asynchrone funktion, die datenbank befehle ausführt, um die user zu speichern.
const seed = async () => {
    await User.insertMany(
        [
            createUser(),
            createUser(),
            createUser(),
            createUser(),
            createUser(),
            createUser(),
            createUser(),
            createUser(),
            createUser(),
            createUser()
        ]
    )
    .then(() => console.log("Neue user wurden angelegt"))
    .catch(err => { throw err});

    // wir wollen, wenn das script seine aufgabe erfüllt hat, die verbindung zur datenbank schließen, da wir wollen, dass das script sich von selbst beendet, wenn es durchgelaufen ist.
    await mongoose.connection.close();
};

seed();
