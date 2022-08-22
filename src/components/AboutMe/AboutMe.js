import React from 'react';

import NavTitleStyle from '../../UI/Nav-Title-style';

import styles from './AboutMe.module.css';
import profilePicture from '../../images/profile2.jpg';

import resumeFile from '../../files/resume.pdf';

function AboutMe() {
    return (
        <div className={styles.aboutMeOuterContainer} id='aboutMe'>
            <NavTitleStyle navColor='main'>
                About Me
            </NavTitleStyle>
            <div className={styles.aboutMeInnerContainer}>
                <div className={styles.aboutMeSummary}>
                    <p className={styles.aboutMeSubTitle}>Self-Taught Developer</p>
                    <p>I am a full-time professional, who has been studying web development slightly over a year now.</p>
                    <p>After 9 years in Finance, I decided to pursue my interest in web design.</p>
                    <br/>
                    <p className={styles.aboutMeSubTitle}>General</p>
                    <p>I was born in Malaysia. Hence, I can speak 4 different languages: English (my most used language), Malay, Mandarin and Hokkien.</p>
                    <p>For leisure, I enjoy cycling and reading books.</p>
                    <p id={styles.resume}>
                        View my resume
                        <a id={styles.linkArrow} href={resumeFile} target='_blank' rel='noreferrer'>
                         →
                        </a>
                    </p>
                </div>
                <div className={styles.aboutMeImageContainer} data-aos='fade-in'>
                    <img className={styles.profileImage} src={profilePicture} alt='myself'/>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;