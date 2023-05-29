/* Zad 2 Importuję style i ikony i zastosuję poniżej */
/* Oto Leftbar przechowujący menu, na menu statycznie oznaczony isactive, dynamiczny hover */
import React, {useState} from "react";
import './style.css';
import 'bulma/css/bulma.min.css';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import ChatBox from "./ChatBox";



function LeftBar() {
    return (
        <div className="left-bar is-dark">
            <div className="block logo">
              <h1><Icon icon="mdi:cloud-circle-outline" /> SharpInterfaces.com</h1>
              
            </div>
            <aside className="menu">
              <ul className="menu-list">
                <li><Link to="/dashboard"><Icon icon="material-symbols:activity-zone" />  Dashboard</Link></li>                
                <li><Link to="/layouts"><Icon icon="material-symbols:assistant-on-hub-sharp" />  Layouts</Link></li>              
              </ul>
              <p className=" m-2 menu-label">
                Pages
              </p>
              <ul className="menu-list">
                <li><a>Account Settings</a></li>
                <li><a>Authentication</a></li>
                <li><a>Misc</a></li>
              </ul>
              <p className="m-2 menu-label">
                Components
              </p>
              <ul className="menu-list">
                <li><a>Cards</a></li>
                <li><a>User Interface</a></li>
                <li><a>Extended UI</a></li>
                <li><a>Boxicons</a></li>
              </ul>
              <p className="m-2 menu-label">
                Forms and Tables
              </p>
              <ul className="menu-list">
                <li><a>Cards</a></li>
              </ul>
            </aside>
            <ChatBox/>
        </div>


    )
    }

export default LeftBar;