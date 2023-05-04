// viele spiele werden heutzutage nicht mehr von grund auf neu entwickelt, die spiele hersteller nutzen dafür ein konstrukt namens "engine", eine engine bietet einige basis spiele inhalte wie die kompilierungsmechaniken um das spiel auf mehreren plattformen laufen zu lassen, die grafischen unterprogramme zur darstellung von spieleinhalten, eingabemethoden und auch die logiken der software, wie den update loop, also den loop, in dem sich alle spieleinhalte befinden.

// um eine grundlegende engine zu erstellen, erstellen wir eine klasse, die die geschwindigkeit des update loops festsetzt, und in dessen loop wir unseren eigenen game code von außen einfügen können.
class Game
{
    constructor()
    {
        this.frameTime = 1000 / 60; // 1000 / 60, macht 60 wiederholungen die sekunde (60FPS als maximale wiederholung)
        this.lastTimestamp = 0;     // der letzte zeitstempel
        this.inLoop;                // die funktion, die mit der wir den inhalt des loops ausführen
        this.deltatime;             // deltatime ist die zeit, die zwischen 2 bildern (frames) vergeht, da diese nicht immer die gleiche ist (was ruckeln verursacht), speichern wir diese zeit. Wir verhindern ruckeln, indem wir dinge die animiert werden mit der deltatime multiplizieren, wodurch alle abläuft wieder schön sauber aussehen.
    }

    // die window methode .requestAnimationFrame(); gibt es leider nur im browser, da wir hier im terminal arbeiten, müssen wir uns unsere eigene kopie erstellen. 
    // Die funktion setImmediate(); führt einen callback sofort aus, und bricht alle anderen abläuft ab, wir übergeben ihr als basis für unsere deltatime den aktuellen zeitstempel, und werden die funktion in unserem loop wiederholend aufrufen, so das sie immer wieder aufgerufen wird, und sich selbst abbricht, um den speicher nicht zu belasten.
    animationFrame = (callback) =>
    {
        setImmediate(()=> callback(Date.now()));
    }
    
    // unsere loop methode bekommt den aktuellen timestamp als wert übergeben, der sich im aufruf über animationframe definiert. 
    loop = (timestamp) =>
    {
        // wir erstellen die deltatime, indem wir den aktuellen timestamp - den letzten zeitstempel nehmen, und dies durch unsere frames pro sekunde teilen.
        this.deltatime = (timestamp - this.lastTimestamp) / this.frameTime;

        // wir setzen fest, das wenn inLoop eine funktion als inhalt hat, das diese im loop immer wieder ausgeführt wird, und die deltazeit übergeben bekommt, dies wird später mithilfe einer update methode unsere schnittstelle mit der engine.
        this.inLoop && this.inLoop(this.deltatime);

        // wir definieren das der letzte zeitstempel der aktuelle zeitstempel ist.
        this.lastTimestamp = timestamp;

        // wir rufen den loop in sich selber wieder auf, mithilfe unserer .animationFrame(); methode.
        this.animationFrame(this.loop);
    }

    // wir starten unseren loop, indem wir als callback in unsere .animationFrame(); funktion, den loop übergeben.
    start = () =>
    {
        this.animationFrame(this.loop);
    }

    // mit der methode .update(); geben wir an, was wir in unserem loop ausgeben wollen, indem wir den callback inhalt auf den wert inLoop setzen.
    update = (game) =>
    {
        if(game)
        {
            this.inLoop = game;
        }
    }
}

module.exports = Game;
