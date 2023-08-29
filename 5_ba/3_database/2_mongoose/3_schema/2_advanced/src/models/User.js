require('dotenv').config();

// wir importieren crypto:
const crypto = require('crypto');

const { Schema, model } = require('mongoose');

// wir importieren unsere submodelle
const { userProfileSchema } = require('./UserProfile.js');
const { userProjectSchema } = require('./UserProject.js');

const schema = new Schema({
    firstname: { type: String, trim: true },
    lastname: { type: String, trim: true },
    username: { type: String, unique: true, trim: true },
    role: { type: String, default: "member" },
    birthday: {
        day: Number,
        month: Number,
        year: Number
    },

    // Wir haben vor einiger zeit über enums geredet, wir können auch in mongoose solche enumeratoren nutzen, um zu definieren, WELCHE werte erlaubt sind, innerhalb einer eingabe für einen schlüssel
    country: 
    {
        type: String,
        default: "germany", // als wert geben wir einen wert an, der im enumerator vorhanden ist.
        enum: [ "germany", "france", "italy" ]
    },

    // mongoose kann innerhalb von einem schema auf definieren, wie subdokumente, also modelle, die zu einem spezifischen modell hinzugehören arbeiten.

    // um einzelne dokumente zu testen haben wir UserProfile erstellt, hier kann ein user, nur ein profil haben. (1 zu 1)
    profile: userProfileSchema,
    
    // um mehrere dokumente als subdokumente einzufügen haben wir UserProjects erstellt, ein user kann mehrere projekte haben (1 zu N)
    projects: [userProjectSchema], // wenn wir das subdokument als array angeben, können wir hier mehrere dokumente einfügen

    // wichtig ist, wenn wir in mongoose subdokumente angeben, wird die kollektion zwar existieren, aber dort werden keine dokumente gespeichert, die zugehörigen dokumente sind direkter teil des User dokuments.

    password: { type: String, required: true } // wir stellen das password auf den typ string und required: true
},
{
    timestamps: true
})
.post('save', (doc) => console.log(doc));

// wir können ganze methoden innerhalb von schemen angeben, die direkt für unsere jeweiligen einträge funktionieren, dies macht zum beispiel sinn, wenn wir passwörter hashen und direkt in unserem schema anlegen wollen, dies wäre dadurch auch sehr sortiert und ordentlich, da diese methode in unserem falle zum user gehört.

// schema.methods ist eine sammlung verschiedener methoden, die wir für das jeweilige schema anlegen
schema.methods.hashPassword = (password) =>
{
    /*
        passwort: test1234

        secret: HalloWelt

        secret + passwort = isbfgnosrigndgidfgdr

        secret + password / secret + password = test1234

        im frontend wird das passwort "test1234" an den server übergeben, dieser vergleicht dann dieses eingegebene passwort GEHASHED mit dem hash: isbfgnosrigndgidfgdr

        dann prüft er, ob das verschlüsselte passwort in der datenbank dem passwort aus der eingabe, gehashted, entspricht:

        ergo: wenn "isbfgnosrigndgidfgdr" "isbfgnosrigndgidfgdr" entspricht, ist das passwort korrekt.

        wenn die eingabe "ejfsdgjdsngdsg" ist, und der gespeicherte wert "isbfgnosrigndgidfgdr" ist, ist das passwort inkorrekt.

        secret ist auf dem server gespeichert

        passwort muss im frontend eingegeben werden

        beides zusammen kann dann den hash wieder entschlüsseln

        by the way: ein typisches sicheres passwort in der entwicklung: AHDF@734jh
    */

    // wir erstellen eine variable aus unserem secret key von der .env datei
    const secret = process.env.SECRET_KEY;

    // wir nutzen crypto, mit unserem secret key und dem übergebenen passwort
    const hash = crypto.createHmac('sha256', secret).update(password).digest('hex');

    // wir returnen das gehashte passwort:
    return hash;
}

// wir können auch stastische methoden erstellen, die wir über das modell aufrufen können, zum beispiel wenn wir eine eigene suchfunktion oder ähnliches für das modell schreiben wollen.

// schema.statics sind statische methoden
schema.statics.test = (callback) => {
    callback("test");
};

const userModel = new model('User', schema, 'users');

module.exports = userModel;
