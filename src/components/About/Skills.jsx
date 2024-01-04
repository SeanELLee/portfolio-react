import AnimatedPage from '../Transition/Transition';

function Skills(){
  
    /*Render and structuring*/
    return (
        <AnimatedPage>
            <div id='skills'>
                <div className='sub'>
                    <p className='highlight'>Familiar</p>
                    <p className='descriptive'>Solidworks | AutoCAD | Python | OpenCV | System Design | Qt Designer | Figma | HTML/CSS | Frontend Development |</p>
                </div>
                <div className='sub'>
                    <p className='highlight'>On the Way</p>
                    <p className='descriptive'>React.js | Javascript | UI Design | Backend Development |</p>
                </div>
                <div className='sub'>
                    <p className='highlight'>Soft Skills</p>
                    <p className='descriptive'>Analytical thinking | Collaborative | Presentation skills | Communication skills | Organizing and planning | Problem solving | Leadership |</p>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Skills;