import React from 'react';

// DATA
import quotes from '../data/quotes.json';

function pickRandomQuote () {
    let keys = Object.keys(quotes);
    let randIndex = keys[Math.floor(Math.random() * keys.length)];
    // console.log(item);
    return quotes[keys[randIndex]];
}

const SimpleSplashPage = () =>{
    let quote = pickRandomQuote();
    return(
        <div className="bg-blue-900 text-white text-center" >
            <h1 className='font-medium text-2xl'>"{quote.quote}"<br></br><span className='font-thin'>- {quote.author}</span></h1>
        </div>
    );
}

export default SimpleSplashPage;