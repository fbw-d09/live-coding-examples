// Referenz: https://react.dev/reference/react/useEffect

// Mit useEffect können wir zum beispiel den titel unserer seite direkt zum anfang des ladens einer komponente ändern, dafür können wir auf den title parameter des document objects der dom zugreifen. Das können wir direkt hier machen, über unserem return, allerdings wird unser befehl dann andeuernd neu ausgeführt, sobald der komponent verändert wird. Das wollen nicht. Wenn wir useEffect benutzen, passiert dies NUR beim laden des komponenten, und wenn wir den titel ändern wollen würden, können wir das mit einer event funktion machen.

// Bauen wir dieses konstrukt einmal auf:

// zu erst importieren wir .useState(); und .useEffect(); von React:
import React, { useState, useEffect } from 'react';

function App()
{
    // als nächstes erstellen wir einen state hook, der unseren seitentitel speichern soll:
    const [ pageTitle, setPageTitle ] = useState("Unsere test app!");

    // jetzt bauen wir einen useEffect hook, und schauen ihn uns mal an
    // wir schreiben useEffect und fügen eine anonmye callback funktion ein, um den ausführenden teil unseres "seiteneffects" in dessen body zu schreiben

    useEffect(() =>
    {
        // in unserem efet greifen wir jetzt auf document.title zu, und geben den inhalt des states daran weiter:
        document.title = pageTitle; // unsere seite hat jetzt einen anderen titel

        // jetzt setzen wir ans ende noch ein leeres array für die abhängigkeiten, DIeses array hat die macht zu entscheiden, wann der effekt ausgeführt wird, aber darauf gehen wir später noch etwas detaillierter ein.

        // Das unmount, also die phase des effects, wenn dieser "geschlossen wird", der dafür da ist, zum beispiel verbindungen zu apis zu beenden, oder einen inverval zu löschen, kann innerhalb von useEffect einfach ausgelöst werden, indem man eine anonyme funktion returnt, und dort die befehle ausführt, die nach jedem komponentenaufbau passieren sollen, wir haben jetzt hier nur keinen sinnvollen einsatz dafür, also geben wir das event einfach in der konsole aus.
        return () => 
        {
            console.log("hier wird aufgeräumt!")
        }

        // Was kann das array am ende von useEffect(); ?
        // - wenn wir das array einfügen, aber leer lassen, so wie wir es jetzt machen werden, haben wir den effect nur einmal ausgeführt, wenn der komponent geladen wurde, ergo wird unser seitentitel nicht noch einmal verändert (ComponentDidMount)
        // - Wenn wir das array weglassen, wird der effekt bei jedem neu rendern ausgeführt, also wird unser seitentitel auch verändert, aber die ganze funktion wird ausgeführt, egal was mit dem komponenten gerade passiert, das ist natürlich nicht sonderlich performant (ComponentDidUpdate)
        // - es gibt aber etwas, was in dieser situation hilft, denn wir das array mit einem oder mehreren spezifischen props oder states befüllen, woird der effekt jedes mal neu ausgeführt wenn sich eben dieser übergebene wert ändert. Schreiben wir also pageTitle in das array hinein.
    }, [ pageTitle ]);

    // wir erstellen eine event funktion, mit der wir über einen button click den state pageTitle ändern wollen.
    const handlePageTitle = (e) =>
    {
        // wenn wir dinge innerhalb des komponenten, aber ausserhalb des effects ändern, sehen wir jetzt in der konsole durch unseren unmount, das der komponent tatsächlich neu aufgebaut wird.
        setPageTitle("Wir haben den namen der seite verändert...");
    }

    return (
        <>
            Hallo Welt!
            <br />
            {/* wir erstellen einen button, um den titel zu ändern, und übergeben ihn an eine funktion */}
            <button onClick={ handlePageTitle }>Ändere seitennamen</button>
        </>
    );
}

export default App;
