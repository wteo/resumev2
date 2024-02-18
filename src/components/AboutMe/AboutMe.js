import React from 'react';

import NavTitleStyle from '../../UI/Nav-Title-style';

import styles from './AboutMe.module.css';
import profilePicture from '../../images/profile2.jpg';

import resumeFile from '../../files/resume.pdf';

function AboutMe() {
    return (
        <section className={styles.aboutMeOuterContainer} id='about'>
            <NavTitleStyle navColor='main'>
                About Me
            </NavTitleStyle>
            <div className={styles.aboutMeInnerContainer}>
                <div className={styles.aboutMeSummary} data-aos='fade-right' data-aos-once='true'>
                    <p className={styles.aboutMeSubTitle}>Bridging Finance and the Future of Technology</p>
                    <p>With a solid background in finance and a deep passion for blockchain and cryptocurrency, I bridge the gap between traditional financial principles and the innovative potential of digital technologies. My decade-plus experience in finance, focusing on cash flow management, complements my enthusiasm for redefining our financial landscape through technology.</p>
                    <br/>
                    <p className={styles.aboutMeSubTitle}>Passion for Web Development</p>
                    <p>As a self-taught Web Developer driven by creativity in web design, I specialize in fintech solutions for startups and small businesses. My expertise in UI/UX design and full-stack development allows me to create websites that not only connect users to the crypto world but also embody digital innovation. This unique blend of financial acumen and tech skills enables me to offer unparalleled insights and solutions, ensuring your business thrives in the digital age.</p>
                    <br/>
                    <p className={styles.aboutMeSubTitle}>Vision into Reality</p>
                    <p>I am committed to turning your vision into reality, guiding your venture through the ever-evolving tech and finance ecosystem to new heights. Let's navigate the future of technology and finance together, transforming possibilities into tangible successes.</p>
                    <a href={resumeFile} target='_blank' rel='noreferrer'>
                        <button id={styles.resume}>Download resume</button>
                    </a>
                </div>
                <div className={styles.aboutMeImageContainer} data-aos='flip-left' data-aos-once='true'>
                    <img className={styles.profileImage} src={profilePicture} alt='myself'/>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;