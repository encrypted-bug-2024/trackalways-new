import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics gtag script loading
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-6905QHTZQG`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-6905QHTZQG');
    };

    // Track page view
    if (window.gtag) {
      gtag('config', 'G-6905QHTZQG', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-6905QHTZQG"></script>
    </Helmet>
  );
};

export default GoogleAnalytics;
