import React from 'react';

import styles from './Project.module.css';

function Project(props) {
    return (
        <div className={styles.project} data-aos='fade-in'>
            <div className={styles.project__container}>
                <a href={props.projectLink} target='_blank' rel='noreferrer'>
                <img className={styles.image} src={props.imageLink} alt='project'/>
                <p className={styles.project__name}>{props.name}</p>
                <p className={styles.project__date}>{props.date}</p>
                <p className={styles.project__description}>{props.description}</p>
                </a>
            </div>
        </div>
    );
}

export default Project;
