// wir importieren dotenv
require('dotenv').config();

// wir importieren das modul jsonwebtoken, zu dem wir hier mehr informationen finden: https://jwt.io/
const jwt = require('jsonwebtoken');

// wir importieren auch noch crypto
const crypto = require('crypto');

// wir holen uns das secret aus der .env datei, diesmal erstellen wir aber ein produktionsrelevantes secret mit hilfe von crypto, dies ist normalerweise ein 64 bit hex string, den wir hier auch in javascript erstellen können
// console.log(crypto.randomBytes(64).toString('hex'));
const secret = process.env.TOKEN_SECRET;
console.log(secret);

console.log("-".repeat(50));

/**
 * um einen jsonwebtoken zu erstellen benötigen wir ein paar daten:
 * - das token secret
 * - die daten die wir innerhalb des tokens speichern wollen
 * - eine ablaufzeit für den token
 */

// die daten die wir als payload speichern, können sowohl kleinere datenmengen, wie zum beispiel die USERID, wie auch komplexere objekte beinhalten, sollten aber in jedem falle den user identifizieren können. Außerdem sollten wir eine ablaufzeit für den token übergeben, so das der user nicht für immer eingeloggt bleibt. Der standard sind hier 30-45 minuten, aber es kann von service zu service unterschiedlich sein.

// wir schreiben eine funktion, die die token signatur für uns erstellt:
const signAccessToken = (data) =>
{
    // wir nutzen die jwt methode .sign(); um eine signatur zu erstellen, wir übergeben ihr die daten, unser secret und die expiration time in sekunden, minuten, stunden oder tagen. Im standard geben wir unsere zeit in sekunden an:
    const signedJWT = jwt.sign(data, secret, { expiresIn: "1800s" });

    // wir returnen den token:
    return signedJWT;
}

// wir testen unsere funktion in dem wir ihr einen usernamen oder andere daten übergeben:
const newToken = signAccessToken({ username: "TestUser", favoriteColor: "gelb"});

// wir lassen uns den token in der konsole ausgeben:
console.log(newToken);
// wir sehen das der token ausgeben wurde, und das er aus den 3 vorher erwähnten teilen besteht.

// den ausgegebenen token können wir uns aus der konsole kopieren, und als variable speichern, damit wir ihn gleich wieder dekodieren können:
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RVc2VyIiwiZmF2b3JpdGVDb2xvciI6ImdlbGIiLCJpYXQiOjE2OTQ1MDQ3ODQsImV4cCI6MTY5NDUwNjU4NH0.IBxVXeHto5CswvipjnoMsPyVz3_lrqOvWKLvilDKxxo";

/**
 * header       = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 * payload      = eyJ1c2VybmFtZSI6IlRlc3RVc2VyIiwiZmF2b3JpdGVDb2xvciI6ImdlbGIiLCJpYXQiOjE2OTQ1MDQ3ODQsImV4cCI6MTY5NDUwNjU4NH0
 * signatur     = IBxVXeHto5CswvipjnoMsPyVz3_lrqOvWKLvilDKxxo
 */

// um den token zu verifizieren, schreiben wir eine funktion, der wir den token übergeben:
const verifyAccessToken = (token) =>
{
    // wir nutzen die methode .verify(); um zu prüfen, ob der token mit den erwarteten daten gleich ist. Laos ob das secret mit den daten, und dem token gemeinsame das selbe ergebnis liefert:
    jwt.verify(token, secret, (err, tokenData) =>
    {
        // wenn der token inkorrekt ist, geben wir einen fehler aus:
        if(err) throw new Error(err);

        // sollte die verifikation klappen, geben wir die daten des payloads zurück:
        console.log(tokenData);
    });
}

// wir führen die funktion aus, und testen ob der token korrekt ist:
verifyAccessToken(token);

// wenn der token eine fehlerhafte signatur hätte, bekämen wir einen fehler ausgegeben, der uns sagt, das die signatur nicht stimmt, stimmt der token nicht, oder ist abgelaufen, bekommen wir "invalid token" zurück.

// sollte die signatur stimmen, bekommen wir die wichtigen daten zurück:
// - die daten die wir übergeben wollten
// - den IAT (issuedAt), der zeitpunkt, an dem die verifikation angefragt wurde
// - den EXP (expiration date), der zeitpunkt, an dem der token abläuft

// Wie wir sehen, können wir so sicher daten austauchen, also sollten wir diesen standard in express bei der anfrage an api methoden immer nutzen, und können dies durch die übertragung des tokens zwischen client und server sicherstellen.
