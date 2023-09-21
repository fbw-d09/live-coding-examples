// wir importieren axios
import axios from 'axios';

// Resourcen zu axios:
// https://axios-http.com/docs/intro
// https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/

// auch hier geben wir unsere url an:
const url = "https://jsonplaceholder.typicode.com/todos/1";

/**
 * Im gegensatz zu fetch, wenn wir ein GET, POST, oder einen anderen request anfragen, können wir zwar, wie auch in fetch, 
 * alles in der selben funktion schreiben, aber können anstelle dessen auch spezifische methoden nutzen,
 * die uns die übersicht und verständlichkeit unseres codes erleichtern.
 * 
 * Hier einige der sogenannten "convenience methoden":
 * 
 * - axios.get();                 Eine methode um GET requests zu erstellen
 * - axios.post();                Eine methode um POST requests zu erstellen
 * - axios.delete();              Eine methode um DELETE requests zu erstellen
 * - axios.request();             Eine methode um requests zu managen
 * - axios.head();                Eine methode um die header informationen global einzustellen
 * - axios.options();             Eine methode um optionen an den request zu übergeben
 */

// Beispiel: GET

// Wir nutzn für unser beispiel axios().get();
axios.get(url)
.then(res => console.log(res.data)); // anstelle umwandeln zu müssen, bekommen wir die antwort sofort im data objekt zurück.

// Wir sehen also, in axios können wir den kompletten umwandlungsschritt sparen, 
// und bekommen sofort alle wichtigen informationen wie status, header pfad un den host angenehm als objekt zurück.
// Unter ".data" finden wir sofort unsere angefragten daten.

// auch in der fehlerbehandlung ist axios angenehmer, da wir, wenn wir eine fehlerhafte url ansprechen automatisch die wichtigsten informationen 
// zum fehler zurück bekommen und wir diese auswerten können.
const url2 = "https://jsonplaceholder.typicode.com/todol/1";

axios.get(url2)
.then().catch(err => console.log(err.response.status, err.response.statusText));

// Beispiel: POST

// Auch hier erstellen wir ein obejkt, um unsere daten anzugeben:
const data = 
{
    title: "Axios ausprobieren",
    body: "Sehr spannendes thema!",
    userId: 1
}

// Wenn wir in axios einen post request machen wollen, nutzen wir dafür vorzugsweise die methode axios.post();:
axios.post('https://jsonplaceholder.typicode.com/posts', data) // wir fügen unsere daten direkt als zweiten parameter in die methode ein.
.then(res => console.log("POST:", res.data));

// Wie wir sehen kriegen wir gleich die richtige antwort, und haben auch unsere daten direkt im richtigen format vorliegen. Axios kann den content-type direkt anhand der daten definieren und wir müssen MEIST (wenn wir keine spezifischen header informationen benötigen) keine weitere zeit damit verschwrnden unseren POST befehl mit informationen zu befüllen.
