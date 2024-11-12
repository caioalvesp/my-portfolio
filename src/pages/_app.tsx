// src/pages/_app.tsx
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* Content Wrapper */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <main style={{ flexGrow: 1 }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
