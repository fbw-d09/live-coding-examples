import './App.css';

import React, { useState } from 'react';
// wir installieren react-router-dom per befehl: "npm install react-router-dom".
import { BrowserRouter, Routes, Route, Link, NavLink, Navigate } from 'react-router-dom';

import { Home, Blog, Contact, NotFound, Profile } from './pages'

function App() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    return (
        <div className="App">

            {/* WIr rufen den router auf, indem wir das element <BrowserRouter> in unserem code platzieren */}
            <BrowserRouter>
                <header>
                {/* header mit menu ohne router integration */}
                    <h3>Normale Navigation</h3>

                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/error">Fehlerseite</a></li>
                    </ul>

                    {/* Header mit menu mit router LINK integration */}
                    {/* Wichtig: Link MUSS innerhalb des browserRouters stehen, so kann es mit dem router interagieren und wird dafür sorgen, das die seite beim klicken eines links NICHT neu geladen wird, sondern NUR der inhalt ersetzt wird */}
                    <h3>Router Link Navigation</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/error">Fehlerseite</Link></li>
                    </ul>

                    {/* Header mit menu mit router NavLink integration */}
                    {/* NavLink kann durch das attribut activeClassName steuern, wie der link aussieht, wenn der browser gerade auf dem spezifischen pfad ist */}
                    {/* die standardklasse für den sichtbaren komponenten, der im menu angezeigt wird, ist ".active" */}
                    <h3>Router NavLink Navigation</h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/error">Fehlerseite</NavLink></li>
                        <li>
                        {
                            isLoggedIn ?
                            <button onClick={ () => setIsLoggedIn(false)}>LogOut</button>
                            :
                            <button onClick={ () => setIsLoggedIn(true)}>LogIn</button>
                        }
                        </li>
                    </ul>
                </header>

                <div className="page">
                    {/* wir erstellen eine ansammlung von routen */}
                    <Routes>
                        {/* 
                            path: der pfad zur adresse des komponenten
                            element: der komponent den wir an der adresse anzeigen wollen
                            exact: spezifiziert das NUR an diesem pfad der komponent angezeigt wird
                        */}
                        <Route
                            path="/"
                            element={
                                isLoggedIn ?
                                // <Navigate /> überschreibt die aktuelle position im browser, und schickt uns direkt zum komponenten, der dort hinterlegt ist
                                <Navigate to="/user/IchBinEinUser"/>
                                // Bei github wäre es etwas anders, dort scheint es die dashboard seite direkt zu laden, zb:
                                // <Profile>
                                :
                                <Home/>
                        }
                        />
                        {/* wir können auch props an komponenten innerhalb einer route übergeben */}
                        <Route path="/blog" element={ <Blog active={true} /> } />
                        {/* :id ist der param den wir auslesen wollen, aus /user/:id wird also /user/EINGABE, und auf der seite Profile können wir :id als id aus useParams auslesen. */}
                        {/* Wichtig ist, den doppelpunkt zu setzen, damit der router weiss das es sich um einen parameter handelt */}

                        {/* 
                        mehrere parameter in produktionslogik:
                        /kategorien/:kategorie/produkt/:produktId
                        zb:
                        /kategorien/salat/produkt/eisbergsalat
                         */}
                        <Route path="/user/:id" element={ <Profile/> } />
                        <Route path="/contact" element={ <Contact/> } />
                        {/* Eine 404 fehlerseite erstellt man, indem man am ende aller routen eine wildcard route erstellt (*), so wird sie als letztes eingeladen, und nur dann genutzt, wenn nichts anderes funktioniert */}
                        <Route path="*" element={ <NotFound/>} />
                    </Routes>
                </div>
            </BrowserRouter>

            <footer>
                <hr />
                <p>
                    Ich bin der footer...
                </p>
            </footer>
        </div>
    );
}

export default App;
