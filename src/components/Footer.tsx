import React from 'react';

import pack from '../../package.json';

const Footer = () => {
    return(
        <div className='text-center text-gruvwhite bg-gruvbg-0 p-3 flex justify-center space-x-3'>
            <div className='font-bold text-lg'>
                Created with
            </div>
            <div className='font-thin text-sm'>
                React
            </div>
            <div className='font-thin text-sm'>
                Typescript
            </div>
            <div className='font-thin text-sm'>
                Tailwind
            </div>
            <div className='font-bold text-sm'>
                Deployed with Github pages
            </div >
            <div className='font-thin text-xs'>
                version {pack.version} | view source
            </div>
        </div>
    );
}

export default Footer;