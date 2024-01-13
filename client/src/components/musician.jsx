import React from 'react'
import { Link } from 'react-router-dom'
import useScreenSize from '../hooks/useScreenSize'

export default function musician() {

  const {isStandardSizeScreen} = useScreenSize();

  return (
    <div>I've been playing music for as long as I can remember. <br />
    I'm an experienced guitar and keyboard player, singer, music teacher and producer. I value authenticity
    and experimentation and I make it my goal to always push the limits of my creativity. This has taken me on
    a rich journey through many different styles and instruments, keeping myself curious about new ways of doing
    things that also bleed into my other interests in life.


    
      <div className={isStandardSizeScreen ? "main_two_columns" : ""}>

        {isStandardSizeScreen &&
        
        <div style={{textAlign: "left"}}>
          <img style={{width: "50%" }} src="/screen_assets/meatmachine.jpeg" alt="" />
          <img style={{width: "50%" }} src="/screen_assets/fronterarara.jpeg" alt="" />
          <img style={{width: "50%" }} src="/screen_assets/exxabrupto.jpg" alt="" />
          <img style={{width: "50%" }} src="/screen_assets/portrait.jpg" alt="" />
        </div>
        
        }

        <div>
        <ul className="tree-view">
          <li>
              <details open>
              <summary>Here's some highlights from the last few years:</summary>
            
              <ul>
                <li><u><Link style={{color: "blue"}} to="https://open.spotify.com/album/4hEaxUOtAHOevt5bkYdiZW?si=9GJIQZCnQM-seUspkvBKRQ" target="_blank">Meat Machine</Link></u>, Obsidian Kingdom's third album.</li>
                <li><u><Link style={{color: "blue"}} to="https://open.spotify.com/album/5qBl6ckPHkFLsMrbJ7Xo5R?si=iefxGTM1TNGshstk8uNvUw" target="_blank">Frontera Rara</Link></u>, my first solo album.</li>
                <li><u><Link style={{color: "blue"}} to="https://on.soundcloud.com/Enss9" target="_blank">Fragment 36</Link></u> pre-released on SoundCloud.</li>
                <li>Science of Noise <u><Link style={{color: "blue"}} to="https://www.scienceofnoise.net/entrevista-a-judit-calero-teclista-de-obsidian-kingdom-podriamos-convertirnos-en-un-quinteto-de-flautistas-que-versionan-a-schoenberg-y-seguiriamos-siendo-resenados-en-medios-metaleros/" target="_blank">interview.</Link></u></li>
                <li>Fear of a Queer Planet <u><Link style={{color: "blue"}} to="https://newnoisemagazine.com/interviews/fear-of-a-queer-planet-interview-with-obsidian-kingdom-keyboardist-judit/" target="_blank">interview.</Link></u></li>
                <li>Gender Sounds ESMUC 2023.</li>
                <li>SAFO.EXE at Fundació Brossa.</li>
                <li><u><Link style={{color: "blue"}} to="https://www.instagram.com/p/Cu4dKCcqFcQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">Exxabrupto Festival</Link></u> 2023.</li>
                <li>Arctangent festival UK 2023 with <u><Link style={{color: "blue"}} to="https://www.instagram.com/reel/CvuxgBqqgUe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">Lys Morke.</Link></u></li>
              </ul>
              </details>
          </li>
        </ul>
        {!isStandardSizeScreen &&
        
        <div style={{textAlign: "left"}}>
          <img style={{width: "50%" }} src="/screen_assets/meatmachine.jpeg" alt="" />
          <img style={{width: "50%" }} src="/screen_assets/fronterarara.jpeg" alt="" />
          <img style={{width: "50%" }} src="/screen_assets/exxabrupto.jpg" alt="" />
          <img style={{width: "50%" }} src="/screen_assets/portrait.jpg" alt="" />
        </div>
        
        }
        You can follow me on <Link to="https://www.instagram.com/_juditk/" target="_blank">Instagram</Link> to stay updated about upcoming shows and releases :-)
        Support me on <u><Link style={{color: "blue"}} to="https://juditk.bandcamp.com/album/frontera-rara" target="_blank">bandcamp :-)</Link></u>
        </div>
        
        
      </div>
      

    </div>
  )
}
