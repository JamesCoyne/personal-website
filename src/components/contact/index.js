import React, { useRef, useState } from 'react'
import Heading from '../heading/index';
import './index.scss';

function Contact(props) {

    return(
        <div className="contactBody"> 
            <Heading text="Contact"/>
            <p className="contactText"> 
            I’m available for full-time or freelance work remote or in the Boston area! No project too big or too small. Feel free to reach out to me at coynej1@wit.edu
            </p>
            <div className="contactLinks">
                <a className="contactLink" href="https://github.com/JamesCoyne">Github</a>
                <a className="contactLink" href="https://www.linkedin.com/in/james-coyne/">Linkedin</a>
                <a className="contactLink" href="https://www.instagram.com/lo.fi.sci.fi/">Instagram</a>
            </div>
            
        </div>
    );
}

export default Contact;