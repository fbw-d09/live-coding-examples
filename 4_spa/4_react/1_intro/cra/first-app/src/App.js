import logo from './logo.svg';
import './App.scss';

import { TestComponent, ListenComponent } from './components';

const isLoggedIn = true;

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* Hallo Welt */}

                <TestComponent/>

                {
                    // Wichtig ist, das wir code, in JSX in brackets schreiben.
                    // IF/ELSE können wir hier nur als ternary verwenden.

                    isLoggedIn ?
                    <p>
                        Wir sind Eingeloggt!
                    </p>
                    :
                    <p>
                        Wir sind nicht eingeloggt!
                    </p>
                }

                <ListenComponent/>

                {
                    isLoggedIn &&
                    <i>Hallo Welt!</i>
                }
            </header>
        </div>
    );
}

export default App;
