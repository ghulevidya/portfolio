"use client";

import Image from 'next/image';
import { Mail, Phone, Github, Linkedin, Sparkles, Code2 } from 'lucide-react';

interface HeroSectionProps {
  isDarkMode: boolean;
  isVisible: { [key: string]: boolean };
}

export default function HeroSection({ isDarkMode, isVisible }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image with enhanced styling */}
          <div className="relative w-40 h-40 mx-auto mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 rounded-full animate-spin-slow opacity-75 blur-md group-hover:blur-lg transition-all duration-500" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/VidyaPhoto2.jpg"
                alt="Vidya Ghule"
                width={160}
                height={160}
                className="rounded-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 bg-purple-500 rounded-full p-2 shadow-lg animate-bounce">
              <Sparkles size={20} className="text-white" />
            </div>
          </div>

          {/* Name with gradient animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-300">
            Vidya Ghule
          </h1>

          {/* Role badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              { icon: Code2, text: 'Software Developer' },
              { text: 'Java Full Stack' },
              { text: 'React' },
              { text: 'Spring Boot' },
              { text: 'Power BI' }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-lg ${
                  isDarkMode 
                    ? 'bg-purple-500/20 border-purple-400/30 text-gray-200' 
                    : 'bg-white/80 border-purple-300 text-gray-800'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {item.icon && <item.icon size={18} className="text-purple-400" />}
                <span className="text-sm md:text-base font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Passionate about building elegant solutions with modern technologies. 
            Specialized in full-stack development with a focus on creating seamless user experiences.
          </p>

          {/* Social Links with enhanced styling */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              { icon: Mail, link: 'mailto:ghulevidya0123@gmail.com', label: 'Email', color: 'from-red-400 to-pink-400' },
              { icon: Github, link: 'https://github.com/ghulevidya', label: 'GitHub', color: 'from-gray-400 to-gray-600' },
              { icon: Linkedin, link: 'https://linkedin.com/in/vidya-ghule2002', label: 'LinkedIn', color: 'from-blue-400 to-cyan-400' }
            ].map(({ icon: Icon, link, label, color }, idx) => (
              <a
                key={idx}
                href={link}
                target={link.startsWith('http') ? '_blank' : undefined}
                rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative"
                style={{ animationDelay: `${idx * 0.1}s` }}
                aria-label={label}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                <div className={`relative p-4 rounded-full transition-all duration-300 group-hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-slate-800/50 hover:bg-slate-700/50' 
                    : 'bg-white/80 hover:bg-white'
                } border ${isDarkMode ? 'border-purple-500/30' : 'border-purple-300'} shadow-lg`}>
                  <Icon size={24} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full font-semibold text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Mail size={20} />
            <span>Let&apos;s Connect</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .bg-300 {
          background-size: 300%;
        }
      `}</style>
    </section>
  );
}