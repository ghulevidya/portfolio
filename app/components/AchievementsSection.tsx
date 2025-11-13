"use client";

import { Award, Trophy, Medal, FileCheck } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
  accent: string;
  cardHover: string;
}

interface AchievementsSectionProps {
  isDarkMode: boolean;
  currentTheme: Theme;
  isVisible: { [key: string]: boolean };
}

export default function AchievementsSection({ isDarkMode, currentTheme, isVisible }: AchievementsSectionProps) {
  const achievements = [
    {
      title: 'Team Coordinator for Academic Projects',
      period: '2023–2024',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Committee Member in College',
      period: '2021–2024',
      icon: Medal,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Best Coordinator of College Events Management',
      period: '2024',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const certifications = [
    {
      title: 'Java Full Stack Developer',
      organization: 'QSpiders, Wakad',
      period: 'Jul–Dec 2024',
      icon: FileCheck,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tester Intern',
      organization: 'Wyreflow Technologies',
      period: 'Oct–Nov 2024',
      icon: FileCheck,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-400/30">
              <Award className="text-purple-400" size={24} />
              <span className="text-purple-400 font-semibold">Recognition</span>
            </div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
            isVisible.about ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            Achievements & Certifications
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Professional accomplishments and continuous learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements Card */}
          <div className={`${currentTheme.card} ${currentTheme.cardHover} p-8 rounded-2xl border ${currentTheme.border} ${currentTheme.hover} transition-all duration-500 group relative overflow-hidden`}>
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 bg-opacity-20">
                  <Trophy className="text-yellow-500" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-yellow-500">Achievements</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, idx) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl transition-all duration-300 hover:translate-x-2 ${
                        isDarkMode ? 'bg-slate-800/50 hover:bg-slate-800/70' : 'bg-white/50 hover:bg-white/70'
                      } border ${isDarkMode ? 'border-yellow-500/20' : 'border-yellow-300/30'} group/item`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 p-2 rounded-lg bg-gradient-to-br ${achievement.color} bg-opacity-20 group-hover/item:scale-110 transition-transform`}>
                          <Icon className="text-yellow-500" size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                            {achievement.title}
                          </h4>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {achievement.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-500 to-orange-500 opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500" />
          </div>

          {/* Certifications Card */}
          <div className={`${currentTheme.card} ${currentTheme.cardHover} p-8 rounded-2xl border ${currentTheme.border} ${currentTheme.hover} transition-all duration-500 group relative overflow-hidden`}>
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 bg-opacity-20">
                  <FileCheck className="text-green-500" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-green-500">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl transition-all duration-300 hover:translate-x-2 ${
                        isDarkMode ? 'bg-slate-800/50 hover:bg-slate-800/70' : 'bg-white/50 hover:bg-white/70'
                      } border ${isDarkMode ? 'border-green-500/20' : 'border-green-300/30'} group/item`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 p-2 rounded-lg bg-gradient-to-br ${cert.color} bg-opacity-20 group-hover/item:scale-110 transition-transform`}>
                          <Icon className="text-green-500" size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-semibold mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                            {cert.title}
                          </h4>
                          <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                            {cert.organization}
                          </p>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {cert.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-500 opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500" />
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4">
          <div className={`${currentTheme.card} p-6 rounded-xl border ${currentTheme.border} text-center hover:scale-105 transition-all duration-300`}>
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-3xl font-bold text-yellow-500 mb-1">{achievements.length}</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Achievements
            </div>
          </div>
          <div className={`${currentTheme.card} p-6 rounded-xl border ${currentTheme.border} text-center hover:scale-105 transition-all duration-300`}>
            <div className="text-4xl mb-2">📜</div>
            <div className="text-3xl font-bold text-green-500 mb-1">{certifications.length}</div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Certifications
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}