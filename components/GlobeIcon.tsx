import React from 'react';

const GlobeIcon = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`h-6 w-6 ${className}`}
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9l10.21 10.21C15.55 19.37 13.85 20 12 20zm6.31-3.1L8.1 6.69C9.45 5.63 11.15 5 12 5c4.41 0 8 3.59 8 8 0 .85-.63 2.55-1.69 3.9z" />
  </svg>
);

export default GlobeIcon;
