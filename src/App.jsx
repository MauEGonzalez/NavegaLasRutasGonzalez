import React from 'react';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer'; 

function App() {
  const greetingMessage = "¡Bienvenido a nuestra tienda online!";

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <NavBar />
      <ItemListContainer greeting={greetingMessage} />
    </div>
  );
}

export default App;