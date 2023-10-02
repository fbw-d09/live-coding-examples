import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hallo Welt!</h1>
      
      <span>
        Counter:
        <h2>{ count }</h2>
      </span>
      <button onClick={() => setCount(count +1)}>Increment</button>
    </div>
  );
}

export default App;
