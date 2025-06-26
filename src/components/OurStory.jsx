import React from "react";
import heroImage from "../assets/image.png";
import heroImage1 from "../assets/HeroImage.png";

const OurStory = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 to-white">
      {/* Decorative Circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-green-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-green-200 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-green-100 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 shadow-2xl gap-16 items-center">
          {/* Text Content */}
          <div className="md:pl-10">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
              Our Journey
            </span>

            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Founded in 2019, Shaibu 22 Enterprise began with a simple yet powerful mission: 
                to combat malaria using safe, organic methods. Our journey started in the heart 
                of Ejura Sekyedumase, where we discovered the untapped potential of local herbs 
                for creating effective mosquito repellents.
              </p>
              <p>
                What began as a small community initiative has grown into a movement that 
                empowers families across Ghana. We've combined traditional herbal wisdom 
                with modern scientific validation to create products that protect without 
                compromising health or the environment.
              </p>
              <p className="font-semibold italic border-b pb-5 border text-green-800">
                Today, we're proud to serve over 10,000 families while supporting sustainable 
                farming practices that benefit local communities.
              </p>
            </div>

          </div>

          {/* Image and Floating Stats */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative py-10">
              <img
                src={heroImage1}
                alt="Shaibu 22 Enterprise story"
                className="w-full h-auto object-cover transition duration-700 hover:scale-105 "
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900 opacity-30"></div>
            </div>

            {/* Bottom-left floating stat */}
            <div className="absolute -bottom-3 -left-6 bg-white rounded-xl shadow-xl p-6 w-40">
              <div className="text-3xl font-bold text-green-700">5+</div>
              <p className="text-sm text-gray-600">Years of Impact</p>
            </div>

            {/* Top-right floating stat */}
            <div className="absolute -top-6 -right-6 bg-green-700 text-white rounded-xl shadow-xl p-6 w-40">
              <div className="text-3xl font-bold">100%</div>
              <p className="text-sm text-green-100">Natural Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
