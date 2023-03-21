// Conditional Algorithms

// 1. Los or New
const nameOfCity = (city) =>
{
    // DCI lösung:
    // const firstThreeChars = city.substring(0, 3).toLowerCase();

    // if(firstThreeChars === "new" || firstThreeChars === "los")
    // {
    //     return city;
    // }
    // else
    // {
    //     return 'The city name does not begin with Los or New';
    // }

    // IMAD lösung (refractored):
    const selectedCity = city.toLowerCase();
    
    if(selectedCity.startsWith('los') || selectedCity.startsWith('new')) return city;
    
    return 'The city name does not begin with Los or New';
}

console.log(nameOfCity("Dortmund"));
console.log(nameOfCity("New York"));
console.log(nameOfCity('Los Angeles'));

// 2. isDivisible?

const isDivisible = (num) =>
{
    // DCI lösung:
    // if(0)
    // {
    //     return false;
    // }
    // else if(num % 100 === 0)
    // {
    //     return true;
    // }

    // return false;

    // IMADS lösung (refactored):
    return num === 0 ? false : num % 100 === 0;
}

console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));

// 3. What's the weather?
const isRaining = (raining) => raining
    ? 
    'wet day, you need an umbrella'
    : 
    'dry day, leave your umbrella at home';

console.log(isRaining(true));
console.log(isRaining(false));

// Loops

// 1. Sequence
const geometricalSequence = (count) =>
{
    // DCI lösung:
    if(count < 1) return 'invalid input';

    // const sequence = [];

    // for (let i = 0; i < count; i++) {
    //     sequence.push(Math.pow(2, i));
    // }

    // return sequence.join(' ');

    // JANAS lösung:
    let sequence = "";

    for (let i = 0; i < count; i++) {
        sequence += 2**i + " ";
    }

    return sequence.trim();
}

console.log(geometricalSequence(5));
console.log(geometricalSequence(10));

// 2. Multiples
const multiplesOfThree = (count) =>
{
    // DCI lösung:
    if(count < 1) return 'Invalid input';

    const multiples = [];

    for (let i = 1; i <= count; i++) {
        multiples.push(3 * i); 
    }

    return multiples.join(' ');
}

console.log(multiplesOfThree(5));
console.log(multiplesOfThree(10));

// Math

// 1. You've got the power
const powerOf = (num) => Math.pow(num, num);

console.log(powerOf(3));
console.log(powerOf(4));

// Problem Solving

// 1. How many?
const vowelCount = (str) =>
{
    // // DCI lösung:
    // const vowels = ['a', 'e', 'i', 'o', 'u'];
    // const strLowerCase = str.toLowerCase();
    // let vowelCount = 0;

    // for (let i = 0; i < str.length; i++) {
    //     if(vowels.includes(strLowerCase[i]))
    //     {
    //         vowelCount++;
    //     }
    // }

    // return vowelCount;

    // IMADS lösung:
    // const letters = str.split('');
    // let counter = 0;
    // for( let i = 0 ; i < letters.length; i++ )
    // {
    //     if (
    //         letters[i].toLowerCase() =='i' ||
    //         letters[i].toLowerCase() =='a' ||
    //         letters[i].toLowerCase() =='o' ||
    //         letters[i].toLowerCase() =='u' ||
    //         letters[i].toLowerCase() =='e'
    //     ) {
    //         counter++;
    //     }
    // }
    // return counter;

    // BERAT/QUAN'S lösung (regex):
    // return str.match(/[aeiou]/ig)?.length || 0;

    // BENNIS lösung:
    let vowel = "aAeEiIoOuU";

    let vCount = 0;

    for (let i = 0; i < str.length; i++) {
        if(vowel.indexOf(str[i]) !== -1)
        {
            vCount += 1;
        }
    }

    return vCount;
}

console.log(vowelCount('Hello'));
console.log(vowelCount('test'));
console.log(vowelCount('fbw'));
