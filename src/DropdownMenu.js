import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-menu">
      <button onClick={toggleOpen} className="dropdown-button">
        {isOpen ? 'Cerrar menú' : 'Abrir menú'}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-item">Item 1</li>
          <li className="dropdown-item">Item 2</li>
          <li className="dropdown-item">Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
