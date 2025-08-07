// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Servicios from './sections/Servicios';
import Plataformas from './sections/Plataformas';
import Proyectos from './sections/Proyectos';
import Colaboraciones from './sections/Colaboraciones';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Plataformas />
        <Proyectos />
        <Colaboraciones />
        <Footer />
      
      </main>
    </div>
  );
}

export default App;