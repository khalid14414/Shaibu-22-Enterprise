import heroImage from '../assets/image.png'

function OurStory() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-green-300"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-green-200"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-green-100"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image with decorative elements */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Shaibu 22 Enterprise story" 
                className="w-full h-auto object-cover transform transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900 opacity-30"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 w-40">
              <div className="text-3xl font-bold text-green-700">5+</div>
              <div className="text-gray-600 text-sm">Years of Impact</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-green-700 text-white rounded-xl shadow-xl p-6 w-40">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-green-100 text-sm">Natural Products</div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:pl-10">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-1 rounded-full mb-6">
              <span className="text-sm font-medium">Our Journey</span>
            </div>
            
            {/* <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Empowering Communities Through <span className="text-green-600">Natural Solutions</span>
            </h2>
             */}
            <div className="space-y-5 text-lg text-gray-700">
              <p className="leading-relaxed">
                Founded in 2019, Shaibu 22 Enterprise began with a simple yet powerful mission: 
                to combat malaria using safe, organic methods. Our journey started in the heart 
                of Ejura Sekyedumase, where we discovered the untapped potential of local herbs 
                for creating effective mosquito repellents.
              </p>
              
              <p className="leading-relaxed">
                What began as a small community initiative has grown into a movement that 
                empowers families across Ghana. We've combined traditional herbal wisdom 
                with modern scientific validation to create products that protect without 
                compromising health or the environment.
              </p>
              
              <p className="leading-relaxed font-medium text-green-800">
                Today, we're proud to serve over 10,000 families while supporting sustainable 
                farming practices that benefit local communities.
              </p>
            </div>
            
            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-green-300 focus:ring-opacity-50">
                Our Full Story
              </button>
              <button className="bg-white text-green-700 border-2 border-green-700 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg shadow transition-all duration-300">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;