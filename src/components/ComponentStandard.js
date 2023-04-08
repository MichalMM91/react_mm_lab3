/* Zad 2 Importuję style i zastosuję poniżej */
/* Komponent reużywalny standard, któremu podaję propsy dzięki 
czemu zmienia stan i może prezentować zarówno np. Profit jak i Transactions*/
import React, {useState} from "react";
import 'bulma/css/bulma.min.css';
import './style.css';

function ComponentStandard(props) {
    return (
        <div className="block">
            <p className="fontMedium">{props.nameofcomp}</p>
            <p className="number">{props.amount}</p>
            <p className={props.trendstyle}>{props.trend}</p>
        </div>
    )
    }

export default ComponentStandard;