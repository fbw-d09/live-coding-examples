// erweitere query methoden geben uns außer unseren bekannten filtern, die möglichkeit bestimmte sortierungen, oder vergleiche auszuführen. Um nicht nur die daten zu bekommen, die wir haben wollen, sondern auch WIE wir sie haben wollen.

const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/query-advanced')
.then(() => console.log("Datenbank verbunden"))
.catch(err => { throw err });

// als erstes erstellen wir ein schema und modell und ein paar einträge zum testen:
const carSchema = new mongoose.Schema({
    brand: String,
    name: String,
    year: Number,
    doors: Number
},
{
    timestamps: true
});

const Car = mongoose.model('Car', carSchema, 'cars');

// wir schreiben eine funktion mit der wir fahrzeuge erstellen:
const createCar = async (brand, name, year, doors) => 
{
    const newCar = new Car({
        brand, 
        name,
        year,
        doors
    });

    const car = await newCar.save();

    console.log(car);
};

// Wir erstellen ein paar Fahrzeuge, um unsere datenbank zu füllen:
// createCar('Ford', 'Kuga', 2019, 5);
// createCar('Ford', 'Puma', 2023, 5);
// createCar('Ford', 'Mustang', 2022, 2);
// createCar('Ford', 'Mustang', 1969, 2);
// createCar('Opel', 'Omega', 1992, 4);
// createCar('Jeep', 'Renegade', 2015, 5);

// Wir können unsere einträge sortieren, hierfür ist es uns erlaubt jegliche felder zu nehmen. Strings werden nach buchstabend sortiert, Booleans werden nach wahrheitswert sortiert, Nummern nach zahl und datumsfelder nach zeit.

const listCarsSorted = async () =>
{
    // Wir geben in .sort(); das feld an, nac hdem wir sortieren wollen, und die reihenfolge, also aufwärts oder abwärts.

    /**
     * angeben können wir diese reihenfolge auf verschiedene arten. Wir können folgende eingaben nutzen:
     * 
     * aufsteigend:
     * - asc
     * - ascending
     * - 1
     * 
     * absteigend:
     * - desc
     * - descending
     * - -1
     */

    // wir nutzen "ascending" und "descending" für unser beispiel.

    // als beispiel nehmen wir das baujahr unserer fahrzeuge und sortieren sie aufsteigend:
            // reihenfolge: feld nach dem wir sortieren wollen: reihenfolge
    // const allCars = await Car.find().sort({ year: "ascending" });
    // wie wir sehen, sind alle fahrzeuge von neu zu alt, oder von alt zu neu sortiert, wie wir wollen.

    // natürlich können wir auch nach erstellungsdatum sortieren, dafür nutzen wir das feld createdAt aus dem timestamp:
    // const allCars = await Car.find().sort({ createdAt: "ascending" });
    // wir sehen die fahrzeuge jetzt in der reihenfolge, in der sie in die datenbank geschrieben wurden.

    // es ist auch möglich nach mehreren kriterien zu sortieren, und nach reihenfolge einzugrenzen
    const allCars = await Car.find().sort({ brand: "ascending", doors: "descending" });

    console.log(allCars);
}

// wir führen die funktion aus:
// listCarsSorted();

// wir haben in mongoose auch die möglichkiet zu sagen, wir wollen nur eine bestimmte anzahl von ergebnissen haben:
const listOnlyTwoCars = async () =>
{
    // mit der methode .limit(); geben wir die menge an, die wir zurück bekommen wollen. hierbei bekommen wir immer die ersten einträge, die gefunden wurden
    const twoCars = await Car.find().limit(2);

    console.log(twoCars);
}

// wenn wir die funktion ausführen, sehen wir, das wir nur 2 ergebnisse zurück bekommen, dies sind die ersten beiden die die datenverbindung findet, da wir nicht vorher sortiert haben oder andere informationen übergeben haben.
// listOnlyTwoCars();

// eine bestimmte anzahl von dokumenten, AB eines gewissen eintrages bekommen wir mit der methode .skip(); - Dies ist besonders hilfreich in zusammenarbeit mit .limit(); da wir so eine pagination erstellen können, also zum beispiel nur eine bestimmte anzahl von dokumenten zurückliefern , die wir gerade anzeigen wollen, ab einem bestimmten punkt.

// als beispiel schreiben wir deshalb eine funktion, in der wir sowohl den startpunkt, wie auch die menge der dokumente eingeben können, also inetwa so "gib mir ab eintrag 50 bitte 10 weitere einträge".

const skipSomeCars = async (start, amount) =>
{
    const cars = await Car.find().skip(start).limit(amount);

    console.log(cars);
}

