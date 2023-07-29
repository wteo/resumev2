import React from 'react';

import styles from './Projects.module.css';
import Project from './Project';
import NavTitleStyle from '../../UI/Nav-Title-style';

// images
import solarSystem from '../../images/solarSystem.PNG';
import pokedex from '../../images/pokedex.PNG';
import photoGallery from '../../images/photoGallery.png';
import foodOrder from '../../images/foodOrder.jpg';
import demandLetter from '../../images/demandLetter.PNG';
import syncbill from '../../images/syncbill.png';

function Projects() {

    const projectsArr = [{
        name: 'SyncBill',
        imageLink: syncbill,
        projectLink: 'https://syncbill.org/home',
        date: 'Ongoing | React Firebase NodeJS MongoDB Hubspot(Website only)',
        description: 'With close association with UTS Startups, I collaborate with other full stack / backend developers to build an online accounts receivable system, powered with AI.'
    }, {
        name: 'DeLetter',
        imageLink: demandLetter,
        projectLink: 'https://github.com/wteo/deletter',
        date: 'Nov 22 | TypeScript React Firebase Authentication',
        description: 'DeLetter allows users to easily create a professional and legally-sound demand letter in just a few steps. Whether you are trying to collect a debt, resolve a contract dispute, or address any other legal issue, DeLetter has you covered.'
    }, {
        name: 'Solar System',
        imageLink: solarSystem,
        projectLink: 'https://github.com/wteo/solarSystem',
        date: 'Oct 22 | TypeScript Vue Sass CSS',
        description: 'An educational app teaching you about the Solar System. Built with a focus on design and CSS animations as well as a heavy use of Sass.'
    }, {
        name: 'First Generation Pokedex',
        imageLink: pokedex,
        projectLink: 'https://github.com/wteo/firstGenPokedex',
        date: 'Aug 22 | React Redux JS',
        description: 'Get to know more about the original 151 Pokemon here. With PokeAPI, use this search engine app to find data on your favourite Pokemon.'
    }, {
        name: 'Photo Gallery',
        imageLink: photoGallery,
        projectLink: 'https://github.com/wteo/photoGallery',
        date: 'Aug 22 | CSS HTML',
        description: 'Built out of CSS and HTML without JavaScript, this landing page features my travel photos in Indonesia.'
    }, {
        name: 'Shopping Order',
        imageLink: foodOrder,
        projectLink: 'https://github.com/wteo/shoppingOrder',
        date: 'June 22 | React JS CSS HTML',
        description: 'A food order app which you can select meals for home delivery.'
    }];

    return (
        <div id='projects'>
            <NavTitleStyle navColor='main'>
                Personal Projects
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