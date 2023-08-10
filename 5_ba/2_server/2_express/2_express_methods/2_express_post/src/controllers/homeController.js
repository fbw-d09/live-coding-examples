module.exports = (req, res) =>
{
    // auch innerhalb von .post(); requests können wir unsere req und res objekte auslesen:
    console.log("METHOD:", req.method);

    // wir geben bei einer post methode, wie wir es gelernt haben, auch etwas zurück, meist zusammen mit einer success mitteilung, und die angefragten daten im json format, dafür nutzen wir die methode .json();
    res.status(200).json({ success: true, data: [] })
}
