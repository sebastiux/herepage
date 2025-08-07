// src/sections/Colaboraciones/Colaboraciones.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  bvlgariLogoNegro,
  chireyLogoNegro,
  gacmotorsLogoNegro,
  hongqiLogoNegro,
  jaecoLogoNegro,
  majaLogoNegro,
  nauticalLogoNegro,
  omodaLogoNegro,
  oppoLogoNegro,
  searsLogoNegro,
  steveMaddenLogoNegro,
  timHortonsLogoNegro,
  yvesRocherLogoNegro
} from '../../assets/images/logo';
import './Colaboraciones.scss';

gsap.registerPlugin(ScrollTrigger);

const Colaboraciones = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const colaboradores = {
    fila1: [
      { id: 'bvlgari', name: 'BVLGARI', logo: bvlgariLogoNegro },
      { id: 'chirey', name: 'Chirey', logo: chireyLogoNegro },
      { id: 'gac-motors', name: 'GAC Motors', logo: gacmotorsLogoNegro },
      { id: 'hongqi', name: 'Hongqi', logo: hongqiLogoNegro },
      { id: 'jaecoo', name: 'Jaecoo', logo: jaecoLogoNegro },
      { id: 'maja', name: 'Maja', logo: majaLogoNegro },
      { id: 'nautical', name: 'Nautical', logo: nauticalLogoNegro }
    ],
    fila2: [
      { id: 'omoda', name: 'Omoda', logo: omodaLogoNegro },
      { id: 'oppo', name: 'OPPO', logo: oppoLogoNegro },
      { id: 'sears', name: 'Sears', logo: searsLogoNegro },
      { id: 'steve-madden', name: 'Steve Madden', logo: steveMaddenLogoNegro },
      { id: 'tim-hortons', name: 'Tim Hortons', logo: timHortonsLogoNegro },
      { id: 'yves-rocher', name: 'Yves Rocher', logo: yvesRocherLogoNegro }
    ]
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          }
        }
      );

      // Line animation
      gsap.fromTo('.colaboraciones__line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.colaboraciones__line',
            start: 'top 80%'
          }
        }
      );

      // Logos animation - Primera fila
      gsap.fromTo('.colaboraciones__row--1 .colaboraciones__logo',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.colaboraciones__row--1',
            start: 'top 85%',
          }
        }
      );

      // Logos animation - Segunda fila
      gsap.fromTo('.colaboraciones__row--2 .colaboraciones__logo',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.colaboraciones__row--2',
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="colaboraciones" id="colaboraciones" ref={sectionRef}>
      <div className="container">
        <div className="colaboraciones__header">
          <h2 className="colaboraciones__title" ref={titleRef}>COLABORACIONES</h2>
          <div className="colaboraciones__line"></div>
        </div>

        <div className="colaboraciones__content">
          {/* Primera fila - 7 logos */}
          <div className="colaboraciones__row colaboraciones__row--1">
            {colaboradores.fila1.map((colaborador) => (
              <div key={colaborador.id} className="colaboraciones__logo">
                <img 
                  src={colaborador.logo} 
                  alt={colaborador.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Segunda fila - 6 logos */}
          <div className="colaboraciones__row colaboraciones__row--2">
            {colaboradores.fila2.map((colaborador) => (
              <div key={colaborador.id} className="colaboraciones__logo">
                <img 
                  src={colaborador.logo} 
                  alt={colaborador.name}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colaboraciones;