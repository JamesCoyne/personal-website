import React, { useRef, useState } from 'react'
import { render } from 'react-three-fiber';
import Heading from '../heading/index';
import './index.scss';

function About(props) {
    return(
        <div>
            <Heading text="About"/>
            <div class="containerAbout">
                    <div class="rightAbout">
                    <img src= {process.env.PUBLIC_URL + "me.jpg"} id="portrait"/>
                    </div>
                <div class="leftAbout">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod purus orci, ac tristique nisl vestibulum facilisis. Sed in ex facilisis, malesuada augue at, bibendum lacus. In imperdiet libero non maximus ornare. Etiam est libero, vestibulum sed ultrices eu, placerat sed risus. Mauris maximus dolor at neque euismod semper. Cras eget ligula eget dui mattis vehicula ut vitae risus.</p>
                </div>
            </div>
        </div>    
    );
}

export default About;