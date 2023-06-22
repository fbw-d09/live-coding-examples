// es gibt einige hooks in react, die das arbeiten mit react erleichtern, aber kein absolut neues konzept beinhalten, sondern eher react eine funktionalität hinzufügen, die man sonst nur durch das runterladen eines weiteren NPM modules bewerkstelligen könnte. 

// useId(); fügt react eine interne lösung hinzu, einzigartige ID's zu generieren. die auf dem server und dem client gleich sind.

// sogenannte unique id's werden in der welt der web-applikationen sehr viel benutzt, sei es um datrensätzen eine nummer zu geben, die sich über die ganze app nicht wiederholt, oder zum beispiel dem user eine "user-id" zu geben, mit der er identifiziert werden kann. useId(); wird spezifisch benutzt um elementen in formularen oder komponenten eigene ID's zu geben.

// um useId(); nutzen zu können, müssen wir es aus react importieren
import { useId } from 'react';

function App()
{
    // useId(); zu nutzen ist sehr einfach, es wird einfach durch eine variable aufgerufen
    const firstId = useId();
    const secondId = useId();
    const thirdId = useId();

    // Wenn wir eine funktion schreiben, in der wir immer wieder useId(); ausführen, sehen wir das sich die letterkonvention (32 zeichen pro position: 0 - V) der id's weiterführt (um eine funktion zu schreiben, die einen hook direkt ausführt, müssen wir den funktionsnamen groß schreiben, die folgende praxis ist nicht zu empfehlen und wir nutzen sie nur zur veranschaulichung)
    const GenerateId = () =>
    {
        // mit jedem aufruf der funktion generieren wir eine neue ID und returnen diese:
        const id = useId();
        return id;
    }

    return (
        <div className="App" style={{ marginLeft: "2em" }}>
            {/* wenn wir die id's hier aufrufen, sehen wir das es sich hier um eine definierte reihenfolge handelt, diese startet immer mit r, und geht dann nummeriert in 32 bit weiter */}
            <p>{ firstId }</p>
            <p>{ secondId }</p>
            <p>{ thirdId }</p>

            {/* wir erschaffen jetzt ein array mit 100 einträgen um 100 id's zu generieren */}
            <ul>
            {
                [ ...Array(1000).keys () ].map(i => {
                    return (<li>{ GenerateId() }</li>)
                })
            }
            </ul>
        </div>
    );
}

export default App;
