import React from 'react';

import styles from './Projects.module.css';
import Project from './Project';
import NavTitleStyle from '../../UI/Nav-Title-style';

// images
import solarSystem from '../../images/solarSystem.PNG';
import pokedex from '../../images/pokedex.PNG';
import photoGallery from '../../images/photoGallery.png';
import foodOrder from '../../images/foodOrder.jpg';
import maze from '../../images/maze.PNG';
import demandLetter from '../../images/demandLetter.PNG';

function Projects() {

    const projectsArr = [{
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
    }, {
        name: 'Maze',
        imageLink: maze,
        projectLink: 'https://github.com/wteo/maze',
        date: 'Apr 22 | JS CSS HTML',
        description: 'Play a maze game. Navigate your starting ball through a randomized maze and reach your end target: the green square.'
    }];

    return (
        <div id='projects'>
            <NavTitleStyle navColor='main'>
                Personal Projects
            </NavTitleStyle>
            <div className={styles.projectsGrid}>
                <Project 
                    name={projectsArr[0].name} 
                    imageLink={projectsArr[0].imageLink}
                    projectLink={projectsArr[0].projectLink} 
                    date={projectsArr[0].date} 
                    description={projectsArr[0].description}
                />
                <Project 
                    name={projectsArr[1].name} 
                    imageLink={projectsArr[1].imageLink} 
                    projectLink={projectsArr[1].projectLink} 
                    date={projectsArr[1].date} 
                    description={projectsArr[1].description}
                />
                <Project 
                    name={projectsArr[2].name} 
                    imageLink={projectsArr[2].imageLink} 
                    projectLink={projectsArr[2].projectLink} 
                    date={projectsArr[2].date} 
                    description={projectsArr[2].description}
                />
                <Project 
                    name={projectsArr[3].name} 
                    imageLink={projectsArr[3].imageLink} 
                    projectLink={projectsArr[3].projectLink} 
                    date={projectsArr[3].date} 
                    description={projectsArr[3].description}
                />
                <Project 
                    name={projectsArr[4].name} 
                    imageLink={projectsArr[4].imageLink} 
                    projectLink={projectsArr[4].projectLink} 
                    date={projectsArr[4].date} 
                    description={projectsArr[4].description}
                />
                <Project 
                    name={projectsArr[5].name} 
                    imageLink={projectsArr[5].imageLink} 
                    projectLink={projectsArr[5].projectLink} 
                    date={projectsArr[5].date} 
                    description={projectsArr[5].description}
                />
            </div>
        </div>
    );
}

export default Projects;