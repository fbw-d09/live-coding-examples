"use strict";
/* Basics */
// Explizit typisierte variablen
// variable : typ
// tsc hat anhand der typendeklaration die information bekommen, das es sich hierbei um eine nummer handelt.
let age = 42;
age = 18;
// age = "Hallo Welt"; FEHLER: eine variable des types "number" kann keinen wert des types "string" enthalten.
// Implizit typisierte variable
// tsc hat anhand des wertes der variable erkannt, das es sich hierbei um einen string handelt.
let text = "Hallo Welt";
// text = 115; FEHLER: eine variable des types "string" kann keinen wert des types "number enthalten".
let username = "Hansi";
username.toLowerCase();
// username.toFixed(2); // .toFixed(); ist KEINE methode von String.
// Typescript kann uns allgemein bei fehlererkennungen helfen
const isOldEnough = Math.random() * 20 < 18 ? false : true;
// if(isOldEnough !== true)
// {
//     console.log("nein");
// }
// else if(isOldEnough === false)
// {
//     console.log("ja");
// }
/* Coole Typen */
// normaler expliziter typ
let foo = 42;
// union
let benutzerId = 12345;
benutzerId = "user12345";
// enum
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["EDITOR"] = 1] = "EDITOR";
    Roles[Roles["USER"] = 2] = "USER";
})(Roles || (Roles = {}));
const myRole = Roles.ADMIN;
console.log(myRole);
// Objekte
const benutzer = {
    id: 0,
    name: "Rick Reich"
};
// festgelegte datentypen auf einem objekt
const appBenutzer = {
    id: 1,
    name: "Rick Reich"
};
const pebbles = { name: "Pebbles" };
console.log(pebbles.name);
/* Funktionen */
// typen gelten auch für die funktionsparameter und rückgabewerte
function getHaustier(id, name) {
    return pebbles;
}
// am ende einer funktion, geben wir nach dem doppelpunkt an, welchen datentyp der return hat
function add(x, y) {
    return x + y;
}
// Eine funktion ohne return, ist vom datentyp void
function irgendwas(message) {
    console.log(message);
}
irgendwas("Hallo Welt");
class UserProfile {
    constructor(id, name, age) {
        this.id = Number(id);
        this.name = name;
        this.age = age;
    }
}
const benni = new UserProfile("12345", "Benni", 35);
