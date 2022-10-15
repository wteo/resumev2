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
import demandLetter from '../../images/demandLetter.jpg';

function Projects() {

    const projectsArr = [{
        name: 'Solar System',
        imageLink: solarSystem,
        projectLink: 'https://github.com/wteo/solarSystem',
        date: 'September 22 | TypeScript Vue Sass CSS',
        description: 'A educational app teaching you about the Solar System.'
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
        description: 'Built out of CSS and HTML without JavaScript, this single page website features my travel photos in Indonesia.'
    }, {
        name: 'Food Order',
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
    }, {
        name: 'Demand Letter',
        imageLink: demandLetter,
        projectLink: 'https://github.com/wteo/demandLetter',
        date: 'Mar 22 | JS DOM HTML',
        description: 'A customizable template of a demand letter that anyone can use to print and send to their customers/clients.'
    }];

    return (
        <div id='projects'>
            <NavTitleStyle navColor='main'>
                Projects
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