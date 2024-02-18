import React from "react";

import styles from './JobDescription.module.css';

function JobDescription(props) {

    return (
        <ul className={styles.jobDescriptionStyle} data-aos='fade-right' data-aos-once='true'>
            { props.descriptions.map((description, index) => <li className={styles.task} key={index}>{description}</li>) }
        </ul>
    );
}


export default JobDescription;