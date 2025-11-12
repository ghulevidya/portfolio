"use client";

import Image from 'next/image';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

interface HeroSectionProps {
  isDarkMode: boolean;
  isVisible: { [key: string]: boolean };
}

export default function HeroSection({ isDarkMode, isVisible }: HeroSectionProps) {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className={`mb-8 transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-38 h-38 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-6xl font-bold animate-float shadow-2xl overflow-hidden">
          <Image
            src="/VidyaPhoto2.jpg"
            alt="Vidya Ghule"
            width={140}
            height={140}
            className="rounded-full"
          />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-slideDown">
            Vidya Ghule
          </h1>
          <p className={`text-xl md:text-2xl mb-6 animate-slideUp ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Software Developer — Java Full Stack — React — Spring Boot — Power BI
          </p>
          <div className="flex justify-center space-x-6 mb-8 animate-fadeIn">
            {[
              { icon: Mail, link: 'mailto:ghulevidya0123@gmail.com' },
              { icon: Phone, link: 'tel:9325619648' },
              { icon: Github, link: 'https://github.com/ghulevidya' },
              { icon: Linkedin, link: 'https://linkedin.com/in/vidya-ghule2002' }
            ].map(({ icon: Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                target={link.startsWith('http') ? '_blank' : undefined}
                rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/40 hover:scale-125 transition-all duration-300"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
