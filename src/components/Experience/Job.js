import React from "react";

import styles from './Job.module.css';

function Job(props) {
    return (
        <div className={styles.jobStyling} data-aos='fade-right' data-aos-once='true'>
            <p className={styles.company}>{props.company}</p>
            <div className={styles.datesAndTitleContainer}>
                <span className={styles.jobDates}>{props.dates}</span>
                <span className={styles.jobTitle}>{props.title}</span>
            </div>
        </div>
    );
}

export default Job;