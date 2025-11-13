"use client";

import { GraduationCap, Award, Calendar } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
  accent: string;
  cardHover: string;
}

interface AboutSectionProps {
  isDarkMode: boolean;
  isVisible: { [key: string]: boolean };
  currentTheme: Theme;
}

export default function AboutSection({ isDarkMode, isVisible, currentTheme }: AboutSectionProps) {
  const education = [
    {
      title: 'Bachelor of Engineering in Computer Engineering',
      institution: 'Savitribai Phule Pune University, Pune',
      period: '2021–2024',
      description: 'CGPA: 8.63',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Diploma in Computer Engineering',
      institution: 'Government Polytechnic, Pune',
      period: '2018–2021',
      description: 'Percentage: 84.07%',
      icon: '📚',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Secondary School Certificate (SSC)',
      institution: 'Madhymic Vidyalay, Umari',
      period: '2018',
      description: 'Percentage: 92.40%',
      icon: '✨',
      color: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <section id="about" className={`py-2 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/20' : 'bg-white/30'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-400/30">
              <GraduationCap className="text-purple-400" size={24} />
              <span className="text-purple-400 font-semibold">Background</span>
            </div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
            isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            Education Journey
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My academic foundation and continuous learning path
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`${currentTheme.card} ${currentTheme.cardHover} p-6 md:p-8 rounded-2xl border ${currentTheme.border} ${currentTheme.hover} transition-all duration-700 group relative overflow-hidden ${
                isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${idx * 0.2}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start relative z-10">
                {/* Icon */}
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {edu.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                      {edu.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{edu.period}</span>
                    </div>
                  </div>
                  <p className={`mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-purple-400" />
                    <p className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${edu.color} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500`} />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Committed to lifelong learning and professional development
          </p>
        </div>
      </div>
    </section>
  );
}