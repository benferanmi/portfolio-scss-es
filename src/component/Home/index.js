import './index.scss'
import LogoMain from '../../assets/image/b-logo.JPG'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import LogoPg from './Logo';

const Home = () => {

    ///usestate function below
    const [letterClass] = useState('text-animate')
    const nameArray = ['e','n','j','a','m','i','n']
    const secArray = ['w','e','b','','d','e','v','e','l','o','p','e','r']

    //useeffectFunction Below
    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, )


    //main body starts below
    return (
        <div className='container home__page '>
            <div className='text__zone'>
                <h1> 
                    <span className={letterClass}  >H</span> 
                    <span className={ `${letterClass} _12` }  >i, </span> 
                <br/>
                <span className={ `${letterClass} _13` }  >I </span> 
                <span className={ `${letterClass} _14` } >'m </span> 
                <img src={LogoMain} alt="developer"/>
               <AnimatedLetters 
               letterClass={letterClass} 
               strArray={nameArray} 
               idx={15}/>
                <br/>
                <AnimatedLetters 
               letterClass={letterClass} 
               strArray={secArray} 
               idx={22}/>
                </h1>

                <h2>Frontend Developer / JavaScript Expert / Wordpress developer </h2>
                <Link to="/contact" className="flat__button">CONTACT ME</Link>
            </div>

            <LogoPg/>
        </div>
    )
}

export default Home;