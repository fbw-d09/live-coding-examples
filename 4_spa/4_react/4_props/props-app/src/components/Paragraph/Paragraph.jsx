import './Paragraph.scss';

export const Paragraph = (props) =>
{
    console.log(props);

    return(
        <div className="Paragraph">
            {/* props.children sorgt dafür, das wir in einem komponenten element innerhalb von jsx von aussen javascript übergeben können. dadurch wird der komponent der children aufruft, zu einer art wrapper-komponente, also wird sie um den inhalt herum geschachtelt. */}
            <p>
                {
                    // wir können auf jegliche attribute die von props übergeben wurden zugreifen
                    props.hasArrow &&
                    <span style={{ color: props.color }}>
                        =&gt;
                    </span>
                }
                { props.children }
                {/* props.children kommt vom "text" eintrag, des arrays */}
            </p>
        </div>
    )
}