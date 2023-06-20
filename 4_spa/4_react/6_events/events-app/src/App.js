// Wir importieren useState von React:
import React, { useState } from 'react';

// Mehr informationen zu events in react: https://de.reactjs.org/docs/events.html

// 1. Wir ändern die app um, um ein click toggle event zu implementieren
// 2. Wir können parameter außer "event" an den event-handler übergeben, dafür müssen wir ihn mit einer anonymen funktion aufrufen.
// 3. Wir können auch andere events, wie onChange nutzen, mit dem wir übergeben können, was gerade geschrieben wird.

function App()
{
    // 1. Wir erstellen eine useState hook, den wir auf false setzen
    const [ isToggled, setIsToggled ] = useState(false);

    // 2. Wir erstellen einen weiteren useState hook, den wir book nennen.
    const [ book, setBook ] = useState("Harry Potter");

    // 3. Wir erstellen einen weiteren useState hook, in dem wir den aktuellen text speichern wollen, der eingegeben wird, und initialisieren diesen state mit einem leeren string.
    const [ textValue, setTextValue ] = useState(""); // let textValue = "";

    const [ password, setPassword ] = useState("");
    const [ passwordConfirm, setPasswordConfirm ] = useState("");
    const [ showError, setShowError ] = useState(false);

    // 1. In react rufen wir den addEventListener NIE Selber auf, sondern erstellen eine funktion, der wir das event übergeben,  so stellen wir eine funktion zur verfügung, die ein event ausführen kann.
    const handleClick = (e) =>
    {
        // .preventDefault(); sorgt dafür, das ein element nicht seine standardmäßige reaktion ausführt, wenn das event übergeben wird.
        e.preventDefault();

        // es gibt ein attribut, mit dem wir über prüfen können, ob ein event mit .preventDefault(); bestückt wurde.
        console.log(e.defaultPrevented);

        setIsToggled(!isToggled);
    }

    // 2. Wir erstellen einen weiteren handler, in dem wir den wert von book ändern, diesmal übergeben wir einne zweiten parameter.
    const handleBookChange = (e, bookName) =>
    {
        e.preventDefault();
        
        // wir können das aktuelle event target ausgeben:
        console.log(e.currentTarget);

        // Wir geben bookName an setBook(); Weiter
        setBook(bookName);
    }

    // 3. Wir erstellen eine event funktion, in der wir den aktuellen wert des input states übergeben.
    const handleTextChange = (e) =>
    {
        setTextValue(e.target.value);
    }

    const handlePaswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handlePasswordConfirmChange = (e) =>
    {
        setPasswordConfirm(e.target.value)
    }

    const handleButton = (e) =>
    {
        if(password === "" && passwordConfirm === "")
        {
            setShowError(true);
        }
        else if(passwordConfirm !== password)
        {
            setShowError(true);
        }
        else
        {
            setShowError(false);
            alert("Hallo Welt");
        }
    }

    return (
        <div className="App" style={{ textAlign: 'center' }}>
            <h1>Events in React</h1>

            <h2>1. onClick</h2>
            <p style={{ fontWeight: "bold" }}>
                { isToggled ? "AN" : "AUS" }
            </p>

            {/* 1. Wir erstellen ein klickbares element, in dem wir handleClick übergeben, eine funktion die das klicken behandelt */}
            {/* onClick={ handleClick } anstelle von onclick="handleClick()" */}
            <a href="https://google.de" onClick={ handleClick }> {/* oder onClick={ (e) => handleClick(e) } */}
                Klick!
            </a>

            <h2>2. onClick mit Parameterübergabe</h2>

            {/* 2. Wir erstellen ein textElement das den buchnamen ausgibt. */}
            <p>Das Aktuelle Buch ist <b>{ book }</b></p>

            {/* 2. Wir erstellen ein weiteres klickbares element, diesmal übergeben wir einen wert mit einer anonymen funktion */}
            <a href="#" onClick={ (e) => handleBookChange(e, "Casino Royale") }>
                Anderes Buch anzeigen
            </a>

            <h3>3. onChange</h3>

            {/* 3. Wir erstellen ein input element, das wwir mit einem onChange event ausstatten */}
            <input type="text" onChange={ handleTextChange } />

            {/* 3. Wir erstellen ein <p/> element, in dem wir den aktuellen text ausgeben */}
            <p>Der eingebene text ist: <b>{ textValue }</b></p>

            {/* 3. Da wir den wert des text-inputs als state speichern, können wir den value auch an andere input felder als wert übergeben. */}
            <p>Wir kopieren den text eines input feldes</p>
            <input type="text" readOnly value={ textValue } />

            <hr />

            <h3>Password</h3>

            <input type="text" onChange={ handlePaswordChange } />

            <br />

            <input type="text" onChange={ handlePasswordConfirmChange } />

            {
                showError && <p>Die passwörter stimmen nicht überein!</p>
            }

            <br />

            <button onClick={ handleButton }>Klick</button>
        </div>
    );
}

export default App;
