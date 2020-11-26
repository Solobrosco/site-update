import React from 'react';

const Footer = () => {
    return(
        <div className='text-center text-gruvwhite bg-gruvbg-0'>
            Created with
            <li>
                <ul>React</ul>
                <ul>Typescript</ul>
                <ul>Tailwind</ul>
            </li>
            Deployed with Github pages
            <div>version 1.0 | view source</div>
        </div>
    );
}

export default Footer;