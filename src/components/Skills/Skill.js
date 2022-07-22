import React from "react";

function Skill(props) {
    return (
        <div>
            <p>{props.describedSkill}</p>
            <p>{props.level}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default Skill;