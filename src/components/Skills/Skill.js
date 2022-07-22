import React from "react";

import styles from './Skill.module.css';

function Skill(props) {
    return (
        <div className={styles.skillContainer}>
            <p className={styles.describedSkillStyling}>{props.describedSkill}</p>
            <div className={styles.skillGrid}>{props.children}</div>
        </div>
    );
}

export default Skill;