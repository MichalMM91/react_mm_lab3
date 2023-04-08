/* Zad 2 Importuję style i zastosuję poniżej */
/* Komponent powitalny Hello, Michał */
import React, {useState} from "react";
import 'bulma/css/bulma.min.css';
import './style.css';
import coder from './coder.png';

function ComponentIntro() {
    return (
        <div className="block">
            <div className="columns is-desktop">
                <div className="column is-three-quarters">
                    <h1 className="fontBig">Hello, Michał</h1>
                    <p>You've done 72% increase in sales today.<br>
                    </br>Congratulations !</p>
                </div>
                <div className="column is-one-quarter">
                    <img src={coder} />
                </div>
            </div>
        </div>
    )
    }

export default ComponentIntro;