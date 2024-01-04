import AnimatedPage from '../Transition/Transition';

function Experience(){
  
    /*Render and structuring*/
    return (
        <AnimatedPage>
            <div id='experience'>
                <div className='sub'>
                    <p className='highlight'>2023-Present</p>
                    <p className='descriptive'>PhoMedics: Project Engineer - Administrative & Coordination</p>
                </div>
                <div className='sub'>
                    <p className='highlight'>2022-2023</p>
                    <p className='descriptive'>PhoMedics: Project Engineer - Product Development</p>
                </div>
                <div className='sub'>
                    <p className='highlight'>2021-2022</p>
                    <p className='descriptive'>Maxgrand: Assistant Engineer - Project Coordination</p>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Experience;