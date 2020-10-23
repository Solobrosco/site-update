import React from 'react';
import './styles/main.css';

import NavBar from './components/NavBar';
// import SplashPage from './components/SplashPage';
import MyRoom from './components/MyRoom';
import About from './components/About';
import SplashPage from './components/SimpleSplashPage';

import Gallery from './components/Gallery';
import Education from './components/Education';

function App() {
  return (
    <div className="justify-center items-center">
      <NavBar />
      {/* Need to fix this better */}
      {/* <SplashPage text={'Aspire to inspire before we expire.'}/> */}
      <SplashPage />
      {/* <MyRoom /> */}
      <About />
      <Gallery />
      <Education />
      <div className="bg-blue-500 text-white">Experience</div>
      <div className="bg-blue-400 text-white">Stats(optional)</div>
      <div className="bg-blue-300 text-white">Footer Created with React typescript, tailwind and spring.</div>
    </div>
  );
}

export default App;
