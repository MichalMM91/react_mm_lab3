
import React, {useState} from "react";
import 'bulma/css/bulma.min.css';
import './style.css';

function Layouts() {
    return (
        <div>
            <div className="block">
            {/* <p className="fontMedium">Layout title</p> */}
                <p className="number">Layout page</p>
            </div>
            <h1 class="title is-primary">Layouts</h1>
            <img src="https://img.freepik.com/darmowe-wektory/zestaw-bez-szwu-geometryczny-wzor_53876-119214.jpg?w=1060&t=st=1685382798~exp=1685383398~hmac=6e975f1c92e05350309ff04751898adb68731bf095c08354001c5740497e0eb6" alt=""></img>
            
            <div class="block">
            This text is within a <strong>block</strong>.
            </div>
            <div class="block">
            This text is within a <strong>second block</strong>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
            </div>
            <div class="block">
            This text is within a <strong>third block</strong>. This block has no margin at the bottom.
            </div>
          
        </div>
        
        
    )
    }

export default Layouts;