import React, { useRef, useState } from 'react'
import { render } from 'react-three-fiber';
import data from '../../work.json';
import Project from './project'
import Heading from '../heading/index';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Work(props) {

    return(
        <div> 
            <Heading text="Work"/>
            <Router>
                {data.map((project) => (<Project project={project} />)) } 
            </Router>
            
            
        </div>
    );
}

export default Work;