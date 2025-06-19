import { Link } from 'react-router-dom';
import heroImage from '../assets/HeroImage3.png'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-green-200"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-green-300"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-green-200"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
       
        <div className="text-center md:text-left">
          
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-1 rounded-full mb-6 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">100% Natural & Organic</span>
          </div>
          
     
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            <span className="block">Organic Mosquito Repellents</span>
            <span className="block text-green-700 mt-2">For a Healthier Life</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
            Protect your family naturally with our eco-friendly products made from 
            lemongrass, cloves, scent leaves, and scientifically proven ingredients.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/product"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Shop Now
            </Link>
            
            <Link
              to="/about"
              className="bg-white hover:bg-gray-50 text-green-700 border-2 border-green-700 font-semibold py-4 px-8 rounded-lg shadow hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Learn More
            </Link>
          </div>
          
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm">Child-safe formulas</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700" viewBox="0 0 20 20" fill="CurrentColor">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm">Eco-friendly packaging</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-square bg-gradient-to-br from-green-200 to-green-300 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500">
            {/* Replace with actual product image */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 border-2 border-dashed rounded-xl w-full h-full">
               
              <span className="text-gray-500"> <img 
                    src={heroImage} 
                    alt="Product" 
                    className="object-cover w-full h-full rounded-lg shadow-lg" /></span>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-200 rounded-full z-0"></div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-300 rounded-full z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;