import React from 'react';

import style from './Header.module.css';

import picture from '../../images/profile.jpg';


function Header () {
    return (
        <header>
            <div className={style.profileName}>
                <div>
                    <a href='/#contact'>
                        <img className={style.profilePicture} src={picture} alt="My Happy Face" />
                    </a>
                </div>
                <p>Wendy Teo</p>
            </div>

            <nav>
                <p></p>
                <p><a href='/#aboutMe'>About Me</a></p>
                <p><a href='/#education'>Education</a></p>
                <p><a href='/#projects'>Projects</a></p>
                <p><a href='/#experience'>Experience</a></p>
                <p><a href='/#tools'>Tools</a></p>
            </nav>
        </header>
    );
}

export default Header;