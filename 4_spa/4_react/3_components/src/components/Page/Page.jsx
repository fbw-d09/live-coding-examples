import './Page.scss';
import { Message } from './components';

export const Page = () =>
{
    const handleClick = () =>
    {
        console.log("Ich wurde angeklickt!");
    }

    return(
        <div className="Page">
            <button
                onClick={ handleClick }
            >
                Sag etwas in der konsole!
            </button>

            <Message isVisible={true} state="success"/>
            <Message isVisible={false} />
            <Message isVisible={true} state="failure">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </Message>
            <Message isVisible={true} state="success">
                Hallo Welt!
            </Message>
            <Message isVisible={false} />
        </div>
    )
}
