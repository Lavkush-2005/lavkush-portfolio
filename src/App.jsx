import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@context/ThemeContext';
import { ScrollToTop } from '@components/layout/ScrollToTop';
import { Navbar } from '@components/layout/Navbar';
import { Footer } from '@components/layout/Footer';
import { PageLoader } from '@components/ui/Loader';

// Lazy-loaded so future pages (Projects detail, etc.) split cleanly
// without touching this file's import strategy.
const Home = lazy(() => import('@pages/Home'));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
