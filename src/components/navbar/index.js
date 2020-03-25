import React from 'react';
import ReactDOM from 'react-dom'
import { Link, animateScroll as scroll } from "react-scroll";
import './index.scss';
import '../../fonts/romans.ttf'

function NavItem(props) {
    return(
        <Link
            to={props.to}
            smooth={true}
            offset={-70}
            duration={500}
            class="navItem">
            {props.name}
        </Link>
    )
}

function NavBar(props) {
    return(
        <div class="navbar">
            <NavItem name="JAME COYNE" to="splash"/>
            <NavItem name="ABOUT" to="about"/>
            <NavItem name="WORK" to="work"/>
            <NavItem name="CONTACT" to="contact"/>
        </div>
    );
}

export default NavBar