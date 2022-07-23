import React from "react";

import Job from './Job';
import JobDescription from './JobDescription';
import NavTitleStyle from "../../UI/Nav-Title-style";

import styles from './Experience.module.css'; 

function Experience() {

    const jobsArr = [{
        company: 'Link Group',
        dates: 'Nov 2019 – Present',
        title: 'Credit Controller'
    }, {
        company: 'Hanson Construction Materials',
        dates: 'Jan 2019 – Sept 2019',
        title: 'Credit Controller'
    }, {
        company: 'Samsung Electronics',
        dates: 'May 2016 – Aug 2018',
        title: 'Senior Accounts Receivables Officer'
    }, {
        company: 'IBM',
        dates: 'Nov 2013 – Nov 2015',
        title: 'Accounts Receivables Specialist'
    }];

    return (
        <div className={styles.experienceStyling} id='experience'>
            <div>
                <NavTitleStyle navColor='alt'>
                    Experience
                </NavTitleStyle>
            </div>
            <div className={styles.jobs}>
                <div className={styles.jobAndDescription}>
                    <Job company={jobsArr[0].company} dates={jobsArr[0].dates} title={jobsArr[0].title}/>
                    <JobDescription />
                </div>
                <Job company={jobsArr[1].company} dates={jobsArr[1].dates} title={jobsArr[1].title}/>
                <Job company={jobsArr[2].company} dates={jobsArr[2].dates} title={jobsArr[2].title}/>
                <Job company={jobsArr[3].company} dates={jobsArr[3].dates} title={jobsArr[3].title}/>
            </div>
        </div>
    );
}

export default Experience;