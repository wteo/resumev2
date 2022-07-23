import React from 'react';

import styles from './Project.module.css';

function Project(props) {
    return (
        <div className={styles.container} data-aos='flip-left'>
            <div className={styles.projectContainer}>
                <a href={props.projectLink} target='_blank' rel='noreferrer'>
                <img className={styles.image} src={props.imageLink} alt='project'/>
                <p className={styles.projectName}>{props.name}</p>
                <p className={styles.projectDate}>{props.date}</p>
                <p className={styles.projectDescription}>{props.description}</p>
                </a>
            </div>
        </div>
    );
}

export default Project;
