"use client";

import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
  accent: string;
  cardHover: string;
}

interface ExperienceSectionProps {
  isDarkMode: boolean;
  isVisible: { [key: string]: boolean };
  currentTheme: Theme;
}

export default function ExperienceSection({ isDarkMode, isVisible, currentTheme }: ExperienceSectionProps) {
  const achievements = [
    { icon: '🚀', text: '25% efficiency improvement in reporting' },
    { icon: '💡', text: 'Built scalable full-stack applications' },
    { icon: '🎨', text: 'Enhanced UI/UX across multiple projects' },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-400/30">
              <Briefcase className="text-purple-400" size={24} />
              <span className="text-purple-400 font-semibold">Professional Journey</span>
            </div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
            isVisible.experience ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            Work Experience
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Building innovative solutions and driving impactful results
          </p>
        </div>

        {/* Experience Card */}
        <div className={`${currentTheme.card} ${currentTheme.cardHover} p-8 md:p-10 rounded-2xl border ${currentTheme.border} ${currentTheme.hover} transition-all duration-700 group relative overflow-hidden ${
          isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className="mt-1 p-2 bg-purple-500/20 rounded-lg">
                    <Briefcase className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                      Junior Software Developer
                    </h3>
                    <p className={`text-xl mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Paras Infotech
                    </p>
                  </div>
                </div>
                
                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 ml-14">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      April 2024 – Present
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Full-time
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full w-fit">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Current Role</span>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="mb-6 p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="text-purple-400" size={20} />
                <h4 className="font-semibold text-purple-400">Key Achievements</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                      isDarkMode ? 'bg-slate-800/50' : 'bg-white/50'
                    }`}
                  >
                    <span className="text-2xl">{achievement.icon}</span>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className={`font-semibold mb-4 text-lg ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Core Responsibilities
              </h4>
              <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {[
                  'Built and maintained web applications using Next.js and TypeScript.',
                  'Integrated the Gemini Nano Banana API and custom REST APIs to enhance data flow and scalability.',
                  'Created Power BI dashboards to visualize sales and operational metrics, improving reporting efficiency by 25%.',
                  'Collaborated with UI/UX and QA teams to deliver optimized, user-friendly features for client projects.',
                  'Designed and documented full-stack applications from scratch, ensuring maintainable and reusable code.'
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start group/item hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="mt-1.5 mr-3 w-1.5 h-1.5 rounded-full bg-purple-400 group-hover/item:scale-150 transition-transform" />
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500 to-pink-500 opacity-10 rounded-tr-full group-hover:scale-150 transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
}