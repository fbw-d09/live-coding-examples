module.exports = (req, res) =>
{
    // um testweise einen body zu erstellen, können wir dies in postman/thunderclient machen, dort müssen wir auf Body klicken, und senden dort unsere keys uns values entweder im format Form-encode (x-www-form-urlencoded) oder wir klicken auf JSON um die eingabe dort direkt als json zu schreiben.

    // die daten des bodys bekommen wir unter req.body; wenn wir genau wissen welche daten wir erwarten, können wir iese auch mit hilfe eines deconstrutors direkt aus dem objekt ziehen.
    const { firstname, lastname } = req.body;

    console.log("Name:", firstname, lastname);

    // diese daten können wir auch an den client zurückgeben:
    res.json({ success: true, message: `Hallo ${ firstname }, willkommen an bord!`});
}
