import React from "react";

interface SkillsProps {
    name: string,
    rank: string,
}

const Skills = (props: SkillsProps) => {
    return(
        <div className='py-1 bg-gray-700 flex'>
            <div className='w-1/2'>
                {props.name}
            </div>
            <div className='w-1/2'>
                {props.rank}
            </div>
        </div>
    );
}

export default Skills;