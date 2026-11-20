import { Link } from 'react-router-dom';
import { Dumbbell, Phone, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { gymConfig } from '../data/gymConfig';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative gold ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-md shadow-amber-500/20">
                <Dumbbell className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="text-2xl font-black tracking-wider text-slate-100 uppercase">
                SAH Muscle <span className="text-amber-400">Hub</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your destination for elite strength training, bodybuilding, and personal fitness transformation in Joudge Courd. Powered by disciplined training and a motivating environment.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={gymConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5">
                  <span>Home & Plans</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5">
                  <span>About Us & Trainer Pervesh</span>
                </Link>
              </li>
              <li>
                <Link to="/workouts" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5">
                  <span>Workout Programs & Guides</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5">
                  <span>Gym Interior & Workout Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5">
                  <span>Membership Enquiry & Location</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Verification */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Operating Hours</span>
            </h4>
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-200">
                <span className="font-medium">Everyday (All Week)</span>
                <span className="text-amber-400 font-bold">6:00 AM – 9:00 PM</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-800/80">
                * Timings subject to gym owner confirmation on festival days.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sanitized equipment & continuous ventilation</span>
            </div>
          </div>

          {/* Col 4: Gym Location & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Gym Address & Call</span>
            </h4>
            <div className="text-sm space-y-2 text-slate-400">
              <p className="text-slate-200 font-medium">{gymConfig.name}</p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{gymConfig.address}</span>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${gymConfig.phoneRaw}`} className="text-slate-200 hover:text-amber-400 transition font-semibold">
                  {gymConfig.phone}
                </a>
              </p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('SAH Muscle Hub Joudge Courd near TV Tower Ground')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium transition"
            >
              <span>View On Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <strong className="text-slate-400">SAH Muscle Hub</strong>. All rights reserved.
          </p>
          <p className="text-center md:text-right text-[11px] text-slate-500 max-w-xl">
            Disclaimer: Consult a physician before beginning any strenuous fitness program. Workout plans should be adapted to individual ability.
          </p>
        </div>
      </div>
    </footer>
  );
}
