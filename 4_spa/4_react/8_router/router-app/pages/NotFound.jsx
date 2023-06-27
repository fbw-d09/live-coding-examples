// Wir importieren useNavigate, um den navigation hook zu implementieren
import { useNavigate } from "react-router-dom"

export const NotFound = () =>
{
    const navigate = useNavigate();

    return(
        <div>
            <h1>404</h1>

            <p>Seite nicht gefunden!</p>

            {/* Gehe zurück zur vorherigen seite */}
            <button onClick={ () => navigate(-1) }>Zur vorherigen seite</button>
            {/* gehe mehrere seiten zurück */}
            {/* <button onClick={ () => navigate(-2) }>Zur vorherigen-vorherigen seite</button> */}

            {/* das ganze geht auch in die andere richtung, mit 1, 2 usw kommen wir seiten vorwärts */}

            {/* spezifische seite per useNavigate aufrufen */}
            <button onClick={ () => navigate('/contact')} >Melden sie uns den fehler!</button>
        </div>
    )
}
