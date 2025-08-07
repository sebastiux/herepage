// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Servicios from './sections/Servicios';
import Plataformas from './sections/Plataformas';


function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Plataformas />
         
        
        <div style={{ height: '100vh', backgroundColor: '#f5f5f5' }}></div>
      </main>
    </div>
  );
}

export default App;