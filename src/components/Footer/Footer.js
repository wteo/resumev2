import React from 'react';

import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footerStyling}>
            <div data-aos='fade-in'>
                <p id={styles.contactLine}>Say hello!</p>
                <p>↓</p>
                <a id='contact' href='/#contact'>
                    <p id={styles.email}>wendyteo.wy@gmail.com</p>
                </a>
                <p id={styles.phone}>(+61) 458 369 510</p>
                <p id={styles.github}>
                    <a href='https://github.com/wteo/' target='_blank' rel='noreferrer'>
                        github.com/wteo/
                    </a>
                </p>
                <p id={styles.copyright}>© Wendy Teo 2022 •  Designs by Yours Truly</p>
                <p id={styles.place}>Sydney, Australia</p>
            </div>
        </footer>
    );
}

export default Footer;