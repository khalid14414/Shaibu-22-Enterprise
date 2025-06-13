import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-green-800 to-green-900 text-white py-20 md:py-28 text-center overflow-hidden">
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            We're here to help. Reach out for product inquiries, partnerships, or just to say hello!
          </p>
        </div>
      </div>

      <section className="px-4 py-16 md:py-24 max-w-7xl mx-auto" id="contact">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">Connect With Us</h2>
              <p className="text-gray-700 text-lg mb-8">
                Whether you're curious about our products, interested in a partnership, or just want to talk - 
                we're ready to answer all your questions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mr-5">
                  <FaMapMarkerAlt className="text-green-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Location</h3>
                  <p className="text-gray-700">Ejura Sekyedumase Municipal, Ghana</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mr-5">
                  <FaPhone className="text-green-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-700">
                    <a href="tel:0554466361" className="hover:text-green-700 transition-colors">
                      055 446 6361
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mr-5">
                  <FaEnvelope className="text-green-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-700">
                    <a href="mailto:shaibuyahaya81@gmail.com" className="hover:text-green-700 transition-colors">
                      shaibuyahaya81@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mr-5">
                  <FaClock className="text-green-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-green-800 hover:bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="bg-green-800 hover:bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="bg-green-800 hover:bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="bg-green-800 hover:bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-green-900 mb-2">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">We'll get back to you within 24 hours</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    placeholder="Your First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+233 XX XXX XXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                <textarea
                  placeholder="How can we help you?"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-700 to-green-800 hover:from-green-800 hover:to-green-900 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Our Location</h2>
          
          <div className="relative rounded-2xl shadow-2xl overflow-hidden h-96">
            {/* Map */}
            <iframe
              title="Shaibu 22 Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112951.15081199132!2d-0.28632669576545594!3d5.545342813894912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf977b315ea169%3A0x2aaf4fbb30ab22b5!2sAblekuma%2C%20Accra!5e0!3m2!1sen!2sgh!4v1749690504642!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
            
            {/* Contact Card Overlay */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <FaMapMarkerAlt className="text-green-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Our Office</h3>
              </div>
              <p className="text-gray-700 mb-2">Ejura Sekyedumase Municipal, Ghana</p>
              <p className="text-sm text-gray-600">
                Visit us during business hours for product consultations and purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 mb-20 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission Against Malaria</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Partner with us to bring natural protection to communities across Africa
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-800 hover:bg-green-50 font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-green-300 focus:ring-opacity-50">
              Become a Distributor
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg shadow transition-all duration-300">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;