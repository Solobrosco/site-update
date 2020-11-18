import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import Layer0 from '../static/Background.svg'
import Layer1 from '../static/Stars.svg'
import Layer2 from '../static/Moon.svg'
import Layer3 from '../static/MountainLake.svg'
import Layer4 from '../static/Foreground.svg'

// attribution <a href="https://www.vecteezy.com/free-vector/nature">Nature Vectors by Vecteezy</a>

interface SplashPageProps {
    text: string;
}

const SplashPage = (props: SplashPageProps) => {
    return(
        <Parallax pages={2} scrolling={true}>
            <ParallaxLayer offset={0} speed={1}>
                <img src={Layer0} alt='background'></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
                <img src={Layer1} alt='stars'></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2}>
                <img src={Layer2} alt='moon'></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0.3} speed={2}>
                <div className=" sm:text-3xl md:text-6xl text-bold text-center text-white h-10">
                    <p className='hover:text-gray-200'>
                        {props.text}
                    </p>
                </div>
                {/* <div className='text-center justify-center items-center mt-8'>
                    <button className="bg-transparent text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                        Button
                    </button>
                </div> */}
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={3}>
                <img src={Layer3} alt='mountain'></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={4}>
                <img src={Layer4} alt='foreground'></img>
            </ParallaxLayer>
        </Parallax>
    );
}

export default SplashPage;