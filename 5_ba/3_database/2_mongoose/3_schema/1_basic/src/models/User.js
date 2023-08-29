// Wir holen uns Schema und model von mongoose:
const { Schema, model } = require('mongoose');

// schemas können eine menge an daten beinhalten, in compass können wir später diese daten auch prüfen
const schema = new Schema({
    // wir wollen den vornamen unseres users als string angeben, hierfür müssen wir den typ String definieren.
    firstname: { type: String, trim: true},
    // wir können mit "trim" dafür sorgen, das vor und nach dem string leerzeichen automatisch gelöscht werden.

    // Für die typendeklaration gibt es einen shorthand befehl, den wir nutzen können, wenn wir keine optionen angeben, dieser besteht einfach nur aus dem datentyp
    lastname: String, // gleich wie: { type: String }

    // wir wollen das es mindestens einen wert gibt, den jeder user nur einmal selbst besitzt, also ein "unique" wert, der nur einmal pro kollektion auftreten kann. Der default von unique ist false.
    username: { type: String, unique: true, trim: true }, // wenn wir den value von username auf null setzen, also leer lassen, wird dies nicht funktionieren - der wert ist also required.

    // wir können auch default werte eintragen, diese werden dann automatisch gespeichert, wenn wir keine daten angeben.
    role: { type: String, default: "Member" },

    // wir können hier auch objekte mit daten verwenden
    birthday: {
        day: Number,
        month: Number,
        year: { type: Number }
    }
},
{
    // in einem weiteren objekt können wir optionen angeben, die für das ganze dokument gelten
    timestamps: true // wir können automatisch timestamps anlegen lasen, diese werden angelegt, wenn das dokument erstellt wird (createdAt), und das dokument verändert/geupdated wird (updatedAt), zum anfang, wenn das dokument erstellt wurde, zeigen sowohl createdAt und updateAt die gleiche zeit an.
})
// schemas besitzen auch events, die wir nach dem ausführen (post) oder vor dem ausführen (pre) einer aktion abfeuern können, zum beispiel können wir etwas direkt nach dem speichern in der konsole ausgeben
.post('save', (doc) => {
    console.log(doc);
});

// wir erstellen ein modell, anhand der daten des schemas
            //          model name, schema, kollektion
const userModel = new model('User', schema, 'users');

// wir exportieren das modell
module.exports = userModel;
