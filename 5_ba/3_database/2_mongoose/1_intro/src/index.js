// wir importieren als erstes mongoose:
const mongoose = require('mongoose');

// wir erstellen eine variable, in der wir die url unseres mongodb servers, und die datenbank die wir ansprechen wollen, angeben.
// mongodb nutzt standardmäßig das protokoll "mongodb" und den port "27017".
const databaseURL = 'mongodb://localhost:27017/mongoose-intro';

/*
    in produktion, in der .env:
    DB_URL=mongodb://localhost:27017
    DB_NAME=mongoose-intro
*/

// wir nutzen die methode .connect(); um unsere datenbank mit mongoose anzusprechen, uns also zu ihr zu verbinden, und geben dann optional noch ein paar optionen an.
            // datenbank URL, optionen
mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true });

// wir erstellen eine weitere variable, in der wir das verbindungsobjekt speichern, indem wir uns die aktive verbindung mit dem attribut .connection; holen:
const db = mongoose.connection;

// dieses objekt ist nun nicht nur für all unsere datenbank handlungen verantwortlich, sondern bietet uns auch eine menge interessanter informationen:
// console.log(db);

// mongoose stellt us einige events zur verfügung, mit denen wir bestimmte aktionen in der datenbank prüfen können. 

// mit dem "error" event, des db objektes könenn wir verbindungsfehler abfangen, da mongoose die verbindung aber ein paar mal versucht herzustellen, müssen wir ein wenig warten, bis wir diesen fehler sehen würden. Wenn wir zum test die adresse von mongodb ändern würden

// wir binden die konsole direkt an das error event und können so den callback direkt nutzen
db.on('error', console.error.bind(console, "Verbindungsfehler!"));

// wir können events, die einmal auftreten, mit "once" ausführen, so wird das event nur einmal überprüft und geworfen. Dies macht vor allem sinn, beim öffnen von verbindungen, da wir dann direkt sehen, ob unsere verbindung erfolgreich war.
db.once('open', () => {
    console.log("Wir sind mit MongoDB verbunden");
});

// um ein schema zu erstellen, nutzen wir die methode .Schema(); von mongoose, auf einer neuen variable und fügen unsere informationen als objekt ein. Auf den jeweiligen einträgen setzen wir den namen des schlüssel und den datentyp. Optional können wir auch angeben, das wir bestimmte informationen zum beispiel unique oder required machen.

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    price: Number, 
    isAvailable: Boolean,

    // wir geben noch an, das wir einen unique eintrag haben wollen, eine ISBN wäre immer nur einmal vorhanden, in der welt der bücher. wenn wir optionen angeben. müssen wir auch den datentyp als option "type" mit übergeben.
    isbn: { type: String, unique: true, required: true },

    // Ein erstellungsdatum des eintrags können wir auch einstellen, dafür geben wir einfach das aktuelle datum als default an:
    created: { type: Date, default: new Date() }
});

// jetzt nutzen wir die informationen aus dem schema um ein modell daraus zu erschaffen, mit dem mongoose dann arbeitet, dazu nutzen wir die methode .model();

// wir geben als erstes den namen an, den wir für das jeweilige modell nutzen wollen, dann geben wir das schema an, das wir eben erstellt haben, und dann die kollektion, in der wir die einträge speichern wollen.

// sollte die kollektion nicht existieren, wird sie automatisch angelegt.
                           // name, schema,     kollektion
const Book = mongoose.model('Book', bookSchema, 'books');

// wenn wir jetzt einen neuen eintrag erstellen wollen, können wir dieses, indem wir eine neue instanz vom modell Book anlegen, und es mit unseren informationen füllen.

const newBook = new Book({
    title: "The Hound of the Baskervilles",
    author: "Arthur Conan Doyle",
    price: 15,
    isAvailable: true,
    isbn: "1234-5678-9012"
});
// created geben wir niht mit an, da es einen default wert hat, und automatisch eingetragen werden wird.

console.log(newBook);

// INFO: um die verschiedenen befehle asynchron auszuführen, und sicherzugeben, das die befehle in der richtigen reihenfolge ausgeführt werden, nutzen wir im rest dieses beispiels eine funktion. In express können wir später alles anhand von routen aufrufen, und brauchen diese art und weise des funktionsaufrufes nicht mehr.

const run = async () =>
{
    // wir haben jetzt eine instanz unseres Book modells erstellt, also ein neues Buch. Aber haben dieses noch nicht in unsere datenbank eingepflegt.

    // um das dokument zu speichern, nutzen wir die mongoose methode .save();. Beim ausführen dieser methode speichert mongoose das dokument, und liefert ein callback zurück, in dem wir fehler und die dokumenten informationen verwenden können.

    await newBook.save()
    .then(book => {
        console.log(`${ book.title } von ${ book.author } wurde gespeichert!`);
    }).catch(err => console.log(err.message));

    // Wenn wir jetzt speichern, sehen wir das dokument mit den buch informationen in compass, inklusive des datums, der mongodb internen ID und der aktuellen version des dokumentes.

    // Wenn wir jetzt noch einmal speichern. bekommen wir eine fehlermeldung, diese sagt uns nicht nur welchen fehler es gab, sondern auch wo er auftrat. WIe wir sehen, haben wir gesagt "isbn" muss unique sein, weswegen wir jetzt einen fehler bekommen, denn wir speichern wieder die selbe ISBN.

    // Wenn wir dokumente löschen wollen gibt es dafür ein paar befehle, wir nutzen den model befehl .deleteOne(); um das angelegte dokument zu löschen
    await Book.deleteOne({ title: "The Hound of the Baskervilles" })
    .then(console.log("Buch wurde gelöscht"))
    .catch(err => console.log(err.message));

    // wir können mit mongoose, wie in der mongo shell auch mehrere dokumente auf einmal einfügen. dafür erstellen wir ein array mit mehreren büchern.

    const newBooks = [
        {
            title: "Casino Royale",
            author: "Ian Flemming",
            price: 10,
            isAvailable: false,
            isbn: "9876-5432-1110"
        },
        {
            title: "Illusions",
            author: "Richard Bach",
            price: 12,
            isAvailable: true,
            isbn: "5432-1987-6500"
        }
    ]

    // mit der methode .insertMany(); aus der instanz unseres Book modells, fügen wir nun das array ein:
    await Book.insertMany(newBooks)
    .then(() => console.log("Bücher hinzugefügt"))
    .catch(err => console.log(err.message));

    // Wie wir in compass sehen, wurden beide bücher hinzugefügt.

    // mit mongoose könnnen wir aus unserer app heraus sogar komplette kollektionen oder datenbanken droppen, also löschen.

    // Alle dokumente innerhalb einer kollektion löschen
    // await Book.collection.drop();

    // eine kollektion löschen wir mit 
    await db.dropCollection('books');

    // Da eine leere datenbank nicht angezeigt wird, können wir jetzt nur schwer testen aber eine komplette datenbank löschen wir mit der methode .dropDatabase();
    // await db.dropDatabase();

    // um die verbindung zur mongodDB zu schließen, nutzen wir den .close(); befehl.
    await mongoose.connection.close();
}

run();
