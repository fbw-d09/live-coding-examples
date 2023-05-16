const randToken = require('rand-token');
const Petals = require('petals');

const token = randToken.generate(16);

console.log(token);

const petals = new Petals(`{"firstName": "John", "lastName": "Doe"}`);

console.log(petals.JsonToXml());
