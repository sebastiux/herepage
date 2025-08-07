// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        {/* Sección temporal para hacer scroll */}
        <div style={{ height: '100vh', backgroundColor: '#f5f5f5' }}></div>
      </main>
    </div>
  );
}

export default App;