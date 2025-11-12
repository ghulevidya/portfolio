"use client";

import { GraduationCap } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
}

interface AboutSectionProps {
  isDarkMode: boolean;
  isVisible: { [key: string]: boolean };
  currentTheme: Theme;
}

export default function AboutSection({ isDarkMode, isVisible, currentTheme }: AboutSectionProps) {
  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white/40'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center flex items-center justify-center transition-all duration-700 ${isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <GraduationCap className="mr-3 text-purple-400" size={36} />
          Education
        </h2>
        <div className="space-y-6">
          {[
            { title: 'Bachelor of Engineering in Computer Engineering', institution: 'Savitribai Phule Pune University, Pune', period: '2021–2024', description: 'CGPA: 8.63' },
            { title: 'Diploma in Computer Engineering', institution: 'Government Polytechnic, Pune', period: '2018–2021', description: 'Percentage: 84.07%' },
            { title: 'Secondary School Certificate (SSC)', institution: 'Madhymic Vidyalay, Umari', period: '2018', description: 'Percentage: 92.40%' },

          ].map((edu, idx) => (
            <div
              key={idx}
              className={`${currentTheme.card} p-6 rounded-lg border ${currentTheme.border} ${currentTheme.hover} transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                isVisible.about ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${idx * 0.2}s` }}
            >
              <h3 className="text-xl font-bold text-purple-400 mb-2">{edu.title}</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{edu.institution}</p>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{edu.period} | {edu.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
