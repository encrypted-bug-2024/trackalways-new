import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail.jsx';
import Contact from './pages/Contact';
import Career from './pages/Career.jsx';
import Blog from './pages/BlogSection';
import Media from './pages/Media.jsx';
import Industry from './pages/Industries.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import OpenLayout from './layout/OpenLayout.jsx';

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<OpenLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/media-coverage" element={<Media />} />
          <Route path="/industry" element={<Industry />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<PageNotFound link={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
