import React, { useState, useEffect } from 'react';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [error, setError] = useState(null); // For handling errors

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/products/${id}.json`);
        if (!res.ok) {
          throw new Error('Product not found');
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load product details.'); // Update error state
      }
    };

    const fetchSimilarProducts = async () => {
      try {
        const res = await fetch('/products.json');
        if (!res.ok) {
          throw new Error('Failed to load similar products');
        }
        const data = await res.json();
        setSimilarProducts(data.slice(0, 4)); // Adjust based on your criteria
      } catch (err) {
        console.error(err);
        setError('Failed to load similar products.'); // Update error state
      }
    };

    fetchProduct();
    fetchSimilarProducts();
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>; // Display error if any
  if (!product) return <p>Loading...</p>; // Show loading state if product is not yet fetched

  return (
    <div className="px-10 md:px-20">
      {/* Product Header */}
      <div className="flex flex-col md:flex-row items-center mt-10">
        <div className="w-full md:w-1/2 p-4">
          <img src={product.image} alt={product.name} className="w-full rounded-md shadow-lg" />
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-gray-600 text-2xl mt-2">${product.price}</p>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
            <span className="ml-2 text-gray-500">({product.reviews} reviews)</span>
          </div>

          <p className="mt-4 text-gray-700">{product.shortDescription}</p>
          
          <div className="flex items-center mt-4">
            <span className="text-green-600 mr-2">✓ Free worldwide shipping on orders over $50</span>
            <span className="text-gray-500">|</span>
            <span className="ml-2 text-gray-600">Delivery in 3-7 days</span>
          </div>

          <button className="bg-green-600 text-white py-2 px-6 rounded-full mt-6">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="text-gray-700 mt-4">{product.description}</p>
      </div>

      {/* Similar Products */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Similar Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarProducts.map(similarProduct => (
            <div key={similarProduct.id} className="border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
              <img src={similarProduct.image} alt={similarProduct.name} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-4">{similarProduct.name}</h3>
              <p className="text-green-600 font-semibold mt-2">${similarProduct.price}</p>
              <Link to={`/product/${similarProduct.id}`} className="flex items-center mt-4 text-blue-500">
                <span>See Now</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
