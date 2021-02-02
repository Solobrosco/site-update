import React from 'react';

import Seal from '../static/The_University_of_California_1868.svg';

interface educationProps{
    school: string,
    major: string,
    time: string,
    link: string
}

const Education = (props: educationProps) => {
    return(
        <div className="p-3 bg-gruvbg-0 text-gruvwhite text-center flex justify-center items-center">
            <div id='Experience' className='w-4/6 p-1'>
                <div className='text-5xl font-black'>
                    Education
                </div>
                <div className='text-2xl hover:text-blue-800'>
                    <a href={props.link}>
                        {props.school}
                    </a>
                </div>
                <div className='text-xl'>
                    {props.major}
                </div>
                <div className='font-thin'>
                    {props.time}
                </div>
            </div>
            <div className='w-2/6'>
                <img src={Seal} alt='seal' height="200" width="200"></img>
            </div>
        </div>
    );
}

export default Education;