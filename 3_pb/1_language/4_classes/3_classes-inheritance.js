console.clear();

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

    eat(meal = "Cheesecake")
    {
        console.log(`${ this.name } is a ${ this.species } and is eating a ${ meal }!`);
    }

    sleep()
    {
        console.log(`${ this.name } is sleeping...`);
    }
}

const testAnimal = new Animal("Happy", "Fish");

console.log(testAnimal);
console.log("Name des tiers:", testAnimal.animalName);

testAnimal.eat("Pizza");
testAnimal.sleep();

console.log("=============================================================");

// Die klasse Bird erweitert sich durch die klasse Animal.

// Mit dem keyword "extends" geben wir an, welche klasse unsere klasse erweitert.
class Bird extends Animal
{
    canFly;

    constructor(name, species, canFly = true)
    {
        // wir benötigen das keyword super um die schlüssel aus der elternklasse bearbeiten zu können:
        super(name, species);

        this.canFly = canFly;
    }

    set birdName(input)
    {
        this.name = input;
    }

    fly() // methode fly
    {
        console.log(`${ this.name } ${ this.canFly ? 'can fly' : 'can\'t fly'}`);
    }

    sleep()
    {
        // mit super greifen wir auf die methoden und werte der elternklasse zu. wir können methoden und werte aber auch einfach überschreiben.
        // super.sleep();
        console.log(`${ this.name } is dreaming...`);
    }
}

const rudy = new Bird("Rudy", "Parrot", true);
console.log(rudy);
rudy.fly();
rudy.eat("Donut");
rudy.sleep();

console.log("=============================================================");

class Dog extends Animal
{
    constructor(name, species)
    {
        super(name, species)
    }

    bark()
    {
        console.log(`${ this.name } won\'t stop barking!`);
    }
}

const chico = new Dog('Chico', 'Dalmatiner');
console.log(chico);

chico.bark();

console.log("=============================================================");

const ingrid = new Bird("Ingrid", "Oestrich", false);

console.log(ingrid);

ingrid.birdName = "PrrrrPrrr";

console.log(ingrid);

const cutey = new Bird("Cutey", "Parrot", true);

console.log(cutey);

class Cat extends Animal
{
    constructor(name, species)
    {
        super(name, species);
    }

    meow()
    {
        console.log(`${ this.name } won\'t stop meowing!`);
    }
}

const pebbles = new Cat("Pebbles", "British Shorthair");

console.log("=============================================================");

class Vehicle
{
    wheels;
    name;
    color;

    constructor(name, color)
    {
        this.wheels = 2;
        this.name = name;
        this.color = color;
    }

    setWheels(wheels)
    {
        this.wheels = wheels;
    }

    drive()
    {
        return `our ${ this.color } ${ this.name } is driving`;
    }

    brake()
    {
        return `our ${ this.color } ${ this.name } is braking on its ${ this. wheels} wheels`;
    }
}

const testVehicle = new Vehicle('Bicycle', 'Red');

console.log(testVehicle);
console.log(testVehicle.drive());
console.log(testVehicle.brake());

class Car extends Vehicle
{
    horsePower;
    doors;
    hasTurbo;

    constructor(name, color, horsePower, doors, hasTurbo = false)
    {
        super(name, color); // constructor von klasse Vehicle{}
        this.horsePower = horsePower;
        this.doors = doors;
        this.hasTurbo = hasTurbo;

        super.setWheels(4); // methode .setWheels(); von klasse Vehicle{}
    }

    open() // neue methode
    {
        return `our ${ this.color } ${ this.name } is opening its ${ this.doors } doors`;
    }

    drive() // alte methode überschrieben
    {
        return `our ${ this.color } ${ this.name } is driving ${ this.hasTurbo ? 'and its turbo is kicking in' : 'very slowly'}`;
    }
}

const mustang = new Car('Mustang', 'TomatoRed', 280, 2, true);
console.log(mustang);
console.log(mustang.open());
console.log(mustang.brake());
console.log(mustang.drive());

console.log("=============================================================");

class Bicycle extends Vehicle
{
    isElectric;

    constructor(name, color, isElectric)
    {
        super(name, color);
        this.isElectric = isElectric;
    }

    drive() // überschriebene methode
    {
        return `our ${ this.color } ${ this.name } is driving ${ this.isElectric ? 'using an electric motor' : ''}`
    }
}

const miadsBike = new Bicycle('Bike', 'Lime', true);
console.log(miadsBike);
console.log(miadsBike.drive());
console.log(miadsBike.brake());

const sashasBike = new Bicycle('Citybike', 'Black', true);
console.log(sashasBike);
console.log(sashasBike.drive());
console.log(sashasBike.brake());

const janasBike = new Bicycle('Gravelbike', 'Brown', false);
console.log(janasBike);
console.log(janasBike.drive());
console.log(janasBike.brake());
