import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductDetailPage from './pages/ProductDetailPage';
import Product from './pages/Product';
import Photo from './pages/Photo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/photo" element={<Photo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
