import React from 'react';
import './styles/main.css';

import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';
import MyRoom from './components/MyRoom';
import About from './components/About';
import SimpleSplashPage from './components/SimpleSplashPage';
import Gallery from './components/Gallery';
import Education from './components/Education';

import state from './data/state.json';

function App() {
  return (
    <div className="justify-center items-center">
      {state.navbar && <NavBar/>}
      {state.splashpage && <SplashPage text={'Aspire to inspire before we expire.'}/>}
      {state.simplesplashpage && <SimpleSplashPage />}
      {state.myroom && <MyRoom />}
      {state.about && <About />}
      {state.gallery && <Gallery />}
      {state.education && <Education />}
      {/* <div className="bg-blue-500 text-white">Experience</div>
      <div className="bg-blue-400 text-white">Stats(optional)</div>
      <div className="bg-blue-300 text-white">Footer Created with React typescript, tailwind and spring.</div> */}
    </div>
  );
}

export default App;
