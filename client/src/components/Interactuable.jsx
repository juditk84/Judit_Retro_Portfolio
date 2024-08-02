import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Plane, useTexture } from '@react-three/drei'
import InteractionLogicContext from '../../contexts/InteractionLogicContext';
import { useMediaQuery } from 'react-responsive';
import one from '../fakeapi/interactions.json'

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
            console.log(buttonSelected.actionId)
                const response =  one[id - 1].outputs.find(output => +buttonSelected.actionId === +output.ActionId).output
                if (response.includes("_")){
                    handleInteractionLogic(response)
                }
                else{
                    setNarratorMessage(response);
                    setTimeout(() => {setNarratorMessage("");}, 2500)
                }
                


        setButtonSelected({name: "(press an action button)"})

    }}

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