import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-700 to-green-800 text-white py-20 px-6 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Join Us in Fighting Malaria <span className="block text-green-300 mt-2">The Natural Way</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl mb-10 text-green-100">
            Support your health and community with our scientifically-backed organic mosquito repellents and therapeutic tea leaves.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            to="/shop"
            className="bg-white text-green-700 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
          >
            <span className="flex items-center justify-center gap-2">
              Shop Now 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
          
          <Link
            to="/contact"
            className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-green-700 transition-colors duration-300 focus:ring-4 focus:ring-white focus:ring-opacity-50"
          >
            <span className="flex items-center justify-center gap-2">
              Partner With Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;