import React, {  useState } from 'react'
import './project.scss'

function Project(props) {

    const [expanded, setExpanded] = useState(false);

    return(
        <div class="container" >
            <div class="left">
                <h1 class="title">{props.project.title}</h1>
                <h4 class="client">{props.project.client}</h4>
                <p class="tagline">{props.project.tagline}</p>

                <p id="bodytext" style={{display: (expanded ? 'block' : 'none')}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique eleifend magna, eu ornare elit sollicitudin vel. Aenean ornare lacus lectus, nec convallis dolor pulvinar at. Etiam elementum turpis sed neque hendrerit consectetur. Nam imperdiet mauris est, et semper arcu fermentum eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis non velit venenatis quam egestas maximus eu quis arcu.Etiam imperdiet sagittis ligula, eu pellentesque turpis. In finibus purus eu pretium ornare. Curabitur et congue tortor. Aenean in accumsan nunc. Curabitur tristique lectus pellentesque, consequat lacus at, malesuada tortor. Sed at augue non lacus gravida bibendum. Phasellus condimentum est enim, iaculis lobortis dolor iaculis sed. Donec sagittis tempor orci sit amet varius. Nunc lobortis commodo pellentesque. In scelerisque semper urna ac pretium. In consequat mi urna, et pharetra nibh tempus at. Phasellus eget placerat orci. Etiam pretium et leo eu fringilla. Nam semper sollicitudin erat. Suspendisse scelerisque ultrices dui eget feugiat. Aenean ac maximus mauris.
                </p>
                <p class="tech">{props.project.tech}</p>
                <button onClick={() => setExpanded(!expanded)}>{expanded ? 'SHOW LESS' : 'SHOW MORE'}</button>
            </div>
            <div class="right">
                <h3 class="date">({props.project.date})</h3>
                <img style={{width: '100%', float: 'right'}} src="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq"/>                
            </div>
        </div>
    );
}

export default Project;