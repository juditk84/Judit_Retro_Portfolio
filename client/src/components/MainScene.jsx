import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Plane, useTexture, PerspectiveCamera } from '@react-three/drei'
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

    // the visual elements in the scene:
    const SpritePlane = ({textureRoute, size, position, rotation, name}) => {

        const planeTexture = useTexture(`./public/${textureRoute}`)

        //this keeps the pixelart crispiness:
        planeTexture.minFilter = NearestFilter
        planeTexture.magFilter = NearestFilter

        return (
            <Plane rotation={rotation} position={position} args={size} >
                <meshStandardMaterial map={planeTexture} transparent/>
            </Plane>
        )
    }

    // the interactuable elements in the scene:
    const Interactuable = ({position, size, name}) => {

        function handleClick(name){
            // console.log(event.target.name)
            console.log("clicked a", name)
            setButtonSelected("(press an action button)")

        }

        function handlePointerEnter(name){
            setActiveSceneObject(name)
        }

        function handlePointerLeave(name){
            setActiveSceneObject("")
        }

        return (
            <Plane onPointerEnter={() => handlePointerEnter(name)} 
                   onPointerLeave={() => handlePointerLeave(name)}
                   onClick={() => handleClick(name)} 
                   position={position} 
                   args={size}>

                <meshStandardMaterial visible={false} color="red"/>

            </Plane>
        )
    }

  return (
    <div className="main_window">
        <div style={{color: "black"}}> <br /><br />{narratorMessage}</div>
        <Canvas >
            <MainCamera/>
            
            <SpritePlane name="desk" textureRoute="sprites/main_scene/desk.png" size={[3, 3]} position={[0, -0.5, 4]}/>
            <Interactuable name="a computer" position={[0.5, -0.5, 4.1]} />
            <Interactuable name="a file cabinet" position={[-1.05, -1.3, 4.6]} size={[0.5, 0.8]}/>

            <SpritePlane name="chair" textureRoute="sprites/main_scene/chair.png" size={[3, 3]} position={[0, -0.5, 4.5]}/>
            <Interactuable name="a chair" position={[-0.5, -1.3, 4.6]} size={[0.5, 1]}/>

            <SpritePlane name="background wall" textureRoute="sprites/main_scene/background_wall.png" size={[15, 9]} position={[0, 2, 2]}/>
            <SpritePlane name="right wall" textureRoute="sprites/main_scene/background_wall.png"  size={[15, 9]} position={[7.5, 2, 2]} rotation={[0, -1.5, 0]}/>

                <ambientLight intensity={4} />

        </Canvas>
    </div>
  )
}
