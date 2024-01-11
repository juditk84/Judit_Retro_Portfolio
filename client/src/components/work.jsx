import React from 'react'

export default function work() {
  return (
    <div>
    This is what I've been up to recently:
    
    <ul className="tree-view">
          <li>
              <details open>
              <summary>Recent work experience</summary>
  
              <ul> 
                <li>
                    <details open>
                      <summary><b>Administration & Projects Reporting</b>, Universitat Autònoma de Barcelona (2015-present)</summary>
                        <ul>
                          <li>Managed EU grant finantial reports and ensured timely submissions.</li>
                          <li>Ensured University's compliance with EU regulations and policies.</li>
                          <li>Maintained organized records of international collaborations and projects.</li>
                          <li>Facilitated effective communication between University and EU authorities.</li>
                          <li>Monitored EU policy changes relevant to university's international activities.</li>
                        </ul>

                    </details>
                </li>
              </ul>
              <ul> 
                <li>
                    <details open>
                      <summary><b>Freelance music teacher</b> (2013-present)</summary>
                        <ul>
                          <li>Instrument Mastery: Proficient in teaching specific musical instruments, tailoring lessons to diverse student abilities.</li>
                          <li>Music Theory: Explaining theory concepts effectively with a strong emphasis on modern harmony (pop/rock, blues, jazz).</li>
                          <li>Music Production: covering from the fundamentals to more advanced topics and techniques to provide a bold understanding of music production.</li>
                        </ul>
                    </details>
                </li>
                
              </ul>
              <br /><br />I've been also teaching music in different music academies (Escola Cromàtica, Triada) 
        and I owned a recording studio in Rubí and Castellbisbal where I recorded my own productions and other musicians comissions. <br />

              </details>
          </li>
        </ul>
                Hit me up if you're in the Greater Barcelona Area and you want to learn some music!
    </div>
  )
}
