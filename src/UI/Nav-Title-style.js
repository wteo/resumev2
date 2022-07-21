import React from "react";

import styles from './Nav-Title-style.module.css';

function NavTitleStyle(props) {

    const mainColor = <h1 className={styles.mainNavTitleColor}>{props.children}</h1>;
    const altColor = <h1 className={styles.altNavTitleColor}>{props.children}</h1>;

    return (
        <div className={styles.navTitle}>
            {props.navColor === 'main' ? mainColor : altColor}        
        </div>
    );
}

export default NavTitleStyle;