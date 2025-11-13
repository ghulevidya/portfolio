"use client";

import { Heart, Code2, Mail, Github, Linkedin, Phone } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
}

interface FooterProps {
  isDarkMode: boolean;
  currentTheme: Theme;
}

export default function Footer({ isDarkMode, currentTheme }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Mail, link: 'mailto:ghulevidya0123@gmail.com', label: 'Email', color: 'hover:text-red-400' },
    { icon: Github, link: 'https://github.com/ghulevidya', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, link: 'https://linkedin.com/in/vidya-ghule2002', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Phone, link: 'tel:9325619648', label: 'Phone', color: 'hover:text-green-400' }
  ];

  const quickLinks = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Experience', href: '#experience' },
    { text: 'Skills', href: '#skills' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', href: '#contact' }
  ];

  return (
    <footer className={`py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-900/95' : 'bg-white/90'} border-t ${currentTheme.border} backdrop-blur-sm`}>
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Code2 className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Vidya Ghule
              </span>
            </div>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Software Developer specializing in full-stack development with modern technologies.
            </p>
            <div className="flex items-center gap-2 justify-center md:justify-start text-sm">
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>and</span>
              <Code2 size={16} className="text-purple-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {quickLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`px-3 py-1 rounded-lg text-sm transition-all duration-300 hover:scale-105 ${
                    isDarkMode 
                      ? 'bg-purple-500/10 text-gray-300 hover:bg-purple-500/20 border border-purple-500/20' 
                      : 'bg-purple-50 text-gray-700 hover:bg-purple-100 border border-purple-200'
                  }`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Connect With Me</h3>
            <div className="flex gap-3 justify-center md:justify-end">
              {socialLinks.map(({ icon: Icon, link, label, color }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target={link.startsWith('http') ? '_blank' : undefined}
                  rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                    isDarkMode 
                      ? 'bg-slate-800/50 hover:bg-slate-800' 
                      : 'bg-purple-50 hover:bg-purple-100'
                  } border ${isDarkMode ? 'border-purple-500/30' : 'border-purple-200'} group`}
                  aria-label={label}
                >
                  <Icon 
                    size={20} 
                    className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ${color} transition-colors`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${currentTheme.border} mb-6`} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            © {currentYear} Vidya Ghule. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Built with
              <span className="font-semibold text-purple-400">Next.js</span>
              &
              <span className="font-semibold text-purple-400">React</span>
            </span>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full" />
        </div>
      </div>
    </footer>
  );
}