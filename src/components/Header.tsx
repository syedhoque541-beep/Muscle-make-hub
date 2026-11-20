import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Dumbbell, Sparkles } from 'lucide-react';
import { gymConfig } from '../data/gymConfig';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Workouts', path: '/workouts' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact & Membership', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-amber-500/20 shadow-lg shadow-black/40 transition-all">
      {/* Top micro-bar for quick local info */}
      <div className="hidden lg:block bg-slate-900/80 border-b border-slate-800/80 text-xs py-1.5 px-6">
        <div className="container mx-auto flex justify-between items-center text-slate-300">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Daily: {gymConfig.openingHours.split('(')[0]}
            </span>
            <span className="text-slate-400">📍 {gymConfig.address}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`tel:${gymConfig.phoneRaw}`}
              className="hover:text-amber-400 flex items-center gap-1 transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              {gymConfig.phone}
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={gymConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-md shadow-amber-500/20 group-hover:scale-105 transition">
            <Dumbbell className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-wider text-slate-100 uppercase font-sans">
              SAH Muscle <span className="text-amber-400">Hub</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-amber-400/80 font-semibold -mt-1">
              Premium Fitness Club
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium tracking-wide transition relative ${
                  active
                    ? 'text-amber-400 bg-amber-400/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/80'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${gymConfig.phoneRaw}`}
            className="p-2.5 rounded-lg border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition"
            title="Call Gym"
          >
            <Phone className="w-4 h-4" />
          </a>
          <Link
            to="/contact?action=join"
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 px-5 py-2.5 rounded-full font-extrabold text-sm tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition"
          >
            <Sparkles className="w-4 h-4" />
            <span>Join Now</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl border border-slate-800 bg-slate-900 text-slate-200 hover:text-amber-400 hover:border-amber-500/40 transition"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 py-5 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition ${
                    active
                      ? 'bg-amber-400/10 text-amber-400 font-semibold border-l-4 border-amber-400'
                      : 'text-slate-200 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800/80 space-y-2">
            <Link
              to="/contact?action=join"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 py-3 rounded-xl font-bold tracking-wider uppercase text-center shadow-lg shadow-amber-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Join SAH Muscle Hub</span>
            </Link>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${gymConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 text-slate-200 py-2.5 rounded-xl text-sm font-medium hover:border-amber-400"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Us</span>
              </a>
              <a
                href={gymConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 py-2.5 rounded-xl text-sm font-medium"
              >
                <span>💬 WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
