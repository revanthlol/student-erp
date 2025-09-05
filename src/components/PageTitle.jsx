// File: src/components/PageTitle.jsx
import React from 'react';

const PageTitle = ({ children }) => (
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">{children}</h1>
);

export default PageTitle;