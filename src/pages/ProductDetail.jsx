import React, { useState, useEffect } from 'react';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('/products.json');
        if (!res.ok) throw new Error('Product not found');
        const data = await res.json();
        const foundProduct = data.find(product => product.id === parseInt(id));
        if (!foundProduct) throw new Error('Product not found');
        setProduct(foundProduct);
      } catch (err) {
        console.error(err);
        setError('Failed to load product details.');
      }
    };

    const fetchSimilarProducts = async () => {
      try {
        const res = await fetch('/products.json');
        if (!res.ok) throw new Error('Failed to load similar products');
        const data = await res.json();
        setSimilarProducts(data.slice(0, 4));
      } catch (err) {
        console.error(err);
        setError('Failed to load similar products.');
      }
    };

    fetchProduct();
    fetchSimilarProducts();
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="mt-40 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-col lg:flex-row items-start gap-6">
        {/* Thumbnails */}
        <div className="grid grid-cols-3 hidden lg:grid lg:grid-cols-1 gap-2 w-full lg:w-40 p-0">
          <img src={product.image} alt="Thumbnail 1" className="h-32 object-cover rounded-md border w-full max-w-[120px]" />
          <img src={product.image} alt="Thumbnail 2" className="h-32 object-cover rounded-md border w-full max-w-[120px]" />
          <img src={product.image} alt="Thumbnail 3" className="h-32 object-cover rounded-md border w-full max-w-[120px]" />
        </div>

        {/* Main Image */}
        <div className="flex flex-col items-center md:items-center">
          <div className="w-full lg:w-96 h-64 lg:-ml-8 lg:h-[400px]">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-md shadow" />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 w-full lg:w-[590px] lg:hidden p-0 mt-2">
          <img src={product.image} alt="Thumbnail 1" className="h-36 object-cover rounded-md border w-full" />
          <img src={product.image} alt="Thumbnail 2" className="h-36 object-cover rounded-md border w-full" />
          <img src={product.image} alt="Thumbnail 3" className="h-36 object-cover rounded-md border w-full" />
        </div>


        {/* Product Details */}
        <div className="w-full lg:w-2/3 p-0 mt-6 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-semibold">{product.name}</h1>

          {/* Price and Rating */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-2">
            <p className="text-black text-2xl md:text-3xl font-bold">${product.price}</p>
            <div className="flex items-center mt-2 md:mt-0">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-500" />
              ))}
              <span className="ml-2 text-gray-500">({product.reviews} reviews)</span>
            </div>
          </div>

          <hr className="my-4 border-gray-300" />

          {/* Description */}
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>

          {/* Description Points */}
          <ul className="mt-4 text-gray-700 space-y-2 list-disc list-inside">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>

          {/* Delivery Information */}
          <div className="flex flex-col mt-6 text-gray-500">
            <div className="flex items-center text-green-600">
              ✓ Free worldwide shipping on orders over $50
            </div>
            <div className="mt-2">Delivery in 3-7 Working Days & Return</div>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-green-600 text-white py-2 px-6 rounded-full mt-6 w-full md:w-auto">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Description Section */}
      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl text-gray-600 font-semibold">Description</h2>
        <p className="text-gray-700 mt-4">{product.description}</p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Poor customer support response times.</li>
          <li>Limited compatibility with certain devices.</li>
          <li>Occasional software bugs and glitches.</li>
          <li>Higher price point compared to similar products.</li>
          <li>Steeper learning curve for new users.</li>
        </ul>
      </div>

      {/* Similar Products */}
      <div className="mt-20 mb-14">
        <h2 className="text-3xl md:text-4xl mt-28 font-semibold mb-8">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarProducts.map(similarProduct => (
            <div
              key={similarProduct.id}
              className="border-2 border-black rounded-2xl shadow-md bg-[#727272] overflow-hidden flex flex-col"
            >
              <img
                src={similarProduct.image}
                alt={similarProduct.name}
                className="bg-white w-full h-96 md:h-96 lg:h-56 object-cover" // Increased height for mobile
              />
              <div className="flex-grow p-4 flex flex-col justify-between">
                <h2 className="text-white text-lg md:text-xl font-semibold">{similarProduct.name}</h2>
                <p className="text-white mt-2 mb-2">TrackAlways</p>
                <div className="border-t border-gray-300 my-2"></div>
                <Link to={`/product/${similarProduct.id}`} className="flex items-center justify-center text-white py-2 rounded-lg mt-2">
                  <span className="mr-2">See Now</span>
                  <FaArrowRight className="ml-1 w-6" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
