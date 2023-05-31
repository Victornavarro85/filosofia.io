import React, { useState, useEffect } from 'react';
import Title from './Title';


const App = () => {
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
    <div className="App">
      <Title filosofo={filosofoActual} />

    </div>
  );
};

export default App;
