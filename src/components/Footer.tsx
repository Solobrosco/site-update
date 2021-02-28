import React from 'react';

import pack from '../../package.json';

const Footer = () => {
    return(
        <div className='text-center text-gruvwhite bg-gruvbg-0 p-3 flex justify-center space-x-3 text-xs'>
            <div className='font-bold'>
                Created with
            </div>
            <div className='font-thin'>
                <img height="150" width="150" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react_logo"></img>
                React
            </div>
            <div className='font-thin'>
                <img height="100" width="100" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TS_logo" ></img>
                Typescript
            </div>
            <div className='font-thin'>
                <img height="100" width="100" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwindcss_logo" ></img>
                Tailwind
            </div>
            <div className='font-bold'>
                <img height="100" width="100" src="https://raw.githubusercontent.com/gist/johan/1007813/raw/a25829510f049194b6404a8f98d22978e8744a6f/octocat.svg" alt="github_logo" ></img>
                Deployed with Github pages
            </div >
            <div className='font-thin'>
                version {pack.version} | <a className='hover:text-graygruv-light' href='https://github.com/Solobrosco/site-update' target="_blank" rel="noopener noreferrer">source</a>
            </div>
        </div>
    );
}

export default Footer;