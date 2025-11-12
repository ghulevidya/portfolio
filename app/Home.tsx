"use client";

import React, { useState, useEffect } from 'react';
import style from 'styled-jsx/style';

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
}

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

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

    return () => observer.disconnect();
  }, []);

  const themes = {
    dark: {
      bg: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      text: 'text-white',
      card: 'bg-slate-800/50',
      border: 'border-purple-500/20',
      hover: 'hover:border-purple-500/40',
    },
    light: {
      bg: 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50',
      text: 'text-gray-900',
      card: 'bg-white/80',
      border: 'border-purple-300/40',
      hover: 'hover:border-purple-400/60',
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
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text} transition-all duration-500`}>
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

      <AchievementsSection isDarkMode={isDarkMode} currentTheme={currentTheme} />
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

      {/* Styled JSX for global animations */}
      <style jsx>{`
        @keyframes float {
          0%, to { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float { animation: 3s ease-in-out infinite float; }
        .animate-slideDown { animation: .8s ease-out slideDown; }
        .animate-slideUp { animation: .8s ease-out .2s both slideUp; }
        .animate-fadeIn { animation: .5s ease-out .4s both fadeIn; }
      `}</style>
    </div>
  );
}

export default Portfolio;