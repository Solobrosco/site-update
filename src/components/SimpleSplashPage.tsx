import React from 'react';

import Imgquote from './Imgquote';



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
        <div className="text-gruvwhite text-center" >
            <Imgquote img={props.img} quote={quote} author={author} />
        </div>
    );
}

export default SimpleSplashPage;