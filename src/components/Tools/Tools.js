import React from 'react';

import { useState } from 'react';

import NavTitleStyle from '../../UI/Nav-Title-style';
import Tool from './Tool';
import ToolsContainer from './ToolsContainer';

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



function Tools() {
    
    const [iconImage, setIconImage] = useState(true);

    const clickHandler = () => {
        setIconImage(!iconImage);
        console.log(iconImage);
    };

    return (
        <div className={styles.toolsStyling}>
            <a id='tools'  href='/'>
                <NavTitleStyle navColor='main'>
                    Tools
                </NavTitleStyle>
            </a>
            <p className={styles.toolDescription}>These are the tools / technologies I have used to create my projects.</p>
            <button className={styles.changeButton} onClick={clickHandler}>{iconImage ? 'Icon  →  Text' : 'Text  →  Icon'}</button>
            <section className={styles.toolsListGrid}>
                <ToolsContainer toolType='Languages'>
                    {iconImage && <Tool imageLink={jsIcon} toolName='JavaScript'/>}
                    {!iconImage && <p className={styles.toolText}>JavaScript</p>}
                    {iconImage && <Tool imageLink={es6} toolName='ES6'/>}
                    {!iconImage && <p className={styles.toolText}>ES6</p>}
                    {iconImage && <Tool imageLink={css} toolName='CSS'/>}
                    {!iconImage && <p className={styles.toolText}>CSS</p>}
                    {iconImage && <Tool imageLink={html} toolName='HTML'/>}
                    {!iconImage && <p className={styles.toolText}>HTML</p>}
                </ToolsContainer>
                <ToolsContainer toolType='JavaScript UI Library'>
                    {iconImage && <Tool imageLink={react} toolName='react'/>}
                    {!iconImage && <p className={styles.toolText}>React</p>}
                </ToolsContainer>
                <ToolsContainer toolType='Code Editor'>
                    {iconImage && <Tool imageLink={vscode} toolName='vscode'/>}
                    {!iconImage && <p className={styles.toolText}>VSCode</p>}
                </ToolsContainer>
                <ToolsContainer toolType='Package Manager'>
                    {iconImage && <Tool imageLink={npm} toolName='NPM'/>}
                    {!iconImage && <p className={styles.toolText}>NPM</p>}
                </ToolsContainer>
                <ToolsContainer toolType='Back-end Runtime Platforms'>
                    {iconImage && <Tool imageLink={nodeJS} toolName='nodeJS'/>}
                    {!iconImage && <p className={styles.toolText}>NodeJS</p>}
                    {iconImage && <Tool imageLink={firebase} toolName='Firebase'/>}
                    {!iconImage && <p className={styles.toolText}>Firebase</p>}
                </ToolsContainer>
                <ToolsContainer toolType='JavaScript Frameworks / Modules'>
                    {iconImage && <Tool imageLink={express} toolName='expressJS'/>}
                    {!iconImage && <p className={styles.toolText}>Express</p>}
                    {iconImage && <Tool imageLink={mocha} toolName='mochaJS'/>}
                    {!iconImage && <p className={styles.toolText}>Mocha</p>}
                    {iconImage && <Tool imageLink={chai} toolName='chaiJS'/>}
                    {!iconImage && <p className={styles.toolText}>Chai</p>}
                    {iconImage && <Tool imageLink={nodemon} toolName='nodemon'/>}
                    {!iconImage && <p className={styles.toolText}>Nodemon</p>}
                </ToolsContainer>
                <ToolsContainer toolType='Deployment'>
                    {iconImage && <Tool imageLink={netlify} toolName='netlify'/>}
                    {!iconImage && <p className={styles.toolText}>Netlify</p>}
                    {iconImage && <Tool imageLink={github} toolName='GitHub'/>}
                    {!iconImage && <p className={styles.toolText}>GitHub</p>}
                </ToolsContainer>
            </section>
        </div>
    );
}


export default Tools;