import React from 'react';
import Hero from './components/Hero';
import MessageBoard from './components/MessageBoard';
import PhotoGallery from './components/PhotoGallery';
import Surprise from './components/Surprise';
import Footer from './components/Footer';
import './styles/sections.css';

function App() {
  return (
    <div className="app-wrapper">
      <Hero />
      <MessageBoard />
      <PhotoGallery />
      <Surprise />
      <Footer />
    </div>
  );
}

export default App;