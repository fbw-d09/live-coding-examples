// Wir importieren lowDB nachdem wir es mit dem kommando "npm install lowdb@1" installiert haben:
const low = require('lowdb');

// zum synchronisieren der json datei, die die datenbank beinhaltet importieren wir einen sogenannten adapter, dieser nennt sich FileSync und sorgt dafür das das schreiben von inhalten in die datenbank synchron abläuft, und so die verschiedenen befehle sich nicht gegenseitig im weg stehen:
const FileSync = require('lowdb/adapters/FileSync');

// wir erstellen einen adapter und geben an wie die datei heißen soll. in der wir die datenbank schreiben wollen:
const adapter = new FileSync('db.json');

// wir initialisieren eine neue instanz von lowDB, zusammen mit dem adapter, auf der variable db:
const db = low(adapter);

// jetzt erstellt lowdb die datei in unserem projekt.

// wir erstellen optional ein objekt mit default werten für unsere datenbank:
const defaultData = {
    // der oberste eintrag hier ist eine sogenannte kollektion, in kollektionen werden daten innerhalb einer datenbank gesammtl, wie tabellen in SQL. Logische kollektionen wären zum beispiel: "users", "categories" oder "producs", sie werden immer in der mehrzahl geschrieben
    cars: [
        {
            id: 1,
            brand: "Ford",
            name: "Kuga",
            type: "suv",
            year: 2019
        },
        {
            id: 2,
            brand: "Ford",
            name: "Mustang",
            type: "suv",
            year: 1967
        }
    ]
}

// wir können unsere default einträge jetzt mit der methode db.defaults(); hinzufügen, und mit der methode .write(); in die datenbank schreiben. wir können unser ergebnis sofort in der db.json sehen:
db.defaults(defaultData).write();

// jetzt haben wir alles um unsere datenbank laufen zu lassen, und können nun die daten hinzufügen, entfernen oder verändern.

// EINTRAG ERSTELLEN:

// damit wir nicht immer wieder den gleichen eintrag erstellen wenn node neu startet, packen wir unsere zugriffsmethoden zu testzwecken in funkitionen, die wir beim testen aufrufen können. Da wir bei express diese aktionen in routen legen, werden sie auch nur ein einziges mal ausgeführt, was hier nicht der fall ist.

const create = ({ id, brand, name, type, year }) =>
{
    // wir erstellen also ein objekt mit den gewünschten werten:
    const newCar = {
        id, 
        brand, 
        name, 
        type, 
        year
    };

    // wir holen uns die kollektion "cars" mit der methode .get(); und pushen das neue objekt dort hinein, am ende nutzen wir die methode .write(); um die daten in die datenbank zu schreiben:
    db.get("cars").push(newCar).write();

    // damit wir sicher gehen können, das alles geklappt hat, auch ohne das wir die datenbankdatei offen hätten, können wir ausserdem eine meldung in der konsole ausgeben:
    console.log("Eintrag erstellt:", newCar);
}

// wir führen die funktion create aus, und sehen den neuen eintrag in der db.json datei, und in der konsole:
// create({
//     id: 4,
//     brand: "Ford",
//     name: "Puma",
//     type: "suv",
//     year: 2023
// });

// ALLE EINTRÄGE AUSLESEN:

// um alle einträge anzeigen zu lassen, nutzen wir die methode .get();, sie holt sich die kollektion, und mit der methode .value(); zeigen wir die werte in der kollektion an.
const read = () =>
{
    //  mit .get(); und .value(); bekommen wir die werte aller einträge zurück:
    const allCars = db.get("cars").value();

    console.log(allCars);
};

// wir führen die funktion read(); aus, und sehen alle einträge im terminal:
read();

// EINEN EINZELNEN EINTRAG LESEN:
const readOne = (id) =>
{
    // wir nutzen die methode .find(); um einen spezifischen eintrag auszugeben:
    const selectedCar = db.get("cars").find({ id }).value();

    console.log("EINZELNDER EINTRAG:", selectedCar);

    // MONGO: Car.find({ id }, (err, cars) => { ... });
}

readOne(3);

// MEHRERE EINTRÄGE FINDEN:
const readMore = (brand) =>
{
    // um mehrere ergebnisse anhand bestimmter inhalte zu finden, nutzen wir die methode .filter();
    const searchedCars = db.get("cars").filter({ brand, year: 2019 }).value();

    // jetzt geben wir das array mit den gefundenen einträgen zurück
    console.log("SEARCHED CARS:", searchedCars);

    // MONGO: Car.find({}, (err, cars) => { console.log(cars) });
}

readMore("Ford");

// EINEN EINTRAG UPDATEN:
const update = (id, year) =>
{
    // wir holen uns in der kollektion cars den richtigen eintrag:
    db.get("cars").find({ id })
    // dann nutzen wir die methode .assign(); um die neuen daten einzufügen, und .write(); um die daten in die datenbank zu schreiben:
    .assign({ year }).write();

    console.log("..das hat geklappt");

    // MONGO: Car.findOneAndUpdate({ _id: } (err, car) => {}
}

update(4, 1999);

// EINEN EINTRAG LÖSCHEN:
const remove = (id) =>
{
    // um einen eintrag zu löschen, nutzen wir wieder .get(); um die kollektion zu bekommen, danach nutzen wir die methode .remove(); der wir den wert des zu löschenden eintrages übergeben, der gefunden werden soll.
    db.get("cars").remove({ id }).write();

    // wenn wir jetzt in der datenbank datei nachsehen, werden wir bemerken, das der eintrag gelöscht wurde.

    // MONGO: Car.deleteOne({ id }, (err) => {});
}

remove(1);

/*
    diese befehle würde man in expressJS in der sogenannten CRUD APPLICATION bauen, mit der man auf datenbanken oder apis zugreift
    C = CREATE(POST)        - app.post();
    R = READ(GET)           - app.get();
    U = UPDATE(PUT)         - app.put();
    D = DELETE(DELETE)      - app.delete();
*/
