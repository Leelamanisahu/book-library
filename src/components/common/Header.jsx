import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Online Library System</div>
        <div className="flex space-x-10">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/browse-books" className="hover:text-gray-300">
            Browse Books
          </Link>
          <Link to="/add-books" className="hover:text-gray-300">
            Add Books
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
