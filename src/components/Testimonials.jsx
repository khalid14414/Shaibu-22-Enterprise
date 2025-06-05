const testimonials = [
  {
    name: "John Doe",
    message: "This service has changed my life! The products are effective and the customer service is outstanding. I've been using their repellents for 6 months and haven't had a single mosquito bite since.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Jane Smith",
    message: "I love the natural approach to health. The mosquito repellents are a game changer! As a mother of two, I feel safe using these products around my children without worrying about chemicals.",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Alice Johnson",
    message: "The therapeutic tea leaves have helped me relax and improve my well-being. Highly recommend! I've struggled with anxiety for years, and this natural solution has made a significant difference.",
    image: "https://via.placeholder.com/150"
  }
];

function Testimonials() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-green-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 rounded-full bg-green-100 opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-green-200 opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have discovered the power of natural protection
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="p-8">
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(4)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-yellow-400 fill-current" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Testimonial text */}
                <div className="relative mb-8">
                  {/* <svg 
                    className="absolute -top-6 -left-2 text-green-100 w-16 h-16" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      fill="currentColor" 
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                    />
                  </svg> */}
                  
                  <p className="text-gray-700 text-lg italic relative z-10">
                    {testimonial.message}
                  </p>
                </div>
                
                {/* Customer info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-4 border-green-100 shadow" 
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
              
              {/* Decorative footer */}
              <div className="bg-green-700 h-2 w-full"></div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-700">10K+</div>
            <div className="text-gray-600 mt-2">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-700">98%</div>
            <div className="text-gray-600 mt-2">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-700">15+</div>
            <div className="text-gray-600 mt-2">Natural Ingredients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-700">5</div>
            <div className="text-gray-600 mt-2">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;