import React from 'react';

import splash from '../static/MRock.jpg'

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
    let pick = pickRandomQuote(props.quotes);
    let quote = pick.quote;
    let author = pick.author;
    
    return(
        <div className='static'>
            <div className="relative text-gruvwhite text-center h-5" >
                <div className="absolute inset-0 bg-cover bg-center z-0">
                    {props.img && <img src={splash} alt='splash' className='object-cover'></img>}
                </div>
                <div className='items-center inset-0 z-10 flex justify-center absolute bg-blue-900 px-3 font-bold text-4xl'>
                    "{quote}"
                    <br></br>
                    <span className='font-thin text-bluegruv-dark'>- {author}</span>
                </div>
            </div>
        </div>
    );
}

export default SimpleSplashPage;