console.clear();

console.log("\nAUFGABE 1: GREATER NUMBERS");

const findGreatest = (arrOfNumbers, num) =>
{
    // DCI LÖSUNG:
    // const greaterElements = [];

    // for (let i = 0; i < arrOfNumbers.length; i++)
    // {
    //     if(arrOfNumbers[i] > num)
    //     {
    //         greaterElements.push(arrOfNumbers[i]);
    //     }

        // kurzschreibweise:
        // arrOfNumbers[i] > num && greaterElements.push(arrOfNumbers[i]);
    // }

//    return greaterElements.join(", ");

    // HANSI LÖSUNG:
    const greaterElements = arrOfNumbers.filter((val) =>
    {
        return val > num;
    });
    
    return greaterElements.join(', ');
}

console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

console.log("\nAUFGABE 2: THE LONGEST WORD");

const getLongestWord = (str) =>
{
    // DCI LÖSUNG:
    // const words = str.split(' ');
    
    // let maxLength = 0;
    // let longestWord = "";

    // for (let i = 0; i < words.length; i++)
    // {
    //     if(words[i].length > maxLength)
    //     {
    //         // console.log("langes wort:", words[i]);
    //         maxLength = words[i].length;
    //         longestWord = words[i];
    //     }
    //     // else
    //     // {
    //     //     console.log("kurzes wort:", words[i]);
    //     // }
    // }

    // return longestWord;

    // JANA'S LÖSUNG:
    // let result = "";
    // const words = str.split(' ');

    // for (let i = 0; i < words.length; i++)
    // {
    //     if(words[i].length > result.length)
    //     {
    //         result = words[i];
    //     }
    // }

    // return result;
    
    // HANSI LÖSUNG
    const wordArray = str.split(" ");
    
    return wordArray.reduce((longestWord, currentWord) =>
    {
        if(currentWord.length > longestWord.length)
        {
            return currentWord;
        }

        return longestWord;

        // Berat lösung (Kurzschreibweise):
        // return currentWord.length > longestWord.length ? currentWord : longestWord;
    });
}

console.log(getLongestWord("this is a web development course"));

console.log("\nAUFGABE 3: REVERSE");

const reverseNum = (numToReverse) =>
{
    // DCI LÖSUNG:
    if(Number.isNaN(Number(numToReverse)))
    {
        return "ERR: PLEASE ENTER A NUMBER";
    }

    return parseFloat(
        numToReverse
            .toString()
            .split("")
            .reverse()
            .join("")
    ) * Math.sign(numToReverse);
    // Math.sign(); returns the positive or negative sign of the integer
}

console.log(reverseNum(123));
console.log(reverseNum("abc"));
console.log(reverseNum("123"));
console.log(reverseNum(-123.456));

console.log("\nAUFGABE 4: AEIOU VOWELS");

const vowelCounter = (str) =>
{
    // DCI LÖSUNG:
    // const vowelArr = ["a", "e", "i", "o", "u"];

    // let counter = 0;

    // for (let i = 0; i < str.length; i++)
    // {
    //     if(vowelArr.includes(str[i]))
    //     {
    //         counter++;
    //     }
    // }

    // return counter;

    // MELANIES LÖSUNG (MIT UMUTS REFACTORING)
    return str.match(/[aeiou]/gi)?.length || 0;
}

console.log(vowelCounter("this is a string")); // sollte 4 sein.

console.log("\nAUFGABE 5: MISSING NUMBER");

const findMissingNum = (incompleteArray) =>
{
    // DCI LÖSUNG:
    // incompleteArray.push(0);

    // let addUpArray = 0;
    // let total = 0;

    // for (let i = 0; i < incompleteArray.length; i++)
    // {
    //     addUpArray += incompleteArray[i];
    //     total += (i + 1);
    // }

    // const missingNum = total - addUpArray;
    // return missingNum;

    // YAN'S LÖSUNG (MIT UMUTS REFACTORING)
    // const result = [];

    // for (let i = 1; i <= 10; i++)
    // {
    //     if(!incompleteArray.includes(i))
    //     {
    //         result.push(i);
    //     }
    // }

    // return result[0];

    // UMUTS LÖSUNG:
    return incompleteArray
        .sort((a, b) => a - b)
        .filter((el, ind, arr) => arr[ind + 1] - el > 1)[0] + 1 || 10;
}

console.log(findMissingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // 5
console.log(findMissingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); // 10
console.log(findMissingNum([2, 1, 3, 4, 6, 7, 8])); // 5

console.log("\nAUFGABE 6: CUBED");

const sumOfCubes = (arrayOfNumbers) =>
{
    // DCI LÖSUNG:
    // let sum = 0;

    // for (let i = 0; i < arrayOfNumbers.length; i++)
    // {
    //     const cube = arrayOfNumbers[i] ** 3;
    //     sum += cube;
    // }

    // return sum;

    // YAN'S LÖSUNG:
    return arrayOfNumbers.reduce((acc, val) =>
    {
        return acc += val ** 3;
    }, 0);
}

console.log(sumOfCubes([1, 5, 9])); // 855
console.log(sumOfCubes([2])); // 8
console.log(sumOfCubes([])); // 0

console.log("\nAUFGABE 7: DICTIONARY");

const dictionary = (initialStr, arrayOfWords) =>
{
    // DCI LÖSUNG:
    // const initialStrLower = initialStr.toLowerCase();

    // const filteredArr = [];

    // for (let i = 0; i < arrayOfWords.length; i++)
    // {
    //     let arrayOfWordsLower = arrayOfWords[i].toLowerCase();

    //     if(arrayOfWordsLower.includes(initialStrLower))
    //     {
    //         filteredArr.push(arrayOfWordsLower);
    //     }
    // }

    // return filteredArr;

    // MELANIE'S LÖSUNG (MIT RICKS REFACTORING):
    // return arrayOfWords.filter((el) => el.startsWith(initialStr));

    // JULIUS LÖSUNG:
    // return arrayOfWords
    //     .filter((val) => val
    //         .substring(0, initialStr.length)
    //         .includes(initialStr)
    //     );

    // DIRK'S LÖSUNG:
    const result = [];

    for (let i = 0; i < arrayOfWords.length; i++)
    {
        if(arrayOfWords[i].substring(0, initialStr.length) === initialStr)
        {
            result.push(arrayOfWords[i]);
        }
    }

    return result;
};

console.log(dictionary("bu", ["button", "breakfast", "border"])); // ["button"]
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])); // ["triplet", "tries", "trip"]
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"])); // []

console.log("\nAUFGABE 8: EVEN NUMBER GENERATOR");

const getEvenNums = (cutOffNumber) =>
{
    // DCI LÖSUNG:
    // const evenNumsArr = [];

    // for (let i = 1; i <= cutOffNumber; i++)
    // {
    //     if(i % 2 === 0)
    //     {
    //         evenNumsArr.push(i);
    //     }
    // }

    // return evenNumsArr;

    // UMUT'S LÖSUNG:
    return [...Array(cutOffNumber).keys(), cutOffNumber]
        .slice(2)
        .filter((el) => el % 2 === 0);
}

console.log(getEvenNums(8)); // [2, 4, 6, 8]
console.log(getEvenNums(4)); // [2, 4]
console.log(getEvenNums(2)); // [2]

console.log("\nAUFGABE 9: ALPHABETICAL ORDER");

const alphabetise = (str) =>
{
    // DCI LÖSUNG:
    return str
        .toLowerCase()
        .split("")
        .sort()
        .join("");
}

console.log(alphabetise("webdev")); // bdeevw
