// wir importieren unseren komponenten
import Counter from './components/Counter';

import './App.css';

function App() {
    return (
        <div className="App">
            {/* danach können wir unseren komponenten der app hinzufügen und einen startwert für den counter übergeben */}
            <Counter startValue={ 5 }/>
        </div>
    );
}

export default App;
