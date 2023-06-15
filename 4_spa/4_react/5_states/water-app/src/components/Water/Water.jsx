// Unser komponent wird, wenn er initialisiert wird, die aktuelle temperatur auslesen und übergeben ob das wasser flüssig oder fest ist.

// zu allererst importieren wir React, und holen uns daraus das modul useState, das wir für unsere states benötigen.
import React, { useState } from 'react';

// Unser scss des jeweiligen komponenten, importieren wir IMMER als letztes, um in der lage zu sein, gegebenenfalles styling inhalte eines vorherig importierten komponenten anzupassen.
import './Water.scss';

export const Water = () =>
{
    // Wir schreiben jetzt 2 useState hooks, um unsere states zu deklarieren, einmal für die temperatur des wassers, und einmal für dessen zustand.
    const [ temperature, setTemperature ] = useState(10); // let temperature = 10;
    const [ condition, setCondition ] = useState("flüssig"); // let condition = "flüssig";

    /*
        inetwa die logik von useState();:

        const useState = (value) =>
        {
            let val = value;

            setState(newValue)
            {
                val = newValue
            }

            return[
                value,
                setState()
            ]
        }
    */

    // Was haben wir hier geschrieben?
    // - Der erste teil "temperature" ist die variable, die den benötigten wert beinhaltet
    // - Der zweite wert ist eine funktion, die den veränderten wert übergibt
    // - Der parameter in useState ist der initialwert des states, also der default

    // jetzt schreiben wir eine funktion namens handleTemperatureChange, die als handler zum ändern der temperatur genutzt werden kann
    const handleTemperatureChange = () =>
    {
        // Hier schreiben wir jetzt die funktion und übergeben die werte an den jeweiligen setter:
        const newTemperature = Math.floor(Math.random() * 200) - 10;

        setTemperature(newTemperature);

        if(newTemperature > 0 && newTemperature < 98)
        {
            setCondition("flüssig");
        }
        else if(newTemperature >= 98)
        {
            setCondition("gasförmig")
        }
        else if(newTemperature <= 0)
        {
            setCondition("fest");
        }
    }

    return(
        <>
            {/* wir erstellen eine div, in der wir die informationen anzeigen */}
            <div>
                <p>Die aktuelle Temperatur ist { temperature }°c</p>
                <p>Das Wasser ist: { condition }</p>
            </div>

            {/* Jetzt erstellen wir einen Button, der eine temperaturfunktion ausführt */}
            <button onClick={ handleTemperatureChange }>Zufallstemperatur</button>
        </>
    )
}