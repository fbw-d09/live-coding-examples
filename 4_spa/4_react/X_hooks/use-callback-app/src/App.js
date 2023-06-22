// useCallback(); wird, wie useMemo(); genutzt um sich an etwas zu erinnern, und es nur anzusprechen, wenn sich etwas an einer dependency ändert. Beide erwarten abhängigkeiten, um zu steuern OB und WANN sie ausgeführt werden sollten. Der unterschied ist, das useMemo(); werte zurückgibt, und useCallback(); eine zugewiesene funktion ausführt.

// wir importieren useCallback();
import React, { useState, useCallback } from 'react';

function App()
{
    // wir erstellen einen state für die hintergrundfarbe der app:
    const [ background, setBackground ] = useState("#FFCC00");

    // wir erstellen eine funktion, die useCallback(); nutzt, indem wir unsere arrow function declaration einfach in einem useCallback(); aufruf wrappen.

    // anstelle von:
    // const functionName = () => {}
    // const functionName = useCallback(() => {}, []);

    // zum test schreiben wir eine funktion, die die hintergrundfarbe zufallsgeneriert
    const handleBackgroundColorChange = useCallback(() =>
    {
        const newColor = Math.floor(Math.random()*16777215).toString(16);

        console.log(newColor);

        setBackground("#" + newColor);
    }, []);

    return (
        // wir fügen background hier in das style attribut vom div element ein, ohne doppelpunkt oder wert zuweisung denn "background" ist "background"
        <div className="App" style={{ height: "100vh", background }}>
            {/* wir erstellen einen button der unseren backgroundColor change ausführen soll */}
            <button onClick={ handleBackgroundColorChange }>Hintergrund ändern</button>
        </div>
    );
}

export default App;
