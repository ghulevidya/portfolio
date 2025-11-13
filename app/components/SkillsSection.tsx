"use client";

import { Code, Layers, Database, Wrench, BarChart, TestTube2 } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
  accent: string;
  cardHover: string;
}

interface SkillsSectionProps {
  isDarkMode: boolean;
  isVisible: { [key: string]: boolean };
  currentTheme: Theme;
}

export default function SkillsSection({ isDarkMode, isVisible, currentTheme }: SkillsSectionProps) {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Next.js', 'TypeScript']
    },
    {
      category: 'Backend Development',
      icon: Layers,
      color: 'from-green-500 to-emerald-500',
      skills: ['Java', 'JSP', 'Servlet', 'SQL', 'JDBC', 'Node.js']
    },
    {
      category: 'Frameworks',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      skills: ['Spring Boot', 'Spring MVC']
    },
    {
      category: 'Database',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: ['MySQL']
    },
    {
      category: 'Tools & Platform',
      icon: Wrench,
      color: 'from-indigo-500 to-purple-500',
      skills: ['Git', 'Eclipse', 'VS Code', 'Postman', 'Jira', 'Confluence']
    },
    {
      category: 'Analytics',
      icon: BarChart,
      color: 'from-yellow-500 to-orange-500',
      skills: ['Power BI']
    },
    {
      category: 'Testing',
      icon: TestTube2,
      color: 'from-pink-500 to-rose-500',
      skills: ['Manual Testing', 'SDLC', 'STLC', 'DLC']
    }
  ];

  return (
    <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white/40'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-400/30">
              <Code className="text-purple-400" size={24} />
              <span className="text-purple-400 font-semibold">Technical Expertise</span>
            </div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
            isVisible.skills ? 'opacity-100 rotate-0' : 'opacity-0 rotate-12'
          }`}>
            Skills & Technologies
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ category, icon: Icon, color, skills }, idx) => (
            <div
              key={category}
              className={`${currentTheme.card} ${currentTheme.cardHover} p-6 rounded-2xl border ${currentTheme.border} ${currentTheme.hover} transition-all duration-700 group relative overflow-hidden ${
                isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-purple-400" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                    {category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 cursor-default ${
                        isDarkMode 
                          ? 'bg-purple-500/20 text-gray-300 border-purple-500/30 hover:bg-purple-500/30 hover:border-purple-400/50' 
                          : 'bg-purple-50 text-purple-800 border-purple-300 hover:bg-purple-100 hover:border-purple-400'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-purple-500/20' : 'border-purple-200'}`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Total Skills
                    </span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 font-bold text-sm">
                      {skills.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br ${color} opacity-20 rounded-full group-hover:scale-150 transition-transform duration-500`} />
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Languages', count: 7, icon: '💻' },
            { label: 'Frameworks', count: 4, icon: '⚡' },
            { label: 'Tools', count: 6, icon: '🛠️' },
            { label: 'Specializations', count: 3, icon: '🎯' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`${currentTheme.card} p-4 rounded-xl border ${currentTheme.border} text-center hover:scale-105 transition-all duration-300`}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-400 mb-1">{stat.count}+</div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}