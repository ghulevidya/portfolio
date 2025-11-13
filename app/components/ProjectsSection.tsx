"use client";

import { ExternalLink, FolderOpen, Zap, Code2 } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
  accent: string;
  cardHover: string;
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
      color: 'from-blue-500 to-cyan-500',
      featured: true
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
      ],
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      title: 'Web Blogging Application',
      tech: ['JSP', 'CSS', 'HTML', 'Spring MVC', 'Java', 'Hibernate', 'MySQL'],
      description: [
        'Developed a blogging platform for users to create, manage, and engage with posts.',
        'Implemented secure sign-up and login for admins and users ensuring data privacy.',
        'Users can add, update, and delete posts, while admins manage all content.',
        'Users can browse, filter, search, and sort published blogs.'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'E-commerce Web Application',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JSP', 'Servlets', 'Java', 'JDBC', 'MySQL'],
      description: [
        'Developed an e-commerce app for CRUD operations on users and products.',
        'Implemented secure sign-in for sellers and buyers to protect user data.',
        'Enabled sellers to manage products (add, update, delete) for inventory control.',
        'Allowed buyers to browse products and add items to their cart for a smooth shopping experience.'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-400/30">
              <FolderOpen className="text-purple-400" size={24} />
              <span className="text-purple-400 font-semibold">Portfolio</span>
            </div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
            isVisible.projects ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Real-world applications showcasing technical expertise and problem-solving skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${currentTheme.card} ${currentTheme.cardHover} p-8 rounded-2xl border ${currentTheme.border} ${currentTheme.hover} transition-all duration-700 group relative overflow-hidden ${
                isVisible.projects ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full">
                  <Zap size={14} className="text-purple-400" />
                  <span className="text-xs font-semibold text-purple-400">Featured</span>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`mt-1 p-2 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-20`}>
                      <Code2 className="text-purple-400" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors mb-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 group/link"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink size={20} className="text-purple-400 group-hover/link:text-purple-300" />
                    </a>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
                        isDarkMode 
                          ? 'bg-purple-500/10 text-purple-300 border-purple-500/30' 
                          : 'bg-purple-50 text-purple-700 border-purple-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <ul className={`space-y-2.5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm group/item hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-purple-400 group-hover/item:scale-150 transition-transform" />
                      <span className="flex-1">{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-purple-500/20' : 'border-purple-200'} flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${project.featured ? 'bg-green-400 animate-pulse' : 'bg-purple-400'}`} />
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.featured ? 'In Production' : 'Completed'}
                    </span>
                  </div>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.tech.length} Technologies
                  </span>
                </div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.color} opacity-20 rounded-full group-hover:scale-150 transition-transform duration-500`} />
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 text-center">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            More projects available on request • Always working on something new
          </p>
        </div>
      </div>
    </section>
  );
}