import React from 'react';

import styles from './Footer.module.css';

function Footer() {
    return (
        <div classname={styles.FooterStyling}>
            <p>Email</p>
            <p>Phone</p>
            <p>Github</p>
        </div>
    );
}

export default Footer;