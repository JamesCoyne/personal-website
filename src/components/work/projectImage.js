import React, {useEffect, useState, componentDidMount} from 'react'
import ReactDOM from 'react-dom';
import { applyProps } from "react-three-fiber";
import './image.scss'
function ProjectImage(props){

    var [offset, setOffset] = useState(0);
    var [position, setPosition] = useState(100);

    const node = ReactDOM.findDOMNode(this);

    useEffect(() => {
        // Your code here
        setOffset(Math.floor(Math.random() * 600 -300)+ 'px');
        // var rect = ReactDOM.findDOMNode(this);
        console.log(node);
        // console.log(rect)
        window.addEventListener('scroll', 
        function(e){
            // console.log(position);
            setPosition(Math.sin(document.documentElement.scrollTop/300)*document.body.clientWidth);
        }
        );
        return () => {
            // Your code here
            // window.removeEventListener('scroll', this.handleScroll);
         }

    }, []);

    return(
        <img 
            class="projectImage" 
            style={{left: position+'px', marginTop: offset}}
            src={props.src}
        />
    );              
}

export default ProjectImage;