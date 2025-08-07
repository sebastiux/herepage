// src/components/ProjectModal/ProjectModal.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ProjectModal.scss';

const ProjectModal = ({ project, isOpen, onClose, isSimple = true }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && project) {
      document.body.style.overflow = 'hidden';
      gsap.set(modalRef.current, { display: 'flex' });
      
      const tl = gsap.timeline();
      
      tl.fromTo(modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      )
      .fromTo(contentRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out' },
        '-=0.1'
      )
      .fromTo('.project-modal__image-wrapper',
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo('.project-modal__info > *',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power3.out' },
        '-=0.3'
      );
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, project]);

  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose
    });
    
    tl.to(contentRef.current, { scale: 0.9, opacity: 0, duration: 0.3 })
      .to(modalRef.current, { opacity: 0, duration: 0.3 }, '-=0.2')
      .set(modalRef.current, { display: 'none' });
  };

  const handleBackdropClick = (e) => {
    if (e.target === modalRef.current) {
      handleClose();
    }
  };

  if (!project) return null;

  // Determinar el patrón basado en el número de imágenes
  const imageCount = project.galleryImages?.length || 0;
  let pattern = 'single';
  let imageRows = [];

  if (imageCount === 1) {
    pattern = 'single';
    imageRows = [[project.galleryImages[0]]];
  } else if (imageCount === 2) {
    pattern = 'duo';
    imageRows = [[...project.galleryImages]];
  } else if (imageCount === 3) {
    pattern = 'trio';
    imageRows = [[...project.galleryImages]];
  } else if (imageCount === 4) {
    pattern = 'quad';
    imageRows = [
      project.galleryImages.slice(0, 2),
      project.galleryImages.slice(2, 4)
    ];
  } else if (imageCount === 5) {
    pattern = 'penta';
    imageRows = [
      project.galleryImages.slice(0, 2),
      project.galleryImages.slice(2, 5)
    ];
  } else if (imageCount === 6) {
    pattern = 'hexa';
    imageRows = [
      project.galleryImages.slice(0, 3),
      project.galleryImages.slice(3, 6)
    ];
  } else if (imageCount === 7) {
    pattern = 'septa';
    imageRows = [
      project.galleryImages.slice(0, 4),
      project.galleryImages.slice(4, 7)
    ];
  } else if (imageCount >= 8) {
    pattern = 'octa';
    imageRows = [
      project.galleryImages.slice(0, 3),
      project.galleryImages.slice(3, 6),
      project.galleryImages.slice(6, 8)
    ];
  }

  return (
    <div className="project-modal" ref={modalRef} onClick={handleBackdropClick}>
      <div className="project-modal__content" ref={contentRef}>
        <button 
          className="project-modal__close" 
          onClick={handleClose}
          aria-label="Cerrar modal"
        >
          ×
        </button>

        <div className="project-modal__container">
          {/* Lado izquierdo - Galería de imágenes */}
          <div 
            className="project-modal__left"
            style={{ backgroundColor: project.brandColor || '#FFD965' }}
          >
            <div className={`project-modal__images pattern-${pattern}`}>
              {imageRows.map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className="project-modal__row"
                  data-images={row.length}
                >
                  {row.map((image, index) => (
                    <div key={index} className="project-modal__image-wrapper">
                      <img 
                        src={image} 
                        alt={`${project.name} ${rowIndex * 10 + index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Lado derecho - Información del proyecto */}
          <div className="project-modal__right">
            <div className="project-modal__info">
              <div className="project-modal__logo">
                <img 
                  src={project.logo} 
                  alt={project.name}
                  className="project-modal__company-logo"
                />
              </div>
              
              <div className="project-modal__description">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;