import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

export default function MainScene({setActiveSceneObject, buttonSelected}) {

    const [isClicked, setIsClicked] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const Cube = ({ position, size, color}) => {

        const ref = useRef();
        const name = "a regular cube";

        function handleClick(name){
            setIsClicked(!isClicked)
            if(buttonSelected !== "(press an action button)"){
                if (buttonSelected === "Look At"){
                    console.log("the most annoying cube that resets its rotation when I hover the mouse over it...")
                }
                else if(buttonSelected === "Open"){
                    console.log("yeeee i'd love to open this cube wide open")
                }
                else{
                    console.log("I don't uderstand what you want me to do")
                }
            }
            
        }        

        function handlePointerEnter(e){
            event.stopPropagation()
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
                    onPointerEnter={handlePointerEnter} 
                    onPointerLeave={handlePointerLeave}
                    position={position} ref={ref}>
                    
                <boxGeometry args={[2, 2, 2]}/>
                <meshStandardMaterial color={isHovered ? "orange" : "white"}/>
            </mesh>
        )
    }

    

  return (
    <div className="main_window">
        MainScene
        <Canvas>

        <Cube name="a not so regular cube" position={[0, 0, 0]} />

            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[0, 0, 5]} />

        </Canvas>
    </div>
  )
}
