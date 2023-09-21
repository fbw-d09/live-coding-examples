// in express haben wir die mögichkeit, mit sogenannten router pfade mit eigenen methoden oder auch eigener middleware innerhalb von einer spezifischen route anzulegen, so können wir sortiert und übersichtlich arbeiten.

/*
    Logik:
        als beispiel wollen wir eine api anlegen, in der wir den user erstellen können, den user löschen können, und ihn bearbeiten können. Außerdem hätten wir noch routen um posts zu erstellen, zu editieren und zu löschen. Mit unserem bisherigen wissen würden wir also folgende routen erstellen:

        POST            /users/             einen neuen user erstellen
        GET             /users/:id          ein spezifisches userprofil bekommen
        DELETE          /users/:id          einen spezifischen user löschen
        PUT             /users/:id          einen spezifischen user updaten

        POST            /posts/             einen neuen post erstellen
        GET             /posts/:id          einen spezifischen post bekommen
        GET             /posts/             alle posts bekommen
        DELETE          /posts/:id          einen spezifischen post löschen
        PUT             /posts/:id          einen spezifischen post updaten

        Wenn wir uns überlegen, das wir nicht nur user und posts managen wollen, sondern später vielleicht auch kategorien oder etwas anderes, wird unsere app schnell sehr groß und wir müssen viel code lesen um zu sehen, wo wir welche route haben, und wo wir änderungen vornehmen, oder code hinzufügen müssten.

        mit express.router(); können wir stattdessen 2 routen anlegen:
        /users
        /posts

        und alles weitere, was wir in diesen route namchen wollen, wie methoden, oder middleware in eigene dateien speichern. Das sorgt für schnelleres arbeiten, übersichtlichkeit und einfaches verständnis für unseren code. Außerdem wäre es jetzt einfach, eine weitere route, und dessen inhalte hinzuzufügen.
*/

const express = require('express');

// anstelle von einer methode, nutzen wir middleware, in der wir weitere routen übergeben.

// wie erstellen die dateien routes/users.js und routes/posts.js, in der wir die routen anlegen.

// wir importieren die router datein:
const users = require('./routes/users.js');
const posts = require('./routes/posts.js');

const app = express();
const port = 3000;

// wir legen eine middleware an, die die pfade unterhalb des gewünschten hauptpfades managed:
app.use("/users", users);
app.use("/posts", posts);

app.listen(port, () => console.log("Server läuft auf port", port));
