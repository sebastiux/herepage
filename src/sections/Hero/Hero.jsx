// src/sections/Hero/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HERELogoBlancoSVG } from '../../assets/images';
import { videoprovisional } from '../../assets/videos';
import './Hero.scss';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate HERE logo
    tl.fromTo('.hero__logo',
      { 
        opacity: 0,
        scale: 0.8,
        y: 50
      },
      { 
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: 'power4.out'
      }
    )
    .fromTo('.hero__subtitle-line',
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power3.out',
        stagger: 0.1
      },
      '-=0.8'
    );
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero__background">
        <video 
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoprovisional} type="video/mp4" />
        </video>
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text-container">
          <img 
            src={HERELogoBlancoSVG} 
            alt="HERE" 
            className="hero__logo"
          />
          <div className="hero__subtitle">
            <p className="hero__subtitle-line">Convocatorias</p>
            <p className="hero__subtitle-line">Influencer Marketing</p>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;