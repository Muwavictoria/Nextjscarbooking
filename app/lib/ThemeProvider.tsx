// app/lib/ThemeProvider.tsx
'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme, darkTheme } from './theme';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // Toggle theme mode
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Apply theme to localStorage and class on html element
  useEffect(() => {
    const storedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
    if (storedMode) {
      setMode(storedMode);
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemPrefersDark) {
        setMode('dark');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  return (
    <MuiThemeProvider theme={mode === 'light' ? theme : darkTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}