'use client';

import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-8 right-8 z-50 flex items-center justify-center p-3 rounded-full border transition-all duration-300 cursor-pointer hover:scale-110 shadow-lg bg-card-bg border-border"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={24} className="text-accent" />
      ) : (
        <Moon size={24} className="text-accent" />
      )}
    </button>
  );
}

