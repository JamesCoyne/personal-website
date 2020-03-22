import React from 'react';
import ReactDOM from 'react-dom'
import { Link, animateScroll as scroll } from "react-scroll";
import './index.scss';
import '../../fonts/romans.ttf'

function NavBar(props) {

    return(
            <div class="navbar">
                
                <div class="navHeading"> 
                    <Link
                    activeClass="active"
                    to="splash"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    class="navHeading"
                    >
                        JAME COYNE
                    </Link>
                </div>
                {/* </Link> */}
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    class="navHeading"
                >
                    <div class="navHeading">ABOUT</div>
                </Link>
                <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                class="navHeading"
                >
                    <div class="navHeading">WORK</div>
                </Link>
                <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                class="navHeading"
                >
                <div class="navHeading">CONTACT</div>
                </Link>
            </div>
    );

}

export default NavBar