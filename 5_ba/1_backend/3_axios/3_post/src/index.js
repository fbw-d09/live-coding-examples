// wir importieren axios
const axios = require('axios');

// wir erstellen unser data objekt:
const data =
{
    title: "Axios ausprobieren",
    body: "Heut ist ein spannender tag!",
    userId: 1
};

// Ein einfacher post request:
//         url                                           daten
axios.post('https://jsonplaceholder.typicode.com/posts', data)
.then(res => {
    console.log("----- SIMPLER POST REQUEST -----");
    console.log("Daten:", res.data);
});

// wollen wir weitere header informationen selbst mit angeben, schreiben wir diese als objekt an dritter stelle der post methode:
axios.post("https://jsonplaceholder.typicode.com/posts", data, {
    'Content-Type': 'application/json',
    'app-id': 'uidhfg23fngzerg' // zum beispiel, falls wir im header eine app-id übergeben müssen
})
.then(res => {
    console.log("----- POST REQUEST MIT HEADER -----");
    console.log("Daten:", res.data);
    // console.log(res);
});

// Asynchroner post request:
const axiosPost = async () => {
    try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);

        if(res.status === 201) // STATUS: 201 = CREATED
        {
            console.log("----- ASYNCHRONER POST REQUEST -----");
            console.log("Status:", res.status);
            console.log("Daten:", res.data);
        }

    } catch (err) {
        console.log(err.response.status);
    }
}

axiosPost();
