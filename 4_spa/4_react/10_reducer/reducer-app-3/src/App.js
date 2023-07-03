import { useReducer } from 'react';

function App()
{
    /*
        In programiersprachen wie c# oder java ist es eine gängige praxis action types und andere typensammlungen mit sogenannten "ENUMS" (Enumerable types) zu definieren. Die variablennamen sind meist zur identifikation einer bestimmten sortierung angelegt. So könnte in enum zum beispiel aussehen:

        In c#, Java, TypeScript:
        const MessageType = 
        {
            INFO,
            WARNING,
            ERROR
        }

        In JavaScript:
        const MessageType = 
        {
            INFO: "info",
            WARNING: "warning",
            ERROR: "error"
        }

        Würden wir code haben, der eine message erstellen soll, und wir in den wert type: MessageType.INFO geben, könnten wir innerhalb eines switches dann dort den typ vergleichen, und entscheiden was bei einer message des types INFO passieren soll. 

        Da es in javascript den datentyp enum nicht gibt, können wir anstelle dessen objekte nutzen, die wir ähnlich aufbauen, um in unserem switch den stringwert des ausgewählten types zu vergleichen. Das gibt uns den vorteil, das wir uns bei wiederholen der string eingabe nicht verschreiben und wir uns nicht wiederholen müssen.
        */

        const actionType = 
        {
            COLOR_CHANGE: "colorChange",
            PET_CHANGE: "petChange"
        }

        const reducer = (state, action) =>
        {
            switch(action.type)
            {
                case actionType.COLOR_CHANGE:
                    // die anderen states mit einbeziehen:
                    return { ...state, color: action.value }
                case actionType.PET_CHANGE:
                    return { ...state, pet: action.value }
                default:
                    console.error("ERROR: OPTION NOT AVAILIBLE");
            }
        }

        // wir schaffen uns für unsere beiden states initialwerte
        const initialState = 
        {
            color: "Schwarz",
            pet: "Katze"
        }

        // Wir erstellen den reducer
        const [ state, dispatch ] = useReducer(reducer, initialState);

        // wir erstellen zwei objekte mit werten zur auswahl für unsere selekt boxen:
        // eine auswahl an faben:
        const color = 
        {
            black: "Schwarz",
            blue: "Blau",
            yellow: "Gelb"
        }

        // eine auswahl an tieren:
        const pet = 
        {
            cat: "Katze",
            dog: "Hund",
            mouse: "Maus"
        }

        return(
            <div className="App">
                <h1>Wähle eine Farbe und ein Tier:</h1>
                <br />
                {/* in den selekt boxen nutzen wir den initialstate von color und pet als value */}
                <select
                    value={ state.color }
                    onChange={ (e) => dispatch({ type: actionType.COLOR_CHANGE, value: e.target.value })}
                >
                    {/* in den select options nutzen wir sowohl als value, wie auch als beschreibung den value der jeweiligen auswahl */}
                    <option value={ color.black }>{ color.black }</option>
                    <option value={ color.blue }>{ color.blue }</option>
                    <option value={ color.yellow }>{ color.yellow }</option>
                </select>

                <br />

                <select
                    value={ state.pet }
                    onChange={ (e) => dispatch({ type: actionType.PET_CHANGE, value: e.target.value })}
                >
                    <option value={ pet.cat }>{ pet.cat }</option>
                    <option value={ pet.dog }>{ pet.dog }</option>
                    <option value={ pet.mouse }>{ pet.mouse }</option>
                </select>

                <br />

                {/* am ende geben wir unsere aktuelle auswahl aus */}
                <p>Aktuelle auswahl</p>
                <ul>
                    <li>Farbe: { state.color }</li>
                    <li>Tier: { state.pet }</li>
                </ul>
            </div>
        )
}

export default App;
