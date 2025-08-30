import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from "./components/layout/navBar/NavBar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import Cart from './components/pages/cart/Cart';
import NotFound from './components/pages/notFound/NotFound';
import Checkout from './components/pages/checkout/Checkout';
import Footer from './components/layout/footer/Footer'; 
import AboutUs from "./components/pages/aboutUs/AboutUs"
import Contact from './components/pages/contact/Contact';
function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar /> 
      <main style={{ flex: 1 }}>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about-us' element={<AboutUs />} /> 
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </main>
      <Footer />
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}


export default App;