import React from 'react';
import ReactDOM from 'react-dom'
import { Link, animateScroll as scroll } from "react-scroll";
import './index.scss';
import '../../fonts/romans.ttf'

function NavBar(props) {

    return(
            <div class="navbar">
                <Link
                    activeClass="active"
                    to="splash"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <h3 class="navHeading">JAME COYNE</h3>
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <h3 class="navHeading">ABOUT</h3>
                </Link>
                <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                    <h3 class="navHeading">WORK</h3>
                </Link>
                <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                <h3 class="navHeading">CONTACT</h3>
                </Link>
            </div>
    );

}

export default NavBar