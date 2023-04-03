console.clear();
/**
 * Klassen
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes
 * JavaScript Klassen wurden 2015 eingeführt und sind im gewissen sinne eine erweiterung, oder eine art Prototyp für Objekte um sie zu erstellen.
 * 
 * Was genau sind Klassen?
 * Klassen sind in der Objektorientierten Programmierung ein Bauplan, wenn man eine reihe von ähnlichen objekten oder inhalten benötigt.
 * Wenn wir zum beispiel die klasse Auto hätten, und das auto die eigenschaften farbe, marke, und ps hätte, können wir mit hilfe eines sogenannten constructors eine klasse immer wieder verwenden um ein neues Fahrzeug mit diesen eigeschaften zu erstellen. Im gegensatz zu objekten, wo wir ein fahrzeug anlegen und dann versuchen müssen, andere fahrzeuge ähnliche mit eigenschaften/properties zu erstellen.
 */

// Vergleich objekte und Klassen:
const car1 = 
{
    brand: "Ford",
    model: "Kuga",
    color: "RubyRed",
    horsePower: 283
}

const car2 =
{
    brand: "Ford",
    model: "Mustang",
    color: "Black",
    horsePower: 280
}

console.log("Object 1:", car1);
console.log("Object 2:", car2);

/**
 * @class Car
 */
// Einen klassenkonstuktor leiten wir ein indem wir das keyword "class" nutzen, gefolgt vom gewünschten klassennamen, der Immer groß geschrieben wird.
class Car
{
    // wir erstellen die gewünschten variablen. ohne var, let oder const davor
    brand;
    model;
    color;
    horsePower;

    /**
     * @constuctor
     * Der constructor ist eine spezielle art von methode, die benutzt wird um klassen zu intialisieren, und existiert ein mal pro klasse.
     */
    constructor(brand, model, color, ps = 25)
    {
        // mit dem this keyword, greifen wir auf die variablen innerhalb einer klasse zu:
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.horsePower = ps;
    }
}

// mit dem new keyword erstellen wir eine kopie der klasse mit den werten die wir eingeben:

const car3 = new Car("Bentley", "Continental GT", "White", 680);
const car4 = new Car("Volkswagen", "Käfer", "Yellow", 55);
const car5 = new Car("Mercedes-Benz", "Motorwagen", "Silver");

console.log("Auto erstellt mit Klasse 1:", car3);
console.log("Auto erstellt mit Klasse 2:", car4);
console.log("Auto erstellt mit Klasse 1:", car5);

console.log(car3.brand);

car5.horsePower = 12;
console.log(car5);
