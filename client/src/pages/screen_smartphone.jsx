import React from 'react'
import { useNavigate, Link} from 'react-router-dom';
import { useState } from 'react';
import Fullstack from '../components/fullstack';
import Musician from '../components/musician';
import Work from '../components/work';
import Goals from '../components/goals'

export default function screen_smartpohone() {

    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState([{id: "Fullstack", selected: true, component: <Fullstack key="1"/>}, 
                                                    {id: "Musician", selected: false, component: <Musician key="2"/>},
                                                    {id: "2025 Goals", selected: false, component: <Goals key="3"/>},
                                                    {id: "Previous Work Experience", selected: false, component: <Work key="3"/>}]);
   
    const handleClose = () => {

      navigate("/")
  
    }
    
    function handleTabClick(event){
        event.preventDefault();
        console.log(event.target.id)
        const updatedSelectedTabs = selectedTab.map((tab) => {
            
            if(tab.id === event.target.id){
                if(tab.selected === false){
                    return {...tab, selected: true}
                }
                else{
                    return {...tab}
                } 
            }else 
            return {...tab, selected: false}})

        setSelectedTab(updatedSelectedTabs)
    }

    return (

        <div className="screen_smartphone">
            <div className="window" style={{width: "100%", color: "black"}}>
                <div className="title-bar">
                    <marquee behavior="" direction="" className="title-bar-text">Judit Calero Timoneda</marquee>
                    <div className="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button onClick={handleClose} aria-label="Close"></button>
                    </div>
                </div>

                <div className="window-body" style={{textAlign: "left"}}>
                    <p><b>I'm a computer enthusiast that started her journey at 9 years old tweaking the config.sys file in her parent's 386 computer to be able to play Simon the Sorcerer. <br />
                    Still with the same curiosity for the inner workings of things, passionate about music from both sides of the applause, amazed by both indie and AAA technological marvels.</b></p>

                    <menu role="tablist">
                        {selectedTab.map((element, i) => <li key = {i} onClick={handleTabClick} id={element.id} role="tab" aria-selected={element.selected} className="tab_title">{element.id}</li>)}
                    </menu>
                    <div className="window" role="tabpanel">
                        <div className="window-body">
                            {selectedTab.filter(tab => tab.selected === true).map((tab, i) => tab.component)}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
