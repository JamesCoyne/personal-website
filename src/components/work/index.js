import React, { useRef, useState } from 'react'
import { render } from 'react-three-fiber';
import data from '../../work.json';
import Project from './project'
import Heading from '../heading/index';

function Work(props) {

    return(
        <div> 
            <Heading text="Work"/>
            { data.map((project) => (<Project project={project} />)) } 
        </div>
    );
}

export default Work;