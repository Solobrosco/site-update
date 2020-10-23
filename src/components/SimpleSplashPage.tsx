import React from 'react';

import Snelling from '../static/Snelling.png';

const SimpleSplashPage = () =>{
    return(
        <div className="bg-blue-900 text-white" >
            <div className='text-bold text-center text-white justify-center items-center'>hello</div>
            <img className='object-contain ' src={Snelling} alt='snelling'></img>
        </div>
    );
}

export default SimpleSplashPage;