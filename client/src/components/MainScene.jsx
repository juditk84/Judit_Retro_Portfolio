import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Plane, useTexture, PerspectiveCamera } from '@react-three/drei'
import { useRef, useState, useContext } from 'react'
import { NearestFilter } from "three"
import useInteraction from "../hooks/useInteraction";

import DecorationSprite from './DecorationSprite'
import Interactuable from './Interactuable'

export default function MainScene() {

    const {setActiveSceneObject, buttonSelected, setButtonSelected, narratorMessage, setNarratorMessage} = useInteraction();
    
    // state:
    const [isClicked, setIsClicked] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const MainCamera = () => {

        const ref = useRef();

        useFrame((state, delta) => {

            // console.log(state)
            state.camera.position.x = state.pointer.x / 2
            state.camera.position.y = state.pointer.y / 4

        })

        return (
            <PerspectiveCamera position={[0, 0, 10]} makeDefault />
        )
    }

  return (
    <div className="main_window">
       
        <Canvas >
            <MainCamera/>
            
            <DecorationSprite name="desk" textureRoute="sprites/main_scene/desk.png" size={[3, 3]} position={[0, -0.5, 4]}/>
            <Interactuable name="a computer" position={[0.5, -0.5, 4.1]} />
            <Interactuable name="a file cabinet" position={[-1.05, -1.3, 4.6]} size={[0.5, 0.8]}/>

            <DecorationSprite name="chair" textureRoute="sprites/main_scene/chair.png" size={[3, 3]} position={[0, -0.5, 4.5]}/>
            <Interactuable id="1" name="a chair" position={[-0.5, -1.3, 4.6]} size={[0.5, 1]}/>

            <DecorationSprite name="background wall" textureRoute="sprites/main_scene/background_wall.png" size={[15, 9]} position={[0, 2, 2]}/>
            <DecorationSprite name="poster" textureRoute="sprites/main_scene/poster.png" size={[1.5, 2]} position={[-2.8, 1.3, 2]}/>
            <Interactuable id="2" name="a poster" position={[-2.8, 1.3, 2.1]} size={[1.5, 2]}/>

            <DecorationSprite name="right wall" textureRoute="sprites/main_scene/background_wall.png"  size={[15, 9]} position={[7.5, 2, 2]} rotation={[0, -1.5, 0]}/>

                <ambientLight intensity={4} />

        </Canvas>
    </div>
  )
}
