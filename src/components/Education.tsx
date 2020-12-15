import React from 'react';

import Seal from '../static/The_University_of_California_1868.svg';

// DATA
import education from '../data/education.json';

const Education = () => {
    return(
        <div className="px-3 pb-2 bg-gruvbg-0 text-gruvwhite text-center flex justify-center items-center">
            <div id='Experience' className='w-4/6 py-1'>
                <div className='text-5xl font-black'>
                    Education
                </div>
                <div className='text-2xl'>
                    {education.school}
                </div>
                <div className='text-xl'>
                    {education.major}
                </div>
                <div className='font-thin'>
                    {education.time}
                </div>
            </div>
            <div className='w-2/6'>
                <img src={Seal} alt='seal' height="200" width="200"></img>
            </div>
        </div>
    );
}

export default Education;