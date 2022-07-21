import React from 'react';

import styles from './Project.module.css';

function Project(props) {
    return (
        <div className={styles.container}>
            <div className={styles.projectContainer}>
                <img className={styles.image} src={props.imageLink} alt="Shopping Order" />
                <p className={styles.projectName}>{props.name}</p>
                <p className={styles.projectDate}>{props.date}</p>
                <p className={styles.projectDescription}>{props.description}</p>
            </div>
        </div>
    );
}

export default Project;