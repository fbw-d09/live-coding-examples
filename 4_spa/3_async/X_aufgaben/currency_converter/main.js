const apiURL = 'https://api.coinbase.com/v2/prices';
const convertFromElement = document.getElementById('convert-from');
const convertToElement = document.getElementById('convert-to');
const formElement = document.getElementById('conversion-form');
const inputElement = document.getElementById('convert-count');
const outputElement = document.getElementById('output');
const inputAmountElement = document.getElementById('convert-count');

const convertCurrency = async () =>
{
    const data = await fetch(`${apiURL}/${convertFromElement.value}-${convertToElement.value}/spot`);
    const dataObject = await data.json();
    outputElement.value = (dataObject.data.amount * inputElement.value).toFixed(2);
}

formElement.onsubmit = (e) =>
{
    e.preventDefault();
    convertCurrency();
}