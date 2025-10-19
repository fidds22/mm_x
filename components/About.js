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
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend',
      description: 'React, Next.js, Vue.js, TypeScript',
      color: 'text-paint-pink',
      bgColor: 'bg-paint-pink/20'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Animaciones',
      description: 'GSAP, Framer Motion, CSS3, WebGL',
      color: 'text-paint-blue',
      bgColor: 'bg-paint-blue/20'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Diseño',
      description: 'UI/UX, Figma, Adobe Suite, Sketch',
      color: 'text-paint-green',
      bgColor: 'bg-paint-green/20'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend',
      description: 'Node.js, Python, MongoDB, PostgreSQL',
      color: 'text-paint-purple',
      bgColor: 'bg-paint-purple/20'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile',
      description: 'React Native, Flutter, PWA',
      color: 'text-paint-orange',
      bgColor: 'bg-paint-orange/20'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web3',
      description: 'Blockchain, Smart Contracts, DeFi',
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
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8 gold-text">
                Sobre Mí
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-paint-pink to-paint-blue mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                Soy un <span className="text-paint-pink font-semibold">desarrollador apasionado</span> por 
                crear experiencias digitales únicas que combinan funcionalidad excepcional con arte visual impactante.
              </p>
              <p>
                Mi enfoque se centra en el <span className="text-paint-blue font-semibold">diseño moderno</span>, 
                las animaciones fluidas y la experiencia de usuario excepcional que deja una impresión duradera.
              </p>
              <p>
                Especializado en <span className="text-paint-green font-semibold">tecnologías web modernas</span> 
                como React, Next.js, GSAP y más, para dar vida a ideas creativas y convertirlas en realidad digital.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-paint-pink/20 text-paint-pink rounded-full text-sm font-medium">
                5+ años experiencia
              </span>
              <span className="px-4 py-2 bg-paint-blue/20 text-paint-blue rounded-full text-sm font-medium">
                50+ proyectos completados
              </span>
              <span className="px-4 py-2 bg-paint-green/20 text-paint-green rounded-full text-sm font-medium">
                Disponible para freelance
              </span>
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

        {/* Skills Grid */}
        <div ref={skillsRef} className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold font-display text-center mb-12 gradient-text">
            Habilidades & Tecnologías
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