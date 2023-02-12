
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import CartContainer from './components/CartContainer';


function App() {
  return (
    <div>
      
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
            <Route path='/' element={<ItemListContainer greeting='Todos nuestros bichitos' />} />
              <Route path='/categoria/:categoryId' element={<ItemListContainer greeting='Bichitos filtrados' />} />
              <Route path='/detalle/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer />} />
              <Route path='checkout' element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>

    
    </div>
  );
}

export default App;
