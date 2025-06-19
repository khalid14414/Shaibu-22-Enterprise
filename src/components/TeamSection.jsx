import heroImage from '../assets/image.png';
import managingdir from '../assets/mg.jpg'
import marketingdir from '../assets/gm.jpg'
import { FaTwitter, FaLinkedinIn, FaInstagram, FaLeaf } from 'react-icons/fa';

const teamMembers = [

  {
    name: "Shaibu Yahaya",
    role: "Managing Director",
    image: managingdir,
    bio: "Quality control specialist passionate about organic formulations",
    social: { twitter: "#", linkedin: "#", instagram: "#" }
  },
  {
    name: "Daniel Mansah Abotsi",
    role: "Marketing Manager",
    image: marketingdir,
    bio: "Digital marketing strategist focused on health education",
    social: { linkedin: "#", instagram: "#" }
  },
  {
    name: "Kojo Nanny Terra",
    role: "General Manager",
    image: managingdir,
    bio: "Customer relations expert with community outreach experience",
    social: { twitter: "#", instagram: "#" }
  },
];

const TeamSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-green-50" id="team">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-green-300"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-green-200"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-1 rounded-full mb-4">
            <FaLeaf className="mr-2" />
            <span className="text-sm font-medium">Our Dream Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Meet Our <span className="text-green-600">Passionate Team</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals working to promote wellness and fight malaria with natural solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image with overlay */}
              <div className="relative h-54 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-52 h-52 object-cover mx-auto rounded-full transition-transform duration-700 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-70"></div> */}
                
                {/* Social links */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="bg-white text-green-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 hover:text-white transition-colors">
                      <FaTwitter />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="bg-white text-green-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 hover:text-white transition-colors">
                      <FaLinkedinIn />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="bg-white text-green-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 hover:text-white transition-colors">
                      <FaInstagram />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-green-900 mb-1">{member.name}</h3>
                <div className="text-green-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm min-h-[60px] mb-4">{member.bio}</p>
                
                {/* Decorative element */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-1 bg-green-300 rounded-full"></div>
                </div>
              </div>
              
              {/* Accent bar */}
              <div className="h-2 bg-gradient-to-r from-green-600 to-green-400 w-full"></div>
            </div>
          ))}
        </div>
        
        {/* CTA section */}
        <div className="mt-20 bg-gradient-to-r from-green-700 to-green-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Join Our Mission</h3>
              <p className="text-green-100 max-w-xl">
                We're always looking for passionate individuals to help us create a malaria-free future with natural solutions.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <button className="bg-white text-green-800 hover:bg-green-50 font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:ring-4 focus:ring-green-300 focus:ring-opacity-50">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;