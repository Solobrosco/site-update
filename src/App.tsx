import React from 'react';
import './styles/main.css';

import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';

function App() {
  return (
    <div className="justify-center items-center">
      <NavBar />
      <SplashPage text={'Aspire to inspire before we expire.'}/>
      <div className="bg-blue-800 text-white">My Room</div>
      <div className="bg-blue-700 text-white">Check me out</div>
      <div className="bg-blue-600 text-white">Pictures</div>
      <div className="bg-blue-500 text-white">Education/Experience</div>
      <div className="bg-blue-400 text-white">Stats(optional)</div>
      <div className="bg-blue-300 text-white">Footer Created with React typescript, tailwind and spring.</div>
      <div className="whitespace-pre-line bg-blue-200 text-white h-10">test</div>
    </div>
  );
}

export default App;
