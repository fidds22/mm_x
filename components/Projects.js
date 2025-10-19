import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ExternalLink, Github, Play, Smartphone, Globe, Database } from 'lucide-react';

const Projects = () => {
  const projectsRef = useRef(null);
  const titleRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('todos');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
      });

      // Project cards animation
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 70%'
        },
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Filter buttons animation
      gsap.from('.filter-btn', {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%'
        },
        duration: 0.8,
        x: -30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
      });

    }, projectsRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Futurista',
      description: 'Plataforma de comercio electrónico con animaciones 3D, carrito inteligente y sistema de pagos integrado.',
      image: '/api/placeholder/400/250',
      category: 'web',
      tech: ['React', 'Next.js', 'Stripe', 'Three.js'],
      color: 'from-paint-pink to-paint-purple',
      icon: <Globe className="w-6 h-6" />,
      demo: '#',
      github: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Panel de control interactivo con visualizaciones de datos en tiempo real y gráficos animados.',
      image: '/api/placeholder/400/250',
      category: 'web',
      tech: ['Vue.js', 'D3.js', 'Socket.io', 'Node.js'],
      color: 'from-paint-blue to-paint-green',
      icon: <Database className="w-6 h-6" />,
      demo: '#',
      github: '#',
      featured: true
    },
    {
      id: 3,
      title: 'App Fitness Social',
      description: 'Aplicación móvil para fitness con seguimiento de rutinas, retos sociales y gamificación.',
      image: '/api/placeholder/400/250',
      category: 'mobile',
      tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
      color: 'from-paint-green to-paint-orange',
      icon: <Smartphone className="w-6 h-6" />,
      demo: '#',
      github: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Interactivo',
      description: 'Portfolio personal con efectos de paralaje, animaciones GSAP y diseño responsivo moderno.',
      image: '/api/placeholder/400/250',
      category: 'web',
      tech: ['Next.js', 'GSAP', 'Tailwind', 'Framer Motion'],
      color: 'from-paint-purple to-paint-pink',
      icon: <Globe className="w-6 h-6" />,
      demo: '#',
      github: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Crypto Tracker',
      description: 'Aplicación para tracking de criptomonedas con gráficos en tiempo real y alertas personalizadas.',
      image: '/api/placeholder/400/250',
      category: 'web',
      tech: ['React', 'Chart.js', 'WebSockets', 'CoinGecko API'],
      color: 'from-paint-orange to-paint-gold',
      icon: <Database className="w-6 h-6" />,
      demo: '#',
      github: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Food Delivery App',
      description: 'App de delivery con geolocalización, tracking en tiempo real y sistema de valoraciones.',
      image: '/api/placeholder/400/250',
      category: 'mobile',
      tech: ['Flutter', 'Google Maps', 'Firebase', 'Stripe'],
      color: 'from-paint-gold to-paint-blue',
      icon: <Smartphone className="w-6 h-6" />,
      demo: '#',
      github: '#',
      featured: false
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'featured', label: 'Destacados', count: projects.filter(p => p.featured).length }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === activeFilter);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    
    // Animate filter change
    gsap.to('.project-card', {
      duration: 0.3,
      opacity: 0,
      y: 20,
      stagger: 0.05,
      onComplete: () => {
        gsap.to('.project-card', {
          duration: 0.5,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power3.out'
        });
      }
    });
  };

  return (
    <section 
      id="proyectos" 
      className="min-h-screen relative bg-gradient-to-br from-paint-blue/5 via-dark-900 to-paint-green/5 py-20"
      ref={projectsRef}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8 gold-text"
          >
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-paint-green to-paint-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Una selección de mis trabajos más recientes, donde la creatividad se encuentra con la funcionalidad
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`filter-btn px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-paint-green to-paint-blue text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card card-hover bg-dark-800/50 rounded-2xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <div className="text-white text-xl font-bold font-display">
                    {project.icon}
                    <span className="ml-2">{project.title}</span>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.demo}
                    className="w-12 h-12 bg-paint-green rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    title="Ver Demo"
                  >
                    <Play className="w-5 h-5 text-white ml-1" />
                  </a>
                  <a
                    href={project.github}
                    className="w-12 h-12 bg-paint-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    title="Ver Código"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={project.demo}
                    className="w-12 h-12 bg-paint-purple rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    title="Sitio Web"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-paint-gold text-dark-900 px-3 py-1 rounded-full text-sm font-bold">
                    Destacado
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold font-display mb-3 text-white group-hover:text-paint-green transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-paint-blue text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.demo}
                    className="flex-1 bg-gradient-to-r from-paint-green to-paint-blue px-4 py-2 rounded-lg text-white font-medium text-center hover:scale-105 transition-transform"
                  >
                    Ver Demo
                  </a>
                  <a
                    href={project.github}
                    className="px-4 py-2 border border-paint-blue text-paint-blue rounded-lg hover:bg-paint-blue hover:text-white transition-colors"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            ¿Te gusta lo que ves? ¡Trabajemos juntos en tu próximo proyecto!
          </p>
          <button className="btn-primary font-display text-lg">
            Iniciar Proyecto
          </button>
        </div>
      </div>

      {/* Paint Drip Transition */}
      <div className="paint-drip drip-green bottom-0"></div>
    </section>
  );
};

export default Projects;