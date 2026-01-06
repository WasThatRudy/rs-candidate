'use client';

import { create } from 'zustand';
import type { Theme } from '@/types';

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const applyTheme = (theme: Theme) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
  }
};

export const useThemeStore = create<ThemeStore>((set) => {
  // Initialize theme on store creation
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme-storage');
    const initialTheme: Theme = stored === 'light' ? 'light' : 'dark';
    applyTheme(initialTheme);
    return {
      theme: initialTheme,
      setTheme: (theme: Theme) => {
        set({ theme });
        localStorage.setItem('theme-storage', theme);
        applyTheme(theme);
      },
      toggleTheme: () => {
        set((state: ThemeStore) => {
          const newTheme = state.theme === 'dark' ? 'light' : 'dark';
          localStorage.setItem('theme-storage', newTheme);
          applyTheme(newTheme);
          return { theme: newTheme };
        });
      },
    };
  }
  
  return {
    theme: 'dark',
    setTheme: (theme: Theme) => {
      set({ theme });
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme-storage', theme);
        applyTheme(theme);
      }
    },
    toggleTheme: () => {
      set((state: ThemeStore) => {
        const newTheme = state.theme === 'dark' ? 'light' : 'dark';
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme-storage', newTheme);
          applyTheme(newTheme);
        }
        return { theme: newTheme };
      });
    },
  };
});

