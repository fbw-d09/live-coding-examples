/* Basics */

// Explizit typisierte variablen

// variable : typ
// tsc hat anhand der typendeklaration die information bekommen, das es sich hierbei um eine nummer handelt.
let age : number = 42;
age = 18;
// age = "Hallo Welt"; FEHLER: eine variable des types "number" kann keinen wert des types "string" enthalten.

// Implizit typisierte variable
// tsc hat anhand des wertes der variable erkannt, das es sich hierbei um einen string handelt.
let text = "Hallo Welt";
// text = 115; FEHLER: eine variable des types "string" kann keinen wert des types "number enthalten".

let username : string = "Hansi";
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
let foo : number = 42;

// union
let benutzerId : string | number = 12345;
benutzerId = "user12345";

// enum
enum Roles 
{
    ADMIN,
    EDITOR,
    USER
}

const myRole : Roles = Roles.ADMIN;
console.log(myRole);

// Objekte

const benutzer = {
    id: 0,
    name: "Rick Reich"
}

// festgelegte datentypen auf einem objekt
const appBenutzer : { id: number, name: string } =
{
    id: 1,
    name: "Rick Reich"
}

// benutzerdefinierter typ auf einem objekt
type Haustier = {
    id?:number, // ein fragezeichen bei einer typendeklaration bedeutet "optional"
    name: string
}

const pebbles : Haustier = { name: "Pebbles" }
console.log(pebbles.name);

/* Funktionen */

// typen gelten auch für die funktionsparameter und rückgabewerte
function getHaustier(id: number, name?: string) : Haustier
{
    return pebbles;
}
// am ende einer funktion, geben wir nach dem doppelpunkt an, welchen datentyp der return hat
function add(x: number, y: number) : number
{
    return x + y;
}

// Eine funktion ohne return, ist vom datentyp void
function irgendwas(message: string) : void
{
    console.log(message);
}
irgendwas("Hallo Welt");

/* Klassen */

interface iUser 
{
    id: number,
    name: string,
    age: number
}

class UserProfile
{
    // für die vordeklaration von werten in einer klasse können wir private oder public benutzen.
    public id: number;
    public name: string;
    age: number

    constructor(id: number | string, name: string, age: number)
    {
        this.id = Number(id);
        this.name = name;
        this.age = age;
    }
}

const benni : iUser = new UserProfile("12345", "Benni", 35);
