import React from 'react'
import { Link } from 'react-router-dom'
import useScreenSize from '../hooks/useScreenSize'

export default function musician() {

  const {isStandardSizeScreen} = useScreenSize();

  return (
    <div> I like to set yearly goals that I can go back to and measure my expectations/performance. <br />
          These are a few for 2025:
    <div>

        

        <div>
          <ul className="tree-view">
            <details open>
              <summary>Join a <b>medium/big team</b> and contribute to their product.</summary>
              <ul>
                <li>I've learned a lot from my freelance work and from working with small teams, but
                    I'm looking forward to the growth and learning that comes from joining a big team
                    with an established product.
                </li>
              </ul>
            </details>
            <details open>
              <summary><b>Publish and mantain</b> the SaaS product I built.</summary>
              <ul>
                <li>Building the app up to a deployable state is being a beautiful journey and we're
                    very thankful for it. Dealing with active users, mantaining it securely and making it
                    bigger will definitely be a challange and a massive learning opportunity.
                </li>
              </ul>
            </details>
            <details open>
              <summary>Learn <b>Django</b> and deepen my <b>Python</b> knowledge.</summary>
              <ul>
                <li>Before jumping into the javascript echosystem, I played a lot with Python. I don't want
                    to stay within one language/framework; I think learning Django is the next logical
                    step for me and I'm excited about it.
                </li>
              </ul>
            </details>
            <details open>
              <summary>Refactor previous projects written in Javascript to <b>Typescript</b>.</summary>
              <ul>
                <li>Javascript with type safety? Yes, sign me in :-)
                </li>
              </ul>
            </details>
            <details open>
              <summary>Build a small <b>indie game with Godot</b>.</summary>
              <ul>
                <li>I've been wanting to do this for a while, and now that I have transferable-enough
                    skills to build something with a decent architecture, I'm ready to jump into it.
                </li>
              </ul>
            </details>
        </ul>

        </div>
        
        
      </div>
      

    </div>
  )
}
