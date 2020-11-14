import React, { useState } from 'react';

import states from '../data/state.json';
// Add clock and data to nav bar

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return(
        <header className='bg-gray-900'>
            <div className="flex items-center justify-between py-4 px-10">
                <div className='h-5 font-bold text-white'>
                    <div className='text-base'>Nikko A. Solon</div>
                </div>
                <button type='button' className='block text-white' onClick={() => setOpen(!open)}>
                    {/* Icon provided by Freepik */}
                    <svg className='h-6 w-6 fill-current' id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                        <path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"/>
                    </svg>
                </button>
            </div>
            {open && (
                <div className='px-8 pb-4'>
                    <a href='#Home' className='hover:bg-gray-700 rounded px-2 py-1 block text-white font-semibold'>Home</a>
                    {states.about && (<a href='#About' className='mt-1 hover:bg-gray-700 rounded px-2 py-1 block text-white font-semibold'>About me</a>)}
                    {states.gallery && (<a href='#Gallery' className='mt-1 hover:bg-gray-700 rounded px-2 py-1 block text-white font-semibold'>Gallery</a>)}
                    {states.experience && (<a href='#Experience' className='mt-1 hover:bg-gray-700 rounded px-2 py-1 block text-white font-semibold'>Experience</a>)}
                    {states.stats && (<a href='#Stats' className='mt-1 hover:bg-gray-700 rounded px-2 py-1 block text-white font-semibold'>Stats</a>)}
                </div>
            )}
        </header>
    );
}

export default NavBar;