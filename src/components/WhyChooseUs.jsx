import React from 'react';
import { FaLeaf, FaShieldAlt, FaUsers, FaHandHoldingHeart, FaChartLine, FaSeedling, FaRecycle } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaLeaf className="text-4xl text-green-600" />,
      title: "100% Natural Ingredients",
      description: "Our products are made exclusively from organic herbs and plants, free from harmful chemicals and synthetic additives."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-600" />,
      title: "Malaria Prevention",
      description: "Our repellents reduce malaria risk by 95% according to independent clinical studies in endemic areas."
    },
    {
      icon: <FaRecycle className="text-4xl text-green-600" />,
      title: "Eco-Friendly Packaging",
      description: "Biodegradable and recyclable materials that minimize environmental impact and plastic waste."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-green-50" id="why-choose-us">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-green-300"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-green-200"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium">Our Advantages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Why Choose <span className="text-green-600">Shaibu 22 Enterprise</span>?
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to creating a healthier, safer, and more natural way to protect your loved ones
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="p-8 text-center">
                {/* Icon with animated background */}
                <div className="mb-6 w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto transition-colors duration-500 group-hover:bg-green-100">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-green-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              
              {/* Decorative footer */}
              <div className="h-1 bg-gradient-to-r from-green-400 to-green-600 w-full transition-all duration-500 group-hover:from-green-500 group-hover:to-green-700"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center -mb-24 opacity-10">
        <div className="w-72 h-72 rounded-full bg-green-300"></div>
      </div>
    </section>
  );
};

export default WhyChooseUs;