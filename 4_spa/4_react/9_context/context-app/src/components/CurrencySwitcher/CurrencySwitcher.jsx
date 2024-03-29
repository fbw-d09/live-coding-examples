// wir importieren useContext von react.
import { useContext } from "react";

// wir importieren unseren Context
import { CurrencyContext } from "../../CurrencyContext";

export const CurrencySwitcher = () => 
{
    // durch das nutzen von getter und setter des context als object, können wir hier unseren context-state überall ändern wo wir wollen.
    const { currency, setCurrency } = useContext(CurrencyContext);

    return(
        <div>
            {/* im onClick event übergeben wir setCurrency unser verändertes objekt für die anzeige des preises */}
            <button onClick={ () => setCurrency({ type: '€', conversion: 1 })}>EURO</button>
            <button onClick={ () => setCurrency({ type: '$', conversion: 1.13 })}>US DOLLAR</button>

            <div>
                {/* am ende unserer switcher komponente geben wir die aktuelle currency aus */}
                selected Currency: { currency.type }
            </div>
        </div>
    )
}