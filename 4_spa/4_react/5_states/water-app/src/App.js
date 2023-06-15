import { useState } from 'react';
import './App.css';

import { Message, Water } from './components/';

function App() {

  const [ isVisible, setIsVisible ] = useState(true); // let isVisible = true;

  return (
    <div className="App">
      <Water/>

      <br />
      <br />

      <Message
        color="tomato"
        initVisibility={ isVisible }
      >
        Hallo Welt!
      </Message>
    </div>
  );
}

export default App;
