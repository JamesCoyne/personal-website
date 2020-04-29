import React, { useRef, useState } from 'react'
import { render } from 'react-three-fiber';
import TrackVisibility from 'react-on-screen';
import '../../fonts/circular.otf'
import './index.scss';

function Heading(props) {

    const longName = (() => {
        var x = props.text
        for(var i = 0; i < 20; i++){
            x += props.text
        }
        return x
    })

    return(
        // <TrackVisibility>
        //     {({ isVisible }) => 
        //     isVisible && 
            <div className="headingBackground">
                <div className="box"></div>
                <h1 className="text">{longName()}</h1>
            </div>
        //     }
        // </TrackVisibility>  
   
    );
}

export default Heading;