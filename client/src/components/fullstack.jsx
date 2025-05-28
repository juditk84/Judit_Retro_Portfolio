import React from 'react'
import { Link } from 'react-router-dom'

export default function fullstack() {
  return (
    <div style={{textAlign: "left"}}>
      
      <p><b>Experience as a Fullstack developer:</b></p>

        <div className="window-body">
        <p><b>2024-25 CRM'ESS</b></p>
          <p>Me and Iris Huard together with La Natural Coopmunicació are developing <b>CRM'ESS</b>,
            a CRM catered to the needs of <b>Social and Solidarity Economy</b> co-ops and small businesses. <br /> <br />

            <img style={{width: "100%" }} src="/screen_assets/crmdashboard.jpg" alt="" /> <br /><br />

            We're very happy with how the app is turning out and we're eager to release it. We took this opportunity 
            as a learning experience and, for that reason, <b>we didn't use Gen AI assistance</b> in any part of its developement. <br />
            I'm not anti-AI, but I prefer to understand thoroughly the tools I'm working with. Especially at this point of
            my career, I think relying too much on AI could hinder my learning process. <br />
            

            <Link to="https://lanaturalcoopmunicacio.org/crmess/" target="_blank">Info Page (catalan)</Link> <br /> <br />


            <div className="window-body">
              <p>Features:</p>

              <ul>
                <li>Build a <b>contacts network</b> and filter by a wide range of parameters</li>
                <li>Follow each contact's <b>projects, subdivided by tasks</b></li>
                <li>Generate <b>budgets</b> for each project</li>
                <li>Track <b>worker's dedication</b> to each task </li>
                <li><b>Schedule</b> meetings and events</li>
                <li>Rate each contact's <b>Social Balance</b> and track it over time</li>
                <li>Get quick global and per project/contact/task <b>insights</b></li>
                
              </ul>
            </div>

            <div className="window-body">

              <p>Technical details:</p>

              <ul>
                <li><b>Vite + Vue 3</b> Composition API for frontend</li>
                <li><b>Tailwind</b> for styling</li>
                <li><b>Express.js</b> for RESTful API</li>
                <li><b>MySQL</b> database</li>
                <li><b>Sequelize</b> ORM for database modeling</li>
                <li><b>D3</b> for charts and data visualization</li>
                <li><b>JWT</b> for authentication</li>
                <li><b>Multi-tenant</b> architecture</li>
              </ul>

            </div>
          </p>
        </div>
        <div className="window-body" >

          <hr />

        <p><b>2023 Fullstack Bootcamp</b></p>
          <ul>
              <li>3 month full time bootcamp covering full stack technologies: <br />
              JavaScript ES6+, React.js, ReactContext API, <br />
              Node/Express, MySQL, Sequelize, HTML and CSS.</li>
              <li>Demonstrated problem-solving skills by tackling <br />
              complex coding challenges and implementing efficient solutions.</li>
              <li>Built <b>3 full stack projects</b>: an MVP, a Feature Extension and a Group Project.</li>
          </ul>
        </div>
        <ul className="tree-view">
          
          <li>Bootcamp projects:</li>

          <li>
            <details>
            <summary>MVP - Judit's Retro Music Theory Site</summary>
            
            <ul>
              <li>Full stack app that teaches you basic music theory with a Windows 98 aesthetic.</li>
              <li>Built with: React, Express.js, CSS (98.css library for all that retro flavour), Ableton Live (for the sound assets)</li>
            </ul>
            </details>
          </li>

          <li>
            <details>
            <summary>Feature Extension - Iris' Magic Ball / Politicians Edition</summary>
            <ul>
              <li>Full stack app that sends a ChatGPT generated mail to a random politician address <br />previously fetched from Spain’s Congreso and Senado websites.</li>
              <li>
                <details open>
                  <summary>Feature Extensions:</summary>
                  <ul>
                    <li>user register and login (JSON Web Token, bycrypt)</li>
                    <li>new profile for politicians (they can write absurd speeches using ChatGPT with a few dropdown lists)</li>
                    <li>Messages filtered by userId accessed via token</li>
                  </ul>
                </details>
              </li>
              <li>Built with: React, Express.js, CSS, JSON Web Token</li>
            </ul>
            </details>
          </li>

          <li>
            <details>
            <summary>Group Project - Social Ripple</summary>
            
            <ul>
              <li>Full stack app that connects event venues with volunteers.</li>
              <li>Collaborated effectively, cultivating a cohesive team dynamic</li>
              <li>Implemented the Google Maps API logic to show events in the map and handle the corresponding InfoWindow, <br />
              used React Three Fiber to create a responsive animated 3d logo for the site, <br />
              helped deploy a Sequelized backend and built a robust frontend together with my colleagues.</li>
            </ul>
            </details>
          </li>
        </ul>
        I'm always working on new projects, follow me on <Link to="https://github.com/juditk84" target="_blank">GitHub</Link> and <Link to="https://www.linkedin.com/in/judit-calero-timoneda-77ba06287/" target="_blank">LinkedIn</Link> to know what I'm up to!
    </div>
  )
}
