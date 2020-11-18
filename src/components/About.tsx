import React from 'react';

import SkillComp from './Skills';

import ProfilePicture from '../static/placeholder.png';

import skills from '../data/skills.json';


const About = () => {
    return(
        <div id='About' className='bg-blue-700 text-white text-center items-center'>
            <div className='font-black text-5xl'>
                About
                <img className='object-center' src={ProfilePicture} alt='profile' height="200" width="200"/>
            </div>
            <h2 className='text-4xl py-3 font-bold'>
                Check me out!
            </h2>
            <p>
                Here is a list of technologies and skills I have been working with and obtained.
            </p>
            <h3 className='text-3xl py-3 font-bold'>
                Skills
            </h3>
            <div className='py-5'>
                {skills.map((skillitem: any) => <SkillComp name={skillitem.name as string} rank={skillitem.rating as string}/>)}
            </div>
        </div>
    );
}

export default About;