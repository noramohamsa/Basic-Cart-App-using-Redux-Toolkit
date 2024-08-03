// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbarpro from './componants/Navbarpro';
import Products from './componants/Products';
import Cart from './componants/Cart';

function App() {
  return (
    <div className="App">
      <Navbarpro />
      <Routes >
        <Route path='/' element={<Products />} />
        <Route path='cart' element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
