import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Plane, useTexture } from '@react-three/drei'
import InteractionLogicContext from '../../contexts/InteractionLogicContext';
import Modal from 'react-bootstrap/Modal';

export default function Interactuable({position, size, name, id}) {

    const navigate = useNavigate();
    const {activeSceneObject, setActiveSceneObject, buttonSelected, setButtonSelected, narratorMessage, setNarratorMessage, lightsOn, setLightsOn} = useContext(InteractionLogicContext);

    const boomboxSong = new Audio("./public/sounds/frag_36_tape.mp3")

    function handleInteractionLogic(instruction){

        // displaying the poster in a modal thing:
        if(instruction === "lookat_poster"){
            console.log("displaying the poster in a modal thing.")
            navigate("/poster")
        }
        else if (instruction === "lookat_screen"){
            console.log("displaying the computer screen in a modal thing.");
            navigate("/screen")
        }
        else if (instruction === "use_lightswitch"){
            console.log("using the lightswitch.")
            setLightsOn(!lightsOn)
        }
        else if (instruction === "use_boombox"){
            boomboxSong.play();
        }
    }

    async function handleClick(id, name){

        if(buttonSelected.actionId){
            try {
                const response = await fetch(`/api/${id}/${buttonSelected.actionId}`);
                const data = await response.json();

                if (data.output.includes("_")){
                    handleInteractionLogic(data.output)
                }
                else{
                    setNarratorMessage(data.output);
                    setTimeout(() => {setNarratorMessage("");}, 2500)
                }
                
              } catch (error) {
                console.log(error);
              }
        }
            
        

        setButtonSelected({name: "(press an action button)"})

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
               onClick={() => handleClick(id, name)} 
               position={position} 
               args={size}>

            <meshStandardMaterial visible={false} color="red"/>

        </Plane>
    )
}