import React, {  useState } from 'react'
import './project.scss'

function Project(props) {

    const [expanded, setExpanded] = useState(false);

    return(
        <div onClick={() => setExpanded(!expanded)} style={{backgroundColor: (expanded ? 'white' : 'black')}}>
            <h2 class="projectRow">{props.project.title}</h2>
            <h2 class="projectRow">{props.project.date}</h2>
            <h2 class="projectRow">{props.project.client}</h2>
            <p class="projectRow">{props.project.tagline}</p>
            <img src={process.env.PUBLIC_URL + props.project.mainPhoto} style={{width: '40vw'}}></img>
        </div>
    );
}

export default Project;