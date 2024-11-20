"use client"

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function WornBaseball(props) {
  const { nodes, materials } = useGLTF('/models/worn_baseball_ball.glb');
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      console.log('Model reference is set:', modelRef.current);
    } else {
      console.log('Model reference is not set yet.');
    }
  }, [modelRef.current]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007;
    } else {
      console.log('Model reference is undefined during frame update.');
    }
  });

  // Return null while the model is loading
  if (!nodes || !materials) {
    return null; // You can add a loading indicator here if needed
  }

  return (
    <group ref={modelRef} {...props} dispose={null} scale={[1.8, 1.8, 1.8]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface5_lambert1_0.geometry}
        material={materials.lambert1}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/worn_baseball_ball.glb');