import './App.css';

function App() {

    // Wir erstellen eine liste an usern:
    const userList =
    [
        {
            firstName: "Max",
            lastName: "Mustermann",
            age: 17
        },
        {
            firstName: "James",
            lastName: "Bond",
            age: 47
        },
        {
            firstName: "Michael",
            lastName: "Knight",
            age: 35
        }
    ]
    const isValid = true;
    const isAdult = (age) =>
    {
        return age > 18;
    }

    return (
        // <></> oder <React.Fragment></React.Fragment> ist eine möglichkeit um in JSX innerhalb eines code blockes mehrere html elemente auf einer ebene zu platzieren.
        <>
            <h2>JavaScript in JSX nutzen</h2>

            <p>
                Wenn wir JavaScript in unserem react code innerhalb des JSX returns nutzen wollen, schreiben wir unseren code in geschwungene klammern, also code blöcke. Wichtig ist, das wir dort auf semikolons verzichten.
            </p>

            <p>WICHTIG: Die rückgabe wird immer als string ausgegeben</p>

            { 5 + 7 }

            <p>
                { `${ userList[0].firstName } ${ userList[0].lastName }` } is { userList[0].age } years old!
            </p>
            <p>
                { 
                    // &nbsp; steht für ein leerzeichen
                    `${ userList[0].firstName } ${ userList[0].lastName }`} is&nbsp;
                    {
                        isAdult(userList[0].age) ? "old enough" : "not old enough"
                    }
            </p>

            <hr />

            <h2>For in JSX = MAP</h2>

            <p>
                Wenn wir durch etwas loopen wollen, und den inhalt ausgeben wollen, nutzen wir map. Wir geben jedem element einen key, damit jeder eintrag definitiv innerhalb von react nummeriert ist.
            </p>

            <ul>
                {
                    // Innerhalb des map's returnen wir unser gelooptes element mit den gewünschten inhalten
                    userList.map((user, i) => {
                        return <li key={ i }>{ user.firstName } { user.lastName }</li>
                    })
                }
            </ul>

            <hr />

            <h2>Kommentare in JSX</h2>
            
            <p>Kommentare werden immer in brackets eingeleitet, und dann im multiline oder jsdoc style geschrieben, innerhalb von code blöcken verhalten sich kommentare genau wie in JavaScript</p>

            <p>In JSX funktionieren die gleichen abkürzungen für kommentare wie sonst auch, also zb STRG+K / C</p>

            {/* Ich bin nur eine zeile lang */}

            {/**
             * JSDoc style
             * 
             * 
             * 
            */}

            {/* 
                Ich
                bin
                mehrere
                zeilen
                lang
            */}

            <hr />

            <h2>"Conditional Rendering" oder "Zeige dinge nur, wenn du darfst!"</h2>

            <p>
                Conditional Rendering funktioniert in react genau wie in der Dom, wir sagen "WENN X ZUTRIFFT, zeige etwas an, WENN Y ZUTRIFFT, zeige etwas anderes"
            </p>

            <h3>Markiere volljährige mitglieder:</h3>

            <ul>
                {
                    userList.map((user, i) =>
                    {
                        return(
                            <li
                                key={ i }
                                style={{
                                    width: 200,
                                    color: i === 2 ? "red" : "blue",
                                    backgroundColor: isAdult(user.age) ? 'lime' : 'tomato'
                                }}
                            >
                                { i }: { user.firstName } { user.lastName }
                            </li>
                        )
                    })
                }
            </ul>

            <p>
                Wir können anhand von ternarys auch die ansicht ganzer html elemente steuern:
            </p>

            {
                isValid ?
                (
                    <div style={ { background: "lime", width: 200, padding: 20 } }>
                        <p>isValid is true</p>
                    </div>
                )
                :
                (
                    <div style={{ background: "tomato", width: 200, padding: 20}}>
                        <p>isValid is false</p>
                    </div>
                )
            }

            <hr />

            <p>Wichtig ist, das wir die unterschiede der klammern in JSX bedenken</p>

            <ul>
                <li>() = html elemente innerhalb von JavaScript werden returned</li>
                <li>{ "{}" } = JavaScript code block</li>
            </ul>
        </>
    );
}

export default App;
