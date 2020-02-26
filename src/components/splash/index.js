import React from 'react';
import { Canvas } from "react-three-fiber";
import * as THREE from 'three'
import Box from './box';

function SplashScene(){
  return(
    <Canvas 
      camera={{ fov: 100, position: [0, 0, 0] }}
      style={{ height: "100vh", backgroundColor: "#9BEFBE"}}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.Uncharted2ToneMapping
        gl.setClearColor(new THREE.Color('#9BEFBE'))
      }}
    >

      <ambientLight />
      <fog attach="fog" distance={100} intensity={4} color="red" />
      <pointLight distance={100} intensity={4} color="white" />

      <Box position={[-(Math.random() * -24), 0, -(Math.random() * -24) ]}/>
      <Box position={[-(Math.random() * -24), 0,  -(Math.random() * -24)]}/>
      <Box position={[-(Math.random() * -24), 0,  -(Math.random() * -24)]}/>
      <Box position={[-(Math.random() * -24), 0,  -(Math.random() * -24)]} />
      <Box position={[-(Math.random() * -24), 0,  -(Math.random() * -24)]}/>
    </Canvas>
  );
}

export default SplashScene;