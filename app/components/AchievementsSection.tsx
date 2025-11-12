"use client";

import { Award } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
}

interface AchievementsSectionProps {
  isDarkMode: boolean;
  currentTheme: Theme;
}

export default function AchievementsSection({ isDarkMode, currentTheme }: AchievementsSectionProps) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
          <Award className="mr-3 text-purple-400" size={36} />
          Achievements & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`${currentTheme.card} p-6 rounded-lg border ${currentTheme.border} hover:scale-105 transition-all duration-500 hover:shadow-xl`}>
            <h3 className="text-lg font-bold text-purple-400 mb-4">Achievements</h3>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {[
                'Team Coordinator for Academic Projects (2023–2024)',
               'Committee Member in College (2021–2024)',
                'Best Coordinator of College Events Management (2024)'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start hover:translate-x-2 transition-transform duration-300">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${currentTheme.card} p-6 rounded-lg border ${currentTheme.border} hover:scale-105 transition-all duration-500 hover:shadow-xl`}>
            <h3 className="text-lg font-bold text-purple-400 mb-4">Certifications</h3>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {[
               'Java Full Stack Developer – QSpiders, Wakad (Jul–Dec 2024)',
               'Tester Intern – Wyreflow Technologies (Oct–Nov 2024)'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start hover:translate-x-2 transition-transform duration-300">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
