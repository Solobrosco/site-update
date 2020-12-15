import React from 'react';

// DATA
import experience from '../data/experience.json';

const Experience = () => {
    return(
        <div className='bg-gradient-to-t from-gruvbg-4 to-gruvbg-0 text-gruvwhite text-center px-10'>
            <div className='font-black text-5xl py-2'>Experience</div>
            {experience.map((item: any, i: number) => <div key={i} className='py-1'>
                <div key={i+1} className='font-bold text-3xl'>{item.title}</div>
                <div key={i+2} className='text-2xl font-semibold'>{item.company}</div>
                <div key={i+3} className='font-medium'>{item.start} - {item.end}</div>
                {/* <div className='font-thin'>{item.description}</div> */}
            </div>)}
        </div>
    );
}

export default Experience;