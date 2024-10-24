import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Career from './pages/Career.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import OpenLayout from './layout/OpenLayout.jsx';

function App() {
  return (
    <>
      <Routes>
        {/* Open Routes */}
        <Route path="/" element={<OpenLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/careers" element={<Career />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<PageNotFound link={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
