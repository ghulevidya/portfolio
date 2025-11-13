"use client";

import { Mail, Linkedin, Send, MessageSquare, User, AtSign } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
  accent: string;
  cardHover: string;
}

interface ContactSectionProps {
  isDarkMode: boolean;
  isVisible: { [key: string]: boolean };
  currentTheme: Theme;
  formData: { name: string; email: string; message: string };
  setFormData: (data: { name: string; email: string; message: string }) => void;
  formStatus: string;
  setFormStatus: (status: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function ContactSection({ 
  isDarkMode, 
  isVisible, 
  currentTheme, 
  formData, 
  formStatus, 
  handleSubmit, 
  handleInputChange 
}: ContactSectionProps) {
  return (
    <section id="contact" className={`py-2 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white/40'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-400/30">
              <MessageSquare className="text-purple-400" size={24} />
              <span className="text-purple-400 font-semibold">Get In Touch</span>
            </div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
            isVisible.contact ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            Let&apos;s Connect
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I&apos;m always open to discussing new opportunities, projects, or collaborations. 
            Feel free to reach out!
          </p>
        </div>
        
        {/* Contact Form */}
        <div className={`${currentTheme.card} ${currentTheme.cardHover} p-8 md:p-10 rounded-2xl border ${currentTheme.border} mb-8 transition-all duration-700 group relative overflow-hidden ${
          isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Form Content */}
          <div className="space-y-6 relative z-10">
            {/* Name Field */}
            <div className="group/field">
              <label className={`flex items-center gap-2 mb-2 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <User size={18} className="text-purple-400" />
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-purple-400 focus:outline-none ${
                  isDarkMode 
                    ? 'bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-500' 
                    : 'bg-white border-purple-300 text-gray-900 placeholder:text-gray-400'
                }`}
                placeholder="Your full name"
              />
            </div>

            {/* Email Field */}
            <div className="group/field">
              <label className={`flex items-center gap-2 mb-2 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <AtSign size={18} className="text-purple-400" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-purple-400 focus:outline-none ${
                  isDarkMode 
                    ? 'bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-500' 
                    : 'bg-white border-purple-300 text-gray-900 placeholder:text-gray-400'
                }`}
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Field */}
            <div className="group/field">
              <label className={`flex items-center gap-2 mb-2 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <MessageSquare size={18} className="text-purple-400" />
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:ring-2 focus:ring-purple-400 focus:outline-none resize-none ${
                  isDarkMode 
                    ? 'bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-500' 
                    : 'bg-white border-purple-300 text-gray-900 placeholder:text-gray-400'
                }`}
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={formStatus === 'sending'}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group/button"
            >
              {formStatus === 'sending' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : formStatus === 'success' ? (
                <>
                  <span className="text-2xl">✓</span>
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <Send className="group-hover/button:translate-x-1 transition-transform" size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500 to-pink-500 opacity-10 rounded-tr-full group-hover:scale-150 transition-transform duration-500" />
        </div>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="mailto:ghulevidya0123@gmail.com"
            className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group ${
              isDarkMode 
                ? 'bg-slate-800/50 hover:bg-slate-700/50 border border-purple-500/30' 
                : 'bg-white border border-purple-300 hover:bg-purple-50'
            }`}
          >
            <Mail className="text-purple-400 group-hover:scale-110 transition-transform" size={24} />
            <div className="text-left">
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</div>
              <div className="text-purple-400">Direct Message</div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/vidya-ghule2002"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group ${
              isDarkMode 
                ? 'bg-slate-800/50 hover:bg-slate-700/50 border border-purple-500/30' 
                : 'bg-white border border-purple-300 hover:bg-purple-50'
            }`}
          >
            <Linkedin className="text-purple-400 group-hover:scale-110 transition-transform" size={24} />
            <div className="text-left">
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>LinkedIn</div>
              <div className="text-purple-400">Connect</div>
            </div>
          </a>
        </div>

        {/* Response Time Note */}
        <div className="mt-8 text-center">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            ⚡ Typically responds within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}