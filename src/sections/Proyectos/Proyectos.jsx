// src/sections/Proyectos/Proyectos.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectModal from '../../components/ProjectModal';
import {
  bvlgariLogoBlanco,
  searsLogoBlanco,
  jaecoLogoBlanco,
  steveMaddenLogoBlanco,
  majaLogoBlanco
} from '../../assets/images/logo';
import {
  BVLGARIHERE1,
  BVLGARIHERE2,
  BVLGARIHERE3,
  BVLGARIHERE4,
  BVLGARIHERE5,
  BVLGARIHERE6,
  BVLGARIHERE7,
  JaeccoHERE1,
  JaeccoHERE3,
  JaeccoHERE4,
  JaeccoHERE5,
  JaeccoHERE6,
  JaeccoHERE7,
  JaeccoHERE8,
  JaeccoPortadaHERE,
  MajaHERE1,
  MajaHERE2,
  MajaHERE3,
  MajaHERE4,
  MajaHERE5,
  MajaPortadaHERE
} from '../../assets/images/campaigns';
import './Proyectos.scss';

gsap.registerPlugin(ScrollTrigger);

const Proyectos = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 'bvlgari',
      name: 'BVLGARI',
      logo: bvlgariLogoBlanco,
      image: BVLGARIHERE1,
      galleryImages: [
        BVLGARIHERE1,
        BVLGARIHERE2,
        BVLGARIHERE3,
        BVLGARIHERE4,
        BVLGARIHERE5,
        BVLGARIHERE6,
        BVLGARIHERE7
      ],
      description: 'Campaña de convocatoria para BVLGARI, conectando con influencers de lujo para comunicar la elegancia italiana de la marca.',
      brandColor: '#B8946F'
    },
    {
      id: 'sears',
      name: 'Sears',
      logo: searsLogoBlanco,
      image: null, // Agregar imagen principal cuando esté disponible
      galleryImages: [], // Agregar imágenes cuando estén disponibles
      description: 'Convocatoria masiva de creadores de contenido para Sears, generando alcance y engagement con audiencias diversas.',
      brandColor: '#003F87'
    },
    {
      id: 'jaecco',
      name: 'Jaecco',
      logo: jaecoLogoBlanco,
      image: JaeccoPortadaHERE,
      galleryImages: [
        JaeccoHERE1,
        JaeccoHERE3,
        JaeccoHERE4,
        JaeccoHERE5,
        JaeccoHERE6,
        JaeccoHERE7,
        JaeccoHERE8
      ],
      description: 'Lanzamiento de marca con influencers especializados en lifestyle y movilidad, posicionando a Jaecco en el mercado mexicano.',
      brandColor: '#1A1A1A'
    },
    {
      id: 'steve-madden',
      name: 'Steve Madden',
      logo: steveMaddenLogoBlanco,
      image: null, // Agregar imagen principal cuando esté disponible
      galleryImages: [], // Agregar imágenes cuando estén disponibles
      description: 'Colaboración con influencers de moda para Steve Madden, destacando las últimas tendencias en calzado.',
      brandColor: '#FF0000'
    },
    {
      id: 'maja',
      name: 'Maja',
      logo: majaLogoBlanco,
      image: MajaPortadaHERE,
      galleryImages: [
        MajaHERE1,
        MajaHERE2,
        MajaHERE3,
        MajaHERE4,
        MajaHERE5
      ],
      description: 'Estrategia de contenido auténtico con micro-influencers para Maja, conectando con audiencias locales.',
      brandColor: '#E94B3C'
    }
  ];

  // Filtrar solo proyectos que tienen al menos una imagen
  const projectsWithImages = projects.filter(
    project => project.image || (project.galleryImages && project.galleryImages.length > 0)
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animaciones GSAP (igual que en HALO)
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

      gsap.fromTo('.proyectos__line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.proyectos__line',
            start: 'top 80%'
          }
        }
      );

      gsap.fromTo('.proyectos__carousel',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: '.proyectos__carousel',
            start: 'top 80%'
          }
        }
      );

      gsap.fromTo('.proyectos__brand',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.8,
          scrollTrigger: {
            trigger: '.proyectos__brands',
            start: 'top 80%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section className="proyectos" id="proyectos" ref={sectionRef}>
      <div className="container">
        <div className="proyectos__header">
          <h2 className="proyectos__title" ref={titleRef}>PROYECTOS</h2>
          <div className="proyectos__line"></div>
        </div>

        <div className="proyectos__carousel" ref={carouselRef}>
          <div className="proyectos__brands">
            {projectsWithImages.map((project) => (
              <div
                key={project.id}
                className="proyectos__brand"
                onClick={() => handleProjectClick(project)}
              >
                <div className="proyectos__brand-container">
                  <div 
                    className="proyectos__brand-bg"
                    style={{ backgroundImage: `url(${project.image || project.galleryImages[0]})` }}
                  />
                  <div className="proyectos__brand-overlay" />
                  <div className="proyectos__brand-content">
                    <img 
                      src={project.logo} 
                      alt={project.name}
                      className="proyectos__brand-logo"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Proyectos;