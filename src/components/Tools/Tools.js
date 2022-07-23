import React from 'react';

import NavTitleStyle from '../../UI/Nav-Title-style';

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

                <div>
                    <p className={styles.toolType}>Languages</p>
                    <div className={styles.toolsList}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={jsIcon} alt='JavaScript'/> 
                        </div>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={es6} alt='ES6'/>
                        </div>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={css} alt='CSS'/>
                        </div>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={html} alt='HTML'/>
                        </div>
                    </div>
                </div>

                <div>
                    <p className={styles.toolType}>JavaScript UI Library</p>
                    <div className={styles.toolsList}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={react} alt='react'/>
                        </div>
                    </div>
                </div>

                <div>
                    <p className={styles.toolType}>Code Editor</p>
                    <div className={styles.toolsList}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={vscode} alt='vscode'/>
                        </div>
                    </div>
                </div>

                <div>
                    <p className={styles.toolType}>Package Manager</p>
                    <div className={styles.toolsList}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={npm} alt='NPM'/>
                        </div>
                    </div>
                </div>

                <div>
                    <p className={styles.toolType}>Back-end Runtime Platforms</p>
                    <div className={styles.toolsList}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={nodeJS} alt='nodeJS'/>
                        </div>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={firebase} alt='Firebase'/>
                        </div>
                    </div>
                </div>

                <div>
                    <p className={styles.toolType}>JavaScript Frameworks / Modules</p>
                    <div className={styles.toolsList}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={express} alt='expressJS'/>
                        </div>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={mocha} alt='mochaJS'/>
                        </div>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={chai} alt='chaiJS'/>
                        </div>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={nodemon} alt='nodemon'/>
                        </div>
                    </div>
                </div>

                <div>
                    <p className={styles.toolType}>Deployment</p>
                    <div className={styles.toolsList}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={netlify} alt='netlify'/>
                        </div>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={github} alt='GitHub'/>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
}


export default Tools;