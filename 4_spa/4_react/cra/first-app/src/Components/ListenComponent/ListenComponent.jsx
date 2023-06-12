import './ListenComponent.scss';

const testListe = [
    {
        name: "Max"
    },
    {
        name: "James"
    },
    {
        name: "Henry"
    },
    {
        name: "Ash"
    }
]

export const ListenComponent = () => {
    return(
        <div className="ListenComponent">

            <h2>User</h2>
            <ul>
            {
                // React möchte bei listen immer ein "key" haben, dieser bezieht sich auf den index des jeweiligen eintrages, in der liste, und wird im äußeren element der jeweiligen liste übergeben.
                testListe.map((user, i) =>
                {
                    return <li className='list-item' key={i}>{ user.name }</li>
                })
            }
            </ul>
        </div>
    )
}
