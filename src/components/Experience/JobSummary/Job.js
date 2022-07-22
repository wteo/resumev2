import React from "react";

import styles from './Job.module.css';

function Job(props) {
    return (
        <React.Fragment>
            <p className={styles.company}>Link Group</p>
            <p>
                <span className={styles.jobDates}>Nov 2019 – Present</span>
                <span className={styles.jobTitle}>Credit Controller</span>
            </p>
        </React.Fragment>
    );
}

export default Job;