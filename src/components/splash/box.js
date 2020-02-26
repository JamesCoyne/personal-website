import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import {useFrame } from 'react-three-fiber'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  function ressetPos(){
    mesh.current.position.x = (Math.random() * 24) - 12;
    mesh.current.position.z = -10;
  }

  // Rotate mesh every frame, this is outside of React without overhead
    function updateFrame(){
        mesh.current.position.z += 0.1;

        if(mesh.current.position.z > 0){
            ressetPos();
        }
        // mesh.current.rotation.x += 0.1;
        // mesh.current.rotation.y += 0.1;
        // mesh.current.rotation.z += 0.1;
    }

  useFrame(() => (updateFrame()))
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => {
        //   setActive(!active);
        ressetPos();
        props.onConeClick();
          
    }}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>

      <coneBufferGeometry attach="geometry" args={[1, 4, 32]} />

      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box;