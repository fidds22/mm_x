import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  MessageCircle,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const contactRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
      });

      // Contact items animation
      gsap.from('.contact-item', {
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 70%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Form animation
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 60%'
        },
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
      });

      // Social links animation
      gsap.from('.social-link', {
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 50%'
        },
        duration: 0.8,
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });

    }, contactRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      value: 'hola@portfolio.com',
      subtitle: 'Respondo en 24 horas',
      color: 'text-paint-pink',
      bgColor: 'bg-paint-pink/20',
      link: 'mailto:hola@portfolio.com'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Ubicación',
      value: 'Ciudad de México, MX',
      subtitle: 'Disponible remotamente',
      color: 'text-paint-blue',
      bgColor: 'bg-paint-blue/20',
      link: 'https://maps.google.com'
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Teléfono',
      value: '+52 123 456 7890',
      subtitle: 'WhatsApp disponible',
      color: 'text-paint-green',
      bgColor: 'bg-paint-green/20',
      link: 'tel:+521234567890'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Reunión',
      value: 'Agendar llamada',
      subtitle: 'Consulta gratuita 30 min',
      color: 'text-paint-purple',
      bgColor: 'bg-paint-purple/20',
      link: '#calendar'
    }
  ];

  const socialLinks = [
    {
      icon: <Twitter className="w-6 h-6" />,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: 'bg-[#1DA1F2] hover:bg-[#1a8cd8]'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'bg-[#0077B5] hover:bg-[#005582]'
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'bg-[#333] hover:bg-[#24292e]'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: 'Instagram',
      url: 'https://instagram.com',
      color: 'bg-gradient-to-r from-[#833AB4] to-[#E1306C] hover:opacity-80'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: 'WhatsApp',
      url: 'https://wa.me/521234567890',
      color: 'bg-[#25D366] hover:bg-[#128C7E]'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success animation
    gsap.to(formRef.current, {
      duration: 0.5,
      scale: 0.95,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1
    });
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // You would replace this with actual form submission logic
    alert('¡Mensaje enviado! Te contactaré pronto.');
  };

  return (
    <section 
      id="contacto" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-paint-green/5 via-dark-900 to-paint-purple/5"
      ref={contactRef}
    >
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8 gold-text"
          >
            Conectemos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-paint-purple to-paint-pink mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? ¡Hablemos y creemos algo increíble juntos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="contact-item glass-card p-6 hover:scale-105 transition-all duration-300 group block"
                >
                  <div className={`w-16 h-16 ${info.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className={info.color}>{info.icon}</span>
                  </div>
                  <h3 className={`text-xl font-semibold font-display mb-2 ${info.color}`}>
                    {info.title}
                  </h3>
                  <p className="text-white font-medium mb-1">
                    {info.value}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {info.subtitle}
                  </p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold font-display mb-6 gradient-text">
                Sígueme en redes
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link w-12 h-12 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110`}
                    title={social.name}
                  >
                    <span className="text-white">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center glass-card p-4 rounded-xl">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-400">Años experiencia</div>
              </div>
              <div className="text-center glass-card p-4 rounded-xl">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-400">Proyectos completados</div>
              </div>
              <div className="text-center glass-card p-4 rounded-xl">
                <div className="text-3xl font-bold gradient-text">24h</div>
                <div className="text-sm text-gray-400">Tiempo respuesta</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="glass-card p-8 rounded-2xl">
            <h3 className="text-3xl font-bold font-display mb-6 gradient-text">
              Envíame un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-paint-pink focus:ring-2 focus:ring-paint-pink/20 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-paint-blue focus:ring-2 focus:ring-paint-blue/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-paint-green focus:ring-2 focus:ring-paint-green/20 transition-all"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-paint-purple focus:ring-2 focus:ring-paint-purple/20 transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-paint-purple to-paint-pink px-8 py-4 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Paint Drip Transition */}
      <div className="paint-drip drip-purple bottom-0"></div>
    </section>
  );
};

export default Contact;