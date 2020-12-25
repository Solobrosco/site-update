import React from 'react';

import pack from '../../package.json';

const Footer = () => {
    return(
        <div className='text-center text-gruvwhite bg-gruvbg-0 p-3 flex justify-center space-x-3'>
            <div className='font-bold text-sm'>
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
            <div className='font-thin text-sm'>
                version {pack.version} | <a className='hover:text-graygruv-light' href='https://github.com/Solobrosco/site-update' target="_blank" rel="noopener noreferrer">source</a>
            </div>
        </div>
    );
}

export default Footer;