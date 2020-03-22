import React, { useRef, useState } from 'react'
import { render } from 'react-three-fiber';
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
    <div class="marquee">
        <h1 class="text">{longName()}</h1>
    </div>
    );
}

export default Heading;