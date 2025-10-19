import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Artístico | Desarrollador Creativo</title>
        <meta name="description" content="Portfolio moderno de desarrollador creativo con efectos visuales únicos y animaciones fluidas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="portfolio, desarrollador, diseñador, react, nextjs, gsap, creativo" />
        <meta name="author" content="Tu Nombre" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tuportfolio.com/" />
        <meta property="og:title" content="Portfolio Artístico | Desarrollador Creativo" />
        <meta property="og:description" content="Portfolio moderno con efectos visuales únicos" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tuportfolio.com/" />
        <meta property="twitter:title" content="Portfolio Artístico | Desarrollador Creativo" />
        <meta property="twitter:description" content="Portfolio moderno con efectos visuales únicos" />
        <meta property="twitter:image" content="/og-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <div className="relative">
        <Navigation />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}