import React from 'react';

import splash from '../static/MRock.jpg'

interface ImgquoteProps {
    img?: boolean,
    quote: string,
    author: string
}

const Imgquote = (props: ImgquoteProps) => {
    return(
        <div>
            <div className='static flex item-stretch'>
                {props.img && <div className='z-0 absolute'>
                    <img src={splash} alt='splash' className='object-cover'></img>
                </div>}
            </div>
            <div className='z-10 bg-gruvbg-1 self-auto absolute px-3 font-medium text-2xl'>
                "{props.quote}"
                <br></br>
                <span className='font-thin text-bluegruv-dark'>- {props.author}</span>
            </div>
        </div>
    );
}

export default Imgquote;