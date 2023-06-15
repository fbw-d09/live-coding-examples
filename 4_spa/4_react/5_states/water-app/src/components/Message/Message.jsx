import React, { useState } from 'react';

export const Message = ({ 
    color, 
    initVisibility, // initVisibility = true;
    children
}) => {
    const visibilityState = initVisibility; // visibilityState = true;

    const [ visible, setVisible ] = useState(visibilityState); // visible = true;

    const handleVisibility = () =>
    {
        setVisible(false);
    }

    return(
        <>
            <div
                style={{
                    background: `${ color || "cyan" }`,
                    border: "1px solid black",
                    width: "200px",
                    display: `${ visible ? "block" : "none" }`,
                    margin: "0 auto"
                }}
            >
                { children }
                <button onClick={ handleVisibility }>x</button>
            </div>
        </>
    )
}