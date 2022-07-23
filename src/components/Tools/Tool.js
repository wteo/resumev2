import React, { Fragment, useContext } from 'react';

import styles from './Tool.module.css';
import { IconContext } from './Tools';

function Tool(props) {

    const icon = useContext(IconContext);

    const isIcon = ( 
        <div className={styles.iconContainer} data-aos='fade-in'>
            <img className={styles.iconStyling} src={props.imageLink} alt={props.toolName}/>
        </div>);

    const isText = <p className={styles.toolText} data-aos='fade-in'>{props.toolName}</p>

    return (
        <Fragment>
            {icon && isIcon}
            {!icon && isText}
        </Fragment>
    );
}

export default Tool;