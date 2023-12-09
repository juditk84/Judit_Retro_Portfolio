import React from 'react'
import { useRef } from 'react'
import MainScene from '../components/MainScene'

export default function main() {

  return (
    <div className="main_app_body">

        <div>

            <MainScene />
        </div>

        <div>Aquí va la barra on es mostren els mouse hovers</div>

        <div className="main_two_columns">
            <div className="main_buttons_grid">
                <div className="grid_item">Give</div>
                <div className="grid_item">Pick Up</div>
                <div className="grid_item">Use</div>
                <div className="grid_item">Open</div>
                <div className="grid_item">Look At</div>
                <div className="grid_item">Push</div>
                <div className="grid_item">Close</div>
                <div className="grid_item">Talk To</div>
                <div className="grid_item">Pull</div>
     
            </div>



            <div>this side should be empty. <br /><br /><br /><br /><br /><br /> hola</div>
        </div>


    </div>
  )
}
