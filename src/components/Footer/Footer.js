import React from 'react';
import styles from './Footer.module.css'; // Import your CSS module here

const Footer = () => {
    return (
        <footer className={styles.footerStyling}>
            <p id={styles.copyright}>© Wendy Teo 2024 •  Designs by Me!</p>
        </footer>
    );
};

export default Footer;