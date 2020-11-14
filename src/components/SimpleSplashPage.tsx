import React from 'react';

// import Snelling from '../static/Snelling.png';

import quotes from '../data/quotes.json';

function pickRandomQuote () {
    let keys = Object.keys(quotes);
    let randIndex = keys[Math.floor(Math.random() * keys.length)];
    let item = quotes[keys[randIndex]];
    // console.log(item);
    return item;
}

const SimpleSplashPage = () =>{
    let quote = pickRandomQuote();
    return(
        <div className="bg-blue-900 text-white text-center items-center justify-center relative" >
            <h1 className=''>"{quote.quote}"<br></br>-{quote.author}</h1>
            {/* <img className='object-contain ' src={Snelling} alt='snelling'/> */}
        </div>
    );
}

export default SimpleSplashPage;