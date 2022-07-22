import React from 'react';

import style from './Header.module.css';

import picture from '../../images/profile.jpg';


function Header () {
    return (
        <header>
            <div className={style.profileName}>
                <div>
                    <img className={style.profilePicture} src={picture} alt="My Happy Face" />
                </div>
                <p>Wendy Teo</p>
            </div>

            <nav>
                <p></p>
                <p>About Me</p>
                <p>Education</p>
                <p>Projects</p>
                <p>Experience</p>
                <p>Skills</p>
            </nav>
        </header>
    );
}

export default Header;