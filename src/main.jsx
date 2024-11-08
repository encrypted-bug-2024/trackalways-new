import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/">
    <HelmetProvider> {/* Wrap App with HelmetProvider */}
      <App />
      <Toaster />
    </HelmetProvider>
  </BrowserRouter>
);
