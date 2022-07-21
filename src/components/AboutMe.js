import React from 'react';

import NavTitleStyle from '../UI/Nav-Title-style';

import styles from './AboutMe.module.css';

function AboutMe() {
    return (
        <div className={styles.aboutMeContainer}>
            <div>
                <NavTitleStyle navColor='main'>
                About Me
                </NavTitleStyle>
            </div>
            <p className={styles.aboutMeSubTitle}>Self-Taught Developer</p>
            <p>I am a full-time professional, who has been studying web development slightly over a year now.</p>
            <p>After 9 years in Finance, I decided to pursue my interest in web design.</p>
        </div>

    );
}

export default AboutMe;