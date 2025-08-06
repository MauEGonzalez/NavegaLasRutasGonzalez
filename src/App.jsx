// src/App.jsx

// --- PASO 1: IMPORTACIONES ---
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from "./components/layout/navBar/NavBar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from './components/pages/cart/Cart';
import NotFound from './components/pages/notFound/NotFound';


// --- PASO 2: DEFINICIÓN DEL COMPONENTE ---
function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar /> 
      
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

// --- PASO 3: EXPORTACIÓN ---
export default App;