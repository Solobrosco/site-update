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
import home from './data/home.json';

function App() {
  return (
    <div className="justify-center items-center">
      {home.navbar && <NavBar navBar={home.navbar}/>}
      {home.splash && <SplashPage text={'Aspire to inspire before we expire.'}/>}
      {home.simpleSplash && <SimpleSplashPage quotes={home.simpleSplash.quotes} img={false}/>}
      {home.myRoom && <MyRoom />}
      {home.about && <About />}
      {home.gallery && <Gallery />}
      {home.education && <Education school={home.education.school} major={home.education.major} time={home.education.date}/>}
      {home.experience && <Experience />}
      {home.downloads && <Downloads resume={home.downloads.button.resume} certificates={home.downloads.button.certificates}/>}
      {home.stats && <Stats />}
      {home.footer && <Footer />}
    </div>
  );
}

export default App;
