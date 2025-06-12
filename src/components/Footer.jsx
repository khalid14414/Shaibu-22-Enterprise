
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLeaf,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="">
            <div className="flex items-center mb-6">
              <FaLeaf className="text-green-400 text-3xl mr-2" />
              <span className="text-2xl font-bold tracking-wide">BLISS REPELLENT</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Shaibu 22 Enterprise is committed to reducing malaria through safe,
              organic mosquito repellents and herbal wellness products that protect
              families while supporting sustainable communities.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-green-800 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a 
                href="#" 
                className="bg-green-800 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white" />
              </a>
              <a 
                href="#" 
                className="bg-green-800 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white" />
              </a>
              <a 
                href="#" 
                className="bg-green-800 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-green-700 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Products", href: "/products" },
                { name: "Contact", href: "/contact" }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white flex items-center transition-all duration-300 group"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-green-700 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Ejura Sekyedumase Municipal, Ghana
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-green-400 mr-3 flex-shrink-0" />
                <a 
                  href="tel:0554466361" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  055 446 6361
                </a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:shaibuyahaya81@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  shaibuyahaya81@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-green-700 inline-block">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on new products and health tips.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-green-800 border border-green-700 text-white placeholder-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-green-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Shaibu 22 Enterprise. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-2 bg-gradient-to-r from-green-600 via-green-700 to-green-600"></div>
    </footer>
  );
};

export default Footer;