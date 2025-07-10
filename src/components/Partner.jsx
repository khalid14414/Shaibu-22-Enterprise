import mcf from "../assets/MCF_Logo.jpg";
import snv from "../assets/snv.png";
import orange from "../assets/images.jpg";
import undp from "../assets/UNDP.png";
import uncdf from "../assets/uncdf.jpg";

const Partner = () => {
  const partners = [
    { title: "Mastercard Foundation", image: mcf },
    { title: "SNV Netherlands Development Organisation", image: snv },
    { title: "United Nations Development Programme", image: undp },
    { title: "Orange", image: orange },
    { title: "UN Capital Development Fund", image: uncdf },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-1 rounded-full mb-4">
            <span className="text-sm font-medium">Strategic Partnerships</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Our Trusted <span className="text-green-600">Partners</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading organizations to create a malaria-free future
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-center h-40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src={partner.image} 
                  alt={partner.title}
                  className="max-h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  title={partner.title}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                  <span className="text-xs text-center font-medium text-green-800 px-2">
                    {partner.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Interested in partnering with us to expand our impact? Join our mission to combat malaria through sustainable, natural solutions.
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-green-300 focus:ring-opacity-50">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partner;