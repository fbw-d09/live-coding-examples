// wir importieren die engine
const Game = require("./src/Game");

// wir erstellen eine instanz der engine
const game = new Game();

// wir führen die methode game.start(); aus.
game.start();

// wir führen den update loop aus, als callback wert bekommen wir die deltatime übergeben, und können jetzt in den code block des callbacks unseren loopended game code schreiben.
game.update((deltatime) => 
{
    console.log("Deltatime:", deltatime);
});
