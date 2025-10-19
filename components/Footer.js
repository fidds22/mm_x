import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-paint-purple/10 via-dark-900 to-paint-pink/10 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold font-display gold-text mb-2">
              PORTFOLIO
            </div>
            <p className="text-gray-400 text-sm">
              Desarrollador creativo especializado en experiencias digitales únicas
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#inicio" className="text-gray-400 hover:text-paint-pink transition-colors">
                Inicio
              </a>
              <a href="#sobre-mi" className="text-gray-400 hover:text-paint-blue transition-colors">
                Sobre Mí
              </a>
              <a href="#proyectos" className="text-gray-400 hover:text-paint-green transition-colors">
                Proyectos
              </a>
              <a href="#contacto" className="text-gray-400 hover:text-paint-purple transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Hecho con</span>
              <Heart className="w-4 h-4 text-paint-pink animate-pulse" />
              <Code className="w-4 h-4 text-paint-blue" />
              <span>y mucho</span>
              <Coffee className="w-4 h-4 text-paint-orange" />
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500">
            Diseñado y desarrollado con tecnologías modernas • React • Next.js • GSAP • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;