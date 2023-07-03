// Bauen wir ein einfaches react konstrukt mit einem counter

// 1. Wir importieren useReducer von React
import { useReducer } from 'react';

import './App.css';

function App() 
{
    // 2. Wir erstellen einen initialwert für unseren state, dafür nutzen wir ein objekt namens "initialState{}"
    // hier stände jetzt sonst: const [ count, setCount ] = useState(0); // count: 0
    const initialState = { count: 0 };

    // 3. Wir bauen eine reducer funktion, die den alten state, und die aktion übergeben bekommt

           //  alter state, aktion die ausgeführt werden soll
    const reducer = (state, action) =>
    {
        // 4. innerhalb des reducers gibt es einen switch, der anhand des action types, den wir hier per string auswerten, eine entscheidung trift
        switch(action.type)
        {
            // inkrementieren wir, wird der count höher gesetzt
            case "INCREMENT":
                return { count: state.count + 1 }
            // dekrementieren wir, wird der count niedriger gesetzt
            case "DECREMENT":
                return { count: state.count - 1}
            case "RESET":
                return { count: 0 }
            default:
                throw new Error("Unknown Action");
        }
    }

    // state.count = der wert des states "count"
    // action.type = der typ der aktion

    // 5. wir erstellen einen useReducer() hook, in dem wir reducer als state, und den initialstate als sogenannten dispatcher einfügen, also als informations sender.
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <div className="App">
            {/* 6. in unserer app können wir den aktuellen state ausgeben */}
            <h1>
                {/* der wichtigste unterschied in unserer react konvention ist hier, das wir den state mit state.[statename] aufrufen. */}
                { state.count }
            </h1>
            {/* 7. die beiden folgenden buttons, senden den action type an das dispatch event, und führen dadutch den switch innerhalb der reducer funktion aus */}
            <button onClick={ () => dispatch({ type: "INCREMENT"})}>+</button>
            <button onClick={ () => dispatch({ type: "DECREMENT"})}>-</button>
            <button onClick={ () => dispatch({ type: "RESET"})}>RESET</button>
        </div>
    );
}

export default App;
