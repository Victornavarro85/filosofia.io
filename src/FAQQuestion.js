import React, { useState } from 'react';
import './FAQQuestion.css';

const FAQQuestion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`faq-question ${isOpen ? 'open' : ''}`}>
      <h2 onClick={toggleOpen} className="faq-question-title">
        {question}
      </h2>
      <div className="faq-question-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQQuestion;
