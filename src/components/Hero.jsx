import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">Happy Birthday Hari 🎉</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>
          Here's to another year of brilliance and laughter.
        </p>
      </motion.div>
      
      {/* Decorative animated circle */}
      <motion.div
        style={{
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'var(--accent)',
          position: 'absolute',
          zIndex: -1,
          filter: 'blur(100px)',
          opacity: 0.2
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
    </section>
  );
};

export default Hero;