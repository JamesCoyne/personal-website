import React, { useRef, useState } from 'react'
import { render } from 'react-three-fiber';
import Heading from '../heading/index';
import './index.scss';

function About(props) {
    return(
        <div>
            <Heading text="About "/>
            <div className="row">
                    <div className="colLeft">
                    <div className="frame f4" />
                        <div className="frame f3" />
                        <div className="frame f2" />
                        <img src= {process.env.PUBLIC_URL + "me.jpg"} id="portrait"/>
                    </div>
                <div className="colRight">
                    <p>
                    Hey! I’m Jame Coyne. I have experience working with creative studios and individuals, and I have experience with modern web development frameworks such as react, three, p5, bootstrap. I am able to meet your expectations for designing and developing beautiful and functional digital content on the web or elsewhere, and deliver and communicate in a timely manner. 
                    </p>
                </div>
            </div>
        </div>    
    );
}

export default About;