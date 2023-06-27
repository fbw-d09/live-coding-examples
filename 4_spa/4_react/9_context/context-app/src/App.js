import { useState } from 'react';
import { Books, CurrencySwitcher } from './components';

// nachdem wir die app vorbereitet haben, können wir unseren kontext importieren
import { CurrencyContext } from './CurrencyContext';

// wir erstellen ein array mit büchern, dessen informationen und preise wir anzeigen wollen.
const bookArray = [
    {
        id: 1,
        title: "The Hound of the Baskervilles",
        topic: "Sherlock Holmes",
        author: "A. C. Doyle",
        price: 14.99,
        cover: 'https://images-eu.ssl-images-amazon.com/images/I/515zykn7ZmL._SY264_BO1,204,203,200_QL40_ML2_.jpg'
    },
    {
        id: 2,
        title: "Casino Royale",
        topic: "James Bond 007",
        author: "Ian Flemming",
        price: 9.99,
        cover: 'https://images-eu.ssl-images-amazon.com/images/I/41QW2wQzV0L._SY264_BO1,204,203,200_QL40_ML2_.jpg'
    }
];

function App()
{
    // nachdem wir gelernt haben wie wir statische werte anzeigen (unstateful), wollen wir sehen das wir context in echtzeit dynamisch (stateful) verändern können, wir können zum beispiel auf einem button click die genutzte currency ändern. Dafür müssen wir nur einen state nutzen, den wir als wert übergeben.
    const [ currency, setCurrency ] = useState({ type: "€", conversion: 1 });

    // wir bauen getter und setter in ein objekt ein, das wir dem provider übergeben können
    const value = { currency, setCurrency };

    return (
        // nachdem wir unseren kontext importiert haben, erstellen wir einen provider, in den wir unsere komplette app stecken, dies sorgt dafür, das wir innerhalb des providers jetzt überall auf den wert zugreifen können. Bei der value des providers geben wir unseren anfangswert an, und können diesen jetzt in jedem anderen komponenten innerhalb der app benutzen
        <CurrencyContext.Provider value={ value }>

            {/* wir importieren unseren currencySwitcher */}
            <CurrencySwitcher/>
            <div className="App">
                <Books list={ bookArray }/>
            </div>
        </CurrencyContext.Provider>
    );
}

export default App;
