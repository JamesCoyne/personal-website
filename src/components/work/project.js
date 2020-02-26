import React, {  useState } from 'react'

function Project(props) {

    const [expanded, setExpanded] = useState(false);

    return(
        <div onClick={() => setExpanded(!expanded)} style={{backgroundColor: (expanded ? 'white' : 'black')}}>
            <h1>{props.project.title}</h1>
            <p>{props.project.tagline}</p>
            <img src={process.env.PUBLIC_URL + props.project.mainPhoto} style={{width: '40vw'}}></img>
        </div>
    );
}

export default Project;