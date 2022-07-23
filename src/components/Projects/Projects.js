import React from 'react';

import styles from './Projects.module.css';
import Project from './Project';
import NavTitleStyle from '../../UI/Nav-Title-style';

import foodOrder from '../../images/foodOrder.jpg';
import maze from '../../images/maze.PNG';
import demandLetter from '../../images/demandLetter.jpg';
import pokedex from '../../images/pokedex.webp';
import fillet from '../../images/fillet.jpg';
import timer from '../../images/timer.PNG';

function Projects() {

    const projectsArr = [{
        name: 'Food Order',
        imageLink: foodOrder,
        projectLink: 'https://github.com/wteo/shoppingOrder',
        date: 'June 22 | HTML CSS JS React',
        description: 'A food order app which you can select meals for home delivery.'
    }, {
        name: 'Maze',
        imageLink: maze,
        projectLink: 'https://github.com/wteo/maze',
        date: 'Apr 22 | HTML CSS JS',
        description: 'Play a maze game. Navigate your starting ball through a randomized maze and reach your end target: the green square.'
    }, {
        name: 'Demand Letter',
        imageLink: demandLetter,
        projectLink: 'https://github.com/wteo/demandLetter',
        date: 'Mar 22 | HTML CSS JS',
        description: 'A customizable template of a demand letter that anyone can use to print and send to their customers/clients.'
    }, {
        name: 'First Generation Pokedex',
        imageLink: pokedex,
        projectLink: 'https://github.com/wteo/firstGenPokedex',
        date: 'Feb 22 | HTML CSS JS',
        description: 'Get to know more about the original 151 Pokemon here. A web page that lists all the first generation Pokemon in the order of the official Pokedex.'
    }, {
        name: 'Fillet - A Cooking Recipe Webpage',
        imageLink: fillet,
        projectLink: 'https://github.com/wteo/fillet',
        date: 'Feb 22 | HTML CSS JS',
        description: 'A web page of a cooking recipe for one of my favourite dishes: Salmon fillets with caramelised onion and wilted greens.'
    }, {
        name: 'Timer',
        imageLink: timer,
        projectLink: 'https://github.com/wteo/timer',
        date: 'Jan 22 | HTML CSS JS',
        description: 'Use this interactive online timer to countdown from 30 to 0 in seconds.'
    }];

    return (
        <div id='projects'>
             <div data-aos='fade-in'>
                <NavTitleStyle navColor='main'>
                    Projects
                </NavTitleStyle>
            </div>
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