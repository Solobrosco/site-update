import React from "react";

import RatingStars from './RatingStars';

// PROPS
interface SkillsProps {
    name: string,
    rank: number,
}

const Skills = (props: SkillsProps) => {
    return(
    <div className='bg-gruvblack rounded shadow-sm text-xl font-medium mt-2 py-1 flex'>
            <div className='w-1/2'>
                {props.name}
            </div>
            <div className='w-1/2 flex-row'>
                <RatingStars rating={props.rank}/>
            </div>
        </div>
    );
}

export default Skills;