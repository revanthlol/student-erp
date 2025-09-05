// File: src/components/TabButton.jsx
import React from 'react';

const TabButton = ({ text, active, onClick }) => (
    <button 
        onClick={onClick} 
        className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-md transition-colors ${
            active 
            ? 'bg-purple-600 text-white' 
            : 'text-gray-600 hover:bg-gray-200'
        }`}
    >
        {text}
    </button>
);

export default TabButton;