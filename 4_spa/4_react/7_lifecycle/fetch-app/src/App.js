import './App.css'
// Wir wollen uns per fetch die informationen eines todos von jsonplaceholder holen, wir nehmen dafür das beispiel auf der startseite von jsonplaceholder

// als erstes importieren wir wieder React, useState und useEffect:
import React, { useState, useEffect } from 'react';

function App()
{
    // Dann bauen wir uns einen state für die infos, den wir befüllen wollen. Wir geben ihm ein leeres object, da wir bei jsonplaceholder sehen das wir ein objekt zurückbekommen
    const [ data, setData ] = useState({});

    // au0erdem bauen wir uns einen state, mit dem wir sagen, das die seite gerade geladen wird wir setzen den initialwert auf true:
    const [ isLoading, setIsLoading ] = useState(true);

    // Wenn wir das fetch direkt in den komponenten schreiben, wird er mehrmals, immer wieder ausgeführt, absolut unkontrolliert, das wollen wir nicht. Wir wollen das er direkt beim aufbaue des komponenten ausgelöst wird, und dann nicht mehr.

    // Also schreiben wir einen useEffect
    useEffect(() =>
    {

        // So machen wir es am anfang:
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json =>
        // {
        //     setData(json);
        //     setIsLoading(false);
        // });

        // So machen wir es professionell, für die performance:
        // wir schreiben eine asyncrone funktion
        const fetchedData = async () =>
        {
            // wir awaiten die daten indem wir den fetch awaiten und das json umwandeln.
            const data = await ((await fetch('https://jsonplaceholder.typicode.com/todos/1'))).json();

            // Wir können mit einem setTimeout auch die ladezeit "faken":
            setTimeout(() => {
                setData(data);
                setIsLoading(false);
            }, 3000);
            // dann setzen wir die daten in unseren state

            // und setzen isLoading auf false, um die inhalte anzuzeigen
        }

        // am ende führen wir die asynchrone funktion aus.
        fetchedData();
    }, []);

    return (
        <div style={{ marginLeft: "2em" }}>
            {
                !isLoading? 
                (
                    <>
                        <h3>Post { data.id }</h3>
                        <ul>
                            <li>User ID: { data.userId }</li>
                            <li>Title: { data.title }</li>
                            <li>Completed: { data.completed ? "true" : "false" }</li>
                        </ul>
                    </>
                )
                :
                (
                    <div className="loader">
                        <div className="loadingio-spinner">
                            <div className="ldio">
                                <div></div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default App;
