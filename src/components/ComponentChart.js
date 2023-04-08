/* Zad 2 Importuję style i zastosuję poniżej */
/* Komponent z wykresem w formie obrazka */
import React, {useState} from "react";
import 'bulma/css/bulma.min.css';
import './style.css';
import coder from './coder.png';
import chart from './chart.png';
import growth from './growth.png';

function ComponentChart() {
    return (
        <div className="block">
           <div className="columns">
                <div className="column is-three-quarters ">
                    <p className="fontMedium">Total revenue</p>
                    <img src={chart} />
                </div>
                <div className="column is-one-quarter align-vertically ">
                    <img src={growth} />
                    <p>2022: +8,3%</p>
                    <p>2023: +9,1%</p>
                </div>
            </div>
        </div>
            
        
    )
    }

export default ComponentChart;