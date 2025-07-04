import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Work = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Connecting Dreams',
      description:
        'A student-focused platform that bridges Indian students with global universities through a beautiful Flutter app.',
      image:
        'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Education', 'Branding', 'Android App'],
      link: '/case-study', // Use the exact route path (make sure your router uses /case-study)
    },
    // Add more projects here if needed
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Things We've Built
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real projects for real founders. Each one designed to validate ideas and capture market
            opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => navigate(project.link)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate(project.link);
                }
              }}
              className="cursor-pointer group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up focus:outline-none focus:ring-2 focus:ring-primary-500"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={`View case study for ${project.title}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-xs text-gray-500 bg-gray-100 px-3 py-2 rounded-lg">
                  📋 Click to view full case study
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
