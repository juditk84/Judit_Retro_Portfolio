import React from 'react'
import { useRef, useState } from 'react'
import MainScene from '../components/MainScene'

export default function main() {

  //state:
  const [buttonSelected, setButtonSelected] = useState("(press an action button)");
  const [activeSceneObject, setActiveSceneObject] = useState("")


  function handleMenuButtonClick(e){
    e.preventDefault()
    console.log(e.target.name)
    setButtonSelected(e.target.name)
  }

  return (
    <div className="main_app_body">

        <div>

            <MainScene buttonSelected={buttonSelected} setActiveSceneObject={setActiveSceneObject}/>

        </div>

        <div>{buttonSelected } 
             {buttonSelected === "(press an action button)" ?  "" : " " + activeSceneObject}</div>

        <div className="main_two_columns">
            <div className="main_buttons_grid">
                <button onClick={handleMenuButtonClick} name="Give" className="grid_item">Give</button>
                <button onClick={handleMenuButtonClick} name="Pick Up" className="grid_item">Pick Up</button>
                <button onClick={handleMenuButtonClick} name="Use" className="grid_item">Use</button>
                <button onClick={handleMenuButtonClick} name="Open" className="grid_item">Open</button>
                <button onClick={handleMenuButtonClick} name="Look At" className="grid_item">Look At</button>
                <button onClick={handleMenuButtonClick} name="Push" className="grid_item">Push</button>
                <button onClick={handleMenuButtonClick} name="Close" className="grid_item">Close</button>
                <button onClick={handleMenuButtonClick} name="Talk To" className="grid_item">Talk To</button>
                <button onClick={handleMenuButtonClick} name="Pull" className="grid_item">Pull</button>
     
            </div>



            <div>this side should be empty. <br /><br /><br /><br /><br /><br /> hola</div>
        </div>


    </div>
  )
}