// wenn wir die funktion jetzt ausführen, bekommen wir die menge zurück die wir wollen, gestartet an dem punkt den wir wollen.
// skipSomeCars(2, 3);

// geben wir an das wir 5 dokumente überspringen wollen, und mehr als ein dokument anzeigen wollen, aber nur 6 haben, wird nur eines zurückgeliefert
// skipSomeCars(5, 2);

// Erweiterte filter:

// mongoose hat ein paar hübsche methoden um filter zu definieren, die spezfische werte ansprechen, so können wir zum beispiel sehen welche dokumente eine gewisse menge von etwas, oder weniger von etwas beinhalten.

// diese filtermethoden sind sehr ähnlich zu denen die wir kennen, sie werden nur ein wenig anders geschrieben. Wir geben hier an "wo" wir etwas suchen, also bei welchem schlüssel, und geben dann an, wie der  zustand des wertes sein soll. Also ob der wert "gleich" unserer suche sein soll "größer" unserer suche sein soll oder kleiner ... oder ob es ihn überhaupt gibt.

// mit der methode .where(); geben wir den schlüssel an, also "wo" wir suchen wollen, und mit der methode .equals(); sagen wir, der wert soll "gleich" dem sein, den wir angeben. Also sagen wir praktisch "in der kollektion X gib uns alles aus was beim schlüssel Y dem wert Z gleicht".
const listAllFords = async () =>
{
    // wir schreiben das ganze praktisch als englischen satz auf:

    // in der kollektion Car, wolllen wir alle ergebnisse haben wo...
    const allFords = await Car
    // ... der schlüssel "brand" ...
    .where('brand')
    // ... dem wert "Ford" gleicht
    .equals('Ford');

    console.log(allFords);

    // wir können das auch kurz schreiben: const allFords = await Car.where('brand', 'Ford');
}

// listAllFords();

// mit der methode .lt(); kurz für "less than" geben wir an, das ein wert "weniger" sein soll, als das, was wir angeben.
const listCarsWithLessThanFourDoors = async () =>
{
    // in der kollektion Car, wollen wir alle ergebnisse haben wo...
    const allCarsWithLessThanFourDoors = await Car
    // ... der wert vom schlüssel "doors" ...
    .where('doors')
    // ... weniger als 4 beträgt:
    .lt(4);

    console.log(allCarsWithLessThanFourDoors);
}

// listCarsWithLessThanFourDoors();

// das ganze geht mit der methode .gt(); für "greater than" auch andersherum, wir können also sagen, wir wollen alle ergebnisse haben, wo der gesuchte wert "höher" ist, als die angabe.

const listAllCarsWithMoreThanFourDoors = async () =>
{
    // in der kollektion Cars, wollen wir alle ergebnisse haben wo ...
    const allCarsWithMoreThanFourDoors = await Car
    // ... der wert vom schlüssel "doors" ...
    .where('doors')
    // ... mehr als 4 beträgt:
    .gt(4);

    console.log(allCarsWithMoreThanFourDoors);
}

// listAllCarsWithMoreThanFourDoors();

// wir können auch mehrere daten angeben, wenn wir zum beispiel mehrere dokumente mit verschiedenen werten haben wollen, zum beispiel um die daten mehrerer spezifischer personen zu finden. Hierfür nutzen wir die methode .in(); und übergeben ein Array.
const listAllFordsAndJeeps = async () => 
{
    // in der kollektion Cars, wollen wir alle ergebnisse sehen wo ...
    const allFordsAndJeeps = await Car
    // ... der wert vom schlüssel "brand" ...
    .where('brand')
    // ... "Ford" ODER "Jeep" beträgt:
    .in([ "Ford", "Jeep" ])
    // wir können die anfrage auch noch weiter chainen, indem wir .where(); aufrufen, gefolgt von einem weiteren suchwert
    .where('doors')
    .equals(5);

    console.log(allFordsAndJeeps);
}

listAllFordsAndJeeps();

/**
 * Es gibt noch einige weitere methoden, mit denen wir einträge suchen können, die komplette liste ist:
 * - .lt();             = wert sollte kleiner sein als die angabe               (is less than)
 * - .gt();             = wert sollte größer sein als die angabe                (is greater than)
 * - .lte();            = wert sollte kleiner oder gleich der angabe sein       (is less than/equal)
 * - .gte();            = wert sollte größer oder gleich der angabe sein        (is great than/equal)
 * - .in();             = wert innerhalb des arrays sollte existieren           (is in array)
 * - .nin();            = wert innerhalb des arrays sollte NICHT existieren     (is not in array)
 * - .equal();          = wert sollte gleich der angabe sein                    (is equal)
 * - .ne();             = wert sollte NICHT gleich der angabe sein              (is not equal)
 * - .regex();          = wert soll ein regex string sein                       (is regex)
 */
