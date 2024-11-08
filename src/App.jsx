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
import EnergyIndustry from './pages/EnergyIndustry.jsx';
import Passanger from './pages/Passanger.jsx';
import HealthCare from './pages/Healthcare.jsx';
import Agriculture from './pages/Agriculture.jsx';
import Construction from './pages/Construction.jsx';
import Trucking from './pages/Trucking.jsx';
import Security from './pages/Security.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import OpenLayout from './layout/OpenLayout.jsx';
// import GoogleAnalytics from './components/GoogleAnalytics'; 

function App() {
  return (
    <>
      {/* <GoogleAnalytics />  */}
      
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
          <Route path="/energy-industry" element={<EnergyIndustry />} />
          <Route path="/passanger-transport" element={<Passanger />} />
          <Route path="/health-care" element={<HealthCare/>} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/trucking" element={<Trucking />} />
          <Route path="/security" element={<Security />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<PageNotFound link={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
