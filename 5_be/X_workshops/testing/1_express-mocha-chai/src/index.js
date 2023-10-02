// wir schreiben eine express applikation, so wie wir es gewohnt sind, innerhalb der applikation müssen wir nichts neues importieren

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // wir geben inhalt aus
    res.status(200).send("Hello, World!");
});

// wir schreiben eine weitere route, in der wir uns userdaten ausgeben lassen
app.get('/users/:userId', (req, res) =>
{
    // um das ganze zu mocken, schreiben wir ein if, in dem wir sagen, das nur ein bestimmter user ausgegeben werden kann, andere eingaben werden nicht gefunden
    if(req.params.userId === "Rick")
    {
        res.status(200).json({
            success: true,
            username: "Rick",
            role: "admin",
        });
    }
    else
    {
        res.status(404).json({
            success: false,
        });
    }
});

app.listen(port, () => {
    console.log("Server läuft auf port", port);
});

// der einzige unterschied zu unserer gewohnten applikation ist, das wir am ende "app" exportien müssen, um innerhalb unserer tests die applikation starten zu können.
module.exports = app;
