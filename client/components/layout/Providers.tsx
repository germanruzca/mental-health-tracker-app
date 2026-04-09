'use client';

import { AuthProvider } from '@/context/AuthContext';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import { Toaster } from 'sonner';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Toaster position="top-center" richColors />
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}