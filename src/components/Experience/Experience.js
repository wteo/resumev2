import React from "react";

import Job from './Job';
import JobDescription from './JobDescription';
import WorkProjects from './WorkProjects';
import Project from '../Projects/Project';
import NavTitleStyle from "../../UI/Nav-Title-style";

import styles from './Experience.module.css'; 

import IAL from '../../images/ial.png';
import cafeDeVopsImg from '../../images/cafeDeVops.png';
import cafeDeVopsDoc from '../../files/cafeDeVops.pdf';

function Experience() {

    const jobsArr = [{
        company: 'Blue Ink Tint Creative Network',
        dates: 'Sep 2023 - Present',
        title: 'Freelancer Web Designer / Developer',
    }, {
        company: 'The Lazy Society',
        dates: 'Sep 2023 - Present',
        stack: '',
        website: '',
        title: 'Full Stack Web Developer',
        descriptions: [
            'Spearheaded the development of The Lazy Society\'s web platform, focusing on cryptocurrency education & user engagement, whilst implementing responsive design & interactive UI components via React.',
            'Managed back-end development, ensuring robust and scalable server-side functionality.',
            'Collaborated in a team environment, contributing to the site\'s continuous improvement and feature integration.'
        ]
    },
    {
        company: 'Insurance Australia Group',
        dates: 'Jan 2023 - Jul 2023',
        stack: 'Stack(s): JavaScript, Webpack, NodeJS, NPM, Drupal, PHP',
        website: 'NRMA',
        title: 'Web Developer Intern',
        descriptions: [
            'Developed & maintained responsive web pages & components using HTML, CSS, & JavaScript. Participated in Agile development processes, including daily stand-ups & sprint planning meetings. Collaborated with UI/UX designers, content creators, product owners & full stack developers to implement updates & maintain NRMA website.', 
            'Managed website with CMS Drupal 7 & refactored legacy scripts in preparation for migration to Adobe Experience Manager. i.e Refactored an accordion component from ES5 with JQuery to just JavaScript ES6, reducing code lines by 45%.',
            'Optimized website performance through techniques such as code splitting, compression, & browser caching. i.e utilized Webpack to split React & non-React code for the NRMA branch finder page, improving loading speed by 20%.',
            'Conducted cross-browser & device testing for consistent presentation & functionality across different platforms & screen sizes.'
        ]
    },{
        company: 'Finance Roles',
        dates: 'Before 2023',
        descriptions: ['Accumulated 10 years of experience in financial roles, developing key skills in account management, credit control, & process automation in companies including IBM, Samsung Electronics, Hanson Constructions & Link Group.']
    }];

    return (
        <section className={styles.experienceStyling} id='experience'>
            <NavTitleStyle navColor='alt'>
                Experience
            </NavTitleStyle>
                <Job company={jobsArr[0].company} dates={jobsArr[0].dates} title={jobsArr[0].title}/>
                <div className={styles.jobAndDescription}>
                    <Job company={jobsArr[1].company} dates={jobsArr[1].dates} title={jobsArr[1].title}/>
                    <JobDescription descriptions={jobsArr[1].descriptions}/>
                </div>
                <div className={styles.jobAndDescription}>
                    <Job company={jobsArr[2].company} dates={jobsArr[2].dates} title={jobsArr[2].title} />
                    <JobDescription descriptions={jobsArr[2].descriptions} />
                    <WorkProjects title="Websites / Projects I worked on:">
                        <Project 
                            name="Cafe De Vops" 
                            imageLink={cafeDeVopsImg}
                            projectLink={cafeDeVopsDoc}
                            date="Jun 23 - Jul 23 | Figma Yarn VueJS AWS"
                            description="Developed an intuitive Jira ticket creation form designed to streamline user interactions during the submission of routine requests. 
                            Please note that as this is an internal project, I am only able to share the conceptual design that I personally designed."
                        />
                        <Project 
                            name="Insurance Australia Limited (IAL)" 
                            imageLink={IAL}
                            projectLink="https://ial.com.au"
                            date="Feb 23 | Hugo"
                            description="Acquired proficiency in Hugo to independently modify the discontinued IAL brand's static website, 
                            update content, & manage deployment, thereby ensuring continued support for existing customers."
                        />
                    </WorkProjects>
                </div>
                <Job company={jobsArr[3].company} dates={jobsArr[3].dates} />
                <JobDescription descriptions={jobsArr[3].descriptions} />
        </section>
    );
}

export default Experience;