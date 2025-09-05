// File: src/components/Card.jsx

import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-sm p-4 sm:p-6 ${className}`}>
    {children}
  </div>
);

export default Card;