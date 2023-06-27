// Book ist ein sogenannter consumer component, mit dem wir auf den provider wert zugreifen wollen.
// Der provider stellt also dem consumer daten über die ganze app hinweg zur verfügung.
// oder => Der provider "Provided", also "Versorgt" den Consumer, also den "Verbraucher" mit den gewünschten daten

// wir importieren den useContext hook
import { useContext } from 'react';

// wir importieren unseren angelegten context
import { CurrencyContext } from '../../CurrencyContext';

import './Book.css';

export const Book = ({ item }) => 
{
    // innerhalb unseren hooks geben wir den gewünschten context an:
    const currencyHook = useContext(CurrencyContext);

    return(
        <li className="Book">
            <b>{ item.title } ({ item.topic })</b>
            <span>&nbsp;{ (item.price * currencyHook.currency.conversion).toFixed(2) } { currencyHook.currency.type }</span>
            <br />
            <img src={ item.cover } alt={ item.title } />
            <p>
                by { item.author }
            </p>
        </li>
    )
}
