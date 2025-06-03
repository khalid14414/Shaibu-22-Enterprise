// src/components/CallToAction.jsx
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-green-700 text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-heading md:text-4xl font-bold mb-6">
          Join us in fighting malaria the natural way
        </h2>
        <p className="text-lg font-body mb-8">
          Support your health and your community with our organic mosquito repellents and tea leaves.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/product"
            className="bg-white text-green-700 px-6 font-body py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border border-white font-body px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
