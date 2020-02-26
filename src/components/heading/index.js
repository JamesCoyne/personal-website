import React, { useRef, useState } from 'react'
import { render } from 'react-three-fiber';
import '../../fonts/circular.otf'
import './index.scss';

function Heading(props) {

    const longName = (() => {
        var x = props.text
        for(var i = 0; i < 10; i++){
            x += props.text
        }
        return x
    })

    return(
    <div>
        <h1>{longName()}</h1>
    </div>
    );
}

export default Heading;