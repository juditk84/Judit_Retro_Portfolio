import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Plane, useTexture, PerspectiveCamera } from '@react-three/drei'
import { useRef, useState, useContext } from 'react'
import { NearestFilter } from "three"
import useInteraction from "../hooks/useInteraction";

import DecorationSprite from './DecorationSprite'
import DecorationSpriteNoLight from './DecorationSpriteNoLight'
import Interactuable from './Interactuable'

import { useMediaQuery } from 'react-responsive'

export default function MainSceneSmallScreen({cameraSliderValue}) {

    // context:
    const {setActiveSceneObject, buttonSelected, setButtonSelected, narratorMessage, setNarratorMessage, lightsOn} = useInteraction();
    
    // state:
    const [isClicked, setIsClicked] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const isStandardSizeScreen = useMediaQuery({ query: '(min-width: 1024px)' })

    const MainCamera = () => {

        const ref = useRef();

        useFrame((state, delta) => {
            state.camera.position.x = cameraSliderValue
        })

        return (
            <PerspectiveCamera position={[0, 0, 10]} makeDefault />
        )
    }

    const FlickeringLight = ({color, position, decay, name}) => {
       
        // useFrame((state, delta) => {

        //     state.scene.children[2].intensity = 6 * (delta * 20)
        //     state.scene.children[3].intensity = 5 * (delta * 10)
        //     state.scene.children[4].intensity = 3 * (delta * 10)
        //     state.scene.children[5].intensity = 3 * (delta * 10)
        //     state.scene.children[6].intensity = 3 * (delta * 10)
        //     state.scene.children[7].intensity = 0.3 * (delta * 10)

        // })

        return(
            <pointLight name={name} scale={[1, 1, 1]} color={color} decay={decay} position={position} />
        )
    }

  return (
    <div className="main_window">
       
       <Canvas >
            <MainCamera/>
            <FlickeringLight name="screenlight" color={"blue"} position={[1.8, -0.8, 1.6]} decay={0}/>
            <FlickeringLight name="computerled_1" color={"green"} position={[0.15, -2.65, 1.6]} decay={1} />
            <FlickeringLight name="computerled_2"color={"green"} position={[0.35, -2.65, 1.6]} decay={0.5} />
            <FlickeringLight name="computerled_3"color={"green"} position={[0.5, -2.65, 1.6]} decay={0.5} />
            <FlickeringLight name="computerlight_1"color={"green"} position={[0.65, -1.95, 1.6]} decay={1} />
            <FlickeringLight name="monitorled"color={"red"} position={[1.7, -2.9, 1.6]} decay={0.5} />
            {lightsOn && <pointLight  size={40} color={"yellow"} decay={0} intensity={8} position={[-2.5, 1.3, 4]} />}
            
            <DecorationSprite name="wall" textureRoute="sprites/main_scene/main_scene_wall.png" size={[30, 10]} position={[2, 0, 0.4]}/>
            <DecorationSprite name="computer" textureRoute="sprites/main_scene/main_scene_pc.png" size={[30, 10]} position={[2, 0.5, 1.5]}/>
            {!lightsOn && <DecorationSpriteNoLight name="screen" textureRoute="sprites/main_scene/main_scene_screen.png" size={[20, 10]} position={[2, 0.5, 1.5]}/>}
            <DecorationSprite name="chair" textureRoute="sprites/main_scene/main_scene_chair.png" size={[16, 10]} position={[0, 0.5, 3]}/>
            <DecorationSprite name="lamp" textureRoute="sprites/main_scene/main_scene_lamp.png" size={[20, 10]} position={[2.3, -1, 4.5]}/>
            <DecorationSprite name="poster" textureRoute="sprites/main_scene/poster.png" size={[2.8, 4]} position={[-1.15, 0.4, 0.4]}/>

            <Interactuable id="1" name="chair" position={[-2.6, -3.4, 3.01]} size={[3.3, 2]} />  
            <Interactuable id="2" name="poster" position={[-1.15, 0.4, 0.5]} size={[2.8, 4]}/>
            <Interactuable id="3" name="computer screen" position={[1.8, -0.7, 1.6]} size={[3, 2]} />
            <Interactuable id="4" name="lightswitch" position={[-7.15, -3.9, 0.5]} size={[0.4, 0.6]}/>
            <Interactuable id="5" name="FABULOUS boombox" position={[8.5, -1.4, 0.5]} size={[3.1, 1]}/>
            <Interactuable id="6" name="lamp" position={[0.65, 2, 4.6]} size={[1.2, 1]}/>
            <Interactuable id="7" name="the world outside" position={[-6.65, 0.4, 0.5]} size={[4.3, 4]}/>

                {lightsOn && <ambientLight intensity={2}/>}

        </Canvas>
    </div>
  )
}
