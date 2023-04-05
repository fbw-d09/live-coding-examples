/*
# Rückrufe
#### Benutzer grüßen
* Erstelle eine Funktion namens 'greetMessage', die eine Begrüßungsnachricht ausgibt.
* Erstelle eine Funktion namens 'greetUsers', die ein Array mit verschiedenen Benutzern erhält und jeden Benutzer begrüßt.
```javascript
    greetMessage("John") // print "Good Morning, John"
    greetUsers(["John","Peter","Mark"], greetMessage)
    // "Good Morning, John"
    // "Good Morning, Peter"
    // "Good Morning, Mark"
```
*/

// Ich brauche eine funktion, die einen einzelnen user grüßt.
// greetMessage soll die funktion heißen, und soll den usernamen übergeben bekommen.
// die funktion soll in der konsole die nachricht "Good Morning, [username]" ausgeben.
const greetMessage = (username) =>
{
    console.log(`Good Morning, ${ username }`);
}

// Ich brauche eine funktion, die jeden einzelne user grüßt, und dafür die vorherige funktion benutzt.
// um jeden einzelnen user zu grüßen, muss ich durch die userliste loopen.
const greetUsers = (userlist, callback) =>
{
    // bekommen wir die userliste?
    console.log(userlist); // ja

    // wenn wir durch die userliste loopen, bekommen wir jeden namen einzeln?
    userlist.forEach(user =>
    {
        console.log(user); // wir bekommen jeden user zurück

        callback(user); // der callback übergibt die daten
    });
}

greetUsers(["John", "Peter", "Mark"], greetMessage);
