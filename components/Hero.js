import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Small delay to ensure elements are mounted
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
      // Hero text animations with null checks
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          duration: 1.5,
          y: 100,
          opacity: 0,
          ease: 'power3.out'
        });
      }

      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          duration: 1.5,
          y: 50,
          opacity: 0,
          ease: 'power3.out',
          delay: 0.3
        });
      }

      if (descriptionRef.current) {
        gsap.from(descriptionRef.current, {
          duration: 1.5,
          y: 30,
          opacity: 0,
          ease: 'power3.out',
          delay: 0.6
        });
      }

      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          duration: 1.5,
          y: 30,
          opacity: 0,
          ease: 'power3.out',
          delay: 0.9
        });
      }

      // Paint blobs rotation
      gsap.to('.paint-blob', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
      });

      // Floating animation for paint blobs
      gsap.to('.paint-blob:nth-child(1)', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });

      gsap.to('.paint-blob:nth-child(2)', {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: 1
      });

      gsap.to('.paint-blob:nth-child(3)', {
        y: -25,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: 2
      });

      gsap.to('.paint-blob:nth-child(4)', {
        y: -18,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: 0.5
      });

      }, heroRef);
    }, 100); // 100ms delay

    return () => {
      clearTimeout(timer);
      if (heroRef.current) {
        const ctx = gsap.context(() => {}, heroRef);
        ctx.revert();
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutElement = document.getElementById('sobre-mi');
    if (aboutElement) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: aboutElement.offsetTop - 80,
        ease: 'power3.inOut'
      });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative section-bg overflow-hidden" ref={heroRef}>
      {/* Floating Paint Blobs */}
      <div className="paint-blob w-32 h-32 bg-paint-pink top-20 left-10 animate-float" />
      <div className="paint-blob w-24 h-24 bg-paint-blue top-32 right-20 animate-float" style={{animationDelay: '-2s'}} />
      <div className="paint-blob w-28 h-28 bg-paint-green bottom-32 left-32 animate-float" style={{animationDelay: '-4s'}} />
      <div className="paint-blob w-20 h-20 bg-paint-purple bottom-20 right-32 animate-float" style={{animationDelay: '-6s'}} />
      
      {/* Additional decorative blobs */}
      <div className="paint-blob w-16 h-16 bg-paint-orange top-1/3 left-1/4 animate-float" style={{animationDelay: '-1s'}} />
      <div className="paint-blob w-12 h-12 bg-gradient-to-br from-paint-pink to-paint-blue top-2/3 right-1/4 animate-float" style={{animationDelay: '-3s'}} />

      {/* Main Content */}
      <div className="text-center z-10 px-6 max-w-5xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold font-display mb-6 leading-tight"
        >
          <div className="intertwining-multi" data-text="MANOELA MADERA">
            <span className="layer-1">MANOELA MADERA</span>
            <span className="layer-2">MANOELA MADERA</span>
            <span className="layer-3">MANOELA MADERA</span>
            <span className="layer-main">MANOELA MADERA</span>
          </div>
        </h1>
        
        <h2 
          ref={subtitleRef}
          className="text-2xl md:text-4xl lg:text-5xl mb-8 text-gray-300 font-subtitle font-light"
        >
          <span className="font-mono tracking-wider">EXPOSICIÓN INDIVIDUAL</span>
        </h2>
        
        <p 
          ref={descriptionRef}
          className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-body"
        >
          <span className="font-mono text-sm leading-loose tracking-wide">
            UNA EXPLORACIÓN DEL COLOR Y LA FORMA COMO LENGUAJES EN MOVIMIENTO.<br/>
            PAISAJES INTERNOS Y ENERGÍAS COLECTIVAS QUE DIALOGAN ENTRE LO ANCESTRAL Y LO CONTEMPORÁNEO.<br/>
            CADA OBRA COMO OBJETO DE ENERGÍA Y CONTEMPLACIÓN.
          </span>
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToAbout}
            className="btn-primary font-subtitle text-lg px-10 py-5 font-mono tracking-wider"
          >
            [VER OBRAS]
          </button>
          
          <button 
            onClick={() => window.open('#contacto', '_self')}
            className="btn-secondary font-subtitle text-lg px-10 py-5 font-mono tracking-wider"
          >
            [INFORMACIÓN DE LA EXPOSICIÓN]
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          size={32} 
          className="text-white/60 cursor-pointer hover:text-paint-pink transition-colors"
          onClick={scrollToAbout}
        />
      </div>

      {/* Paint Drip Transition */}
      <div className="paint-drip drip-pink bottom-0" />
    </section>
  );
};

export default Hero;