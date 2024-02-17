import React from "react";

import styles from './JobDescription.module.css';
import Project from "../Projects/Project";

import IAL from '../../images/ial.png';
import cafeDeVopsImg from '../../images/cafeDeVops.png';
import cafeDeVopsDoc from '../../files/cafeDeVops.pdf';

function JobDescription() {
    return (
    <>
        <ul className={styles.jobDescriptionStyle} data-aos='fade-right' data-aos-once='true'>
            <li className={styles.task}>
                Developed & maintained responsive web pages & components using HTML, CSS, & JavaScript. 
                Participated in Agile development processes, including daily stand-ups & sprint planning meetings. 
                Collaborated with UI/UX designers, content creators, product owners & full stack developers to implement updates & maintain NRMA website. 
            </li>
            <li className={styles.task}>
                Managed website with CMS Drupal 7 & refactored legacy scripts in preparation for migration to Adobe Experience Manager. 
                i.e Refactored an accordion component from ES5 with JQuery to just JavaScript ES6, reducing code lines by 45%.
            </li>
            <li className={styles.task}>
                Optimized website performance through techniques such as code splitting, compression, & browser caching. 
                i.e utilized Webpack to split React & non-React code for the NRMA branch finder page, improving loading speed by 20%.
            </li>
            <li className={styles.task}>
                Conducted cross-browser & device testing for consistent presentation & functionality across different platforms & screen sizes. 
            </li>
        </ul>
        <h3 className={styles.projectTitle}>Work-Related Projects</h3>
        <div className={styles.projectsGrid}>
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
        </div>
    </>
    );
}


export default JobDescription;