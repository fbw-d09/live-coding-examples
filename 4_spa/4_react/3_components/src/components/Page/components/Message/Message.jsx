import './Message.scss';

export const Message = (props) =>
{
    if(!props.isVisible)
    {
        return null;
    }
    else
    {
        return (
            <div className={`Message ${ props.state }`}>
                { props.children ? props.children : "NO MESSAGE" }
            </div>
        )
    }
}
