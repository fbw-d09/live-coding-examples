import { useState } from 'react';

import { UserDetailsContext } from './UserDetailsContext';

import './App.css';
import { UserDetails } from './components';

function App()
{
    const [ userDetails, setUserDetails ] = useState({
        firstName: "Max",
        lastName: "Mustermann",
        age: 25,
        isAdmin: true
    });

    const value = { userDetails, setUserDetails };

    return (
        <UserDetailsContext.Provider value={ value }>
            <div className="App">
                <UserDetails/>

                <hr />

                <h2>Change { userDetails.firstName }'s Age:</h2>
                <input
                    type="number"
                    value={ userDetails.age }
                    onChange={ (e) => setUserDetails({ ...userDetails, age: e.target.value })}
                />

                <h2>Is { userDetails.firstName } an Admin?</h2>
                <b>{ userDetails.isAdmin ? "Yes" : "Nope" }</b>
            </div>
        </UserDetailsContext.Provider>
    );
}

export default App;
