import React, { useState, useEffect } from 'react';

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
    <div>
      <h1 style={{ fontFamily: 'system-ui', fontSize: '36px', color: 'black', lineHeight: '1.8' }}>
        Habla con &nbsp;  
        <span style={{ background: 'white', padding: '5px 10px', borderRadius: '5px', lineHeight: '1' }}>{filosofoActual}</span>
        <br /> en WhatsApp en tiempo real
      </h1>
      <button
        className="whatsapp-button"
        onClick={() => window.open('https://wa.me/12053604731')}
      >
        Añádeme a WhatsApp
      </button>
    </div>
  );
};

export default Title;
