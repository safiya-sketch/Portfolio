import React from 'react';

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800 text-white z-10">
      <div className="flex items-center">
        <span className="text-2xl font-bold">Portfolio Safiya Jazouli</span>
      </div>

      <div className="flex space-x-8">
        <a href="#moi" className="hover:text-gray-400">Moi</a>
        <a href="#projets" className="hover:text-gray-400">Mes projets</a>
        <a href="#competences" className="hover:text-gray-400">Compétences</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
        <a 
          href="/assets/CV professionnel Safiya JAZOULI.pdf" 
          className="hover:text-gray-400"
          download
        >
          Mon CV
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
