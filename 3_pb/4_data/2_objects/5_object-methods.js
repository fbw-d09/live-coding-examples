console.clear();

const divider = (input) =>
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("Object Methoden");

divider("Object.assign();");
/**
 * Object.assign();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * Die methode Object.assign(); kopiert properties von einem Objekt und fügt sie einem zielobjekt hinzu.
 * @param { Object } - Das Zielobjekt
 * @param { Object } - Das Inputobject
 * @returns { Object } - Das veränderte zielobjekt
 */

// Wir legen 2 objekte an, ein zielobjekt und ein anderes objekt
const zielObjekt = { a: 1, b: 2 };
const anderesObjekt = { c: 3, d: 4};

console.log("Original Zielobjekt", zielObjekt);

// Wir nutzen Object.assign(); um beide objekte zu verbinden:
Object.assign(zielObjekt, anderesObjekt);

// Das Zielobjekt, und unser neues objekt haben jetzt den gleichen, neuen inhalt.
console.log("Verändertes zielobjekt", zielObjekt);


divider("Object.entries();");
/**
 * Object.entries();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * Die Methode Object.entries(); gibt jedes key und value paar der properties eines objektes als array zurück.
 * @param { Object } - Das objekt, dessen properties wir auslesen wollen.
 * @returns { Array } - Ein neues array 
 */

const objectEntries = Object.entries(zielObjekt);
console.log(objectEntries);

// [ 
//     [ 'a', 5 ], 
//     [ 'b', 2 ],
//     [ 'c', 3 ], 
//     [ 'd', 2 ], 
//     [ 'e', 8 ]
// ]

// mit forEach können wir durch diese array schleifen:
objectEntries.forEach(([ key, value ]) =>
{
    console.log(key, value);
});

divider("Object.fromEntries();");
/**
 * Object.fromEntries();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 * Im gegenteil zu Object.entries(); ersteltl die methode Object.fromEntries(); auf basis von einer array im oben gezeigten format mit 2 einträgen (0 = key, 1 = value) ein neues Object.
 * @param { Array } - Das array zur erstellung des objektes
 * @returns { Object } - Das neue Objekt
 */

const testArray =
[
//   key,  value
    [ "a", true ],
    [ "b", 5 ]
];

console.log("testArray", testArray);

const newObjectFromEntries = Object.fromEntries(testArray);
console.log("newObjectFromEntries:", newObjectFromEntries);

divider("Object.seal();");

/**
 * Object.seal();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
 * Die methode Object.seal(); sorgt dafürt, das keine neuen properties mehr zu einem Objekt hinzugefügt oder von einem objekt gelöscht werden können.
 * @param { object } - Unser objekt
 * @returns { object } - Unser objekt
 */

const sealObject = 
{
    firstName: "Max",
    lastName: "Mustermann"
};

console.log(sealObject);

// wir fügen "age" hinzu...
sealObject.age = 25;

// ... und geben das veränderte objekt aus:
console.log(sealObject);

// wir "versiegeln" das objekt:
Object.seal(sealObject);

// --------------------------------------- Ab hier ist das object zugeklebt!

// wir versuchen "country" hinzuzufügen:
sealObject.country = "Germany";

// wir geben unser objekt aus und sehen das "country" nicht übernommen wurde:
console.log(sealObject);

// wir können werte immernoch ändern:
sealObject.age = 18;

console.log(sealObject);

// wir versuchen "age" zu löschen:
delete sealObject.age;

// und sehen das "age" immernoch da ist:
console.log(sealObject);

divider("Object.isSealed();");

/**
 * Object.isSealed();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
 * Die methode Object.isSealed(); prüft ob ein objekt "sealed" ist, und gibt einen boolean zurück
 * @param { Object} - unser objekt
 * @returns { Boolean } - die antwort, ob das angefragte objekt "gesealed" ist.
 */

const sealTestObject = { name: "Hansi" };

console.log("sealTestObject:", Object.isSealed(sealTestObject));
console.log("sealObject:", Object.isSealed(sealObject));

divider("Object.freeze();");

/**
 * Object.freeze();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 * Die methode Object.freeze(); "friert" ein objekt ein, was bedeutet, es kann nicht mehr verändert werden.
 */

const freezeObject = 
{
    firstName: "James",
    lastName: "Bond"
}

console.log("freezeObject", freezeObject);

// wir ändern den wert von lastname:
freezeObject.lastName = "Steward";

// ... und sehen, das die änderung funktioniert hat:
console.log("freezeObject", freezeObject);

// wir frieren das objekt ein:
Object.freeze(freezeObject);

// --------------------------------------- Ab hier ist das object eingefroren!

// wir fügen "age" hinzu:
freezeObject.age = 25;

// und ändern den wert von .lastName noch einmal
freezeObject.lastName = "Dean";

// wir sehen, das der wert sich nicht verändert hat
console.log("freezeObject", freezeObject);

divider("Object.isFrozen();");

/**
 * Object.isFrozen();
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
 * Die methode Object.isFrozen(); prüft ob ein object "frozen" ist, und gibt einen boolean zurück
 * @param { Object} - unser objekt
 * @returns { Boolean } - die antwort, ob das angefragte objekt "gefreezed" ist.
 */
console.log("is freezeObject frozen?", Object.isFrozen(freezeObject));

// Der unterschied zwischen Object.seal(); und Object.freeze();
// Vorhandene eigenschaften in objekten, die mit Object.seal(); versiegelt wurden, können verändert werden, Vohandene eigenschaften in objekten die mit Object.freeze(); eingefroren wurden, werden unveränderlich gemacht.

divider("Object.isExtensible();");

/**
 * Object.isExtensible();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
 * Die methode Object.isExtensible(); prüft ob ein objekt veränderbar ist, ob es also "frozen" oder "sealed" ist, und gibt einen boolean zurück.
 * @param { Object } - unser object
 * @returns { Boolean } - die antwort, ob das objekt überhaupt veränderbar ist.
 */

const extensibleObject = 
{
    firstName: "Bilbo",
    lastName: "Baggins"
}

console.log("ist extensibleObject erweiterbar?", Object.isExtensible(extensibleObject));
console.log("ist sealObject erweiterbar?", Object.isExtensible(sealObject));
console.log("ist freezeObject erweiterbar?", Object.isExtensible(freezeObject));

divider("Object.defineProperty();");

/**
 * Object.defineProperty();
 * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * Die methode Object.defineProperty(); erstellt oder verändert eine property in einem Object.
 * @param { Object } - unser objekt
 * @param { String } - der name der property
 * @param { Object } - der wert oder die werte, den die property übernehmen soll
 * @returns { object }
 */

const user =
{
    firstName: "Max",
    lastName: "Mustermann",
    country: "Germany"
}

console.log(user);

// wenn wir eine property ändern wollen, können wir das direkt auf dem objekt machen:
Object.defineProperty(user, "country", { value: "England"});

// equivalent zu: user.country = "England";

console.log(user);

// wenn wir eine property hinzufügen wollen, könenn wir einige optionen angeben:
// - enumerable = die property wird in der anzeige übernommen oder nicht
// - writeable = die property kann überschrieben/verändert werden oder nicht
Object.defineProperty(user, "userName", 
{
    value: "TestUser1234",
    enumerable: true, // auf false wird die property nicht im objekt übergeben, und ist nur direkt anwählbar
    writable: false // auf false können wir den wert nicht mehr verändern
});

// console.log(user.userName);

user.userName = "NewTestUser";

console.log(user);
