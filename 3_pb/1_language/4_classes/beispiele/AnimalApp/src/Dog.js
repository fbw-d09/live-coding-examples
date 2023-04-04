const Animal = require('./Animal');

class Dog extends Animal
{
    constructor(name, species)
    {
        super(name, species);
    }

    bark()
    {
        return `${ this.name } won\'t stop barking`;
    }
}

module.exports = Dog;
