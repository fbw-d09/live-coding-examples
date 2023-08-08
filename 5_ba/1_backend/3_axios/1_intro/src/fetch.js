// wir importieren optional "node-fetch", um fetch in nodejs zu nutzen, sollten wir node-fetch nicht importieren können wir die nächste zeile auslassen, und trotzdem die fetch(); methode benutzen.
import fetch from 'node-fetch';

// wir legen eine variable an, mit unserer URL, hierfür nutzen wir JSONPlaceholder.
const url = "https://jsonplaceholder.typicode.com/todos/1";

// Beispiel: GET

// wir nutzen fetch, wie wir es damals gelernt haben. wir starten mit der url, nutzen dann then zur umwandlung, und dann noch mal, um den inhalt in der konsole auszugeben.
// fetch()
// .then(res => res.json())
// .then(data => console.log(data));

// wir müssen den zwischenschritt einbauen, da wir sonst nur den buffer bekommen, und diesen umwandeln müssen um das json lesbar aus der response zu bekommen.
fetch(url)
.then(res => res.json())
.then(data => console.log('GET:', data));

// Beispiel: POST

// wir erstellen ein objekt, mit den daten die wir übertragen wollen:
const data = 
{
    title: "fetch ausprobieren",
    body: "Heut ist dienstag...",
    userId: 1
}

// wir erinnern uns, wenn wir bei fetch einen post request machen wollen, müssen wir eine menge bedenken:
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",             // wir müssen die methode angeben
    body: JSON.stringify(data), // wir müssen unsere inhalte in eine string umwandeln
    headers:                    // Wir müssen unsere header informationen angeben
    {
        'Content-Type': 'application/json; charset=UTF-8' // wir müssen unseren content-type angeben
    }
})
.then(res => res.json()) // wir müssen unsere antwort umwandeln 
.then(data => console.log('POST:', data));
