"use client";

import React, { useState, useEffect } from 'react';

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
  accent: string;
  cardHover: string;
}

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const themes = {
    dark: {
      bg: 'bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950',
      text: 'text-white',
      card: 'bg-slate-800/40 backdrop-blur-sm',
      border: 'border-purple-500/30',
      hover: 'hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/20',
      accent: 'bg-gradient-to-r from-purple-500 to-pink-500',
      cardHover: 'hover:bg-slate-800/60'
    },
    light: {
      bg: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50',
      text: 'text-gray-900',
      card: 'bg-white/80 backdrop-blur-sm',
      border: 'border-purple-300/50',
      hover: 'hover:border-purple-400/80 hover:shadow-xl hover:shadow-purple-300/30',
      accent: 'bg-gradient-to-r from-purple-600 to-pink-600',
      cardHover: 'hover:bg-white/95'
    },
  };

  const currentTheme: Theme = isDarkMode ? themes.dark : themes.light;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} transition-all duration-500 relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '700ms' }} />
      </div>

      <Navigation
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        currentTheme={currentTheme}
      />

      <HeroSection isDarkMode={isDarkMode} isVisible={isVisible} />
      <AboutSection isDarkMode={isDarkMode} isVisible={isVisible} currentTheme={currentTheme} />
      <ExperienceSection isDarkMode={isDarkMode} isVisible={isVisible} currentTheme={currentTheme} />
      <SkillsSection isDarkMode={isDarkMode} isVisible={isVisible} currentTheme={currentTheme} />
      <ProjectsSection isDarkMode={isDarkMode} isVisible={isVisible} currentTheme={currentTheme} />
      <AchievementsSection isDarkMode={isDarkMode}isVisible={isVisible} currentTheme={currentTheme} />
      <ContactSection
        isDarkMode={isDarkMode}
        isVisible={isVisible}
        currentTheme={currentTheme}
        formData={formData}
        setFormData={setFormData}
        formStatus={formStatus}
        setFormStatus={setFormStatus}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      <Footer isDarkMode={isDarkMode} currentTheme={currentTheme} />

      {/* Enhanced Styled JSX for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-slideDown { animation: slideDown 0.8s ease-out; }
        .animate-slideUp { animation: slideUp 0.8s ease-out 0.2s both; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out 0.4s both; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        .animate-gradient { 
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Portfolio;