import React from "react";

import styles from './JobDescription.module.css';
import Project from "../Projects/Project";

import IAL from '../../images/ial.png';

function JobDescription() {
    return (
    <>
        <ul className={styles.jobDescriptionStyle}>
            <li className={styles.task}>
                Develop & maintain responsive web pages & components using HTML, CSS, and JavaScript.
            </li>
            <li className={styles.task}>
                Participate in Agile development processes, including daily stand-ups & sprint planning meetings.
            </li>
            <li className={styles.task}>
                Collaborate with UI/UX designers, content creators, product owners & full stack developers to implement updates & maintain NRMA website.
            </li>
            <li className={styles.task}>
                Manage website with CMS Drupal 7 & refactor legacy scripts in preparation for migration to Adobe Experience Manager.
            </li>
            <li className={styles.task}>
                Optimize website performance, such as code splitting, compression, & browser caching.
            </li>
            <li className={styles.task}>
                Conduct cross-browser & device testing for consistent presentation & functionality across different platforms & screen sizes.
            </li>
        </ul>
        <section className={styles.jobDescriptionStyle}>
            <h4>Work-Related Project</h4>
            <Project 
                    name="Insurance Australia Limited (IAL)" 
                    imageLink={IAL}
                    projectLink="https://ial.com.au"
                    date="Feb 2023 | Hugo"
                    description="Independently modified the discontinued IAL brand's
                    static website by learning Hugo, updating content, &
                    managing deployment, ensuring continued support for
                    existing customers"
            />
        </section>
    </>
    );
}


export default JobDescription;