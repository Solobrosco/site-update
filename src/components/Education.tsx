import React from 'react';

import education from '../data/education.json';

const Education = () => {
    return(
        <div className="bg-gray-800 text-white text-center items-center justify-center">
            <div id='Experience' className='text-xl py-3 font-bold'>Education</div>
                <div className='pb-3'>
                    {education.school}
                    <br></br>
                    {education.major}
                    <br></br>
                    {education.time}
                </div>
        </div>
    );
}

export default Education;