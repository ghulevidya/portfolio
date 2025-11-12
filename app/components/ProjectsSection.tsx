"use client";

import { ExternalLink } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
}

interface ProjectsSectionProps {
  isDarkMode: boolean;
  isVisible: { [key: string]: boolean };
  currentTheme: Theme;
}

export default function ProjectsSection({ isDarkMode, isVisible, currentTheme }: ProjectsSectionProps) {
  const projects = [
    {
     title: 'Paras Infotech Website',
      link: 'https://www.parasinfotech.co.in/',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Framer Motion', 'Nodemailer'],
      description: [
        'Designed and developed a modern marketing website for Paras Infotech to showcase its software products',
        'Built the complete frontend architecture with modular and reusable React components.',
        'Implemented animations using Framer Motion and serverless form API',
        'Optimized page performance by 20% and ensured responsiveness using Tailwind CSS.',
        'Highlighted flagship products like JewellPlus Admin and MoneyLend with interactive visuals.'
      ],
    },
    {
      title: 'JewellPlus-Admin',
      tech: ['React.js', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'REST API'],
      description: [
        'Developed admin dashboard for jewelry business operations management',
        'Built reusable UI components with React.js and integrated APIs',
        'Integrated the Gemini Nano Banana API for real-time product synchronization and analytics visualization.',
        'Built reusable UI components using React.js and implemented filtering, sorting, and pagination for large datasets.',
        'Enhanced performance and usability by optimizing data rendering and API handling.',
        'Collaborated with backend and design teams to ensure consistent user experience and efficiency'
      ]
    },
    {
      title: 'Web Blogging Application',
      tech: ['JSP', 'CSS', 'HTML', 'Spring MVC', 'Java', 'Hibernate', 'MySQL'],
      description: [
        'Developed a blogging platform for users to create, manage, and engage with posts.',
        'Implemented secure sign-up and login for admins and users ensuring data privacy.',
        'Users can add, update, and delete posts, while admins manage all content.',
        'Users can browse, filter, search, and sort published blogs.'
      ]
    },
    {
      title: 'E-commerce Web Application',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JSP', 'Servlets', 'Java', 'JDBC', 'MySQL'],
      description: [
        'Developed an e-commerce app for CRUD operations on users and products.',
        'Implemented secure sign-in for sellers and buyers to protect user data.',
        'Enabled sellers to manage products (add, update, delete) for inventory control.',
        'Allowed buyers to browse products and add items to their cart for a smooth shopping experience.'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center transition-all duration-700 ${isVisible.projects ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${currentTheme.card} p-8 rounded-lg border ${currentTheme.border} ${currentTheme.hover} transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                isVisible.projects ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-purple-400">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 hover:scale-125 transition-all duration-300">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className={`px-2 py-1 rounded text-xs border transition-all duration-300 hover:scale-110 ${
                    isDarkMode 
                      ? 'bg-purple-500/10 text-purple-300 border-purple-500/30' 
                      : 'bg-purple-50 text-purple-700 border-purple-300'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {project.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start text-sm hover:translate-x-2 transition-transform duration-300">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
