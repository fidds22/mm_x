import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import '../styles/globals.css';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Global GSAP configurations
    gsap.config({
      nullTargetWarn: false,
    });

    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh();
  }, []);

  return <Component {...pageProps} />;
}