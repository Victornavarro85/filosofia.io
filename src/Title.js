import React, { useState, useEffect } from 'react';
import DropdownMenu from './DropdownMenu';
import FAQ from './FAQ';
import './Title.css'; // Importing the CSS file
import NewsletterForm from './NewsletterForm';

const Title = () => {
  const filosofos = [
    'Albert Camus',
    'Schopenhauer',
    'Platón',
    'Nietzsche',
    'Simone de Beauvoir',
    'Byung-Chul Han',
  ];

  const [filosofoActual, setFilosofoActual] = useState(filosofos[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * filosofos.length);
      setFilosofoActual(filosofos[randomIndex]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [filosofos]);

  return (
    <div className="title-container">
      <h1 className="title-text">
        Habla con <br /> 
        <span className="highlight" key={filosofoActual}>{filosofoActual}</span>
        <br /> en WhatsApp en tiempo real
      </h1>
      <button
        className="whatsapp-button"
        onClick={() => window.open('https://wa.me/34623992632')}
      >
        Añádeme a WhatsApp
      </button>
      <p className="info-text">
        Solo añade este número a WhatsApp y podrás comenzar a hablar con estos filósofos. Hazles preguntas y obtén su punto de vista en tiempo real. Descubre nuevas perspectivas y profundiza en su pensamiento filosófico.
      </p>
      <FAQ />
      <footer className="app-footer">
      <NewsletterForm/>
        &copy; {new Date().getFullYear()} Filosofia.io
      </footer>
    </div>
  );
};

export default Title;
