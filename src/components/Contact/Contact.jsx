import './Contact.css'
import LinkedinLight from './images/linkedin_light.svg'
import GitHubLight from './images/github_light.svg'
import InstagramLight from './images/instagram_light.svg'
import MailLight from './images/mail_light.svg'
import PhoneLight from './images/phone_light.svg'
import AnimatedPage from '../Transition/Transition';

function Contact(){
  
    /*Render and structuring*/
    return (
    <AnimatedPage>
      <div>
        <div id='contact'>
          <p id='headline_contact'>Get in Touch!</p>
          <div id='container_contact'>
            <div id='container_left'>

              <div className='line_container'>
                <img src={LinkedinLight}></img>
                <p className='descriptive_contact'>linkedin.com/in/seankitwahlee</p>
              </div>

              <div className='line_container'>
                <img src={GitHubLight}></img>
                <p className='descriptive_contact'>github.com/SeanELLee</p>
              </div>

              <div className='line_container'>
                <img src={InstagramLight}></img>
                <p className='descriptive_contact'>instagram.com/seanlee97324/</p>
              </div>

              <div className='line_container'>
                <img src={MailLight}></img>
                <p className='descriptive_contact'>seankitwahlee@gmail.com</p>
              </div>

              <div className='line_container'>
                <img src={PhoneLight}></img>
                <p className='descriptive_contact'>seankitwahlee@gmail.com</p>
              </div>

              <div id='button_container'>
                <a href = "./resume/Designed Resume_Sean Lee.pdf" download id='design_resume'>Designed Resume</a>
                <a href = "./resume/ATS Resume_Sean Lee" download id='ats_resume'>ATS-friendly Resume</a>
              </div>
            </div>
            <div id='container_right'>
            <form name="submit-to-google-sheet">
                <div id='container_input'>
                  <div className='subcontainer_input'>
                    <input id='name_contact' type='text' required></input>
                    <span>NAME</span>
                  </div>

                  <div className='subcontainer_input'>
                    <input id='email_contact' type='text' required></input>
                    <span>EMAIL</span>
                  </div>

                  <div className='subcontainer_input'>
                    <textarea id='message_contact' type='text' required></textarea>
                    <span>MESSAGE</span>
                  </div>
                </div>
              </form>
              <button id='submit'>Submit!</button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
    
    )
  }
  
  export default Contact;