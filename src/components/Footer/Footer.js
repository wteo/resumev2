import React from 'react';

import styles from './Footer.module.css';

import resumeFile from '../../files/resume.pdf';

function Footer() {
    return (
        <footer className={styles.footerStyling}>
            <p id={styles.contactLine}>Say hello!</p>
            <p>↓</p>
            <div id='contact'>
                <p id={styles.email}>wendyteo.wy@gmail.com</p>
                <p id={styles.phone}>(+61) 458 369 510</p>
            </div>
            <p id={styles.github}>
                <a href='https://github.com/wteo/' target='_blank' rel='noreferrer'>
                    github.com/wteo/
                </a>
            </p>
            <p id={styles.resume}>
                <a href={resumeFile} target='_blank' rel='noreferrer'>
                    Download Resume
                </a>
            </p>
            <p id={styles.copyright}>© Wendy Teo 2022 •  Designs by Me!</p>
            <p id={styles.place}>Sydney, Australia</p>
        </footer>
    );
}

export default Footer;