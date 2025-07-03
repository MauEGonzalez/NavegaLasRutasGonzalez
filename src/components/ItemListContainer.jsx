import React from 'react';

function ItemListContainer({ greeting }) {
  return (
    <div className="container mx-auto p-8 text-center mt-10 bg-white shadow-lg rounded-lg max-w-2xl">
      <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">
        {greeting}
      </h2>
      <p className="text-lg text-gray-600">
        Aquí es donde en el futuro mostraremos nuestro increíble catálogo de productos.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200">
          <img src="https://placehold.co/150x100/A78BFA/FFFFFF?text=Producto+1" alt="Producto 1" className="w-full h-auto rounded-md mb-2" />
          <h3 className="font-semibold text-gray-800">Producto Ejemplo 1</h3>
          <p className="text-sm text-gray-500">$99.99</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200">
          <img src="https://placehold.co/150x100/A78BFA/FFFFFF?text=Producto+2" alt="Producto 2" className="w-full h-auto rounded-md mb-2" />
          <h3 className="font-semibold text-gray-800">Producto Ejemplo 2</h3>
          <p className="text-sm text-gray-500">$149.99</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-200">
          <img src="https://placehold.co/150x100/A78BFA/FFFFFF?text=Producto+3" alt="Producto 3" className="w-full h-auto rounded-md mb-2" />
          <h3 className="font-semibold text-gray-800">Producto Ejemplo 3</h3>
          <p className="text-sm text-gray-500">$79.99</p>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;