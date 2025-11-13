"use client";

import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

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

export default function Navigation({ 
  activeSection, 
  isDarkMode, 
  setIsDarkMode, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  scrollToSection, 
  currentTheme 
}: NavigationProps) {
  const navItems = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

  return (
    <nav className={`fixed top-0 w-full ${isDarkMode ? 'bg-slate-900/90' : 'bg-white/90'} backdrop-blur-lg z-50 border-b ${currentTheme.border} transition-all duration-300 shadow-lg`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
                <Sparkles className="text-white" size={20} />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vidya Ghule
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-4 py-2 capitalize transition-all duration-300 rounded-lg group ${
                  activeSection === section ? '' : isDarkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {/* Active indicator */}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    activeSection === section ? 'text-white font-semibold' : 'group-hover:text-purple-400'
                  }`}
                >
                  {section}
                </span>
                {activeSection === section && (
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md" />
                )}
                {/* Hover effect */}
                <span className="absolute inset-0 bg-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`ml-2 p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDarkMode 
                  ? 'bg-purple-500/20 hover:bg-purple-500/30' 
                  : 'bg-purple-100 hover:bg-purple-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-purple-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-purple-500/20 hover:bg-purple-500/30' 
                  : 'bg-purple-100 hover:bg-purple-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-purple-600" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-purple-500/20 transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="space-y-1">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 capitalize rounded-lg transition-all duration-300 ${
                    activeSection === section 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg' 
                      : isDarkMode
                        ? 'hover:bg-purple-500/10 text-gray-300' 
                        : 'hover:bg-purple-50 text-gray-700'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}