// wir importieren express
const express = require('express');

// wir erstellen eine instanz von express.Router();
const router = express.Router();

// innerhalb des routers können  wir alles was mit mit der app machen können, spezifisch für unsere route tun, wir nutzen hierfür "router" anstelle von "app".

router.use((req, res, next) => {
    console.log(req.method + " - " + req.url);

    next();
});

// wir können routen definieren, für ein einfaches verständnis, das wir sehen können es gehen ganz verschiedene routen, halten wir uns hier mal nicht an das CRUD prinzip.

// GET /users/
router.get("/", (req, res) => {
    res.status(200).send("USER HOME");
})

// GET /users/profile/:id
router.get("/profile/:id", (req, res) =>
{
    // wir können auch parameter übergeben

    const { id } = req.params;

    res.status(200).send("user profile: " + id);
});

module.exports = router;
