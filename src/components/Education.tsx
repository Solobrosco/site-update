import React from 'react';

import education from '../data/education.json';

const Education = () => {
    return(
        <div className="bg-blue-500 text-white text-center items-center justify-center">
            <div className='text-xl py-3 font-bold'>Education</div>
            {education.school}
            <br></br>
            {education.major}
            <br></br>
            {education.time}
        </div>
    );
}

export default Education;