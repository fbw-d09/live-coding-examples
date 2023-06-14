import './Circle.scss';

// Mit hilfe des deconstructors können wir werte direkt aus dem props objekt ziehen.
export const Circle = ({ color, showInnerCircle }) =>
{
    // Die werte wären entsprechend:
    // props.color;
    // props.showInnerCircle;

    return(
        <div className="Circle" style={{ background: color }}>
            {/* color: color; */}
            {
                showInnerCircle &&
                <div className="innerCircle" style={{ color }}>
                    Hallo
                </div>
            }
        </div>
    )
}