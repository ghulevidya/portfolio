"use client";

import { Mail, Linkedin, Send } from 'lucide-react';

interface Theme {
  bg: string;
  text: string;
  card: string;
  border: string;
  hover: string;
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

export default function ContactSection({ isDarkMode, isVisible, currentTheme, formData, setFormData, formStatus, setFormStatus, handleSubmit, handleInputChange }: ContactSectionProps) {
  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white/40'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-8 text-center transition-all duration-700 ${isVisible.contact ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>Let&apos;s Connect</h2>
        <p className={`text-xl text-center mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          I&apos;m always open to discussing new opportunities, projects, or collaborations.
        </p>
        
        <div className={`${currentTheme.card} p-8 rounded-lg border ${currentTheme.border} mb-8 transition-all duration-700 ${
          isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-purple-400 focus:outline-none ${
                  isDarkMode 
                    ? 'bg-slate-700/50 border-purple-500/30 text-white' 
                    : 'bg-white border-purple-300 text-gray-900'
                }`}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-purple-400 focus:outline-none ${
                  isDarkMode 
                    ? 'bg-slate-700/50 border-purple-500/30 text-white' 
                    : 'bg-white border-purple-300 text-gray-900'
                }`}
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-purple-400 focus:outline-none ${
                  isDarkMode 
                    ? 'bg-slate-700/50 border-purple-500/30 text-white' 
                    : 'bg-white border-purple-300 text-gray-900'
                }`}
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === 'sending' ? (
                'Sending...'
              ) : formStatus === 'success' ? (
                '✓ Message Sent!'
              ) : (
                <>
                  <Send className="mr-2" size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:ghulevidya0123@gmail.com"
            className="px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center hover:scale-105"
          >
            <Mail className="mr-2" size={20} />
            Email Me
          </a>
          <a
           href="https://linkedin.com/in/vidya-ghule2002"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center hover:scale-105 ${
              isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-purple-100 hover:bg-purple-200 text-purple-800'
            }`}
          >
            <Linkedin className="mr-2" size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
