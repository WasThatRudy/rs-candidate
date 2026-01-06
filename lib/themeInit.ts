'use client';

export function initTheme() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme-storage');
    const theme = stored === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  }
}

