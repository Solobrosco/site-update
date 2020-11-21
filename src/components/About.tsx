import React from 'react';

// COMPONENTS
import SkillComp from './Skills';

// STATIC
// import ProfilePicture from '../static/placeholder.png';

// DATA
import skills from '../data/skills.json';


const About = () => {
    return(
        <div id='About' className='px-10 bg-gruvbg-2 text-gruvwhite text-center items-center'>
            <div className='font-black text-5xl'>
                About
                {/* <img className='object-center' src={ProfilePicture} alt='profile' height="200" width="200"/> */}
            </div>
            <h2 className='text-4xl py-3 font-bold'>
                Check it out!
            </h2>
            <p>
                Here is a list of technologies and skills I have been working with and obtained.
            </p>
            <h3 className='text-3xl py-3 font-bold'>
                Skills
            </h3>
            <div className='py-5'>
                {false && skills.map((skillitem: any) => <SkillComp name={skillitem.name as string} rank={skillitem.rating as string}/>)}
                <SkillComp name={'Code'} rank={'3'}/>
            </div>
        </div>
    );
}

export default About;