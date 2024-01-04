import AnimatedPage from '../Transition/Transition';

function Education(){
  
    /*Render and structuring*/
    return (
        <AnimatedPage>
            <div id='education'>
                <div className='sub'>
                    <p className='highlight'>2023</p>
                    <p className='descriptive'>Google IT Automation with Python Specialization Certificate</p>
                </div>
                <div className='sub'>
                    <p className='highlight'>2023</p>
                    <p className='descriptive'>Google Project Management Specialization Certificate</p>
                </div>
                <div className='sub'>
                    <p className='highlight'>2021</p>
                    <p className='descriptive'>Bachelor of Engineering in Materials Engineering from City University of Hong Kong</p>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Education;