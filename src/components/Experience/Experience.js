import React from "react";

import Job from './JobSummary/Job';
import JobDescription from './JobSummary/JobDescription';
import NavTitleStyle from "../../UI/Nav-Title-style";

import styles from './Experience.module.css'; 

function Experience() {
    return (
        <div className={styles.experienceStyling}>
            <NavTitleStyle navColor='alt'>
                Experience
            </NavTitleStyle>
            <div className={styles.jobs}>
                <div className={styles.jobAndDescription}>
                    <Job />
                    <JobDescription />
                </div>
                <Job />
                <Job />
                <Job />
            </div>
        </div>
    );
}

export default Experience;