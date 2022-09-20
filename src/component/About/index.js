import Sidebar from '../Sidebar/Index';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { faAngular, faCss3, faGit, faHtml5, faJava, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Loaders } from 'loaders.css'

const About = () => {
    const {letterClass} = useState('text-animate')

    // useEffect (() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])


    return(

        <div className='about'>
            <Sidebar/>

            <div className='about__details'>
                <div className='text__zone'>
                  <h1>
                  <AnimatedLetters 
                  letterClass={letterClass}
                    strArray={['A','B','O','U','T',' ','M','E']}
                    idx={15}
                    />
                  </h1>

                    <p>
                        I'm very ambitious front end website developer looking for a role
                        in established It company with the opportunity to work with the 
                        latest technology on diverse and challenging projects.
                    </p>
                    <p>
                        I'm quietly confident, naturaly curious, and perpectually wrking on 
                        improving my chops one design problem at a time
                    </p>
                    <p>
                        If i need to define my self in one sentence that will be a family person,
                        a bachelor, a sport fantasty, a gamer an enthusiast, and a tech-obsessed!!!
                    </p>
                </div>
            </div>

            <div className='stage__cube__cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#dd0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="blue"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="yellow"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="deep-blue"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGit} color="fff000"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJava} color="gold"/>
                    </div>
                </div>
            </div>

        {/* <Loaders type="pacman" /> */}
        </div>
        
        )
} 


export default About;