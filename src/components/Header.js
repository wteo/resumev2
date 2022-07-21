import React from 'react';

import style from './Header.module.css';

import picture from '../images/profile.jpg';


function Header () {
    const header = (
        <header>
            <div className={style.resumeHeader}>
                <div className={style.profileName}>
                    <div>
                        <img className={style.profilePicture} src={picture} alt="My Happy Face" />
                    </div>
                    <p>Wendy Teo</p>
                </div>
                <div className={style.contactDetails}>
                    <p>wendy.teo@gmail.com</p>
                    <p>(+61) 458 369 510</p>
                    <p>github.com/wteo</p>
                </div>
            </div>

            <nav>
                <p>About Me</p>
                <p>Education</p>
                <p>Projects</p>
                <p>Experience</p>
                <p>Skills</p>
            </nav>
        </header>
    );

    return header;
}

export default Header;