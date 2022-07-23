import React from 'react';

import styles from './Tool.module.css';

function Tool(props) {
    return (
        <div className={styles.iconContainer} data-aos='fade-in'>
            <img className={styles.icon} src={props.imageLink} alt={props.toolName} />
        </div>
    );
}

export default Tool;