// wir importieren die Klasse Animal als JavaScript Modul mit dem befehl "require", wenn wir mit nodeJs in ES6, oder React, oder typescript arbeiten, importieren wir mit dem befehl "import".

const Animal = require('./Animal.js');

class Bird extends Animal
{
    canFly;

    constructor(name, species, canFly)
    {
        // wir benötigen das keyword super, um auf die properties der elternklasse zuzugreifen
        super(name, species);

        this.canFly = canFly;
    }

    fly()
    {
        return `${ this.name } ${ this.canFly ? 'can fly' : 'can\'t fly'}.`;
    }

    sleep()
    {
        // mit super greifen wir auf die methoden und werte der elternklasse zu, wir können methoden und werte aber auch einfach uberschreiben.
        // super.sleep();
        return `${ this.name } is dreaming.`;
    }
}

module.exports = Bird;
