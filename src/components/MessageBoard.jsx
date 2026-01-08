import React from 'react';
import { motion } from 'framer-motion';

const messages = [
  { id: 1, title: "Wisdom", text: "May your code always compile and your bugs be few." },
  { id: 2, title: "Adventure", text: "Wishing you a year full of new destinations and stories." },
  { id: 3, title: "Success", text: "Keep pushing boundaries and achieving greatness, Hari!" },
];

const MessageBoard = () => {
  return (
    <section className="container">
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Wishes for You</h2>
      <div className="grid-layout">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            className="card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{msg.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{msg.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MessageBoard;