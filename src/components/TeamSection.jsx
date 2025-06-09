import heroImage from '../assets/image.png'

const teamMembers = [
  {
    name: "Shaibu Yahaya",
    role: "Founder & CEO",
    image: heroImage,
  },
  {
    name: "Akosua Mensah",
    role: "Product Manager",
    image: heroImage,
  },
  {
    name: "Kwame Boateng",
    role: "Marketing Lead",
    image: "/images/team3.jpg",
  },
  {
    name: "Esi Serwaa",
    role: "Sales Coordinator",
    image: "/images/team4.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="team">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Meet Our Team</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Dedicated professionals working passionately to promote wellness and fight malaria with natural products.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 transition-transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover object-center mx-auto  rounded-full mb-4 shadow-lg"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-green-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
