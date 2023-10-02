// wir importieren chai, chai-http und unsere express applikation. Da mocha im terminal ausgeführt wird, müssen wir es hier nicht importieren.
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src');

// wir sagen chai, das wir chaiHttp als middleware nutzen wollen.
chai.use(chaiHttp);

// wir setzen die variable "expect" auf die methode chai.expect(); damit wir unseren code kürzer und verständlicher halten können:
const expect = chai.expect;

// wir schreiben unsere erklärungen und gruppieren sie anhand unserer inhalte.
// BESCHREIBE: EXPRESS APP:
describe('Express App', () => {
    // wir erstellen einen testfall in dem wir prüfen, ob die root-route GET / die erwarteten daten zurückgibt:
    // ES SOLLTE "Hello, World!" ZURÜCKGGEBEN, WENN ES / MIT DER GET METHODE AUFRUFT
    it('should return "Hello, World!" when / GET', (done) => {
        // wichtig ist, das wir am ende done im callback übergeben, es sorgt dafür, das der test weiss, das die überprüfung beenden wurde, und keine weiteren daten erwartet werden.

        // wir verwenden chai-http und machen einen request auf unsere express-app.
        chai.request(app)
            // wir nutzen die methode GET auf dem pfad /
            .get('/')
            // wenn chai-http die route aufgerufen hat, dann:
            .end((err, res) =>
            {
                // ERWARTE DAS DIE RESPONSE DEN STATUS 200 HAT:
                expect(res).to.have.status(200);

                // ERWARTE DAS AUF DER SEITE DER TEXT "Hello, World!" STEHT:
                expect(res.text).to.equal("Hello, World!");

                // wir rufen done(); auf, um den test abzuschließen.
                done();
            })
    });

    // wir schreiben weitere prüfungen:

    // ES SOLLTE USERDATEN ZURÜCKGEBEN, WENN EINE VALIDATE USERID ÜBERGEBEN WURDE
    it('should return user data when valid userID is provided', (done) =>
    {
        // wir erstellen eine variable mit dem usernamen, von dem annehmen das er existiert:
        const userId = "Rick";

        chai.request(app)
            // wir rufen die adresse inklsuvie parameter auf:
            .get(`/users/${userId}`)
            .end((err, res) => {
                // ERWARTE DAS DIE RESPONSE DEN STATUS 200 HAT
                expect(res).to.have.status(200);

                // ERWARTE DAS DIE RESPONSE IN JSON IST
                expect(res).to.be.json;

                // ERWARTE DAS DER BODY DIE PROPERTY "username" HAT
                expect(res.body).to.have.property('username');

                // done(); nicht vergessen ...
                done();
            })
    });

    // nun das gegenteil:

    // ES SOLLTE EINEN 404 FEHLER ZURÜCKGEBEN, WENN EINE INVALIDE USERID ÜBEERGEBEN WURDE
    it('should return an error 404 when an invalid userID is provided', (done) => {
        // wir erstellen eine variable für eine invalide userID:
        const userId = "Käsesauce";

        chai.request(app)
            .get(`/users/${userId}`)
            .end((err, res) => {
                // Wir überprüfen ob der fehlercode 404 zurückgegeben wird:
                expect(res).to.have.status(404);
                
                done();
            })
    })
});
