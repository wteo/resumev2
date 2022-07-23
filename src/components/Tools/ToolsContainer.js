import React from 'react';

import styles from './ToolsContainer.module.css';

function ToolsContainer(props) {
    return (
        <div>
            <p className={styles.toolType}>{props.toolType}</p>
            <div className={styles.toolsList}>
                {props.children}
            </div>
        </div>
    );
}

export default ToolsContainer;