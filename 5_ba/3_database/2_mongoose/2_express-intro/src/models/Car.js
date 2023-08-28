// wir importieren Schema und model von mongoose:
const { Schema, model } = require('mongoose');

// wir erstellen ein neues Schema, und da wir uns innerhalb einer datei befinden, und hier nicht mehrere schemen anlegen, nennen wir es einfach schema.
const schema = new Schema({
    brand: String,
    name: String,
    type: String,
    year: Number
}, { timestamps: true });
// wir können mongoose automatisch zeitstempel anlegen lassen, diese werden angelegt, wenn das dokument erstellt wird (createdAt), und wenn das dokument verändert wird (updatedAt)

// wir erstellen ein modell, anhand der daten des schemas
const carModel = new model('Car', schema, 'cars');

// wir exportieren unser modell:
module.exports = carModel;
