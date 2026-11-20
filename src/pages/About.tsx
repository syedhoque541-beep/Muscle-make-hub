import { Link } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  Target,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  CalendarCheck,
  MessageCircle,
  Phone,
  Flame,
  Dumbbell,
  Clock,
} from 'lucide-react';
import { gymConfig } from '../data/gymConfig';

export default function About() {
  const whyChooseUsPoints = [
    {
      title: 'Supportive Training Environment',
      desc: 'No intimidating attitudes. We cultivate an encouraging brotherhood and sisterhood of fitness enthusiasts where beginners and experienced athletes lift together.',
      icon: HeartHandshake,
    },
    {
      title: 'Quality Workout Equipment',
      desc: 'Precision dumbbells, Olympic barbells, smooth cable pulldowns, squat racks, and durable conditioning machines kept in peak working condition.',
      icon: Dumbbell,
    },
    {
      title: 'Guidance For Different Fitness Levels',
      desc: 'Whether it is your very first day touching a barbell or you are preparing for advanced powerlifting, our training adapts to your physical stage.',
      icon: Target,
    },
    {
      title: 'Strength & Conditioning Programs',
      desc: 'Proven progressive resistance routines structured around fundamental biomechanics, progressive overload, and hypertrophy principles.',
      icon: Flame,
    },
    {
      title: 'Clean & Welcoming Gym Atmosphere',
      desc: 'Hygienic workout floor, sanitized equipment, clear ventilation, and focused music that energizes your session without distraction.',
      icon: ShieldCheck,
    },
    {
      title: 'Focus On Consistency, Safety & Progress',
      desc: 'We emphasize injury-free lifting mechanics, steady weekly milestones, and building lifelong healthy physical habits.',
      icon: Award,
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* =========================================================================
          HERO BANNER
         ========================================================================= */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The SAH Muscle Hub Story</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-100 tracking-tight">
            FORGING REAL STRENGTH IN <span className="text-amber-400">JORJ KORT</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Dedicated to helping everyday people build unstoppable physical strength, unshakeable confidence, and lifelong consistency.
          </p>
        </div>
      </section>

      {/* =========================================================================
          OUR STORY & OUR MISSION
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Our Heritage & Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-100">
                Our Story
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong className="text-white">SAH Muscle Hub</strong> was founded with a singular, clear conviction: authentic fitness should be grounded in hard work, genuine guidance, and a welcoming community. Located in Joudge Courd near TV Tower Ground, our gym provides an iron sanctuary away from daily stress.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We recognized that too many modern gyms charge exorbitant fees while offering zero guidance to newcomers. SAH Muscle Hub changed that by pairing professional lifting equipment with personal attention from experienced coaches, starting at an accessible ₹800 per month.
            </p>

            {/* Mission Box */}
            <div className="p-6 rounded-2xl bg-slate-900 border-l-4 border-amber-400 space-y-2">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-400" />
                <span>Our Mission</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                To make quality fitness training genuinely accessible and help members work systematically toward their individual health, strength, and physique goals in a disciplined, supportive environment.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop"
                alt="SAH Muscle Hub training facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-lg font-bold text-white">SAH Muscle Hub Training Floor</p>
                <p className="text-xs text-amber-400">Joudge Courd, near TV Tower Ground</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MEET OUR TRAINER — TRAINER PERVESH
         ========================================================================= */}
      <section id="trainer" className="bg-slate-900/90 py-20 border-y border-slate-800 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Coaching Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-100">
              Meet Our Trainer — <span className="text-amber-400">Trainer Pervesh</span>
            </h2>
            <p className="text-sm text-slate-400">
              The driving force behind your transformation and proper lifting technique.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 max-w-5xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Photo */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-xl">
                  <img
                    src="/images/trainer-sarvesh.jpg"
                    alt="Trainer Pervesh"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-lg font-black text-white">Trainer Pervesh</p>
                    <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                      Head Coach & Fitness Mentor
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <h3 className="text-2xl font-black text-slate-100">Pervesh</h3>
                  <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                    Strength Coach & Bodybuilding Specialist
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Trainer Pervesh is committed to taking members beyond guesswork. With deep experience in resistance training biomechanics, hypertrophy, and strength development, he works closely with gym members to establish correct lifting form, injury-free habits, and progressive overload.
                </p>

                {/* Factual editable details */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-slate-200">Specialties:</strong>{' '}
                      <span className="text-slate-400">
                        Hypertrophy & muscle-building splits, barbell compound movements (squat/bench/deadlift), body recomposition, posture alignment.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-slate-200">Training Philosophy:</strong>{' '}
                      <span className="text-slate-400">
                        "Form precedes weight. Master the movement, protect your joints, and the numbers on the bar will consistently climb."
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-slate-200">Certifications & Experience:</strong>{' '}
                      <span className="text-slate-400">
                        Certified Fitness Professional (Factual verification available upon request at gym reception). Years of hands-on coaching across beginner to advanced lifters.
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-3">
                  <a
                    href={gymConfig.getWhatsAppUrl('Hello Trainer Pervesh! I want to meet you and discuss my fitness goals at SAH Muscle Hub.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Meet Your Trainer</span>
                  </a>

                  <Link
                    to="/contact?action=join"
                    className="bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-200 font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition"
                  >
                    Become A Member
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE US (6 Prompt Points)
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            The SAH Muscle Hub Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100">
            Why Choose <span className="text-amber-400">Us?</span>
          </h2>
          <p className="text-sm text-slate-400">
            Six pillars that set SAH Muscle Hub apart as Joudge Courd's top gym choice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 p-7 rounded-2xl space-y-4 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CONVERSION BANNER
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-100">
            Ready to train with <span className="text-amber-400">Trainer Pervesh</span> and the SAH Muscle Hub Team?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book a tour or walk in during our daily hours (6:00 AM – 9:00 PM). We are located in Joudge Courd, near TV Tower Ground.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact?action=join"
              className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:from-amber-400 hover:to-amber-300 transition"
            >
              Become A Member
            </Link>
            <a
              href={`tel:${gymConfig.phoneRaw}`}
              className="bg-slate-950 border border-slate-800 hover:border-amber-400 text-slate-200 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call {gymConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
