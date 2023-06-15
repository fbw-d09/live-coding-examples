import React, { useState } from 'react';

import './App.css';

function App()
{
    const [ tasks, setTasks ] = useState([]);
    const [ inputText, setInputText ] = useState("");
    const [ showError, setShowError ] = useState(false);

    /**
     * @method createId();
     * @description Gibt eine zufällige ID zurück
     * @returns { string }
     */
    const createId = () =>
    {
        // wir wandeln den normalen Math.random(); in einen 16 bit string um und entfernen die ersten beiden letter.
        return Math.random().toString(16).substr(2,8);
    }

    /**
     * @method handleNeWTaskInput();
     * @description Behandelt die eingabe des textfeldes
     * @param { object } e
     */
    const handleNeWTaskInput = (e) =>
    {
        setInputText(e.target.value);
    }

    /**
     * @method addTask();
     * @description fügt eine neue task hinzu und löscht den text des input feldes
     */
    const addTask = () =>
    {
        if(inputText !== "")
        {
            const newTask = 
            {
                id: createId(),
                text: inputText,
                isFinished: false
            }

            setTasks(tasks => [newTask, ...tasks]);
            setShowError(false);
            setInputText("");

        }
        else
        {
            setShowError(true);
        }
    }

    /**
     * @method toggleTask();
     * @description schaltet den zustand zwischen "finished" und "active" um
     * @param { object } e
     * @param { string } id - die ID des eintrags
     */
    const toggleTask = (e, id) =>
    {
        const currentTask = tasks.filter(task => task.id === id)[0];
        const otherTasks = tasks.filter(task => task.id !== id);

        // Boolean toggle
        currentTask.isFinished = !currentTask.isFinished;
        setTasks([ currentTask, ...otherTasks ]);
    }

    /**
     * @method deleteTask();
     * @description löscht ein element aus der task array anhand seiner id
     * @param { object } e
     * @param { string } id
     */
    const deleteTask = (e, id) =>
    {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    }

    return (
        <div className="App">

            <h1>Todo App</h1>

            {/* zum testen des zufalls id generators: */}
            {/* { createId() } */}

            <h2>Neue Aufgabe hinzufügen</h2>

            <div className="newTaskInput">
                <input
                    type="text"
                    onChange={ handleNeWTaskInput } // durch die angabe von einer funktion in onChange übergeben wir die aktuelle eingabe an den setter
                    value={ inputText } // der inhalt des text-feldes kommt vom state, der mit dem onChange verändert wurde
                    className={ `${ showError ? "errorOutline" : "normalOutline" }`}
                />
                <button onClick={ addTask }>Task Hinzufügen</button>

                {
                    showError && <p className='error'>Text darf nicht leer sein!</p>
                }
            </div>

            <h2>Bisherige Aufgaben</h2>

            {
                tasks.length > 0 ?
                (
                    <ul>
                        {
                            tasks.map((task, i) =>
                            {
                                return(
                                    <li key={i} className={ task.isFinished ? 'finished' : 'active' }>
                                        <span className="taskText" onClick={ (e) => toggleTask(e, task.id) }>
                                            {task.text}
                                        </span>
                                        <button onClick={ (e) => deleteTask(e, task.id)}>x</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
                :
                (
                    <p>Keine Aufgaben vorhanden!</p>
                )
            }

            <p className='copyrightLine'>
              <i>&copy; { new Date().getFullYear() } by Unserer Klasse</i>
            </p>
        </div>
    );
}

export default App;
