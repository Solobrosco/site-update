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
        <Parallax pages={3} scrolling={true}>
            <ParallaxLayer offset={0} speed={1}>
                <img src={Layer0} alt='background'></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
                <img src={Layer1} alt='wut'></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={2}>
                <img src={Layer2} alt='the'></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={3}>
                <img src={Layer3} alt='wut'></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={4}>
                <img src={Layer4} alt='is'></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0.3} speed={3}>
                <div className="text-bold text-center text-white justify-center text-6xl items-center h-10">
                    <h1>
                        {props.text}
                    </h1>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
}

export default SplashPage;