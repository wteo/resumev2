import React from 'react';

import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footerStyling}>
            <p id={styles.contactLine}>Say hello!</p>
            <p>↓</p>
            <p id={styles.email}>wendyteo.wy@gmail.com</p>
            <p id={styles.phone}>(+61) 458 369 510</p>
            <p id={styles.github}>github.com/wteo/</p>
            <p id={styles.copyright}>© Wendy Teo 2022 •  Designs by Yours Truly</p>
            <p id={styles.place}>Sydney, Australia</p>
        </div>
    );
}

export default Footer;