
// Zusätzlich zu unserem typischen bekanten for-loop gibt es noch weitere for-loop typen:
// - for/in - loopt durch die verschiedenene werte, und behält dabei nicht unebdingt die reihenfolge bei.
// - for/of - loopt durch verschiedene werte mit zählbarem inhalt, in der richtigen reihenfolge.

// for/in ist der typische weg durch objekte oder arrays zu loopen
// einfach gesagt: er geht jeden eintrag durch und gibt ihn aus.
const testArray = [ "a", "b", "c", "d", "e" ];

for(const i in testArray)
{
    console.log( testArray[i], i );
}

console.log("=".repeat(50));

// for/of nutzt den aktuell angesprochenen wert direkt
for(const eintrag of testArray)
{
    console.log(eintrag);
}

for(const buchstabe of "Hello World")
{
    console.log(buchstabe);
}

// Bei einer variable ohne typ, innerhaln des for-kopfes ist es möglich sie von ausserhalb des for-loops anzusprechen, das kann zu unerwünschten nebeneffekten führen.

/**
 * Die unterschiede zwischen den beiden for-loops:
 * | benutzbar für | for/in | for/of |
 * | Objekte       | ja     | nein   |
 * | Arrays        | ja     | ja     |
 * | Strings       | ja     | ja     |
 */

console.log("=".repeat(50));

// for-each
const fruits = [ "Orange", "Apple", "Strawberry" ];

fruits.forEach( function(testValue, num)
{
    console.log('Fruit number: ' + num, 'Fruit name: ' + testValue);
});

fruits.forEach(function(fruit)
{
    if(fruit === "Apple")
    {
        console.log("APPLE!");
    }
    
    console.log(fruit);
});
// oder fruits.forEach(fruit => console.log(fruit));
// oder fruits.forEach((fruit, i) => console.log(fruit));
