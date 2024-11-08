import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/blog.png';
import { Helmet } from 'react-helmet-async';

const BlogSection = () => {
  const [blogData, setBlogData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/blogs.json');
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredBlogs = blogData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const currentPosts = filteredBlogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Helmet>
        <title>Blog - TrackAlways</title>
        <meta name="description" content="Stay updated with the latest news, insights, and expert tips from TrackAlways. Our blog covers industry trends, product updates, and strategies to help you optimize your operations." />
      </Helmet>

      <div className="relative">
        <nav className="bg-gray-800 text-white p-4">
          <h1 className="text-xl">My Website</h1>
        </nav>

        {/* Banner Section */}
        <div className="w-full h-[350px] md:h-[300px] overflow-hidden relative">
          <img
            src={banner}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-fit"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h2 className="text-3xl mt-8 md:text-8xl">Blogs</h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-100 min-h-[550px] py-32">
        <div className="max-w-screen-full mx-auto px-4 sm:px-20">
          <div className="flex flex-col items-center mb-8 space-y-4 sm:flex-row sm:justify-between sm:items-start sm:space-y-0">
            <h1 className="text-3xl font-bold text-center sm:text-left">Recent blog posts</h1>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="block w-full max-w-md p-2 border border-gray-300 rounded mb-6 sm:mb-0"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-2xl bg-white overflow-hidden flex flex-col"
              >
                <div className="p-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="flex-grow p-4 flex flex-col justify-between">
                  <h2 className="text-black text-xl font-semibold">{post.title}</h2>
                  <p className="text-gray-600 mt-2 mb-2">{post.description}</p>

                  <div className="flex items-center mt-4">
                    <img
                      src="https://www.seekpng.com/png/detail/812-8125927_meg-circle-girl.png"
                      alt="Author"
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-black font-semibold">Olivia Rhye</p>
                      <p className="text-gray-500 text-sm">20 Jan 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-2 mt-24">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-[#439600] text-white' : 'bg-[#439600]/50'
                  }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className={`px-3 py-1 rounded ${currentPage < totalPages ? 'bg-[#439600] text-white' : 'bg-[#439600]/50 text-white cursor-not-allowed'
                }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
