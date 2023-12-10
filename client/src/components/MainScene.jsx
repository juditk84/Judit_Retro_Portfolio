import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Plane, useTexture } from '@react-three/drei'
import { useRef, useState } from 'react'
import { NearestFilter } from "three"

export default function MainScene({setActiveSceneObject, buttonSelected, setButtonSelected}) {

    // state:
    const [isClicked, setIsClicked] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [narratorMessage, setNarratorMessage] = useState("")

    // the test cube. All interaction is embedded in the Cube function. For now it works, but as more objects appear,
    // abstracting the interaction logic away from each element makes sense.
    const Cube = ({ position, size, color}) => {

        const ref = useRef();
        const name = "a regular cube";

        function narratorMessageChangeAndTimeout(string){
            setNarratorMessage(string)
                    setTimeout(() => {
                        setNarratorMessage("")
                        setButtonSelected("(press an action button)")
                      }, 3000);
        }

        function handleClick(name){
            setIsClicked(!isClicked)
            if(buttonSelected !== "(press an action button)"){
                if (buttonSelected === "Look At"){
                    narratorMessageChangeAndTimeout("the most annoying cube that resets its rotation when I hover the mouse over it...")
                }
                else if(buttonSelected === "Open"){
                    narratorMessageChangeAndTimeout("yeeee i'd love to open this cube wide open.")
                }
                else{
                    narratorMessageChangeAndTimeout("I don't uderstand what you want me to do.")
                }
            }
        }        

        function handlePointerEnter(e){
            e.stopPropagation()
            setIsHovered(true)
            setActiveSceneObject(name)
        }

        function handlePointerLeave(e){
            setIsHovered(false)
            setActiveSceneObject("")
        }

        useFrame((state, delta) => {
            ref.current.rotation.x += delta / 2;
            ref.current.rotation.y += delta / 4;
        })

        return (
            <mesh   onClick={() => handleClick(name)}
                    onPointerEnter={(e) => handlePointerEnter(e)} 
                    onPointerLeave={handlePointerLeave}
                    position={position} ref={ref}>
                    
                <boxGeometry args={[2, 2, 2]}/>
                <meshStandardMaterial color={isHovered ? "orange" : "white"}/>
            </mesh>
        )
    }

    const SpritePlane = () => {

        const planeTestTexture = useTexture("./public/toad_walk.png")
        planeTestTexture.minFilter = NearestFilter
        planeTestTexture.magFilter = NearestFilter
        return (
            <Plane args={[10, 10]} >
                <meshStandardMaterial map={planeTestTexture} transparent/>
            </Plane>
        )
    }

  return (
    <div className="main_window">
        <div style={{color: "black"}}> <br /><br />{narratorMessage}</div>
        <Canvas>
            
            <SpritePlane />

            <Cube name="a not so regular cube" position={[0, 0, 0]} />

                <ambientLight intensity={0.1} />
                <directionalLight color="white" position={[0, 0, 5]} />

        </Canvas>
    </div>
  )
}
