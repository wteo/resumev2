import React from "react";

import styles from './JobDescription.module.css';

function JobDescription() {
    return (
        <ul className={styles.jobDescriptionStyle}>
            <li className={styles.task}>
                Collaborate with UI/UX designers and content creators to implement NRMA website updates, 
                ensuring a seamless user experience.
            </li>
            <li className={styles.task}>
                Develop and maintain responsive web pages and components using HTML, CSS, and JavaScript.
            </li>
            <li className={styles.task}>
                Manage website content using CMS Drupal 7 and work closely with full stack developers to maintain 
                functionality and security of website.
            </li>
        </ul>
    );
}

export default JobDescription;