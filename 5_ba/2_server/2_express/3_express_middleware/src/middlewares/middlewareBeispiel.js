// Wenn wir spezifisch für eine oder mehrere routen eine middleware definieren wollen, können wir diese als funktion schreiben

exports.middlewareBeispiel = () =>
{
    // wir returnen das callback mit req, res und next
    return (req, res, next) => 
    {
        // wir könnnen zum beispiel unsere url, und methode als parameter übergeben
        console.log("METHODE:", req.method);
        console.log("PFAD:", req.url);

        // oder wir können das datum angeben:
        console.log("TIME:", Date.now());

        // ganz wichtig, ist die übergabe von next();, damit der request nach der middleware weitergeht
        next();
    }
}
