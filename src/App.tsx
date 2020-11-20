import React from 'react';
// STYLES
import './styles/main.css';

// COMPONENTS
import NavBar from './components/NavBar';
import SplashPage from './components/SplashPage';
import MyRoom from './components/MyRoom';
import About from './components/About';
import SimpleSplashPage from './components/SimpleSplashPage';
import Gallery from './components/Gallery';
import Education from './components/Education';
import Experience from './components/Experience';
import Downloads from './components/Downloads';
import Stats from './components/Stats';
import Footer from './components/Footer';

// DATA
import state from './data/state.json';

function App() {
  return (
    <div className="justify-center items-center">
      {state.navbar && <NavBar time={state.navbar.time} date={state.navbar.date}/>}
      {state.splashpage && <SplashPage text={'Aspire to inspire before we expire.'}/>}
      {state.simplesplashpage && <SimpleSplashPage />}
      {state.myroom && <MyRoom />}
      {state.about && <About />}
      {state.gallery && <Gallery />}
      {state.education && <Education />}
      {state.experience && <Experience />}
      {state.downloads && <Downloads resume={state.downloads.resume} certificates={state.downloads.certificates}/>}
      {state.stats && <Stats />}
      {state.footer && <Footer />}
    </div>
  );
}

export default App;
