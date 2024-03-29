// Wir nehmen unseren counter und werfen ihn in einen komponenten

// 1. Wir imoportieren useReducer() von react
import { useReducer } from "react";

// 2. Wir erstellen die reducer funktion, diese kann ausserhalb des komponenten liegen
const reducer = (state, action) =>
{
    switch(action.type)
    {
        case "INCREMENT":
            return { count: state.count + 1}
        case "DECREMENT":
            return { count: state.count - 1}
        default:
            throw new Error("Unknown Action");
    }
}

// 3. hier schreiben wir eine initFunktion und übergeben ihr ein value.
const initFunction = (initValue) =>
{
    //  4. wir returnen den übergebenen wert als wert des states:
    return { count: initValue + 10 }
}

// 5. wir schreiben unseren komponenten und übergeben eine prop, die den startwert des counters angibt.
const Counter = ({ startValue }) =>
{
    // 6. wir schreiben unseren reducer, und fügen den startValue als zweiten, und die init funktion as dritten wert an.
    const [ state, dispatch ] = useReducer(reducer, startValue, initFunction);

    // 7. jetzt könenn wir unseren komponenten genauso schreiben wie vorher
    return(
        <div>
            <h1>{ state.count }</h1>
            <button onClick={ () => dispatch({ type: "INCREMENT"})}>+</button>
            <button onClick={ () => dispatch({ type: "DECREMENT"})}>-</button>
        </div>
    )
}

export default Counter;
