import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

const SplashPage = () => {
    return(
        <Parallax pages={1} scrolling={true}>
            <ParallaxLayer>
                <div className="bg-blue-900 text-center text-white">
                    <h1>
                    Aspire to inspire before we expire.
                    </h1>
                </div>
            </ParallaxLayer>
        </Parallax>
    );
}

export default SplashPage;