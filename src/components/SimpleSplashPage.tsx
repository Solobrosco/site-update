import React from 'react';
import CSS from 'csstype'

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

const styles: CSS.Properties = {
    position: "absolute",
    top: '50%', 
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textShadow: '5px 3px 3px #282828'

}

const SimpleSplashPage = (props: simpleSplashPageProps) =>{
    let quote = pickRandomQuote(props.quotes);
    return(
        <div className="relative bg-gruvbg-1 text-gruvwhite text-center">
            <div style={styles} className='p-3 font-medium text-4xl'>
                "{quote.quote}"
                <br></br>
                <span className='text-2xl text-bluegruv-dark'>- {quote.author}</span>
            </div>
            {props.img && <img src={randomPicture()} alt='splash' className='object-cover shadow-inner-2xl shadow-lg'></img>}
        </div>
    );
}

export default SimpleSplashPage;