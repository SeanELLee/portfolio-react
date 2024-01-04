import AnimatedPage from '../Transition/Transition';

function Specializations(){
  
    /*Render and structuring*/
    return (
        <AnimatedPage>
            <div id='specialization'>
                <div className='sub'>
                    <p className='highlight'>Product Development</p>
                    <p className='descriptive'>Experience in biomedical prototype development.</p>
                </div>
                <div className='sub'>
                    <p className='highlight'>Software Development</p>
                    <p className='descriptive'>Desktop software development in Python. Specialized in software design.</p>
                </div>
                <div className='sub'>
                    <p className='highlight'>Arduino Development</p>
                    <p className='descriptive'>Hardware control and arduino communication.</p>
                </div>
                <div className='sub'>
                    <p className='highlight'>Administrative</p>
                    <p className='descriptive'>Improve usability for complicated ISO procedures and provide mentorship to Interns and Co-op students.</p>
                </div>
                <div className='sub'>
                    <p className='highlight'>Photography</p>
                    <p className='descriptive'>Landscape and Street Photography.</p>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Specializations;