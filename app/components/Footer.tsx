"use client";

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
  return (
    <footer className={`py-8 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-slate-900' : 'bg-white/60'} border-t ${currentTheme.border}`}>
      <div className="max-w-6xl mx-auto text-center">
        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
          © 2025 Vidya Ghule. Built with Next.js and React.
        </p>
      </div>
    </footer>
  );
}
