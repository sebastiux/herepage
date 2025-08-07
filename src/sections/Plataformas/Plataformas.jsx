// src/sections/Plataformas/Plataformas.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Plataformas from '../../assets/images/influencers/Plataformas.png';
import './Plataformas.scss';

gsap.registerPlugin(ScrollTrigger);

const PlataformasSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Set inicial para que estén visibles
    gsap.set([titleRef.current, imageRef.current], {
      opacity: 1
    });

    const ctx = gsap.context(() => {
      // Animación del título
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animación de la línea
      gsap.from('.plataformas__line', {
        scaleX: 0,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Animación de la imagen
      gsap.from(imageRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="plataformas" id="plataformas" ref={sectionRef}>
      <div className="container">
        <div className="plataformas__header">
          <div className="plataformas__title-wrapper">
            <h2 className="plataformas__title" ref={titleRef}>PLATAFORMAS</h2>
          </div>
          <div className="plataformas__line"></div>
        </div>

        <div className="plataformas__content">
          <div className="plataformas__image-container" ref={imageRef}>
            <img 
              src={Plataformas} 
              alt="Influencers y Celebridades" 
              className="plataformas__image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlataformasSection;