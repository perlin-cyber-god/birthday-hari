import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

const Surprise = () => {
  const [celebrate, setCelebrate] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  return (
    <section className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
      {celebrate && (
        <Confetti 
          width={windowSize.width} 
          height={windowSize.height} 
          recycle={false}
          numberOfPieces={500}
        />
      )}
      
      <h2 style={{ marginBottom: '2rem' }}>One Last Surprise...</h2>
      
      {!celebrate ? (
        <motion.button 
          className="surprise-btn"
          onClick={() => setCelebrate(true)}
          whileTap={{ scale: 0.95 }}
        >
          Click Me Hari!
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h3 style={{ fontSize: '2rem', color: 'var(--accent)' }}>
            Have a Blast! 🎂
          </h3>
        </motion.div>
      )}
    </section>
  );
};

export default Surprise;