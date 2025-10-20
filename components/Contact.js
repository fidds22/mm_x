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
      icon: <Calendar className="w-8 h-8" />,
      title: '[INAUGURACIÓN]',
      value: 'JUEVES, 24 DE OCTUBRE',
      subtitle: '7:00 P.M.',
      color: 'text-paint-pink',
      bgColor: 'bg-paint-pink/20',
      link: '#calendar'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: '[UBICACIÓN]',
      value: 'INSTITUTO DE SUBCULTURA',
      subtitle: 'DIRECCIÓN DEL EVENTO',
      color: 'text-paint-blue',
      bgColor: 'bg-paint-blue/20',
      link: 'https://maps.google.com'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: '[CONTACTO]',
      value: 'INFO@MANOELAMADERA.COM',
      subtitle: 'PARA MÁS INFORMACIÓN',
      color: 'text-paint-green',
      bgColor: 'bg-paint-green/20',
      link: 'mailto:info@manoelamadera.com'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: '[REDES SOCIALES]',
      value: '@MANOELAMADERA',
      subtitle: 'SÍGUENOS PARA ACTUALIZACIONES',
      color: 'text-paint-purple',
      bgColor: 'bg-paint-purple/20',
      link: '#social'
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
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-8"
          >
            <div className="intertwining-subtle" data-text="[INFORMACIÓN DE LA EXPOSICIÓN]">
              <span className="intertwining-subtle-main font-mono tracking-wider">[INFORMACIÓN DE LA EXPOSICIÓN]</span>
            </div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-paint-purple to-paint-pink mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-mono text-sm leading-loose tracking-wide">
            ÚNETE A NOSOTROS EN LA INAUGURACIÓN DE LA EXPOSICIÓN DE MANOELA MADERA<br/>
            Y DESCUBRE EL UNIVERSO DONDE EL COLOR, EL RITMO Y EL GESTO SE ENTRELAZAN.
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

            {/* Exhibition Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center stats-card">
                <div className="text-3xl font-bold gradient-text font-mono">24</div>
                <div className="text-sm text-gray-400 font-mono tracking-wider">[OCTUBRE]</div>
              </div>
              <div className="text-center stats-card">
                <div className="text-3xl font-bold gradient-text font-mono">7PM</div>
                <div className="text-sm text-gray-400 font-mono tracking-wider">[INAUGURACIÓN]</div>
              </div>
              <div className="text-center stats-card">
                <div className="text-3xl font-bold gradient-text font-mono">∞</div>
                <div className="text-sm text-gray-400 font-mono tracking-wider">[CONTEMPLACIÓN]</div>
              </div>
            </div>
          </div>

          {/* Exhibition Details */}
          <div ref={formRef} className="glass-card p-8 rounded-2xl">
            <h3 className="text-3xl font-bold font-display mb-6 gradient-text font-mono tracking-wider">
              [DETALLES DEL EVENTO]
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-paint-pink/10 to-paint-blue/10 p-6 rounded-xl border border-paint-pink/20">
                <h4 className="text-xl font-semibold text-paint-pink mb-3 font-mono tracking-wider">[MANOELA MADERA - EXPOSICIÓN INDIVIDUAL]</h4>
                <p className="text-gray-300 mb-4 font-mono text-sm leading-loose tracking-wide">
                  UNA EXPLORACIÓN DEL COLOR Y LA FORMA COMO LENGUAJES EN MOVIMIENTO.<br/>
                  PAISAJES INTERNOS Y ENERGÍAS COLECTIVAS QUE DIALOGAN ENTRE LO ANCESTRAL Y LO CONTEMPORÁNEO.
                </p>
                <div className="space-y-2 text-sm text-gray-400 font-mono">
                  <p><span className="font-semibold text-paint-blue">[FECHA]:</span> JUEVES, 24 DE OCTUBRE</p>
                  <p><span className="font-semibold text-paint-blue">[HORA]:</span> 7:00 P.M.</p>
                  <p><span className="font-semibold text-paint-blue">[LUGAR]:</span> INSTITUTO DE SUBCULTURA</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-paint-green/10 to-paint-purple/10 p-6 rounded-xl border border-paint-green/20">
                <h4 className="text-xl font-semibold text-paint-green mb-3 font-mono tracking-wider">[SOBRE LA OBRA]</h4>
                <p className="text-gray-300 mb-4 font-mono text-sm leading-loose tracking-wide">
                  CADA OBRA FUNCIONA COMO UN OBJETO DE ENERGÍA Y CONTEMPLACIÓN.<br/>
                  LOS MOTIVOS RECURRENTES —OJOS, ONDAS, CÍRCULOS Y PORTALES—<br/>
                  CONFORMAN UN VOCABULARIO SIMBÓLICO QUE SE TRANSFORMA Y EXPANDE.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-paint-pink/20 text-paint-pink rounded-full text-sm font-mono tracking-wider">[PINTURAS]</span>
                  <span className="px-3 py-1 bg-paint-blue/20 text-paint-blue rounded-full text-sm font-mono tracking-wider">[PANELES EN MADERA]</span>
                  <span className="px-3 py-1 bg-paint-green/20 text-paint-green rounded-full text-sm font-mono tracking-wider">[ABSTRACCIÓN]</span>
                </div>
              </div>

              <div className="text-center">
                <button className="btn-enhanced flex items-center justify-center space-x-2 mx-auto">
                  <Calendar className="w-5 h-5" />
                  <span className="font-mono tracking-wider">[AGREGAR AL CALENDARIO]</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paint Drip Transition */}
      <div className="paint-drip drip-purple bottom-0"></div>
    </section>
  );
};

export default Contact;