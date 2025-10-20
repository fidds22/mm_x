import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: element.offsetTop - 80,
        ease: 'power3.inOut'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'inicio', label: '[INICIO]', baseColor: 'text-paint-pink', hoverColor: 'hover:text-white' },
    { id: 'sobre-mi', label: '[EXPOSICIÓN]', baseColor: 'text-paint-teal', hoverColor: 'hover:text-white' },
    { id: 'proyectos', label: '[OBRAS]', baseColor: 'text-paint-lime', hoverColor: 'hover:text-white' },
    { id: 'contacto', label: '[INFORMACIÓN]', baseColor: 'text-paint-purple', hoverColor: 'hover:text-white' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div 
              className="text-3xl md:text-4xl font-light font-subtitle cursor-pointer"
              style={{ letterSpacing: '-0.22em' }}
              onClick={() => scrollToSection('inicio')}
            >
              <div className="intertwining-gold" data-text="MM">
                <span className="intertwining-gold-main">MM</span>
              </div>
            </div>
            
            {/* Hamburger Menu Button - Always Shows Menu Icon */}
            <button 
              className="text-white p-2 hover:text-paint-pink transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Hamburger Menu - All Screen Sizes */}
        <div className={`fixed top-0 left-0 w-full h-full bg-paint-deep-blue transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          {/* Close Button */}
          <div className="absolute top-6 right-6">
            <button 
              className="text-white p-2 hover:text-paint-pink transition-colors"
              onClick={toggleMenu}
              aria-label="Close navigation menu"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col items-center justify-center h-full space-y-12 text-5xl font-display">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${item.baseColor} ${item.hoverColor} transition-colors transform hover:scale-110 font-bold`}
                style={{ 
                  animationDelay: isMenuOpen ? `${index * 0.1}s` : '0s'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;