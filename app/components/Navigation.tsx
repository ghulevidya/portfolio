"use client";

import { Sun, Moon, Menu, X } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
}

interface NavigationProps {
  activeSection: string;
  isDarkMode: boolean;
  setIsDarkMode: (mode: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
  currentTheme: Theme;
}

export default function Navigation({ activeSection, isDarkMode, setIsDarkMode, mobileMenuOpen, setMobileMenuOpen, scrollToSection, currentTheme }: NavigationProps) {
  return (
    <nav className={`fixed top-0 w-full ${isDarkMode ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-md z-50 border-b ${currentTheme.border} transition-all duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Vidya Ghule
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:scale-110 ${
                  activeSection === section
                    ? 'text-purple-400 font-semibold'
                    : isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {section}
              </button>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-purple-500/20 transition-all duration-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-purple-500/20 transition-all"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-2 px-4 capitalize hover:bg-purple-500/20 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
