/* Zad 2 Importuję style i zastosuję poniżej */
/* Poniższy komponent jest górnym paskiem z polem inputu do wyszukiwania i zajmuje całą szerokość przewidzianą na konent (pełna kolumna) */
import React, {useState} from "react";
import 'bulma/css/bulma.min.css';
import './style.css';
import { Icon } from '@iconify/react';

function ComponentTop() {
    return (
        <div className="columns is-6 is-desktop">
            <div className="widget-no-space column is-three-quarters">
                <div className="field">
                    <div className="control">
                       <input className="input" type="text" placeholder="Search">   
                        </input>
                    </div>
                </div>
            </div>
            <div className="widget-no-space column fontSmall">
                
                <div className="buttons">
                    <button className="button is-info">
                        <span className="icon">
                            <Icon  icon="mingcute:search-fill" /> 
                        </span>
                        <span><b>Search</b></span>
                    </button>
                     
                     
                </div>
            </div>
            <div className="widget-no-space  column">
                <figure className="image is-64x64">
                    <img className="is-rounded" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/862e120a-a838-4e27-ad5c-712573a028a6/dcx759r-6d6faf9a-05b6-4685-8aee-ba964bf5143b.jpg/v1/fill/w_1280,h_1280,q_75,strp/men_face_digital_painting_by_121nikhilmishra_dcx759r-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2MmUxMjBhLWE4MzgtNGUyNy1hZDVjLTcxMjU3M2EwMjhhNlwvZGN4NzU5ci02ZDZmYWY5YS0wNWI2LTQ2ODUtOGFlZS1iYTk2NGJmNTE0M2IuanBnIiwiaGVpZ2h0IjoiPD0xMjgwIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvODYyZTEyMGEtYTgzOC00ZTI3LWFkNWMtNzEyNTczYTAyOGE2XC8xMjFuaWtoaWxtaXNocmEtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.CUmq3O8OJD3u4y1X8Ip9sG40eEbbNkBWaRGc_gxX5t4"></img>
                </figure>        
            </div>
        </div>
    
    )
    }

export default ComponentTop;