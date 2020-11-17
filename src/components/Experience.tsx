import React from 'react';

import experience from '../data/experience.json';

const Experience = () => {
    return(
        <div className='bg-blue-800 text-white text-center'>
            <div className='font-black text-5xl py-2'>Experience</div>
            {experience.map((item: any) => <div className='py-1'>
                <div className='font-bold text-3xl'>{item.title}</div>
                <div className='text-2xl'>
                    {item.company}
                </div>
                <div>{item.start} - {item.end}</div>
                <div className=''>{item.description}</div>
            </div>)}
            <div className='text-5xl bg-blue-900 font-black py-5'>
                Download Resume
            </div>
            <div className='text-5xl bg-blue-800 font-black py-5'>
                View Certificates
            </div>
        </div>
    );
}

export default Experience;