import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
