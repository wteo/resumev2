import React from 'react';

import styles from './Projects.module.css';
import Project from './Project';
import NavTitleStyle from '../../UI/Nav-Title-style';

import foodOrder from '../../images/foodOrder.jpg';
import maze from '../../images/maze.PNG';
import demandLetter from '../../images/demandLetter.jpg';
import pokedex from '../../images/pokedex.PNG';
import photoGallery from '../../images/photoGallery.png';
import timer from '../../images/timer.PNG';

function Projects() {

    const projectsArr = [{
        name: 'First Generation Pokedex',
        imageLink: pokedex,
        projectLink: 'https://github.com/wteo/firstGenPokedex',
        date: 'Aug 22 | React Redux JS',
        description: 'Get to know more about the original 151 Pokemon here. A web page that lists and gives you basic information about the first generation Pokemon in the same order as the official Pokedex.'
    }, {
        name: 'Photo Gallery',
        imageLink: photoGallery,
        projectLink: 'https://github.com/wteo/photoGallery',
        date: 'Aug 22 | CSS HTML',
        description: 'Built out of vanilla CSS and HTML without JavaScript, I built this single page website featuring my travel photos in Indonesia.'
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
    }, {
        name: 'Timer',
        imageLink: timer,
        projectLink: 'https://github.com/wteo/timer',
        date: 'Jan 22 | JS CSS HTML',
        description: 'Use this interactive online timer to countdown from 30 to 0 in seconds.'
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