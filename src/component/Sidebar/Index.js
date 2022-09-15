import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/image/logo.png';
import LogoSub from '../../assets/image/logo-sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGithub, faLinkedin, faReddit, faSkype, faStackOverflow, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className='logo' to='/' >
        <img src={LogoS} alt="Website logo" />
        <img src={LogoSub} alt="Website" className='sub-logo' />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                 <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about__link" to="/about">
                 <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact__link" to="/contact">
                 <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>


        <ul>
            <p className='social__media'>Social Medias</p>
            <li>
                <a target="_blank" 
                rel="noreferrer" 
                href="/" >
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel="noreferrer" 
                href="/" >
                <FontAwesomeIcon icon={faFacebook} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel="noreferrer" 
                href="/" >
                <FontAwesomeIcon icon={faStackOverflow} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel="noreferrer" 
                href="https://github.com/benferanmi" >
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel="noreferrer" 
                href="/" >
                <FontAwesomeIcon icon={faReddit} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel="noreferrer" 
                href="/" >
                <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel="noreferrer" 
                href="/" >
                <FontAwesomeIcon icon={faSkype} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;