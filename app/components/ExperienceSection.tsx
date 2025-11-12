"use client";

import { Briefcase } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
}

interface ExperienceSectionProps {
  isDarkMode: boolean;
  isVisible: { [key: string]: boolean };
  currentTheme: Theme;
}

export default function ExperienceSection({ isDarkMode, isVisible, currentTheme }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center flex items-center justify-center transition-all duration-700 ${isVisible.experience ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <Briefcase className="mr-3 text-purple-400" size={36} />
          Professional Experience
        </h2>
        <div className={`${currentTheme.card} p-8 rounded-lg border ${currentTheme.border} transition-all duration-700 hover:shadow-2xl ${
          isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Junior Software Developer</h3>
              <p className={`text-xl mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Paras Infotech</p>
            </div>
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>April 2024 – Present</span>
          </div>
          <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {[
              'Built and maintained web applications using Next.js and TypeScript.',
              'Integrated the Gemini Nano Banana API and custom REST APIs to enhance data flow and scalability.',
              'Created Power BI dashboards to visualize sales and operational metrics, improving reporting efficiency by 25%.',
              'Collaborated with UI/UX and QA teams to deliver optimized, user-friendly features for client projects.',
              'Designed and documented full-stack applications from scratch, ensuring maintainable and reusable code.'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start hover:translate-x-2 transition-transform duration-300">
                <span className="text-purple-400 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
