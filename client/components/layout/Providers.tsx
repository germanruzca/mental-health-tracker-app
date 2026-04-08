'use client';

import { AuthProvider } from '@/context/AuthContext';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}