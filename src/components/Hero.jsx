import heroImage from '../assets/imfdinadfsn.jpg'
function Hero() {
    const link = "bg-green-500 py-4";

    return (
        <section className="bg-green-50 py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center" >
                <div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-green-800 leading-tight">
                        Organic Mosquito Repellents for a Healthier Life
                    </h1>
                    <p className="mt-4 font-body text-lg text-gray-700 max-w-md">
                        Protect your family with our eco-friendly, safe, and organic solutions made from lemongrass, cloves, scent leaves, and more.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <a href="http://">
                            <button className="bg-green-700 font-body text-white px-6 py-3 rounded-xl shadow hover:bg-green-800 transition duration-300">Shop Now</button>
                        </a>
                        <a href="http://">
                            <button className="px-6 py-3 bg-white font-body text-gray-700 border border-green-700 rounded-xl hover:bg-green-100 transition duration-300">Learn More</button>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img src={heroImage} alt="Bliss Organic Mosquito" className='w-full h-auto max-w-md rounded-lg shadow-lg'  
                    loading="lazy" />
                </div>
            </div>
        </section>
    );
}

export default Hero;