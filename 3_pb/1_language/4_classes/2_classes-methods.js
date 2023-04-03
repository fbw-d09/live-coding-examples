console.clear();

/**
 * @class User
 */
class User
{
    // properties mit einem # davor sind außerhalb der klasse nicht zugänglich (in Cx  = private/public)

    #firstName; // firstName ist ein private property
    #lastName;  // lastName ist ein private property
    fullName;   // fullName ist eine public property

    constructor(firstName, lastName)
    {
        this.#firstName = firstName;
        this.#lastName = lastName;

        this.fullName = this.#createFullName();
    }

    // Um auf unsere werte zuzugreifen, können wir in javascript zwar einfach die werte wie bei objekten rausholen, aber sauberer sind methoden fürs editieren, und anzeigen von werten. Javascript besitzt, wie andere sprachen auch, dafür so genannte "Getter/Setter" methoden.

    // Vornamen ausgeben (getter)
    get firstName()
    {
        return this.#firstName;
    }

    // Vorname ausgeben (methode)
    getFirstName()
    {
        return this.#firstName;
    }

    // Vorname ändern (setter)
    set firstName(input)
    {
        this.#firstName = input;
    }

    // Vorname ändern (methode)
    setFirstName(input)
    {
        this.#firstName = input;

        this.fullName = this.#createFullName();
    }

    // private methode
    #createFullName()
    {
        return this.#firstName + " " + this.#lastName;
    }

    getFullName()
    {
        return this.fullName;
    }
}

const testUser = new User("Max", "Mustermann");
console.log(testUser);

// aufruf des getters
console.log(testUser.firstName);

// aufruf der methode.
console.log(testUser.getFirstName());

// aufruf des setters:
testUser.firstName = "Katrin";

// aufruf der methode:
testUser.setFirstName("Herbert");

console.log(testUser.getFullName());

console.log("==========================================================");

/**
 * @class Fruit
 * Basisklasse für früchte
 * @example
 * const Apple = new Fruit("Apple", "Red", "Sweet");
 */
class Fruit
{
    /**
     * @constructor
     * @param { string } name
     * @param { string } color
     * @param { string } taste
     */
    constructor(name, color, taste)
    {
        this.name = name;
        this.color = color;
        this.taste = taste;
    }

    /**
     * @method getName();
     * @description Gibt den namen der frucht zurück
     * @returns { string }
     */
    getName()
    {
        return this.name;
    }

    /**
     * @method setName();
     * @description Legt den namen der frucht fest
     * @param { string } input
     */
    setName(input)
    {
        this.name = input;
    }

    getColor()
    {
        return this.color;
    }

    setColor(input)
    {
        this.color = input;
    }

    getTaste()
    {
        return this.taste;
    }

    setTaste(input)
    {
        this.taste = input;
    }

    /**
     * @method eat();
     * @description Frisst die frucht
     * @returns { string }
     */
    eat()
    {
        return `This ${ this.color } ${ this.name } is very ${ this.taste }!`;
    }
}

const apple = new Fruit("Apple", "Red", "Sweet");
console.log(apple);
console.log(apple.getName());

apple.setColor("Green");

console.log(apple.getColor());

console.log(apple.eat());

const lemon = new Fruit("Lemon", "Yellow", "Sour");

console.log(lemon.eat());

lemon.setName("Citrus");
console.log(lemon.eat());
