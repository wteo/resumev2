import React from 'react';

import NavTitleStyle from '../../UI/Nav-Title-style';
import Skill from './Skill';

import styles from './Skills.module.css';

function Skills() {
    return (
        <div>
            <NavTitleStyle navColor='main'>
                Skills
            </NavTitleStyle>
            <div className={styles.skillsGrid}>
                <Skill describedSkill='JavaScript'>
                    <span className={styles.skillsSpanStyling}>ES6</span>
                    <span className={styles.skillsSpanStyling}>NodeJS</span>
                    <span className={styles.skillsSpanStyling}>Express</span>
                    <span className={styles.skillsSpanStyling}>Mocha</span>
                    <span className={styles.skillsSpanStyling}>NPM</span>
                </Skill>
                <Skill describedSkill='React'>
                    <span className={styles.skillsSpanStyling}>Components</span>
                    <span className={styles.skillsSpanStyling}>Props</span>
                    <span className={styles.skillsSpanStyling}>State</span>
                    <span className={styles.skillsSpanStyling}>Hooks</span>
                    <span className={styles.skillsSpanStyling}>Redux</span>
                </Skill>
                <Skill describedSkill='Tools'>
                    <span className={styles.skillsSpanStyling}>Git</span>
                    <span className={styles.skillsSpanStyling}>VSCode</span>
                    <span className={styles.skillsSpanStyling}>Postman</span>
                    <span className={styles.skillsSpanStyling}>Netlify</span>
                    <span className={styles.skillsSpanStyling}>Firebase</span>
                </Skill>
                <Skill describedSkill='Language'>
                    <span className={styles.skillsSpanStyling}>English</span>
                    <span className={styles.skillsSpanStyling}>Malay</span>
                    <span className={styles.skillsSpanStyling}>Mandarin</span>
                    <span className={styles.skillsSpanStyling}>Hokkien</span>
                </Skill>
            </div>
        </div>
    );
}


export default Skills;