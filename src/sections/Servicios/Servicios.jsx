// src/sections/Servicios/Servicios.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import influencerMarketing from '../../assets/images/icons/influencer marketing.png';
import convocatorias from '../../assets/images/icons/Convocatorias.png';
import rsvp from '../../assets/images/icons/RSVP.png';
import brandAmbassador from '../../assets/images/icons/Brand Ambassador.png';
import './Servicios.scss';

gsap.registerPlugin(ScrollTrigger);

const Servicios = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const servicesRef = useRef([]);

  const services = [
    {
      id: 'influencer-marketing',
      icon: influencerMarketing,
      title: 'Influencer marketing'
    },
    {
      id: 'convocatorias',
      icon: convocatorias,
      title: 'Convocatorias'
    },
    {
      id: 'rsvp',
      icon: rsvp,
      title: 'RSVP'
    },
    {
      id: 'brand-ambassador',
      icon: brandAmbassador,
      title: 'Brand Ambassador'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Configurar estado inicial visible
      gsap.set([descriptionRef.current, titleRef.current, ...servicesRef.current], {
        opacity: 1,
        y: 0
      });

      // Luego animar desde invisible
      gsap.from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true // Solo animar una vez
        }
      });

      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true
        }
      });

      gsap.from(servicesRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="servicios" id="servicios" ref={sectionRef}>
      <div className="container">
        <p className="servicios__description" ref={descriptionRef}>
          Nos dedicamos a desarrollar propuestas estratégicas y<br />
          convocatorias de creadores de contenido y líderes de opinión.
        </p>

        <h2 className="servicios__title" ref={titleRef}>SERVICIOS</h2>

        <div className="servicios__grid">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="servicios__item"
              ref={el => servicesRef.current[index] = el}
            >
              <div className="servicios__icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className="servicios__item-title">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;