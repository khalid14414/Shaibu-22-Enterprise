import OurStory from "../components/OurStory";
import heroImage from '../assets/image.png'
import TeamSection from "../components/TeamSection";

function About() {
  return (
    <div className="about">
      <OurStory />
      <section className="bg-green-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">Mission, Vision & Values</h2>
          <p className="mt-4 text-gray-600">Guiding our path to a healthier, malaria-free future.</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-center">
          {/* Mission */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To provide safe, organic solutions to malaria through accessible and sustainable herbal products.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Our Vision</h3>
            <p className="text-gray-700">
              A malaria-free Africa empowered by nature and herbal innovation.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Our Values</h3>
            <p className="text-gray-700">
              Sustainability, Wellness, and Innovation guide every product and every decision.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src={heroImage}
              alt="Founder of Shaibu 22 Enterprise"
              className="rounded-xl w-full object-cover shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Meet the Founder</h2>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Shaibu Yahaya</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Growing up in a malaria-prone community, I experienced first-hand the need for safer, affordable health solutions.
              This inspired me to create Shaibu 22 Enterprise — focused on using nature to protect and heal.
              With every product, we work toward a malaria-free Africa.
            </p>
            <p className="italic text-sm text-gray-500">— Founder & CEO, Shaibu 22 Enterprise</p>
          </div>
        </div>
      </section>
      <TeamSection />
    </div>
  );
}


export default About;