/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: 4d_Bob (https://sketchfab.com/3d_Bob)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cyberpunk-character-019f4b3fd3c74ed0bc6c8dbe9cd50d51
Title: Cyberpunk character
*/

"use client"

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function CyberPunk(props) {
  const modelRef = useRef()
  const { nodes, materials, animations } = useGLTF('/models/cyberpunk_character.glb')
  const { actions } = useAnimations(animations, modelRef)

  // Allows me to run code on any frame of the animation
  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.15
  })

  return (
    <group 
      ref={modelRef} 
      {...props} 
      dispose={null}
      position ={[0, -1.5, 0]}
      scale={[0.90, 0.90, 0.90]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.017}>
          <group name="40f67baeb71f43f29a3629d1d574a7adfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_68"
                      geometry={nodes.Object_68.geometry}
                      material={materials.material}
                      skeleton={nodes.Object_68.skeleton}
                    />
                    <skinnedMesh
                      name="Object_70"
                      geometry={nodes.Object_70.geometry}
                      material={materials.material_3}
                      skeleton={nodes.Object_70.skeleton}
                    />
                    <skinnedMesh
                      name="Object_72"
                      geometry={nodes.Object_72.geometry}
                      material={materials.material_3}
                      skeleton={nodes.Object_72.skeleton}
                    />
                    <skinnedMesh
                      name="Object_74"
                      geometry={nodes.Object_74.geometry}
                      material={materials.material}
                      skeleton={nodes.Object_74.skeleton}
                    />
                    <skinnedMesh
                      name="Object_76"
                      geometry={nodes.Object_76.geometry}
                      material={materials.material}
                      skeleton={nodes.Object_76.skeleton}
                    />
                    <skinnedMesh
                      name="Object_78"
                      geometry={nodes.Object_78.geometry}
                      material={materials.material_3}
                      skeleton={nodes.Object_78.skeleton}
                    />
                    <group name="Object_67" rotation={[-Math.PI / 2, 0, 0]} />
                    <group name="Object_69" rotation={[-Math.PI / 2, 0, 0]} />
                    <group name="Object_71" rotation={[-Math.PI / 2, 0, 0]} />
                    <group
                      name="Object_73"
                      position={[0, -0.099, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group name="Object_75" rotation={[-Math.PI / 2, 0, 0]} />
                    <group name="Object_77" rotation={[-Math.PI / 2, 0, 0]} />
                  </group>
                </group>
                <group name="CPD_Arm" rotation={[-Math.PI / 2, 0, 0]} />
                <group name="CPD_Body" rotation={[-Math.PI / 2, 0, 0]} />
                <group name="CPD_Mask" rotation={[-Math.PI / 2, 0, 0]} />
                <group name="CPD_Hood" position={[0, -0.099, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                <group name="CPD_Hat" rotation={[-Math.PI / 2, 0, 0]} />
                <group name="CPD_Head" rotation={[-Math.PI / 2, 0, 0]} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/cyberpunk_character.glb')
