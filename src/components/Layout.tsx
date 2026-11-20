import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { gymConfig } from '../data/gymConfig';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function Layout() {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top automatically on route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // Handle scroll detection for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Header />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back to top button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="pointer-events-auto p-3 rounded-full bg-slate-900/90 text-amber-400 border border-slate-700 hover:border-amber-400 hover:bg-slate-800 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Floating Contact Widget */}
        <div className="pointer-events-auto group relative flex items-center">
          <div className="mr-3 hidden group-hover:flex items-center bg-slate-900 border border-slate-700 text-xs text-slate-200 px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap animate-in fade-in slide-in-from-right-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-ping" />
            Chat with SAH Muscle Hub
          </div>

          <a
            href={gymConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white rounded-full shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/70 hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Chat on WhatsApp"
            title="Chat directly on WhatsApp: +91 9239888245"
          >
            <MessageCircle className="w-7 h-7 fill-white stroke-none" />
            {/* Glowing pulse ring */}
            <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse pointer-events-none" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
