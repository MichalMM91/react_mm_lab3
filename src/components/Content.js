/* Zad 2 Importuję style i komponenty i zastosuję poniżej */
/* W tym componencie w formie siatki kolumn importuję kolejne kompomenty i umieszczam w divach
Komponent Standard jest reużywalny (4x) i podaję mu wartości dzięki czemu jest w wielu stanach - Profit Sales Payments i Transactions */
/* Strona jest rwd - dzięki użyciu odpowiednich klas bulmy */
import React from "react";
import ComponentTop from './ComponentTop';
import ComponentIntro from './ComponentIntro';
import ComponentStandard from "./ComponentStandard";
import ComponentChart from "./ComponentChart";
import ComponentReport from "./ComponentReport";
import 'bulma/css/bulma.min.css';
import './style.css';
import FontSizeChanger from 'react-font-size-changer';

function Content() {
    return (
       
          <div >
            
            <div className="m-2  columns is-desktop">
              <div className="m-2 widget column is-three-quarters">
                <ComponentTop/>
              </div>
                
            </div>
            <div className="m-2  columns is-multiline is-desktop">
              <div className="widget m-2 block column is-half">
                <ComponentIntro/>
              </div>
              <div className="widget m-2  column is-one-quarter">
              <ComponentStandard nameofcomp="Profit" amount="$6545" trend="+28%" trendstyle="trend-up"/>
              </div>
              <div className="widget m-2  column is-half">
              <ComponentChart/>
              </div>
              <div className="widget m-2  column is-one-quarter">
              <ComponentReport/>
              </div>
              <div className="widget m-2  column is-one-quarter">
              <ComponentStandard nameofcomp="Sales" amount="$4432" trend="-2%" trendstyle="trend-down"/>
              </div>
              <div className="widget m-2  column is-one-quarter">
              <ComponentStandard nameofcomp="Payments" amount="$7526" trend="-13%" trendstyle="trend-down"/>
              </div>
              <div className="widget m-2  column is-one-quarter">
              <ComponentStandard nameofcomp="Transactions" amount="$8675" trend="0%" trendstyle="trend-even"/>
              </div>
  
            </div>
          </div>




    )
    }

export default Content;