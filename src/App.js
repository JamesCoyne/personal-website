import React from 'react';
import './App.scss';

import NavBar from './components/navbar/index';
import SplashScene from './components/splash/index';
import About from './components/about/index';
import Work from './components/work/index';
import Contact from './components/contact/index'

function App() {
  return (
    <div className="App">
      <NavBar style={{position: 'fixed'}}/>
      <div id="splash">
        <SplashScene />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
