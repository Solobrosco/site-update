import React from 'react';

import SkillComponent from './Skills';

import skills from '../data/skills.json';

const About = () => {
    return(
        <div className='bg-blue-700 text-white text-center items-center justify-center'>
            <h2 className='text-xl py-3 font-bold'>
                Check me out!
            </h2>
            <p>
                Here is a list of all the skills and technologies I have been working with.
            </p>
            <h3 className='text-xl py-3 font-bold'>
                Technologies
            </h3>
            <h3 className='text-xl py-3 font-bold'>
                Skills
            </h3>
            {skills.map((skillitem: any) => <SkillComponent name={skillitem.name as string} rank={skillitem.rating as string}/>)}
        </div>
    );
}

export default About;