import './NavBar.css';
import LinkedinLight from './images/linkedin_light.svg';
import GithubLight from './images/github_light.svg';
import InstagramLight from './images/instagram_light.svg';
import SwitchLight from './images/switch_light.svg';

function NavBar(){
  
    /*Render and structuring*/
    return (
    <div>
      <nav id="nav_bar">
        <ul id = "menu_nav">
          <li><a className='elements_nav' href = "/Home">Home</a></li>
          <li><a className='elements_nav' href = "/About">About</a></li>
          <li><a className='elements_nav' href = "/Portfolio">Portfolio</a></li>
          <li><a className='elements_nav' href = "/Contact">Contact</a></li>
        </ul>
        <p id='logo'>SEAN.LEE</p>
        <div id = "menu_social">
          <a id='linkedin' href = "https://linkedin.com/in/seankitwahlee" target="_blank"><img src = {LinkedinLight}></img></a>
          <a id='github' href = "https://github.com/SeanELLee" target="_blank"><img src = {GithubLight}></img></a>
          <a id='instagram' href = "https://instagram.com/seanlee97324/" target="_blank"><img src = {InstagramLight}></img></a>
        </div>
      </nav>
    </div>
    
    )
  }
  
  export default NavBar;