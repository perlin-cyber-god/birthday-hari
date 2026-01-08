import React from 'react';
import { motion } from 'framer-motion';

const PhotoGallery = () => {
  // Using placeholders for demonstration. 
  // Replace src with import paths (e.g., import img1 from '../assets/img1.jpg')
  const photos = [1, 2, 3, 4]; 

  return (
    <section className="container">
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Memories</h2>
      <div className="grid-layout">
        {photos.map((id, index) => (
          <motion.div
            key={id}
            className="photo-item"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Using a solid color placeholder if image fails or isn't provided */}
            <div style={{ width: '100%', height: '100%', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{opacity: 0.5}}>Photo {id}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;