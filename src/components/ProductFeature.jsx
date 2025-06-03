import images from '../assets/imfdinadfsn.jpg'
const product=[
    {
        name: 'Bliss Mosquito Repellent',
        description: 'A 100% organic mosquito repellent made with natural ingredients to protect your family from mosquito-borne diseases without chemicals.',
        image: {images},
        features: ['Organic & Safe', 'Long-lasting Protection', 'Non-toxic Formula']
    },
    {
        name: 'Bliss Tea Leaves',
        description: 'A refreshing blend of lemongrass, scent leaves, ginger, and cloves. Supports immune health and promotes relaxation.',
        image: '../assets/imfdinadfsn.jpg',
        features: ['Rich in Antioxidants', 'Caffeine-Free', 'Hand-picked in Ghana']
    }
]

function ProductFeature({ feature }) {
  return (
    <section className="bg-green-50 py-16" id="product-feature">
        <div className="max-w-7xl mx-auto px-6 text-center" >
            <h2 className="text-3xl font-heading md:text-4xl font-bold text-green-800 mb-4">Our Organic Products</h2>
            <p className="text-gray-600 font-body mb-12 max-w-2xl mx-auto">Explore our premium, organic health solutions that keep you protected and refreshed—naturally.</p>
            <div className="grid gap-12 md:grid-cols-2 ">
                {product.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition  duration-300 text-left">
                        <img src={item.image} alt={item.name} className="w-full h-60 object-cover rounded-xl mb-6" />
                        <h3 className="text-xl font-heading font-semibold text-green-700 mb-2">{item.name}</h3>
                        <p className="text-gray-600 font-body mb-4">{item.description}</p>
                        <ul className="list-disc font-body list-inside text-gray-600">
                            {item.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
    
  );
}

export default ProductFeature;