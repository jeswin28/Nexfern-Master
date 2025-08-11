import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';

const Team = () => {
  const [showFullTeam, setShowFullTeam] = useState(false);

  const teamMembers = [
    {
      name: 'Jeswin John Eernapati',
      role: 'CEO & Founder',
      image: '/Jeswin.JPG',
      bio: 'Driving innovation with clarity and conviction to build what truly matters',
      socials: { linkedin: 'https://www.linkedin.com/in/jeswin-john-eernapati-6053a022b/' },
    },
    {
      name: 'John Jim Evans Veernapati',
      role: 'Co-Founder & Growth Catalyst',
      image: '/johnjim.jpeg',
      bio: 'Fueling startup momentum through strategy, and scalable systems',
      socials: { linkedin: 'https://www.linkedin.com/in/johnjimevansv/' },
    },
    
    {
      name: 'Rishika Muppidi',
      role: 'Admin Operations Manager',
      image: '/Rishika.JPG',
      bio: 'Keeps all systems running smoothly with sharp ops skills',
      socials: { linkedin: 'https://www.linkedin.com/in/rishika-muppidi-aa14b9319/' },
    },
    {
      name: 'Vijay Roy',
      role: 'Marketing Head',
      image: '/Vijay.JPG',
      bio: 'Growth strategist with expertise in digital marketing',
      socials: { linkedin: '' },
    },
    {
      name: 'Beshitha Bavissetty',
      role: 'Online Consultant',
      image: '/beshitha.png',
      bio: 'Helps clients align solutions with business goals',
      socials: { linkedin: 'https://www.linkedin.com/in/beshita-bavisetty-182a4a33b/' },
    }, 
    {
      name: 'Benedict Kundam ',
      role: 'Graphic Designer ',
      image: '/Benedict.jpg',
      bio: 'Designs visuals that resonate and convert',
      socials: { linkedin: 'https://www.linkedin.com/in/kundam-benedict-642a08241/' },
    },
    {
      name: 'Charan Nayak',
      role: 'Cinematographer',
      image: '/charan.png',
      bio: 'Tells brand stories visually through the lens',
      socials: { linkedin: '' },
    },
    {
      name: 'Nitesh Messipogu',
      role: 'Social Media Manager',
      image: '/Nitesh.JPG',
      bio: 'Designs visuals that resonate and convert',
      socials: { linkedin: 'https://www.linkedin.com/in/nithesh-nikki-3b700a31a/' },
    },
  ];

  const visibleMembers = showFullTeam ? teamMembers : teamMembers.slice(0, 4);

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who's Building With You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're a remote-first team passionate about empowering new-age founders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-primary-200 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    style={{
                      userSelect: 'none',
                      MozUserSelect: 'none',
                      msUserSelect: 'none',
                      ['WebkitUserDrag' as any]: 'none'
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Only LinkedIn icon */}
                {member.socials.linkedin && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-full p-2 shadow-lg"
                    >
                      <Linkedin className="w-4 h-4 text-gray-600 hover:text-primary-500 cursor-pointer" />
                    </a>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-primary-500 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowFullTeam(!showFullTeam)}
            className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors duration-300"
          >
            {showFullTeam ? 'Show Less' : 'Show Full Team'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
