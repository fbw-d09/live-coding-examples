require('dotenv').config();
const axios = require('axios');

// Wenn wir wissen, das wir verschidene pfae auf der selben URL mit axios nutzen wollen, 
// also wenn wir zum beispiel die selbe api an verschiedenen stellen ansprechen wollen,
// können wir beim anlegen einer neuen axios instanz eine baseURL anlegen, also eine URL, auf der alle besuchten pfade basieren. 
// Diese URL legen wir aus testzwecken in unserer .env unter dem schlüssel API_URL an.

// wir überprüfen. ob die .env datei gelesen werden kann (NICHT IN PRODUKTION MACHEN).
console.log(process.env.API_URL);

// wir erstellen eine neue instanz von axios, nennen diese "api", und geben an, das sie alle befehle auf der "baseURL" ausführt.
const api = axios.create({ baseURL: process.env.API_URL }); // https://httpbin.org

// mit inceptoren, also "abfängern", oder "abfangjängern" kann axios auf jeden request und jede response reagieren und bei erfolg einen befehl ausführen, WICHTIG, ein interceptor muss vor den request erstellt werden:
api.interceptors.request.use(req =>
{
    // Wir geben die methode und die angefragte URL aus:
    console.log(`${ req.method}: ${ req.url }`);

    console.log("KÄSEKUCHEN");

    // WICHTIG: ein interceptor muss für die korrekte ausführung IMMER den request returnen, da er den request weiter durchreicht.
    return req;
});

// WICHTIG: da wir axios.create(); auf die variable "api" gesetzt haben, werden wir ab hier alle axios befehle mit "api" anfangen, nicht mit axios,
// bei "api" handelt es sich also um eine instanz von axios.
const getData = async () => {
    try {
        // axios weiss, durch die angabe der baseURL, das alle pfade, mit unserer api adresse anfangen

        // anstelle parameter direkt in den pfad zu schreiben, also "/get?name=Max", können wir bei axios params direkt angeben:
        const newData = await api.get('/get', { 
            params: { 
                name: "Max", 
                age: 25
        }}) // https://httpbin.org/get?name=Max&age=25

        console.log("Daten:", newData.data);

    } catch (error) {
        console.log(error.response.status)
    }
}

getData();

// axios kann auch mehrere requests auf einmal ausführen, und nutzt dafür als basis, die uns bekannte methode Promise.all();
const multipleRequests = async () =>
{
    const req1 = axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const req2 = axios.get('https://jsonplaceholder.typicode.com/posts/2');

    // wir übergeben der methode .all(); ein array mit unseren requests:
    await axios.all([ req1, req2 ]) // axios.all(); bekommt die beiden requests übergeben
    .then(axios.spread((res1, res2) => // wir benutzen die methode .spread(); um die ausgaben in seperate responses zu füllen
    {
        console.log("Anfrage 1:", res1.data);
        console.log("Anfrage 2:", res2.data);
    }));
}

multipleRequests();
