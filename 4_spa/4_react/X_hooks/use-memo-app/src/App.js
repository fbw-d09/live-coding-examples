// interessanter artikel zu useCallback(); und useMemo(); https://www.joshwcomeau.com/react/usememo-and-usecallback/

// Der useMemo(); hook wird zum optimieren der performance einer react applikation benutzt. Er merkt sich resourcen intensive berechnungen und verhindert unnötige neu-renderings. Wenn man useMemo(); benutzt, kann man einen wert ein mal berechnen und immer wieder verwenden, anstelle es bei jedem render neu zu berechnen. Es erstellt sozusagen eine "erinnerung" an die berechnung, auf die es zugreifen kann, wenn nötig.

// Das kann die performance einer react app drastisch verbessern, vor allem wenn man schwerfällige, komplete oder zeitintensiv berechnungen innerhalb eines komponenten durchführen muss. Andersherum kann es zu performance einbrüchen kommen, wenn man useMemo(); zu oft benutzt.

// wir importieren useState(); und useMemo();
import { useState, useMemo } from 'react';

// Wir erstellen eine funktion ausserhalb von react, die eine resourcenIntensive berechnung ausführen soll.
const expensiveCalculation = (num) =>
{
    for (let i = 0; i < 10000000; i++)
    {
        num += 1;
    }

    return num;
}

function App()
{
    // wir erstellen einen state hook für einen counter und initialisieren ihn mit 0;
    const [ count, setCount ] = useState(0);

    // wir nutzen useMemo(); um die kalkulation zu steuern, wie bei useEffect(); geben wir an mit was wir arbeiten, und sagen dann in einem dependency array, worauf der hook reagieren soll.
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    // wir erstellen eine funktion die den counter incrementieren soll
    const handleIncrement = () =>
    {
        setCount(countValue => countValue + 1);
    }

    return (
        <div className="App" style={{ marginLeft: "2em" }}>
            {/* in unserem jsx erstellen wirt einen button, der count incrementieren soll, und eine ausgabe, in der wir die aktuelle nummer sehen */}
            <p>Counter: { count }</p>
            <br />
            <button onClick={ handleIncrement }>+</button>
            <br />
            {/* hier geben wir die kalkulation aus */}
            {
                calculation
            }
        </div>
    );
}

export default App;
