import React, { useState } from 'react';
import { FaShoppingCart, FaStar, FaLeaf } from 'react-icons/fa';

const ProductPage = () => {
  
  const products = [
    {
      id: 1,
      name: "Bliss Mosquito Repellent",
      description: "Natural protection against mosquitoes with 8-hour effectiveness. Safe for children.",
      price: "₵ 25.00",
      features: ["DEET-free", "Long-lasting", "Eco-friendly"],
      rating: 4.8,
      image: "/path/to/repellent.jpg"
    },
    {
      id: 2,
      name: "Bliss Therapeutic Tea Leaves",
      description: "Relaxing blend of lemongrass, ginger, and cloves for immune support and wellness.",
      price: "₵ 18.00",
      features: ["Caffeine-free", "Antioxidants", "Digestive aid",],
      rating: 4.7,
      image: "/path/to/tea.jpg"
    },
    {
      id: 3,
      name: "Repellent + Tea Bundle",
      description: "Complete wellness package with mosquito protection and therapeutic tea.",
      price: "₵ 40.00",
      features: ["Best value", "Complementary products"],
      category: "bundle",
      rating: 4.9,
      image: "/path/to/bundle.jpg"
    },
    {
      id: 4,
      name: "Bliss Repellent Refill Pack",
      description: "Economical refill for your Bliss Repellent dispenser.",
      price: "₵ 18.00",
      features: ["Cost-effective", "Same protection", "Easy refill"],
      rating: 4.6,
      image: "/path/to/refill.jpg"
    },
    {
      id: 5,
      name: "Bliss Travel Kit",
      description: "Compact protection for on-the-go use. Perfect for travel and outdoor activities.",
      price: "₵ 30.00",
      features: ["Portable", "TSA-approved", "2-month supply"],
      rating: 4.7,
      image: "/path/to/travel-kit.jpg"
    },
    {
      id: 6,
      name: "Bliss Tea Sampler",
      description: "Experience all our therapeutic tea blends in one package.",
      price: "₵ 22.00",
      features: ["4 flavors", "Discover favorites", "Gift option"],
      rating: 4.8,
      image: "/path/to/sampler.jpg"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-green-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 -right-10 w-72 h-72 rounded-full bg-green-300"></div>
          <div className="absolute bottom-10 -left-10 w-48 h-48 rounded-full bg-green-400"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Organic Products</h1>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Natural solutions for protection, wellness, and a malaria-free community
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
            >
              {/* Product Image */}
              <div className="relative h-60 overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-500">
                  Product Image
                </div>
                <div className="absolute top-4 right-4 flex items-center bg-white px-3 py-1 rounded-full shadow">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-sm font-bold">{product.rating}</span>
                </div>
              </div>
              
              {/* Product Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-green-900 mb-1">{product.name}</h3>
                    <div className="text-green-700 font-semibold">{product.price}</div>
                  </div>
                  <div className="bg-green-100 p-2 rounded-full">
                    <FaLeaf className="text-green-700" />
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-4 rounded-lg shadow transition-colors duration-300 flex items-center justify-center">
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Promo Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-800 to-green-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Family Protection Bundle</h3>
              <p className="text-green-100 max-w-xl mb-4">
                Get our best-selling mosquito repellent and therapeutic tea at a special bundle price.
              </p>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white mr-4">₵ 40.00</span>
                <span className="text-green-200 line-through">₵ 50.00</span>
                <span className="ml-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  20% OFF
                </span>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <button className="bg-white text-green-800 hover:bg-green-50 font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-green-300 focus:ring-opacity-50">
                Shop the Bundle
              </button>
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-green-900">Quality Guaranteed</h4>
            </div>
            <p className="text-gray-600">
              All products are made with certified organic ingredients and rigorously tested for effectiveness.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-green-900">Dedicated Support</h4>
            </div>
            <p className="text-gray-600">
              Our team is here to answer your questions and help you choose the right products for your needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-green-900">Nationwide Delivery</h4>
            </div>
            <p className="text-gray-600">
              Fast, reliable shipping across Ghana. Free delivery on orders over ₵ 100.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;