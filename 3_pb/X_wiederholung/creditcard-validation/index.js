console.clear();

const validateCreditCard = (num) => 
{
    const checkNum = num.split("-").join("");

    isNumbersDifferent(checkNum);

    return (
        isLastNumberEven(checkNum) + 
        isOnlyNumbers(checkNum) + 
        isSpecifiedLength(checkNum) + 
        isNumbersDifferent(checkNum) +
        isMinSpecifiedSum(checkNum) === 5
    );
}

const isLastNumberEven = (num) =>
{
    return num[num.length - 1] % 2 === 0 ? true : false; 
}

const isOnlyNumbers = (num) => 
{
    return !isNaN(parseInt(num));
}

const isSpecifiedLength = (num, amount = 16) =>
{
    return num.length === amount;
}

const isMinSpecifiedSum = (num, sum = 16) =>
{
    let result = 0;

    for (let i = 0; i < num.length; i++)
    {
        result += parseInt(num[i]);
    }

    return result > sum;
}

const isNumbersDifferent = (num) =>
{
    let count = 0;

    for (let i = 0; i < num.length; i++)
    {
        if (num[0] !== num[i])
        {
            count++;
            break;
        }
    }

    return count > 0;
}

console.log(validateCreditCard('5500-6503-0027-4774'));