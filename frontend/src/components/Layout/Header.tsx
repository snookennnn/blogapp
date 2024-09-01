import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">My Blog</Link>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/admin" className="mx-2">Admin</Link>
      </div>
    </nav>
  </header>
);

export default Header;
