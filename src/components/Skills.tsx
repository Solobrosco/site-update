import React from "react";

interface SkillsProps {
    name: string,
    rank: string,
}

const Skills = (props: SkillsProps) => {
    return(
        <div className='bg-blue-700'>
            <div>
                {props.name}
            </div>
            <div>
                {props.rank}
            </div>
        </div>
    );
}

export default Skills;