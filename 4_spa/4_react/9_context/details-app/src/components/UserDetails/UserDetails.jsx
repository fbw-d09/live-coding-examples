import { useContext } from 'react';

import { UserDetailsContext } from '../../UserDetailsContext';

export const UserDetails = () =>
{
    const { userDetails, setUserDetails } = useContext(UserDetailsContext);

    return(
        // das ganze geht auch ohne hook, mit einem wrapper komponenten, der die inhalte umschließt <UserDetailsContext.Consumer></UserDetailsContext.Consumer>

        // <UserDetailsContext.Consumer> { ({ userDetails, setUserDetails}) => (<div></div>)}
        <div>
            <h1>User:</h1>
            <p>Name: <b>{ userDetails.firstName } { userDetails.lastName }</b></p>
            <br />
            <p>Age: <b>{ userDetails.age }</b></p>
            <br />
            <p>Admin: <b>{ userDetails.isAdmin ? "YES" : "NO" }</b></p>

            <button onClick={ () => setUserDetails({ ...userDetails, isAdmin: !userDetails.isAdmin})}>Toggle Admin Rights</button> useContext(UserDetailsContext);
        </div>
        // </UserDetailsContext.Consumer>
    )
}
