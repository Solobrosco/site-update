import React from 'react';

import splash from '../static/Snelling.png'

// DATA
// import quotes from '../data/quotes.json';
// webgl background canvas

interface simpleSplashPageProps {
    quotes: {},
    img: boolean
}

function pickRandomQuote (quotes: {}) {
    let keys = Object.keys(quotes);
    let randIndex = keys[Math.floor(Math.random() * keys.length)];
    // console.log(item);
    return quotes[keys[randIndex]];
}

const SimpleSplashPage = (props: simpleSplashPageProps) =>{
    let quote = pickRandomQuote(props.quotes);
    return(
        <div className="bg-gruvbg-1 text-gruvwhite text-center" >
            <div className='z-0'>
                {props.img && <img src={splash} alt='splash' className='object-cover'></img>}
            </div>
            <div className='z-10 px-3 font-medium text-2xl'>"{quote.quote}"<br></br><span className='font-thin text-bluegruv-dark'>- {quote.author}</span></div>
        </div>
    );
}

export default SimpleSplashPage;