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
        "Clearlake.jpg",
        "CreekCave.jpg",
        "Landsend.jpg",
        "LongBeach.jpg",
        "Monterey.jpg",
        "MussleRock_0.jpg",
        "MussleRock_1.jpg",
        "MussleRock_2.jpg",
        "Nike.jpg",
        "Pacifica_1.jpg",
        "Pacifica.jpg",
        "SantaCruz.jpg",
        "Sequoia_1.jpg",
        "Sequoia.jpg",
        // "Snelling.png",
        "Yosemite_0.jpg",
        "Yosemite_1.jpg",

    ]
    let randIndex = Math.floor(Math.random() * batch.length);
    return path + batch[randIndex]
}

const SimpleSplashPage = (props: simpleSplashPageProps) =>{
    let quote = pickRandomQuote(props.quotes);
    return(
        <div className="bg-gruvbg-1 text-gruvwhite text-center">
            {props.img && <img src={randomPicture()} alt='splash' className='object-cover'></img>}
            <div className='bg-gruvbg-1px-3 font-medium text-2xl'>
                "{quote.quote}"
                <br></br>
                <span className='font-thin text-bluegruv-dark'>- {quote.author}</span>
            </div>
        </div>
    );
}

export default SimpleSplashPage;