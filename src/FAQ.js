import React from 'react';
import FAQQuestion from './FAQQuestion';

const FAQ = () => {
    const faqs = [
        {
          question: '¿Cómo funciona?',
          answer: 'Nuestro servicio funciona de una manera muy sencilla. Solo tienes que añadir el número proporcionado a tu lista de contactos de WhatsApp. Luego, puedes comenzar a escribir preguntas directamente a ese número, como si estuvieras enviando un mensaje a un amigo. Nuestro sistema de inteligencia artificial responderá a tus preguntas con la perspectiva de diferentes filósofos. ¡Así de fácil!',
        },
        {
          question: '¿Cuánto cuesta?',
          answer: 'Nos complace ofrecerte las 5 primeras preguntas completamente gratis, para que puedas probar el servicio y ver si te gusta. Después de las primeras 5 preguntas, el servicio tiene un coste de 1.99€ al mes. Creemos que esto proporciona un gran valor, permitiéndote explorar profundos pensamientos filosóficos a un precio muy asequible.',
        },
      ];

  return (
    <div className="faq">
      {faqs.map((faq, index) => (
        <FAQQuestion
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default FAQ;
