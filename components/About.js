import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Code, Palette, Smartphone, Database, Zap, Globe } from 'lucide-react';

const About = () => {
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const visualRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%'
        },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: 'power3.out'
      });

      // Visual animation
      gsap.from(visualRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%'
        },
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
      });

      // Skills animation
      gsap.from('.skill-item', {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 90%'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Visual circles animation
      gsap.to('.circle-1', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
      });

      gsap.to('.circle-2', {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: 'none'
      });

      gsap.to('.circle-3', {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: 'none'
      });

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: '[PINTURAS]',
      description: 'OBRAS EN MADERA CON EXPLORACIÓN DEL COLOR Y FORMA',
      color: 'text-paint-pink',
      bgColor: 'bg-paint-pink/20'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '[MOVIMIENTO]',
      description: 'LÍNEAS FLUIDAS Y GESTOS ORGÁNICOS EN MOVIMIENTO',
      color: 'text-paint-blue',
      bgColor: 'bg-paint-blue/20'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: '[SIMBOLISMO]',
      description: 'OJOS, ONDAS, CÍRCULOS Y PORTALES COMO VOCABULARIO',
      color: 'text-paint-green',
      bgColor: 'bg-paint-green/20'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: '[PAISAJES INTERNOS]',
      description: 'COMPOSICIONES QUE EVOCAN ENERGÍAS COLECTIVAS',
      color: 'text-paint-purple',
      bgColor: 'bg-paint-purple/20'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: '[CONTEMPLACIÓN]',
      description: 'CADA OBRA COMO OBJETO DE ENERGÍA Y CONTEMPLACIÓN',
      color: 'text-paint-orange',
      bgColor: 'bg-paint-orange/20'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: '[DIÁLOGO]',
      description: 'LO ANCESTRAL Y LO CONTEMPORÁNEO EN EQUILIBRIO',
      color: 'text-paint-gold',
      bgColor: 'bg-paint-gold/20'
    }
  ];

  return (
    <section 
      id="sobre-mi" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-paint-pink/5 via-dark-900 to-paint-blue/5"
      ref={aboutRef}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8">
                <div className="intertwining-subtle" data-text="Sobre la Exposición">
                  <span className="intertwining-subtle-main">Sobre la Exposición</span>
                </div>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-paint-pink to-paint-blue mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p className="font-mono text-sm leading-loose tracking-wide">
                <span className="text-paint-pink font-semibold">[EXPOSICIÓN INDIVIDUAL]</span><br/>
                MANOELA MADERA REÚNE UNA SERIE DE PINTURAS Y PANELES EN MADERA<br/>
                QUE PROFUNDIZAN EN LA EXPLORACIÓN DEL COLOR Y LA FORMA<br/>
                COMO LENGUAJES EN MOVIMIENTO.
              </p>
              <p className="font-mono text-sm leading-loose tracking-wide">
                <span className="text-paint-blue font-semibold">[LÍNEAS FLUIDAS, GESTOS ORGÁNICOS Y CONTRASTES VIBRANTES]</span><br/>
                LA ARTISTA CONSTRUYE COMPOSICIONES QUE EVOCAN PAISAJES INTERNOS<br/>
                Y ENERGÍAS COLECTIVAS EN CONSTANTE TRANSFORMACIÓN.
              </p>
              <p className="font-mono text-sm leading-loose tracking-wide">
                <span className="text-paint-green font-semibold">[OJOS, ONDAS, CÍRCULOS Y PORTALES]</span><br/>
                CONFORMAN UN VOCABULARIO SIMBÓLICO QUE SE TRANSFORMA Y EXPANDE,<br/>
                INVITANDO A RECONOCER PATRONES FAMILIARES DENTRO DE LA ABSTRACCIÓN.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-paint-pink/10 to-paint-blue/10 p-6 rounded-xl border border-paint-pink/20">
                <h3 className="text-xl font-semibold text-paint-pink mb-2 font-mono tracking-wider">[INAUGURACIÓN]</h3>
                <p className="text-gray-300 font-mono text-sm leading-loose tracking-wide">
                  <span className="font-semibold">JUEVES, 24 DE OCTUBRE A LAS 7:00 P.M.</span><br/>
                  INSTITUTO DE SUBCULTURA<br/>
                  <span className="text-paint-blue">ENTRADA LIBRE</span>
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-paint-pink/20 text-paint-pink rounded-full text-sm font-medium font-mono tracking-wider">
                  [PINTURAS & PANELES]
                </span>
                <span className="px-4 py-2 bg-paint-blue/20 text-paint-blue rounded-full text-sm font-medium font-mono tracking-wider">
                  [EXPLORACIÓN DEL COLOR]
                </span>
                <span className="px-4 py-2 bg-paint-green/20 text-paint-green rounded-full text-sm font-medium font-mono tracking-wider">
                  [ABSTRACCIÓN CONTEMPORÁNEA]
                </span>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div ref={visualRef} className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated circles */}
              <div className="circle-1 absolute inset-0 bg-gradient-to-r from-paint-pink/20 to-paint-blue/20 rounded-full"></div>
              <div className="circle-2 absolute inset-8 bg-gradient-to-r from-paint-blue/30 to-paint-green/30 rounded-full"></div>
              <div className="circle-3 absolute inset-16 bg-gradient-to-r from-paint-green/40 to-paint-purple/40 rounded-full"></div>
              
              {/* Center content */}
              <div className="absolute inset-24 bg-gradient-to-br from-paint-gold/30 to-paint-orange/30 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <Code className="w-16 h-16 text-paint-gold mx-auto mb-4" />
                  <span className="text-2xl font-bold font-display gold-text">DEV</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exhibition Details */}
        <div ref={skillsRef} className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold font-display text-center mb-12 gradient-text font-mono tracking-wider">
            [DETALLES DE LA EXPOSICIÓN]
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item glass-card p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 ${skill.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className={skill.color}>{skill.icon}</span>
                </div>
                <h4 className={`text-xl font-semibold font-display mb-2 ${skill.color}`}>
                  {skill.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Paint Drip Transition */}
      <div className="paint-drip drip-blue bottom-0"></div>
    </section>
  );
};

export default About;