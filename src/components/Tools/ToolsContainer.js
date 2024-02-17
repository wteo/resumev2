import React from 'react';

import styles from './ToolsContainer.module.css';

function ToolsContainer(props) {
    return (
        <div>
            <p className={styles.toolType} data-aos='fade-right' data-aos-once='true'>{props.toolType}</p>
            <div className={styles.toolsList}>
                {props.children}
            </div>
        </div>
    );
}

export default ToolsContainer;