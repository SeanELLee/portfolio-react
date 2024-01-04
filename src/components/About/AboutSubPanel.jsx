import './AboutSubPanel.css'
import React, { useState } from 'react';
import Education from './Education.jsx';
import Experience from './Experience.jsx'
import Specializations from './Specializations.jsx';
import Skills from './Skills.jsx'


function AboutSubPanel(){
    const [View, setView] = useState("/experience");
    let Display;
    
    function OpenTab(tabname) {
        setView(tabname);
      }

    switch (View) {
        case "/experience":
            Display = <Experience/>
            break;
        case "/specializations":
            Display = <Specializations/>
            break;
        case "/skills":
            Display = <Skills/>
            break;
        case "/education":
            Display = <Education/>
            break;
    }

    /*Render and structuring*/
    return (
    <div>
        <div id='about_sub_panel'>
            <div id='nav_panel'>
                <p className='nav_text' onClick={() => OpenTab("/experience")}>Experience</p>
                <p className='nav_text' onClick={() => OpenTab("/specializations")}>Specializations </p>
                <p className='nav_text' onClick={() => OpenTab("/skills")}>Skills</p>
                <p className='nav_text' onClick={() => OpenTab("/education")}>Education</p>
            </div>
            <div id='detail_panel'>
                {Display}
            </div>
        </div>
    </div>
    
    )
  }
  
  export default AboutSubPanel;