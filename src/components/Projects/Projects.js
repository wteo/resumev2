import React from 'react';

import styles from './Projects.module.css';
import Project from './Project';
import NavTitleStyle from '../../UI/Nav-Title-style';

// images
import IAL from '../../images/ial.png';
import cafeDeVopsImg from '../../images/cafeDeVops.png';
import cafeDeVopsDoc from '../../files/cafeDeVops.pdf';
import demandLetter from '../../images/demandLetter.PNG';
import syncbill from '../../images/syncbill.png';

function Projects() {

    const projectsArr = [{
        name: 'Blockchain Sydney',
        imageLink: '',
        projectLink: 'https://blockchainsydney.org',
        date: 'Feb 24 | Wordpress',
        description: 'A full website I designed and built for the largest blockchain meetup group in Australia.'
    }, {
        name: 'Anthony Atapattu - Personal Training Coach',
        imageLink: '',
        projectLink: 'https://gotsauss.com/',
        date: 'Feb 24 | Figma VueJS Sass Netlify',
        description: 'A personal training website that I personally designed abd built as a freelancer. Built in VueJS and deployed in Netlify'
    }, {
        name: 'The Lazy Society',
        imageLink: '',
        projectLink: 'https://info.thelazysociety.com',
        date: 'Dec 23 | MongoDB ExpressJS React NodeJS',
        description: 'A landing page I have created for a not-for-profit organisation focusing on educating the public about cryptocurrency.'
    }, {
        name: 'SyncBill',
        imageLink: syncbill,
        projectLink: 'https://syncbill.org/home',
        date: 'Aug 23 | React Firebase NodeJS MongoDB Hubspot (Website only)',
        description: 'With close association with UTS Startups, I collaborate with other full stack / backend developers to build an online accounts receivable system, powered with AI.'
    }, {
        name: 'Cafe De Vops',
        imageLink: cafeDeVopsImg,
        projectLink: cafeDeVopsDoc,
        date: 'Jun 23 - Jul 23 | Figma Yarn VueJS AWS',
        description: 'Developed an intuitive Jira ticket creation form designed to streamline user interactions during the submission of routine requests. Please note that as this is an internal project, I am only able to share the conceptual design that I personally designed.'
    }, {
        name: 'Insurance Australia Limited (IAL)',
        imageLink: IAL,
        projectLink: 'https://ial.com.au',
        date: 'Feb 23 | Hugo',
        description: 'Acquired proficiency in Hugo to independently modify the discontinued IAL brand\'s static website, update content, & manage deployment, thereby ensuring continued support for existing customers.'
    }, {
        name: 'DeLetter',
        imageLink: demandLetter,
        projectLink: 'https://github.com/wteo/deletter',
        date: 'Nov 22 | TypeScript React Firebase Authentication',
        description: 'DeLetter allows users to easily create a professional and legally-sound demand letter in just a few steps. Whether you are trying to collect a debt, resolve a contract dispute, or address any other legal issue, DeLetter has you covered.'
    }];

    return (
        <div id='projects'>
            <NavTitleStyle navColor='main'>
                Projects
            </NavTitleStyle>
            <div className={styles.projectsGrid}>
                { projectsArr.map(project => 
                    <Project 
                        name={project.name} 
                        imageLink={project.imageLink} 
                        projectLink={project.projectLink} 
                        date={project.date} 
                        description={project.description} 
                    />)
                }
            </div>
        </div>
    );
}

export default Projects;