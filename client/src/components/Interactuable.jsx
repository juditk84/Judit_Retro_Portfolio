import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Plane, useTexture } from '@react-three/drei'
import InteractionLogicContext from '../../contexts/InteractionLogicContext';
import Modal from 'react-bootstrap/Modal';
import { useMediaQuery } from 'react-responsive';

export default function Interactuable({position, size, name, id}) {
    
    const navigate = useNavigate();
    const {activeSceneObject, setActiveSceneObject, buttonSelected, setButtonSelected, narratorMessage, setNarratorMessage, lightsOn, setLightsOn, boomboxSong, songPlaying, setSongPlaying} = useContext(InteractionLogicContext);

    const isStandardSizeScreen = useMediaQuery({ query: '(min-width: 1024px)' })


    function handleInteractionLogic(instruction){

        // displaying the poster in a modal thing:
        if(instruction === "lookat_poster"){
            navigate("/poster")
        }
        else if (instruction === "lookat_screen"){
            {isStandardSizeScreen ? navigate("/screen") : navigate("/screen_sm")}
        }
        else if (instruction === "use_lightswitch"){
            setLightsOn(!lightsOn)
        }
        else if (instruction === "use_boombox"){
            songPlaying ? boomboxSong.pause() : boomboxSong.play(); 
            setSongPlaying(!songPlaying);
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