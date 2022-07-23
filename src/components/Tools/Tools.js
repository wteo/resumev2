import React, { useState, createContext } from 'react';

import NavTitleStyle from '../../UI/Nav-Title-style';
import ToolsContainer from './ToolsContainer';
import Tool from './Tool';

import styles from './Tools.module.css';

// Languages
import jsIcon from '../../icons/js.png';
import es6 from '../../icons/es6.png';
import html from '../../icons/html.png';
import css from '../../icons/css.png';

// JS UI Library
import react from '../../icons/react.png';

// Code Editor
import vscode from '../../icons/vscode.png';

// Package Manager
import npm from '../../icons/npm.png';

// Back-end Runtime Platforms
import nodeJS from '../../icons/nodeJS.jpg';
import firebase from '../../icons/firebase.jfif';

// JS Frameworks or Modules
import express from '../../icons/expressJS.png';
import mocha from '../../icons/mochaJS.png';
import chai from '../../icons/chaiJS.png';
import nodemon from '../../icons/nodemon.webp';

// Deployment
import netlify from '../../icons/netlify.png';
import github from '../../icons/github.png';

export const toolIconContext = createContext();

function Tools() {
    
    const [icon, setIcon] = useState(true);

    const clickHandler = () => {
        setIcon(!icon);
        console.log(icon);
    };

    return (
        <toolIconContext.Provider value={ icon }>
            <div className={styles.toolsStyling} id='tools'>
                <div data-aos='fade-in'>
                    <NavTitleStyle navColor='main'>
                        Tools
                    </NavTitleStyle>
                </div>
                <p className={styles.toolDescription} data-aos='fade-in'>These are the tools / technologies I have used to create my projects.</p>
                <button className={styles.changeButton} onClick={clickHandler} data-aos='fade-in'>{icon ? 'Icon  →  Text' : 'Text  →  Icon'}</button>
                <section className={styles.toolsListGrid} data-aos='fade-in'>
                    <ToolsContainer toolType='Languages'>
                        <Tool imageLink={jsIcon} toolName='JavaScript'/>
                        <Tool imageLink={es6} toolName='ES6'/>
                        <Tool imageLink={css} toolName='CSS'/>
                        <Tool imageLink={html} toolName='HTML'/>
                    </ToolsContainer>
                    <ToolsContainer toolType='JavaScript UI Library'>
                        <Tool imageLink={react} toolName='React'/>
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
                        <Tool imageLink={express} toolName='Express'/>
                        <Tool imageLink={mocha} toolName='Mocha'/>
                        <Tool imageLink={chai} toolName='Chai'/>
                        <Tool imageLink={nodemon} toolName='Nodemon'/>
                    </ToolsContainer>
                    <ToolsContainer toolType='Deployment'>
                        <Tool imageLink={netlify} toolName='Netlify'/>
                        <Tool imageLink={github} toolName='GitHub'/>
                    </ToolsContainer>
                </section>
            </div>
        </toolIconContext.Provider>
    );
}


export default Tools;