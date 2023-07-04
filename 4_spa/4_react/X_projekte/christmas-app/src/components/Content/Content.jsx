// applikationsimports (react, module)
import React, { useState, useEffect } from 'react';

// Andere komponenten
import { Card } from '../';

// stylesheet des komponenten
import './Content.scss';

export const Content = () =>
{
    const [ isLoading, setIsLoading ] = useState(true); // für das laden, default: true
    const [ joke, setJoke ] = useState({}); // für den inhalt des geladenen witzes, default: {}

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            fetch("https://v2.jokeapi.dev/joke/Christmas")
            .then(response => response.json())
            .then(data =>
            {
                console.log(data);
                setJoke(data);
                setIsLoading(false);
            });
        }

        fetchData();
    }, []);

    return(
        <main className="Content">
        {
            isLoading ?
            <div>Läd...</div>
            :
            <Card setup={ joke.setup } delivery={ joke.delivery }/>
        }
        </main>
    )
}
