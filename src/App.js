import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MastHead from './components/MastHead/MastHead';
import AboutMe from './components/About/About';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Header/>
      <MastHead/>
      <AboutMe/>
      <Gallery/>
    </div>
  );
}

export default App;
