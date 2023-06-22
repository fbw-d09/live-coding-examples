// Eine von vielen sammlungen von custom hooks: https://react-hooks-library.vercel.app/functions
// Weitere custom hooks kann man googlen in dem man "react custom hooks" oder "react custom hook library" eingibt.

import useFetch from "./hooks/useFetch";

function App() {
    const [ data ] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <div className="App">
            <ul>
            {
                data &&
                data.map((item, i) => {
                    return <li key={i}>{item.title}</li>
                })
            }
            </ul>
        </div>
    );
}

export default App;
