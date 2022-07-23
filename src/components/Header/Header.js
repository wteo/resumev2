import React from 'react';
import { Link } from 'react-scroll';

import style from './Header.module.css';

import picture from '../../images/profile.jpg';


function Header () {
    return (
        <header>
            <div className={style.profileName}>
                <div>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
                        <img className={style.profilePicture} src={picture} alt="My Happy Face" />
                    </Link>
                </div>
                <p>Wendy Teo</p>
            </div>

            <nav>
                <p></p>
                <p><Link to="aboutMe" spy={true} smooth={true} offset={50} duration={500}>About Me</Link></p>
                <p><Link to="education" spy={true} smooth={true} offset={50} duration={500}>Education</Link></p>
                <p><Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></p>
                <p><Link to="experience" spy={true} smooth={true} offset={50} duration={500}>Experience</Link></p>
                <p><Link to="tools" spy={true} smooth={true} offset={50} duration={500}>Tools</Link></p>
            </nav>
        </header>
    );
}

export default Header;