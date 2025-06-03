import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import ProductFeature from "../components/ProductFeature";
import WhyChooseUs from "../components/WhyChooseUs";

function Home(){
    return (
        <div>
            <Hero />
            <WhyChooseUs />
            <ProductFeature />

            <CallToAction />
            
        </div>
    )
}

export default Home;