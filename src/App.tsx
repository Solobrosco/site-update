import React from 'react';
import './styles/main.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />
      <div className="bg-blue-900 text-white">Splash Page</div>
      <div className="bg-blue-800 text-white">My Room</div>
      <div className="bg-blue-700 text-white">Check me out</div>
      <div className="bg-blue-600 text-white">Pictures</div>
      <div className="bg-blue-500 text-white">Education/Experience</div>
      <div className="bg-blue-400 text-white">Stats(optional)</div>
      <div className="bg-blue-300 text-white">Footer</div>
    </div>
  );
}

export default App;
