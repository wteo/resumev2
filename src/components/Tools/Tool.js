import React, { useContext } from 'react';

import styles from './Tool.module.css';
import { toolIconContext } from './Tools';

function Tool(props) {

    const icon = useContext(toolIconContext);

    const isIcon = ( 
        <div className={styles.iconContainer} data-aos='fade-in'>
            <Tool imageLink={props.imageLink} toolName={props.toolName}/>
        </div>);

    const isText = <p className={styles.toolText} data-aos='fade-in'>{props.toolName}</p>

    return (
        <>
            {icon && isIcon}
            {!icon && isText}
        </>
    );
}

export default Tool;