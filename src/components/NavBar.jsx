import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center rounded-b-lg">
      <div className="flex items-center">
        <img 
          src="https://placehold.co/40x40/4F46E5/FFFFFF?text=Logo" 
          alt="Logo de la Tienda" 
          className="h-10 w-10 rounded-full mr-3"
        />
        <h1 className="text-2xl font-bold text-indigo-700">Mi Tienda Online</h1>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">Inicio</a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">Productos</a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">Ofertas</a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">Contacto</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;