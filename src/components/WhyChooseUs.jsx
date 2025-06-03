import { ShieldCheck, Leaf, HandHeart,Sparkle, icons } from "lucide-react";


function WhyChooseUs() {

    const feautures = [
        {
          icons: <ShieldCheck className="w-10 h-10 text-green-00" />,
            title: "Safe & Organic",
            description: "Crafted from natural ingredients like lemongrass and cloves. Safe for both adults and children." 
        },
        {
          icons: <Leaf className="w-10 h-10 text-green-00" />,
            title: "Eco-Friendly",
            description: "No harmful chemicals. Supports a greener environment while protecting your health." 
        },
        {
          icons: <HandHeart className="w-10 h-10 text-green-00" />,
            title: "Community Focused",
            description: "Proudly made in Ghana with a goal to reduce malaria and support healthier communities." 
        },
        {
          icons: <Sparkle className="w-10 h-10 text-green-00" />,
            title: "Trusted Quality",
            description: "Carefully produced and packaged to deliver maximum comfort, protection, and satisfaction." 
        }
    ];




  return (
    <section className="bg-white py-16" id="why-choose-us" >
       <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-heading md:text-4xl font-bold text-green-800 mb-4">Why Choose Shaibu 22 Enterprise?</h2>
        <p className="text-gray-600 font-body max-w-2xl mx-auto mb-12"> We're committed to creating a healthier, safer, and more natural way to protect your loved ones</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 s sm:mx-10 md:mx-10">
            {feautures.map((feature, index) => (
                <div key={index} className="bg-green-50  p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
                    <div className="flex items-center justify-center mb-4">
                        {feature.icons}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-green-700 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 font-body">{feature.description}</p>
                </div>
            ))}
        </div>
       </div>
    </section>
  );
}


export default WhyChooseUs;