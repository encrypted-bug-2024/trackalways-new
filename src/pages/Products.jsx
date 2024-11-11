import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import banner from '../assets/product-banner-reduced.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to top of the page
  };


  // Fetch products data
  useEffect(() => {
    // Ensure you're fetching products.json from the correct location
    fetch('/products.json')  // Make sure products.json is in the public folder
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Initialize with all products
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, []);

  // Filter products based on search term
  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
    setCurrentPage(1); // Reset to the first page on search change
  }, [searchTerm, products]);

  // Get current products for the page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Helmet>
        <title>Products - TrackAlways</title>
        <meta name="description" content="Explore our range of innovative products designed to help you track and manage your operations efficiently." />
      </Helmet>

      <div className="relative">
        <nav className="bg-gray-800 text-white p-4">
          <h1 className="text-xl">My Website</h1>
        </nav>

        {/* Banner Image */}
        <div className="w-full h-[40vh] md:h-[50vh] lg:h-[300px]">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover"
            loading="lazy"  // Lazy loading for banner image
          />

          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h2 className="text-3xl mt-8 md:text-8xl">Products</h2>
          </div>
        </div>
      </div>

      {/* Wrapper Div to add 80px gap on left and right */}
      <div className="px-8 md:px-20">

        {/* Heading and Search */}
        <div className="flex justify-between items-center mb-10 mt-24">
          <h1 className="text-left text-gray-700 text-5xl font-bold">Our products</h1>
        </div>

        {/* Search Input with Icon */}
        <div className="relative w-full mb-10">
          <input
            type="text"
            placeholder="Search An Item.."
            className="border p-4 w-full h-14 rounded-full pr-14"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 5a6 6 0 100 12 6 6 0 000-12z" />
            </svg>
          </div>
        </div>

       {/* Products */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 gap-6">
  {currentProducts.map(product => (
    <div key={product.id} className="border-2 border-black rounded-2xl shadow-md bg-[#439600] overflow-hidden flex flex-col items-center mb-4">
      <div className="w-full h-[70%] flex items-center justify-center bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain max-h-full"
          loading="lazy"  // Lazy loading for product images
        />
      </div>
      <div className="flex-grow p-4 flex flex-col justify-between">
        <h2 className="text-white text-xl font-semibold">{product.name}</h2>
        <p className="text-white mt-2 mb-2">TrackAlways</p>

        {/* Horizontal line */}
        <div className="border-t border-gray-300 my-2"></div>

        {/* See Now Button */}
        <Link to={`/product/${product.id}`} onClick={handleClick} className="flex items-center justify-center text-white py-2 rounded-lg mt-2">
          <span className="mr-2">See Now</span>
          <FaArrowRight className="ml-1 w-6" />
        </Link>
      </div>
    </div>
  ))}
</div>


        {/* Pagination */}
        <div className="mt-6 mb-16 flex justify-center">
          {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).slice(0, 3).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-2 px-4 py-2 ${currentPage === index + 1 ? 'bg-[#439600] text-white' : 'bg-[#439600]/50'} rounded-lg`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          {currentPage < Math.ceil(filteredProducts.length / productsPerPage) && (
            <button
              onClick={() => paginate(currentPage + 1)}
              className="mx-2 px-4 py-2 bg-[#439600] text-white rounded-lg"
            >
              Next
            </button>
          )}
        </div>

      </div>
    </>
  );
};

export default Product;
