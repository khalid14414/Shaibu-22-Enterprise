import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import Partner from "../components/Partner";
import ProductFeature from "../components/ProductFeature";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

function Home(){
    return (
        <div>
            <Hero />
            <WhyChooseUs />
            <ProductFeature />

            <CallToAction />
            <Testimonials />
            <Partner />
            
        </div>
    )
}

export default Home;