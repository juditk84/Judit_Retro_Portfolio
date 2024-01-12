import React from 'react'
import { useState } from 'react'
import MainScene from '../components/MainScene'
import useInteraction from "../hooks/useInteraction";
import useScreenSize from "../hooks/useScreenSize";
import { Outlet, Link } from 'react-router-dom';
import Intro from '../components/Intro';
import MainSceneSmallScreen from '../components/MainSceneSmallScreen';

export default function main() {

  const {activeSceneObject, buttonSelected, setButtonSelected, narratorMessage} = useInteraction();
  const {isStandardSizeScreen} = useScreenSize();
  const [cameraSliderValue, setCameraSliderValue] = useState(0);

  function handleMenuButtonClick(e){
    e.preventDefault()
    setButtonSelected({name: e.target.name, actionId: e.target.id})
  }

  function handleSliderChange(event){
    setCameraSliderValue(event.target.value / 10)
  }

  return (

    <div className={isStandardSizeScreen ? "main_app_body" : "main_app_body_smartphone"}>
    {isStandardSizeScreen && <Intro />}

    <div >

        <div>

            {isStandardSizeScreen ? <MainScene /> : <MainSceneSmallScreen cameraSliderValue={cameraSliderValue}/>}
            
        </div>

        {!narratorMessage ?
        <div>
        
        <h5>{buttonSelected.name }
             {buttonSelected.name === "(press an action button)" ?  "" : " " + activeSceneObject}
        </h5>
        {!isStandardSizeScreen && <input type="range" min="-100" max="90" onChange={handleSliderChange}/>}

        <div className={isStandardSizeScreen ? "main_two_columns" : ""}>
            <div className="main_buttons_grid">
                <button onClick={handleMenuButtonClick} id="1" name="Give" className="grid_item">Give</button>
                <button onClick={handleMenuButtonClick} id="2" name="Pick up" className="grid_item">Pick up</button>
                <button onClick={handleMenuButtonClick} id="3" name="Use" className="grid_item">Use</button>
                <button onClick={handleMenuButtonClick} id="4" name="Open" className="grid_item">Open</button>
                <button onClick={handleMenuButtonClick} id="5" name="Look at" className="grid_item">Look at</button>
                <button onClick={handleMenuButtonClick} id="6" name="Push" className="grid_item">Push</button>
                <button onClick={handleMenuButtonClick} id="7" name="Close" className="grid_item">Close</button>
                <button onClick={handleMenuButtonClick} id="8" name="Talk to" className="grid_item">Talk to</button>
                <button onClick={handleMenuButtonClick} id="9" name="Pull" className="grid_item">Pull</button>

            </div>

              <div className="inventory_but_not" style={{fontSize: 17}} >
              If you want to see my CV, LOOK AT the SCREEN. <br />
              Otherwise click around like it's 1993!<br />
              Remember to turn off the lights before you go<br />
              (no seriously USE the lightswitch, the effect is cool af)<br /><br />
              TL;DR <Link to="/screen">straight to the CV</Link><br /> 
              Why not check my <Link to="https://www.linkedin.com/in/judit-calero-timoneda-77ba06287/">LinkedIn profile</Link> instead?
              </div>

        </div>
        
        </div>
      
      : 
      
      <h3><br /><br /><br />{narratorMessage}</h3>
      }
        
        <Outlet />

    </div>
    </div>
  )
}
