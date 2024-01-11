import React from 'react'
import { Link } from 'react-router-dom'

export default function fullstack() {
  return (
    <div style={{textAlign: "left"}}>
      
      <p>I always had an interest for coding. I started my Fullstack journey with a FullStack bootcamp at CodeOp.
        From there, i'm trying to learn new things by working on new projects like this retro portfolio you're looking at :-)
      </p>

        <div className="window-body" >
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
              <li>Collaborated effectively and cross-culturally, cultivating a cohesive team dynamic</li>
              <li>Implemented all the Google Maps API logic to show events in the map and handle the corresponding InfoWindow, <br />
              used React Three Fiber to create a responsive animated 3d logo for the site, <br />
              helped deploy a Sequelized backend and built a robust frontend together with my colleagues.</li>
            </ul>
            </details>
          </li>
        </ul>
        I'm always working on new projects, follow me on <Link>GitHub</Link> and <Link to="https://www.linkedin.com/in/judit-calero-timoneda-77ba06287/">LinkedIn</Link> to know what i'm up to!
    </div>
  )
}
