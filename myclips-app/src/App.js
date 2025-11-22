import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Clip from './components/clip';
import clipsData from './data/MyClip.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <div className="clips-container">
          <div className="clips-grid">
            {clipsData.map((clip, index) => (
              <Clip key={index} clip={clip} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;