import React, {  useState, useEffect, componentDidMount} from 'react'
import TrackVisibility from 'react-on-screen';
import './project.scss'
import ProjectImage from './projectImage';

function ProjectBodyItem(props){
    if(props.item){
        if(props.item.type == "paragraph") return(<p>{props.item.content}</p>)
        else if(props.item.type == "image") {
            if(props.item.content.src){
                return(
                    <div>
                        <img src={props.item.content.src}></img>
                        <p>{props.item.content.subtitle}</p>
                    </div>
                );
            }
        }
        else if(props.item.type == "video"){
            if(props.item.content.src){
                return(
                    <div>
                        <video controls wdith="100%">
                        <source src={props.item.content.src} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                        <p>{props.item.content.subtitle}</p>
                    </div>
                );
            }
        }
        else if(props.item.type == "link"){
        return(<a href={props.item.content.href}>{props.item.content.text}</a>);
        }
        else return(<div></div>)
    }
    else return(<div></div>)
}

function Project(props) {

    const [expanded, setExpanded] = useState(false);

    return(
        <div className="WorkRow" >
            <p className="date">{props.project.date}</p>
            <div className="WorkcolumnLeft">
                <h1 className="title">{props.project.title}</h1>
                <p className="client">{props.project.client}</p>
                
                <p className="tagline">{props.project.tagline}</p>
                

                <p id="bodytext" style={{display: (expanded ? 'block' : 'none')}}>
                    {props.project.body.length > 0 &&
                    <div>
                    {props.project.body.map((item) => (<ProjectBodyItem item={item} />)) }
                    </div> 
                }
                </p>
                <p className="tech">{"Tags: " + JSON.stringify(props.project.tags).replace(/['"\[\]]+/g, '').replace(',',', ')}</p>
                <button onClick={() => setExpanded(!expanded)}>{expanded ? 'SHOW LESS' : 'SHOW MORE'}</button>
                
            </div>
        </div>
    );
}

export default Project;