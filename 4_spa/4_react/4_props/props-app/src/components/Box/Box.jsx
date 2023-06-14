import "./Box.scss";

import { Paragraph } from './../'; // bei ./../ befindet sich die index datei von components, also können wir hier direkt importieren.

export const Box = (props) =>
{
    return (
        <div className="Box">
            <Paragraph
                hasArrow={true}
                color={ props.color }
            >
                { props.children }
            </Paragraph>
        </div>
    )
}
