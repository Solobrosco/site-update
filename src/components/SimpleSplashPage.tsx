import React from 'react';

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

const randomPicture = () => {
    const path = "https://solobrosco.github.io/data/splash/"
    const batch = [
        "BayShore.jpg",
        "CreekCave.jpg",
        "LongBeach.jpg",
        "Monterey.jpg",
        "MussleRock_0.jpg",
        "MussleRock_1.jpg",
        "Nike.jpg",
        "Pacifica_1.jpg",
        "Pacifica.jpg",
        "SantaCruz.jpg",
        "Sequoia.jpg",
        "Sequoia_1.jpg",
        // "Snelling.png",
    ]
    let randIndex = Math.floor(Math.random() * batch.length);
    return path + batch[randIndex]
}

const SimpleSplashPage = (props: simpleSplashPageProps) =>{
    let quote = pickRandomQuote(props.quotes);
    return(
        <div className="relative bg-gruvbg-1 flex text-gruvwhite text-center">
            <div className='absolute top-1/2 left-1/2 bg-gruvbg-1px-3 font-medium text-2xl'>
                "{quote.quote}"
                <br></br>
                <span className='font-thin text-bluegruv-dark'>- {quote.author}</span>
            </div>
            {props.img && <img src={randomPicture()} alt='splash' className='object-cover'></img>}
        </div>
    );
}

export default SimpleSplashPage;