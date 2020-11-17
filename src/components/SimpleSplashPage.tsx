import React from 'react';

// import Snelling from '../static/Snelling.png';

import quotes from '../data/quotes.json';

function pickRandomQuote () {
    let keys = Object.keys(quotes);
    let randIndex = keys[Math.floor(Math.random() * keys.length)];
    return quotes[keys[randIndex]];
    // console.log(item);
    
}

const SimpleSplashPage = () =>{
    let quote = pickRandomQuote();
    return(
        <div className="bg-blue-900 text-white text-center items-center justify-center  " >
            <h1 className='font-bold text-2xl'>"{quote.quote}"<br></br>-{quote.author}</h1>
            {/* <img className='object-contain ' src={Snelling} alt='snelling'/> */}
        </div>
    );
}

export default SimpleSplashPage;