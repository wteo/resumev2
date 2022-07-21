import React from 'react';

import styles from './Course.module.css';

function Course(props) {
    return (
        <div className={styles.courseContainer}>
            <p className={styles.courseTitle}>{props.title}</p>
            <p className={styles.courseLecturer}>{props.lecturer}</p>
            <p>{props.date}</p>
        </div>
    );
}

export default Course;