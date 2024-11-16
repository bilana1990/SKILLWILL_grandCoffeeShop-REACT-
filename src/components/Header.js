// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-500 p-6 text-white shadow-md">
      <h1 className="text-3xl text-center">Grand Coffee Shop</h1>
      <nav>
        <ul className="flex justify-center gap-8">
          <li><a href="/" className="hover:text-green-300">Home</a></li>
          <li><a href="/admin" className="hover:text-green-300">Admin Panel</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
