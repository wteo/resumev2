import React from "react";

import styles from './Job.module.css';

function Job(props) {
    return (
        <div className={styles.jobStyling}>
            <p className={styles.company}>{props.company}</p>
            <p>
                <span className={styles.jobDates}>{props.dates}</span>
                <span className={styles.jobTitle}>{props.title}</span>
            </p>
        </div>
    );
}

export default Job;