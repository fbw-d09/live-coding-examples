console.clear();

// Task 1 - Key Value Pairs

const profileData =
{
    firstName: "Rick",
    lastName: "Reich",
    age: 38,
    city: "Dortmund"
}

// Task 2 - Object method

profileData.details = function () 
{
    return `${ this.firstName } ${ this.lastName } is ${ this.age } years old and lives in ${ this.city }`;
}

console.log(profileData.details());

// Task 3 - Word Converter

const wordConverter = (words, suffix) =>
{
    return words.map((word) => word + suffix);
}

let adjectives = ["smart", "kind", "sweet", "small", "clear"];

console.log(wordConverter(adjectives, "er"));

// Task 4 - Hour Calculation

const calculateHours = (hours) =>
{
    return hours.reduce((acc, curr) =>
    {
        return acc + curr.end - curr.start;
    }, 0);
}

const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
];

console.log(calculateHours(hourTracking));

// Task 5 - Classes

class Course
{
    constructor(teacher, type, number)
    {
        this.teacher = teacher;
        this.type = type;
        this.number = number;
    }

    spaceNeeded()
    {
        return this.number * 2;
    }

    details()
    {
        return `This is a ${ this.type } course thought by ${ this.teacher }. There are ${ this.number } of students taking the course.`
    }
}

const course = new Course("Frederik Rick Reich", "Web Development", 23);
console.log(course);
console.log(course.spaceNeeded());
console.log(course.details());

// Task 6 - Input validation

const validPin = (pin) =>
{
    for (const char of pin)
    {
        if(Number.isNaN(Number(char)))
        {
            return false;
        }
    }

    if(pin.length !== 4)
    {
        return false;
    }

    if(pin[3] % 2 !== 0)
    {
        return false;
    }

    if(pin[0] === pin[3])
    {
        return false;
    }

    return true;
}

console.log(validPin("1234")); 
console.log(validPin("1235")); // last number should be even
console.log(validPin("12ww")); // should contain only numbers
console.log(validPin("12.4")); // should contain only numbers
console.log(validPin("-234")); // should contain only numbers
console.log(validPin("12345")); // should be 4 digits
console.log(validPin("2222")); // first and last digit should be different
console.log(validPin("2224"));
