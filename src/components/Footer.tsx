import React from 'react';

import pack from '../../package.json';

interface FooterProps {
    imgURL: {}
}

const Footer = (props: FooterProps) => {
    return(
        <div className='text-center text-gruvwhite bg-gruvbg-0 p-3 flex flex-wrap justify-center space-x-3 text-xs'>
            <div className='self-center text-lg font-bold bg-gruvbg-3 p-4 rounded'>
                Created with:
            </div>
            <div className='self-end font-bold'>
                <img height="150" width="150" src={props.imgURL["react"]} alt="react_logo"></img>
                React
            </div>
            <div className='self-end font-bold'>
                <img height="100" width="100" src={props.imgURL["typescript"]} alt="TS_logo"></img>
                Typescript
            </div>
            <div className='self-end font-bold'>
                <img height="100" width="100" src={props.imgURL["tailwindcss"]} alt="tailwindcss_logo"></img>
                Tailwind
            </div>
            <div className='self-end font-bold'>
                <img height="100" width="100" src={props.imgURL["ghpages"]} alt="github_logo" ></img>
                Pages
            </div >
            <div className='self-end font-thin'>
                version {pack.version} | <a className='hover:text-graygruv-light' href='https://github.com/Solobrosco/site-update' target="_blank" rel="noopener noreferrer">source</a>
            </div>
        </div>
    );
}

export default Footer;