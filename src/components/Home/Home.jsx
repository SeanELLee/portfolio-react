import './Home.css'
import HeadlineIcon from './images/headline_icon.png';
import AnimatedPage from '../Transition/Transition';

function Home(){
  
    /*Render and structuring*/
    return (
    <AnimatedPage>
      <div>
        <div id='home'>
          <div id='text_home'>
            <p id='headline_home'>Innovative, Creative Product Engineer</p>
            <p id='description_home'>Motivated by passion and imagination, let’s make the world a better place through challenging the status quo!</p>
            <button id='nav_about_home'>Learn More About Me!</button>
          </div>
          <div className='icon_home'>
              <img id='icon_png' src={HeadlineIcon}></img>
          </div>
        </div>
      </div>
    </AnimatedPage>
    
    )
  }
  
  export default Home;