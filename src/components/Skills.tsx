import React from "react";

// PROPS
interface SkillsProps {
    name: string,
    rank: string,
}

const Skills = (props: SkillsProps) => {
    return(
        <div className='text-xl font-medium py-1 flex'>
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