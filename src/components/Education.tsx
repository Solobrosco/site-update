import React from 'react';

// DATA
import education from '../data/education.json';

const Education = () => {
    return(
        <div className="pb-2 bg-gruvbg-0 text-gruvwhite text-center items-center">
            <div id='Experience' className='text-5xl py-1 font-black'>Education</div>
                <div className='text-2xl'>
                    {education.school}
                </div>
                <div className='text-xl'>
                    {education.major}
                </div>
                {education.time}
        </div>
    );
}

export default Education;