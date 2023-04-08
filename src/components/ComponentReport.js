/* Zad 2 Importuję style  i obrazek zastosuję poniżej */
/* KOmponent z linią trendu */
import React, {useState} from "react";
import 'bulma/css/bulma.min.css';
import './style.css';
import trend from './trend.png';

function ComponentReport() {
    return (
        <div className="block">
            <p className="fontMedium">Trend line</p>
            <img src={trend} />
        </div>
    )
    }

export default ComponentReport;