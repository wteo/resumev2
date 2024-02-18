import React from "react";

import styles from './WorkProjects.module.css';

function WorkProjects(props) {
    return (
    <>
        <h3 className={styles.projectTitle} data-aos='fade-right' data-aos-once='true'>{ props.title }</h3>
        <div className={styles.projectsGrid}>
            { props.children }
        </div>
    </>
    );
}


export default WorkProjects;