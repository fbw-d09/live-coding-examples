class Person
{
    constructor(name, age, country)
    {
        this.name = name;
        this.age = age;
        this.country = country;
    }
}

const me = new Person("Frederik", 38, "Germany");

class Person2
{
    constructor({ name, age, country } = {})
    {
        this.name = name || "DefaultMensch";
        this.age = age || 18;
        this.country = country || "Mars";
    }
}

const you = new Person2({
    age: 38,
    name: "Ich"
});
