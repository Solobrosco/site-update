import React from 'react';

// DATA
import experience from '../data/experience.json';

const Experience = () => {
    return(
        <div className='bg-blue-800 text-white text-center px-10'>
            <div className='font-black text-5xl py-2'>Experience</div>
            {experience.map((item: any) => <div className='py-1'>
                <div className='font-bold text-3xl'>{item.title}</div>
                <div className='text-2xl font-semibold'>{item.company}</div>
                <div className='font-medium'>{item.start} - {item.end}</div>
                <div className='font-thin'>{item.description}</div>
            </div>)}
        </div>
    );
}

export default Experience;