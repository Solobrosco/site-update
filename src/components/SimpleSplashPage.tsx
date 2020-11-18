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
        <div className="bg-redgruv-dark text-white text-center" >
            <h1 className='font-bold text-2xl'>"{quote.quote}"<br></br> - {quote.author}</h1>
        </div>
    );
}

export default SimpleSplashPage;