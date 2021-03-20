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
  // This is the layout of the website
  return (
    <div className="justify-center items-center">
      {/* NAVBAR */}
      {home.navbar && <NavBar navBar={home.navbar}/>}
      {/* SPLASHPAGE */}
      {home.splash && <SplashPage text={'Aspire to inspire before we expire.'}/>}
      {home.simpleSplash && <SimpleSplashPage quotes={home.simpleSplash.quotes} img={true}/>}
      {/* MYROOM */}
      {home.myRoom && <MyRoom />}
      {/* ABOUT */}
      {home.about && <About skills={home.about.skills} title={home.about.title} description={home.about.description}/>}
      {/* GALLERY */}
      {home.gallery && <Gallery />}
      {/* EDUCATION */}
      {home.education && <Education school={home.education.school} major={home.education.major} time={home.education.date} link={home.education.link}/>}
      {/* EXPERIENCE */}
      {home.experience && <Experience experience={home.experience.jobs}/>}
      {/* DOWNLOADS */}
      {home.downloads && <Downloads showResume={home.downloads.button.resume} showCertificates={home.downloads.button.certificates}/>}
      {/* STATS */}
      {home.stats && <Stats stats={home.stats.initial}/>}      
      {/* FOOTER */}
      {home.footer && <Footer imgURL={home.footer.imgURL} />}
    </div>
  );
}

export default App;
