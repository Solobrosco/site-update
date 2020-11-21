import React, { useState } from 'react';

import moment from 'moment';
import Clock from 'react-live-clock';

// DATA
import states from '../data/state.json';
// fix spacing 

interface NavBarProps {
    time: boolean,
    date: boolean
}

const NavBar = (props: NavBarProps) => {
    const [open, setOpen] = useState(false);
    return(
            <div className='bg-gruvblack sticky top-0 cursor-default text-gruvwhite'>
                {/* <header className='bg-gray-900 sticky top-0'> */}
                <div className="flex inline-block align-middle px-10 py-3 text-center">
                    <div className='w-1/3 text-left ml-2'>
                        <span onClick={() =>{window.location.reload();}} className=' hover:text-graygruv-light font-bold'>
                            Nikko A. Solon
                        </span>
                    </div>
                    <div className='w-1/3 font-bold'>
                        <span className='hover:text-graygruv-light'>
                            {props.date ? moment().format('dddd MMMM DD, YYYY') : 'Feburary 16th 2020'}
                        </span>
                        <span> </span>
                        <span className='text-aquagruv-light hover:text-aquagruv-dark'>  
                            {props.time ? <Clock format={'H:mm:ss'} ticking={true} timezone={'US/Pacific'} /> : "10:10:35"}
                        </span>
                    </div>
                    <div className='w-1/3 text-right'>
                        <button type='button' className='' onClick={() => setOpen(!open)}>
                            {/* Icon provided by Freepik */}
                            <svg className='h-6 w-6 fill-current hover:text-graygruv-light' id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                                <path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                {open && (
                    <div className='px-10 pb-4 text-gruvwhite font-bold'>
                        <a href='#top' className='hover:text-gruvfg-1 hover:bg-gruvbg-1 rounded px-2 py-1 block' onClick={() => setOpen(!open)}>Home</a>
                        {states.about && (<a href='#About' onClick={() => setOpen(!open)} className='hover:text-gruvfg-1 mt-1 hover:bg-gruvbg-1 rounded pl-2 py-1 block'>About me</a>)}
                        {states.gallery && (<a href='#Gallery' onClick={() => setOpen(!open)} className='hover:text-gruvfg-1 mt-1 hover:bg-gruvbg-1 rounded pl-2 py-1 block'>Gallery</a>)}
                        {states.experience && (<a href='#Experience' onClick={() => setOpen(!open)} className='hover:text-gruvfg-1 mt-1 hover:bg-gruvbg-1 rounded pl-2 py-1 block'>Experience</a>)}
                        {states.stats && (<a href='#Stats' onClick={() => setOpen(!open)} className='hover:text-gruvfg-1 mt-1 hover:bg-gruvbg-1 rounded pl-2 py-1 block'>Stats</a>)}
                    </div>
                )}
            </div>
        // </header>
    );
}

export default NavBar;