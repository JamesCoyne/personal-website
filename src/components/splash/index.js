import React, {useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import * as THREE from 'three'
import { Vector2 } from 'three';
// import Box from './box';

function Box(){

  const mesh = useRef();

  const texture = useLoader(
    THREE.TextureLoader,
    `${process.env.PUBLIC_URL}jamecoyne.png`
  );
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.generateMipmaps = true;
            // texture.repeat.x = -5;
            // texture.repeat.y = 23;
            texture.repeat.x = -10;
            texture.repeat.y = 23 * 3;
            // texture.flipY = true;
  // texture.repeat = new Vector2(2,2);

  useFrame(() => {
    // mesh.current.scale.z = mesh.current.scale.z -= 0.001;
    // texture.offset.y -= 0.9;
    // texture.offset.x += 0.9;
  })


  return(
    <mesh
        ref={mesh}
        scale={[0.309, 0.14, 2]}
        position={[0,0,0]}
        >
        <boxBufferGeometry attach="geometry"  />
        <meshBasicMaterial attach="material" color={'#9BEFBE'} side={THREE.DoubleSide} map={texture} />
      </mesh>
  )
}

function SplashScene(){

  return(
    <Canvas 
      // camera={{ fov: 100, position: [0, 0, 0] }}
      style={{ height: "100vh", backgroundColor: "#9BEFBE"}}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.Uncharted2ToneMapping
        gl.setClearColor(new THREE.Color('#9BEFBE'))
      }}

         // orthographic 
      camera = {{
        position: new THREE.Vector3(0,0.004,0.55),
        // left: 100,
        // right: -100,
        // bottom: -100,
        // top: 100
      }}
    >

      <ambientLight /> 
      <fog attach="fog" distance={0} intensity={1000} color="red" />
      {/* <pointLight distance={100} intensity={4} color="white" /> */}
{/* 
      <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} /> */}
    <Suspense fallback="none">
      <Box/>
    </Suspense>
      

    </Canvas>
  );
}

export default SplashScene;