import React from 'react';

import NavTitleStyle from '../../UI/Nav-Title-style';
import Skill from './Skill';

function Skills() {
    return (
        <div>
            <NavTitleStyle navColor='main'>
                Projects
            </NavTitleStyle>
            <div>
                <Skill describedSkill='JavaScript' level='Intermediate'>
                    <span>ES6</span>
                    <span>NodeJS</span>
                    <span>Express</span>
                    <span>Mocha</span>
                    <span>NPM</span>
                </Skill>
                <Skill describedSkill='React' level='Basic'>
                </Skill>
                <Skill describedSkill='Tools'>
                    <span>Git</span>
                    <span>VSCode</span>
                    <span>Postman</span>
                    <span>Netlify</span>
                    <span>Google Firebase</span>
                </Skill>
                <Skill describedSkill='Language'>
                    <span>English</span>
                    <span>Malay</span>
                    <span>Mandarin</span>
                    <span>Hokkien</span>
                </Skill>
            </div>
        </div>
    );
}


export default Skills;