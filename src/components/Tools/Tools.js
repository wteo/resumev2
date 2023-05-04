import React, { useState, createContext } from 'react';

import NavTitleStyle from '../../UI/Nav-Title-style';
import ToolsContainer from './ToolsContainer';
import Tool from './Tool';

import styles from './Tools.module.css';

// Languages
import jsIcon from '../../icons/js.png';
import tsIcon from '../../icons/ts.png';
import es6 from '../../icons/es6.png';
import html from '../../icons/html.png';
import css from '../../icons/css.png';

// CSS Frameworks
import sass from '../../icons/sass.png';

// Design
import figma from '../../icons/figma.jpg';

// Communication / Documentation
import jira from '../../icons/jira.jfif';
import miro from '../../icons/miro.png';
import confluence from '../../icons/confluence.jfif';

// JS UI Library
import react from '../../icons/react.png';
import vue from '../../icons/vue.png'

// Code Editor
import vscode from '../../icons/vscode.png';

// Package Manager
import npm from '../../icons/npm.png';

// Back-end Runtime Platforms
import nodeJS from '../../icons/nodeJS.jpg';
import firebase from '../../icons/firebase.jfif';

// JS Frameworks or Modules
import redux from '../../icons/redux.png';
import express from '../../icons/expressJS.png';
import webpack from '../../icons/webpack.png';

// Testing
import browserstack from '../../icons/browserstack.jfif';

// Deployment
import netlify from '../../icons/netlify.png';
import github from '../../icons/github.png';

// React Frameworks or Modules
import reactRouter from '../../icons/reactRouter.png';
import reactTesting from '../../icons/reactTesting.png';
import jest from '../../icons/jest.png';


export const IconContext = createContext();

function Tools() {
    
    const [icon, setIcon] = useState(true);

    const clickHandler = () => {
        setIcon(!icon);
        console.log(icon);
    };

    return (
        <IconContext.Provider value={ icon }>
            <div className={styles.toolsStyling} id='tools'>
                <NavTitleStyle navColor='main'>
                    Tools
                </NavTitleStyle>
                <p className={styles.toolDescription}>These are the tools / technologies I have used to create my projects.</p>
                <button className={styles.changeButton} onClick={clickHandler}>{icon ? 'Icon  →  Text' : 'Text  →  Icon'}</button>
                <section className={styles.toolsListGrid}>
                    <ToolsContainer toolType='Languages'>
                        <Tool imageLink={jsIcon} toolName='JavaScript'/>
                        <Tool imageLink={tsIcon} toolName='TypeScript'/>
                        <Tool imageLink={es6} toolName='ES6'/>
                        <Tool imageLink={css} toolName='CSS'/>
                        <Tool imageLink={html} toolName='HTML'/>
                    </ToolsContainer>
                    <ToolsContainer toolType='CSS Framework'>
                        <Tool imageLink={sass} toolName='Sass'/>
                    </ToolsContainer>
                    <ToolsContainer toolType='Design'>
                        <Tool imageLink={figma} toolName='Figma'/>
                    </ToolsContainer>
                    <ToolsContainer toolType='Communication / Documentation'>
                        <Tool imageLink={jira} toolName='Jira'/>
                        <Tool imageLink={miro} toolName='Miro'/>
                        <Tool imageLink={confluence} toolName='Confluence'/>
                    </ToolsContainer>
                    <ToolsContainer toolType='JavaScript UI Library / Framework'>
                        <Tool imageLink={react} toolName='React'/>
                        <Tool imageLink={vue} toolName='Vue'/>
                    </ToolsContainer>
                    <ToolsContainer toolType='Code Editor'>
                        <Tool imageLink={vscode} toolName='VSCode'/>
                    </ToolsContainer>
                    <ToolsContainer toolType='Package Manager'>
                        <Tool imageLink={npm} toolName='NPM'/>
                    </ToolsContainer>
                    <ToolsContainer toolType='Back-end Runtime Platforms'>
                        <Tool imageLink={nodeJS} toolName='NodeJS'/>
                        <Tool imageLink={firebase} toolName='Firebase'/>
                    </ToolsContainer>
                    <ToolsContainer toolType='JavaScript Frameworks / Modules'>
                        <Tool imageLink={redux} toolName='Redux'/>
                        <Tool imageLink={express} toolName='Express'/>
                        <Tool imageLink={webpack} toolName='Webpack' />
                    </ToolsContainer>
                    <ToolsContainer toolType='Testing'>
                        <Tool imageLink={browserstack} toolName='BrowserStack'/>
                    </ToolsContainer>
                    <ToolsContainer toolType='Deployment'>
                        <Tool imageLink={netlify} toolName='Netlify'/>
                        <Tool imageLink={github} toolName='GitHub'/>
                    </ToolsContainer>
                    <ToolsContainer toolType='React Frameworks / Modules'>
                        <Tool imageLink={reactRouter} toolName='React Router'/>
                        <Tool imageLink={reactTesting} toolName='React Testing Library'/>
                        <Tool imageLink={jest} toolName='Jest'/>
                    </ToolsContainer>
                </section>
            </div>
        </IconContext.Provider>
    );
}


export default Tools;