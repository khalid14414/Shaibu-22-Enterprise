import OurStory from "../components/OurStory";
import heroImage from '../assets/mg.jpg'
import TeamSection from "../components/TeamSection";

function About() {
  return (
    <div className="about">
       {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-green-800 to-green-900 text-white py-20 md:py-28 text-center overflow-hidden">
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            We're here to help. Reach out for product inquiries, partnerships, or just to say hello!
          </p>
        </div>
      </div>
      <OurStory />
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-green-50">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-10 w-72 h-72 rounded-full bg-green-300"></div>
          <div className="absolute bottom-0 right-10 w-64 h-64 rounded-full bg-green-200"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-green-100"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Founder Section */}
          <div className=" bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image with decorative elements */}
              <div className="relative min-h-[500px]">
                <img
                  src={heroImage}
                  alt="Founder of Shaibu 22 Enterprise"
                  className="w-full h-full object-cover"
                />

                {/* Floating quote */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 max-w-xs">
                  <div className="text-green-700 text-5xl absolute -top-4 left-4">"</div>
                  <p className="text-gray-700 italic">
                    Nature holds the key to our health and our future
                  </p>
                  <div className="w-12 h-1 bg-green-600 rounded-full mt-4"></div>
                </div>

                {/* Floating tag */}
                <div className="absolute top-8 right-8 bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg rotate-3">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold">Founder</span>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-1 rounded-full mb-4">
                    <span className="text-sm font-medium">Our Leadership</span>
                  </div>
                  <h2 className="text-4xl font-bold text-green-900 mb-4">
                    Meet Our Founder
                  </h2>
                  <h3 className="text-2xl font-semibold text-green-700 mb-2">Shaibu Yahaya</h3>
                  <div className="flex items-center text-gray-600 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Founder & CEO</span>
                  </div>
                </div>

                <div className="space-y-5 text-gray-700">
                  <p className="leading-relaxed">
                    Growing up in Ejura, a malaria-prone community in Ghana, I witnessed firsthand the devastating impact of mosquito-borne diseases. This personal experience ignited my passion for finding safer, more accessible health solutions.
                  </p>

                  <p className="leading-relaxed">
                    After years of research into traditional herbal medicine, I founded Shaibu 22 Enterprise with a simple mission: to harness nature's power to protect and heal. Our products combine ancestral wisdom with scientific validation.
                  </p>

                  <blockquote className="border-l-4 border-green-600 pl-4 py-2 text-green-800 italic font-medium">
                    "With every repellent we make and every tea leaf we harvest, we're working toward a malaria-free Africa—one household at a time."
                  </blockquote>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">10K+</div>
                    <div className="text-sm text-gray-600">Families Protected</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">15+</div>
                    <div className="text-sm text-gray-600">Communities Served</div>
                  </div>
                </div>

                {/* Social/CTA */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-green-300 focus:ring-opacity-50">
                    Read Full Story
                  </button>
                  <button className="bg-white text-green-700 border-2 border-green-700 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg shadow transition-all duration-300">
                    Contact Shaibu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TeamSection />
    </div>
  );
}


export default About;