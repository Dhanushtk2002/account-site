import React from 'react';

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`rounded-xl shadow bg-white p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {children}
    </div>
  );
};
