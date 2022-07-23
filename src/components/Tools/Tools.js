import React from 'react';

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
    return (
        <div className={styles.toolsStyling}>
            <NavTitleStyle navColor='main'>
                Tools
            </NavTitleStyle>
            <p className={styles.toolDescription}>These are the tools / technologies I have used to create my projects.</p>
            <section className={styles.toolsListGrid}>
                <ToolsContainer toolType='Languages'>
                    <Tool imageLink={jsIcon} toolName='JavaScript'/>
                    <Tool imageLink={es6} toolName='ES6'/>
                    <Tool imageLink={css} toolName='CSS'/>
                    <Tool imageLink={html} toolName='HTML'/>
                </ToolsContainer>
                <ToolsContainer toolType='JavaScript UI Library'>
                    <Tool imageLink={react} toolName='react'/>
                </ToolsContainer>
                <ToolsContainer toolType='Code Editor'>
                    <Tool imageLink={vscode} toolName='vscode'/>
                </ToolsContainer>
                <ToolsContainer toolType='Package Manager'>
                    <Tool imageLink={npm} toolName='NPM'/>
                </ToolsContainer>
                <ToolsContainer toolType='Back-end Runtime Platforms'>
                    <Tool imageLink={nodeJS} toolName='nodeJS'/>
                    <Tool imageLink={firebase} toolName='Firebase'/>
                </ToolsContainer>
                <ToolsContainer toolType='JavaScript Frameworks / Modules'>
                    <Tool imageLink={express} toolName='expressJS'/>
                    <Tool imageLink={mocha} toolName='mochaJS'/>
                    <Tool imageLink={chai} toolName='chaiJS'/>
                    <Tool imageLink={nodemon} toolName='nodemon'/>
                </ToolsContainer>
                <ToolsContainer toolType='Deployment'>
                    <Tool imageLink={netlify} toolName='netlify'/>
                    <Tool imageLink={github} toolName='GitHub'/>
                </ToolsContainer>
            </section>
        </div>
    );
}


export default Tools;