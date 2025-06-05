
import heroImage from '../assets/image.png'

const products = [
  {
    name: 'Bliss Mosquito Repellent',
    description: 'A 100% organic mosquito repellent made with natural ingredients to protect your family from mosquito-borne diseases without harmful chemicals. Scientifically proven to provide up to 8 hours of protection.',
    image: heroImage,
    features: ['Organic & Safe', 'Long-lasting Protection', 'Child-friendly'],
    cta: 'Shop Repellent'
  },
  {
    name: 'Bliss Therapeutic Tea',
    description: 'A refreshing blend of lemongrass, scent leaves, ginger, and cloves. Supports immune health, promotes relaxation, and aids digestion. Naturally caffeine-free and rich in antioxidants.',
    image: heroImage,
    features: ['Rich in Antioxidants', 'Caffeine-Free', 'Hand-picked in Ghana',],
    cta: 'Shop Tea'
  }
];

function ProductFeature() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-green-50" id="products">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-green-300"></div>
        <div className="absolute top-1/3 left-10 w-64 h-64 rounded-full bg-green-200"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium">Natural Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Our <span className="text-green-600">Organic</span> Products
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium health solutions that keep you protected and refreshed—naturally and sustainably.
          </p>
        </div>
        
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  {products.map((product, index) => (
    <div 
      key={index} 
      className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
    >
      {/* Product Image */}
      <div className="relative flex-1">
        <div className="aspect-w-16 aspect-h-10">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-60 h-60 object-center object-cover mx-auto"
          />
        </div>
        
        {/* Decorative badge */}
        <div className="absolute top-6 left-6 bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">Organic</span>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-300 rounded-full z-0"></div>
      </div>
      
      {/* Product Content */}
      <div className="p-6 md:p-8 flex flex-col">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-green-900 mb-3">{product.name}</h3>
          <p className="text-gray-600 mb-5">{product.description}</p>
          
          {/* Features as badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.features.map((feature, idx) => (
              <span 
                key={idx} 
                className="inline-flex items-center bg-green-100 text-green-800 text-xs md:text-sm font-medium px-3 py-1 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </span>
            ))}
          </div>
          
          {/* CTA Button */}
          <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-lg shadow transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 inline-flex items-center justify-center">
            {product.cta}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

export default ProductFeature;