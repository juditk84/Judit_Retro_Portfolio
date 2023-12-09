import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

export default function MainScene() {

    const [isClicked, setIsClicked] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const Cube = ({ position, size, color}) => {

        const ref = useRef();

        function handleClick(){
            setIsClicked(!isClicked)
        }        

        useFrame((state, delta) => {
            ref.current.rotation.x += delta / 2;
            ref.current.rotation.y += delta / 4;
        })

        return (
            <mesh   onClick={handleClick}
                    onPointerEnter={(event) => {event.stopPropagation(), setIsHovered(true)}} 
                    onPointerLeave={() => setIsHovered(false)}
                    position={position} ref={ref}>
                <boxGeometry args={isHovered ? [3, 3, 3] : [2, 2, 2]}/>
                <meshStandardMaterial color={isHovered ? "orange" : "blue"}/>
            </mesh>
        )
    }

  return (
    <div className="main_window">
        MainScene
        <Canvas>
    
        {/* <group>
            <Cube position={[3, 0, 0]} color={"orange"}/>
            <Cube position={[-3, 0, 0]} color={"green"}/>
            <Cube position={[-3, 2, 0]} color={"red"}/>
            <Cube position={[3, 2, 0]} color={"blue"}/>
        </group> */}

        <Cube position={[0, 0, 0]} />

            <ambientLight intensity={0.2} />
            <directionalLight color="white" position={[0, 0, 5]} />
        </Canvas>
    </div>
  )
}
