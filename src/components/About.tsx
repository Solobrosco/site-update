import React from 'react';

// COMPONENTS
import SkillComp from './Skills';

// STATIC
import ProfilePicture from '../static/placeholder.png';

interface aboutProps {
    skills: {}[]
}

// Add more to interface

const About = (props: aboutProps) => {
    return(
        <div id='About' className='px-3 bg-gradient-to-t from-gruvbg-0 to-gruvbg-4 text-gruvwhite text-center items-center'>
            <div className='font-black text-5xl'>
                About
                <div className='flex justify-center'>
                    <img alt='profile' style={{ width: 200 ,height: 200}} src={ProfilePicture}/>
                </div>
            </div>
            <h2 className='text-4xl py-3 font-bold'>
                Check it out!
            </h2>
            <p>
                Here is a list of technologies and skills I have been working with and obtained.
            </p>
            <h3 className='text-3xl pt-3 pb-1 font-bold'>
                Skills
            </h3>
            <div className='pb-5'>
                {/* Test Skill Comp */}
                {false ? <SkillComp name={'Test'} rank={3}/> : props.skills.map((skillitem: any, i: number) => <SkillComp key={i} name={skillitem.name as string} rank={skillitem.rating}/>)}
            </div>
        </div>
    );
}

export default About;