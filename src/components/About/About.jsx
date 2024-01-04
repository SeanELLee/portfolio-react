import './About.css'
import ProPic from './images/personal_picture.png'
import AboutSubPanel from './AboutSubPanel';
import AnimatedPage from '../Transition/Transition';

function About(){
  
    /*Render and structuring*/
    return (
    <AnimatedPage>
        <div>
            <div id='about'>
                <img src= {ProPic}></img>
                <div id='about_text'>
                    <div id='about_text_top'>
                        <p id='headline_about'>About Me</p>
                        <p id='description_about'>I am a <span>Product Engineer</span>, a <span>Dreamer</span> and a <span>Maker</span>. Driven by sheer curiosity and passion, I am ready to <span>contribute my part to the world</span>. <span>Together</span>, we can make the world a better place with technology.</p>
                    </div>
                    <div id='about_text_down'>
                        <AboutSubPanel/>
                    </div>
                </div>
            </div>
        </div>
    </AnimatedPage>
    
    )
  }
  
  export default About;