// Wenn wir objektorientiert arbeiten, hat eine datei immer genau eine klasse als inhalt, die datei heisst genau wie die klasse, und wird dadurch auch großgeschrieben.

class Animal
{
    name;
    species;

    constructor(name, species)
    {
        this.name = name;
        this.species = species;
    }

    get animalName()
    {
        return this.name;
    }

    eat(meal = 'Cheesecake')
    {
        return `${ this.name } is a ${ this.species } and is eating a ${ meal }.`
    }

    sleep()
    {
        return `${ this.name } is sleeping.`;
    }
}

// Wir exportieren die klasse Animal als JavaScript Modul mit dem befehl module.exports:
module.exports = Animal;
