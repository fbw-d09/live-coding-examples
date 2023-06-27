// aus react-router-dom importieren wir "useParams"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Profile = () =>
{
    const { id } = useParams();

    const navigate = useNavigate();

    return(
        <div>
            <h1 style={{ color: "tomato" }}>Profil von { id }</h1>

            <p>Hier stehen profildaten { id }</p>

            <h1>Freundesliste</h1>

            <ul>
                <li>
                    <button onClick={ () => navigate('/user/Behzad')}>Behzad</button>
                </li>
                <li>
                    <button onClick={ () => navigate('/user/Benni')}>Benni</button>
                </li>
                <li>
                    <button onClick={ () => navigate('/user/Imad')}>Imad</button>
                </li>
                <li>
                    <button onClick={ () => navigate('/user/Miad')}>Miad</button>
                </li>
                <li>
                    <button onClick={ () => navigate('/user/Ruben')}>Ruben</button>
                </li>
            </ul>
        </div>
    )
}
