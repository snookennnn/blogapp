import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
  </footer>
);

export default Footer;
