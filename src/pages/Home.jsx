import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
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
            
        </div>
    )
}

export default Home;