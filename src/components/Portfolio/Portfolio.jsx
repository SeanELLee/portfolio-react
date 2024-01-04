import './Portfolio.css'
import MavisLite from './images/mavis_lite_hw.png'
import ModularStructure from './images/modular_software_structure.png'
import ChampCase from './images/champ_casing.png'
import Robot from './images/robot.png'
import AnimatedPage from '../Transition/Transition';

function Portfolio(){
  
    /*Render and structuring*/
    return (
    <AnimatedPage>
        <div>
            <div id='portfolio'>
                <p id='headline_portfolio'>My Work</p>
                <div id='work_container_portfolio'>
                    <div className='work'>
                        <img className='picture' src={MavisLite}></img>
                        <div className='layer'>
                            <h3>MAVIS-Lite</h3>
                            <p>Revolutionary biomedical prototype enables virtual staining for conventional microscopes, enhancing visualization and analysis of biological samples, opening new possibilities in research.</p>
                        </div>
                    </div>
                    <div className='work'>
                        <img className='picture' src={ModularStructure}></img>
                        <div className='layer'>
                            <h3>Modular Software Framework</h3>
                            <p>A modular software structure that enhances cross-functional collaboration by establishing interfaces and protocols, improving efficiency and communication among different teams.</p>
                        </div>
                    </div>
                    <div className='work'>
                        <img className='picture' src={ChampCase}></img>
                        <div className='layer'>
                            <h3>CHAMP Casing Design</h3>
                            <p>A Casing design for CHAMP to turn CHAMP from a boring prototype into a semi product level prototype improving the overall usability.</p>
                        </div>
                    </div>
                    <div className='work'>
                        <img className='picture' src={Robot}></img>
                        <div className='layer'>
                            <h3>Voice AI Chatbot</h3>
                            <p>A personal project to create a voice-enabled Chatbot using voice recognition and the ChatGPT API, combining my passion for technology and natural language processing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AnimatedPage>
    
    )
  }
  
  export default Portfolio;