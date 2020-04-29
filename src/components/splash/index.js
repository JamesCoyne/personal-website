import React, {useRef, useState, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useLoader, stateContext } from "react-three-fiber";
import * as THREE from 'three'
import { Vector2 } from 'three';
import './index.scss';

function Box(){

  // generate texture
  var bitmap = document.createElement('canvas');
  var g = bitmap.getContext('2d');
  bitmap.width = window.innerWidth;
  bitmap.height = window.innerWidth;

  g.fillStyle = '#9BEFBE';
  g.fillRect(0, 0, window.innerWidth, window.innerWidth);

  g.fillStyle = '#FFFFFF';
  g.strokeStyle = '#FFFFFF';
  
  const offsetX = 100;
  const offsetY = 100;
  const scalex = 330;
  const scaley = 60;
  for(var x = 0; x < 100; x++){
    for(var y = 0; y< 100; y++){
      g.font = '50px Circular';
      g.fillText('Jame Coyne', x* scalex + offsetX, y * scaley + offsetY);
    }
  }
  var texture = new THREE.Texture(bitmap) 
  texture.needsUpdate = true;

  // generate points
  const mesh = useRef();

  var w = 50;
  var h = 50;
  var damping = 0.99;

  var buffer1 = new Array(w);
  for (var i=0; i <w; i++) buffer1[i]=new Array(h);
  var buffer2 = new Array(w);
  for (i=0; i <w; i++) buffer2[i]=new Array(h);
  var terrain =new Array(w);
  for (i=0; i <w; i++) terrain[i]=new Array(h);

  for(var x = 0; x < w; x++){
    for(var y = 0; y < h; y++){
      terrain[x][y] = 0;
      buffer1[x][y] = 0;
      buffer2[x][y] = 0;
    }
  }

  var frame;
  useEffect(() => {
    frame = 0;
  })
  
  useFrame(() => {
    // buffer1[Math.floor(Math.random() * h)][Math.floor(Math.random() * w)] = 1;

    // buffer1[Math.floor(event.clientX / window.innerWidth) ][Math.floor(event.clientY / window.innerHeight )] = 10;

    if(mouse){
      buffer1[mouse.x][mouse.y] = 0.5;
    }

    for(var x = 1; x < w-1; x++){
      for(var y = 1; y < h-1; y++){
        buffer2[x][y] = (buffer1[x-1][y]+buffer1[x+1][y]+buffer1[x][y+1]+buffer1[x][y-1]) / 2 - buffer2[x][y];
        buffer2[x][y] *= damping;
      }
    }
    terrain = buffer2;
    var temp = buffer2;
    buffer2 = buffer1;
    buffer1 = temp;

    // frame += 0.01;
    mesh.current.geometry.attributes.position.needsUpdate = true;
    var verticies = mesh.current.geometry.attributes.position.array;
    
    for(var x = 0; x < w; x++){
      for(var y = 0; y < h; y++){
        verticies[(((x)) + (y * h))*3 + 2] = terrain[x][y];
      }
    }
    // for ( var i = 0, j = 0, l = verticies.length; i < l; i ++, j += 3 ) {
      // verticies[ j + 2 ] = Math.sin(((i)/1000) + frame)/10;
      // verticies[ j + 2] = terrain[i][j]
    // }
  })
 

  var [mouse, setmouse] = useState({})

  document.onmousemove = function(e){
    var cursorX = e.pageX;
    var cursorY = e.pageY;

    setmouse({
      x: Math.floor((cursorX/ window.innerWidth )* w),
      y: Math.floor((cursorY/ window.innerHeight)*h)
    });
    console.log(window.width)
    console.log('mouse moved  x:' + Math.floor((cursorX/ window.innerWidth )* w) + " y:" + Math.floor((cursorY/ window.innerHeight)*h))
}

  const onMouseMove = () => {
    console.log('mouse moved');
  }

  return(
    <mesh ref={mesh} onMouseMove={onMouseMove.bind(this)}>
        <planeBufferGeometry attach="geometry" args={[2,2,w,h]}/>
        <meshBasicMaterial attach="material"  side={THREE.DoubleSide} map={texture} wireframe={false} />
      </mesh>
  )
}

function SplashScene(){

  return(
    <div>
    <Canvas
      // camera={{ fov: 100, position: [0, 0, 0] }}
      style={{ height: "100vh", backgroundColor: "#9BEFBE"}}
         // orthographic 
      camera = {{
        position: new THREE.Vector3(0,0.004,0.55),
        left: 100,
        right: -100,
        bottom: -100,
        top: 100
      }}
    >
      <ambientLight /> 
    <Suspense fallback="none">
      <Box/>
    </Suspense>
    </Canvas>
    <div className="headdingText">
        {/* I'm Jame. I do things with computers. */}
      </div>
    </div>
  );
}

export default SplashScene;