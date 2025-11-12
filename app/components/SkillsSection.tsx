"use client";

import { Code } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
}

interface SkillsSectionProps {
  isDarkMode: boolean;
  isVisible: { [key: string]: boolean };
  currentTheme: Theme;
}

export default function SkillsSection({ isDarkMode, isVisible, currentTheme }: SkillsSectionProps) {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Next.js', 'TypeScript'],
    backend: ['Java', 'JSP', 'Servlet', 'SQL', 'JDBC', 'Node.js'],
    frameworks: ['Spring Boot', 'Spring MVC'],
    tools: ['Git', 'Eclipse', 'VS Code', 'Postman', 'Jira', 'Confluence'],
    database: ['MySQL'],
    analytics: ['Power BI'],
    testing: ['Manual Testing', 'SDLC', 'STLC', 'DLC']
  };

 return (
    <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white/40'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center flex items-center justify-center transition-all duration-700 ${isVisible.skills ? 'opacity-100 rotate-0' : 'opacity-0 rotate-12'}`}>
          <Code className="mr-3 text-purple-400" size={36} />
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], idx) => (
            <div
              key={category}
              className={`${currentTheme.card} p-6 rounded-lg border ${currentTheme.border} ${currentTheme.hover} transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-lg font-bold text-purple-400 mb-4 capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                      isDarkMode 
                        ? 'bg-purple-500/20 text-gray-300 border-purple-500/30' 
                        : 'bg-purple-100 text-purple-800 border-purple-300'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
