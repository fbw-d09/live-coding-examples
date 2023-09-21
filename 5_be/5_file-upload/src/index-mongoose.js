// wir importieren die üblichen verdächtigen:
const express = require('express');
const mongoose = require('mongoose');

// wir importieren multer
const multer = require('multer');

// außerdem importiern wir Path
const path = require('path');

// wir importieren das model:
const Image = require('./models/Image');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/image-example');

// wir erstellen eine middleware für multer, auf der wir multer OHNE destination erstellen, damit wir dateien NICHT auf dem dateisystem speichern:
const upload = multer({
    // mit "limits" setzen wir einstellugen, mit denen wir bestimmte optionen eingrenzen
    limits: {
        // mit fileSize setzen wir die maximale größe von dateien in bytes fest.
        fileSize: 50000000 // 5MB
    }
});

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
});

// wir schreiben eine POST route, auf der wir die bilder hochladen wollen, hierzu nutzen wir wieder die upload middlware, aber nur, um die metadaten zu bekommen.
app.post('/uploadphoto', upload.single('testImage'), (req, res) => {
    // wir holen uns die daten aus req.file, dies ist die hochgeladene datei, die uns durch multer bereitgestellt wird.
    const { buffer, originalname, mimetype } = req.file;

    // wir erstellen ein neues Image für die datenbank
    const newImage = new Image();

    // wir übergeben den bugger, also die daten des bildes in bytes:
    newImage.data = buffer;

    // wir legen fest, das der dateiname, den wir speichern und mit dem wir das bild abrufen können, das aktuelle datum als timestamp, gefolgt vom originalen bildnamen sein soll:
    newImage.name = Date.now() + "-" + originalname;

    // wir übergeben den typ des bildes, bei unserem testbild sollte dies "image/png" sein:
    newImage.contentType = mimetype;

    // wir speichern das neue Image ab:
    newImage
        .save()
        .then(image => {
            // am ende wollen wir auf eine route weitergeleitet werden, auf der wir direkt das bild sehen können:
            res.redirect('/images/' + image.name);
            // sollte alles geklappt haben, werden wir weitergeleitet an die bildadresse und können das bild dann sehen.
        })
        // fehler fangen wir in der konsole ab:
        .catch(err => console.log(err));
});

// wir schreiben eine get route, um unser bild anzeigen zu lassen:
app.get('/images/:filename', (req, res) => {
    // wir suchen das bild anhand seines namens in der datenbank:
    Image
        .findOne({ name: req.params.filename })
        .then(image => {
            // ...lassen wir uns die daten des bildes ausgeben:
            console.log(image);

            // und übergeben das bild anhand der benötigten daten:
            res
                .status(200)
                // den content type der "seite" die angezeigt wird, setzen wir auf den content-type des bildes:
                .contentType(image.contentType)
                // und senden den buffer als daten an den browser
                .send(image.data);
        })
        .catch(err => res.status(404).send("Image not found!"));
});

app.listen(port, () => console.log("Server läuft auf port", port));
