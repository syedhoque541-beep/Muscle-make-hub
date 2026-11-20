import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Dumbbell,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Phone,
  MessageCircle,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Flame,
  Award,
  Users,
  Clock,
  Shield,
  CalendarCheck,
  Target,
} from 'lucide-react';
import { gymConfig } from '../data/gymConfig';
import { membershipPlans } from '../data/membershipPlans';
import { workoutsData } from '../data/workoutsData';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showTourModal, setShowTourModal] = useState(false);
  const [tourName, setTourName] = useState('');
  const [tourPhone, setTourPhone] = useState('');
  const [tourDate, setTourDate] = useState('');
  const [tourSubmitted, setTourSubmitted] = useState(false);

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourName || !tourPhone) return;
    setTourSubmitted(true);
    setTimeout(() => {
      // Optional auto-redirect to WhatsApp
      const msg = `Hello SAH Muscle Hub! I want to book a free gym tour / trial session for ${tourName} (Phone: ${tourPhone}${tourDate ? `, Preferred Date: ${tourDate}` : ''}).`;
      window.open(gymConfig.getWhatsAppUrl(msg), '_blank');
    }, 1200);
  };

  const faqs = [
    {
      q: 'What are the membership fees at SAH Muscle Hub?',
      a: 'We offer three transparent plans: Basic at ₹800/month (floor & equipment access), Premium at ₹1,000/month (with personalized routine & body assessment), and Elite at ₹1,500/month (with direct 1-on-1 personal coaching by Trainer Pervesh).',
    },
    {
      q: 'What are the gym operating hours?',
      a: 'SAH Muscle Hub is open from 6:00 AM to 9:00 PM daily. This allows working professionals, students, and morning lifters total scheduling flexibility.',
    },
    {
      q: 'Where is SAH Muscle Hub located?',
      a: 'We are conveniently situated at Joudge Courd, near TV Tower Ground. You can find us easily on Google Maps or call us for directions.',
    },
    {
      q: 'Can beginners join, and is trainer guidance provided?',
      a: 'Yes, absolutely! We welcome everyone from absolute first-timers to advanced bodybuilders. Trainer Pervesh and our team ensure correct lifting technique, safety on machines, and progression.',
    },
    {
      q: 'Can I take a gym tour or trial session before paying?',
      a: 'Yes! You can book a free gym tour and workout trial using the button on this page or by sending us a quick WhatsApp message at +91 9239888245.',
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* =========================================================================
          HERO SECTION WITH UNZOOMED LOOPING MUTED VIDEO
         ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-8 pb-16">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Joudge Courd's Premier Strength & Fitness Club</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-100 tracking-tight leading-[1.1]">
                BUILD YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">STRENGTH.</span><br />
                TRANSFORM YOURSELF.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Your journey to a stronger, healthier, more confident you starts at <strong className="text-white">SAH Muscle Hub</strong>. Professional equipment, elite coaching with Trainer Pervesh, and an unbeatable training atmosphere.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contact?action=join"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 px-8 py-4 rounded-xl font-black text-base tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>JOIN NOW</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setShowTourModal(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-amber-400 border border-amber-500/30 hover:border-amber-400 px-6 py-4 rounded-xl font-bold text-base transition"
                >
                  <CalendarCheck className="w-5 h-5 text-amber-400" />
                  <span>BOOK FREE GYM TOUR</span>
                </button>

                <Link
                  to="/workouts"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-slate-300 hover:text-white px-5 py-4 text-sm font-semibold transition"
                >
                  <span>Explore Workouts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust micro metrics */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80 text-left">
                <div>
                  <p className="text-2xl font-black text-amber-400">₹800</p>
                  <p className="text-xs text-slate-400">Starting/Month</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-100">6 AM – 9 PM</p>
                  <p className="text-xs text-slate-400">Daily Access</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-emerald-400">100%</p>
                  <p className="text-xs text-slate-400">Supportive Vibe</p>
                </div>
              </div>
            </div>

            {/* Right column: Static image placeholder */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg lg:max-w-none relative rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-amber-500/20 via-slate-800/40 to-slate-900 border border-amber-500/30 shadow-2xl shadow-black/80">
                <div className="relative bg-slate-900 rounded-xl overflow-hidden aspect-[16/10] flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop"
                    alt="Gym Interior"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <p className="text-white/50 font-bold tracking-widest uppercase">Elite Training Facility</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY HIGHLIGHTS BAR
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6 -mt-10">
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-6 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-100 text-sm">6 AM – 9 PM Daily</p>
              <p className="text-xs text-slate-400">Schedule Flexibility</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-100 text-sm">Expert Coaching</p>
              <p className="text-xs text-slate-400">Lead Trainer Pervesh</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-100 text-sm">Clean & Verified</p>
              <p className="text-xs text-slate-400">Top-Tier Safety Standards</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-100 text-sm">Motivating Culture</p>
              <p className="text-xs text-slate-400">Zero Intimidation</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PREMIUM FEATURES SECTION (6 Core Cards)
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-amber-400 font-bold uppercase tracking-wider text-xs">
            Engineered For Real Progress
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100">
            Why Lifters Choose <span className="text-amber-400">SAH Muscle Hub</span>
          </h2>
          <p className="text-sm text-slate-400">
            We built a gym free from corporate fluff: genuine heavy iron, functional stations, and guidance that delivers tangible physical transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Modern Gym Equipment',
              desc: 'High-grade Olympic barbells, smooth selectorized cable stacks, ergonomic dumbbells, and heavy-duty power racks.',
              icon: Dumbbell,
              badge: 'Pro Gear',
            },
            {
              title: 'Strength & Muscle-Building',
              desc: 'Structured hyper-focused routines targeting hypertrophy, progressive overload, and solid muscle mass gain.',
              icon: Flame,
              badge: 'Hypertrophy',
            },
            {
              title: 'Cardio & Endurance Workouts',
              desc: 'Dedicated commercial treadmills, rowers, and air bikes optimized for intense calorie burning and heart health.',
              icon: Target,
              badge: 'Fat Loss',
            },
            {
              title: 'Personalized Fitness Guidance',
              desc: 'Custom split design, lifting form correction, and milestone check-ins tailored to your body type and schedule.',
              icon: Award,
              badge: 'Coaching',
            },
            {
              title: 'Supportive Training Environment',
              desc: 'A positive, brotherhood-like gym community where everyone encourages your PRs and celebrates your progress.',
              icon: Users,
              badge: 'Community',
            },
            {
              title: 'Flexible Membership Options',
              desc: 'Transparent plans starting from just ₹800/month with zero hidden signup fees or lock-in traps.',
              icon: Shield,
              badge: 'Affordable',
            },
          ].map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 group-hover:bg-amber-500/20 border border-amber-500/20 flex items-center justify-center text-amber-400 transition">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-400 transition mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          MEMBERSHIP SUBSCRIPTION SECTION (Basic: ₹800, Premium: ₹1000, Elite: ₹1500)
         ========================================================================= */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-20 border-y border-slate-800 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Clear & Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-100">
              Choose Your <span className="text-amber-400">Membership Plan</span>
            </h2>
            <p className="text-sm text-slate-400">
              No hidden admission charges. Flexible monthly commitments for every fitness budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {membershipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-950 border-2 border-amber-400 shadow-2xl shadow-amber-500/15 md:-translate-y-3'
                    : 'bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 shadow-xl'
                }`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="text-center pb-6 border-b border-slate-800/80">
                    <h3 className="text-2xl font-black text-slate-100">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{plan.tagline}</p>
                    <div className="mt-4 flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-bold text-amber-400">₹</span>
                      <span className="text-5xl font-black text-slate-100">{plan.price}</span>
                      <span className="text-xs text-slate-400 font-medium ml-1">/ month</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="py-6 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-400/90">
                      What's Included:
                    </p>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <Link
                    to={`/contact?plan=${plan.id}`}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase text-center flex items-center justify-center gap-2 transition ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-100'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={gymConfig.getWhatsAppUrl(
                      `Hello SAH Muscle Hub! I would like to enquire and join the ${plan.name} (₹${plan.price}/month). Please guide me on next steps.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center text-[11px] text-slate-400 hover:text-emerald-400 py-1 transition"
                  >
                    💬 Enquire via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-slate-400 max-w-lg mx-auto">
            💡 Need a custom program or personal training package? Visit us at Joudge Courd or discuss your goals directly with Trainer Pervesh.
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED WORKOUT PROGRAMS PREVIEW
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-amber-400 font-bold uppercase tracking-wider text-xs">
              Explore Our Training Library
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-100">
              Featured Workout <span className="text-amber-400">Variations</span>
            </h2>
          </div>
          <Link
            to="/workouts"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition"
          >
            <span>View All 14 Categories & Exercises</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workoutsData.slice(0, 4).map((workout) => (
            <div
              key={workout.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-amber-500/50 transition flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-amber-500/30 uppercase">
                  {workout.category}
                </span>
                <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-slate-200 text-[10px] font-medium px-2 py-0.5 rounded border border-slate-700">
                  {workout.difficulty}
                </span>
              </div>

              <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-slate-100 group-hover:text-amber-400 transition">
                    {workout.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    🎯 <strong className="text-slate-300">{workout.targetMuscle}</strong>
                  </p>
                  <p className="text-xs text-amber-400/90 font-medium mt-1">
                    ⏱ {workout.setsReps}
                  </p>
                </div>

                <Link
                  to="/workouts"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-amber-400 font-semibold pt-2 border-t border-slate-800"
                >
                  <span>See Form & Instructions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          MEET TRAINER PERVESH HIGHLIGHT
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-amber-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl">
                <img
                    src="/assets/aistudio/InShot_20261026_161056745_0ed8b972.jpg"
                    alt="Trainer Moni"
                    className="w-full h-full object-cover object-top"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-xl font-black text-slate-100">Trainer Moni</p>
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                    Head Strength Coach
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-400/20">
                <Award className="w-3.5 h-3.5" />
                <span>Expert Guidance</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-100">
                Meet Lead Coach <span className="text-amber-400">Pervesh</span>
              </h2>

              <blockquote className="text-base sm:text-lg text-slate-300 italic border-l-2 border-amber-400 pl-4">
                "Real fitness is not about ego lifting. It's about showing up consistently, respecting the mechanics, and breaking personal barriers step by step."
              </blockquote>

              <p className="text-sm text-slate-400 leading-relaxed">
                At SAH Muscle Hub, Trainer Pervesh ensures each member gets personalized correction, safe progression, and structured motivation. Whether you are aiming for raw strength, muscle size, or fat loss, coaching is tailored to your abilities.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <p className="font-bold text-amber-400">Specialties</p>
                  <p className="text-slate-300">Hypertrophy & Form Correction</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <p className="font-bold text-amber-400">Philosophy</p>
                  <p className="text-slate-300">Progressive Overload</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                  <p className="font-bold text-amber-400">Approach</p>
                  <p className="text-slate-300">Safe, Systematic, Motivating</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/about#trainer"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition"
                >
                  Read Full Trainer Bio
                </Link>
                <a
                  href={gymConfig.getWhatsAppUrl('Hello Trainer Pervesh! I would like to schedule a personal training consultation at SAH Muscle Hub.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-950 border border-slate-800 hover:border-amber-400 text-slate-200 px-6 py-3 rounded-xl text-sm font-semibold transition flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Consult With Trainer</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          MEMBER TESTIMONIALS SECTION
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-amber-400 font-bold uppercase tracking-wider text-xs">
            Member Transformations
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100">
            Real Words From <span className="text-amber-400">Our Lifters</span>
          </h2>
          <p className="text-sm text-slate-400">
            Sample feedback from athletes training consistently at SAH Muscle Hub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Rahul S.',
              plan: 'Premium Member',
              duration: '6 Months Member',
              quote: 'SAH Muscle Hub has the raw, focused environment I needed. Trainer Pervesh corrected my deadlift form on day one. I have added 8kg of lean muscle so far!',
              rating: 5,
            },
            {
              name: 'Aman K.',
              plan: 'Elite Member',
              duration: '1 Year Member',
              quote: 'Best gym near TV Tower Ground hands down. Clean machines, dumbbells are always in place, and the monthly fee of ₹1000 is unbelievable value.',
              rating: 5,
            },
            {
              name: 'Vikram D.',
              plan: 'Basic Member',
              duration: '3 Months Member',
              quote: 'Started as an absolute beginner. The guys here and the coach never make you feel out of place. Flexible 6 AM timings suit my morning work schedule.',
              rating: 5,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-amber-500/40 transition"
            >
              <div className="space-y-3">
                <div className="flex text-amber-400 text-sm">
                  {'★'.repeat(item.rating)}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-100 text-sm">{item.name}</p>
                  <p className="text-xs text-amber-400">{item.plan}</p>
                </div>
                <span className="text-[10px] text-slate-500 px-2 py-1 rounded bg-slate-950 border border-slate-800">
                  {item.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION SECTION
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-12 space-y-3">
          <p className="text-amber-400 font-bold uppercase tracking-wider text-xs">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-100">
            Frequently Asked <span className="text-amber-400">Questions</span>
          </h2>
          <p className="text-sm text-slate-400">
            Everything you need to know before joining SAH Muscle Hub.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-200 hover:text-amber-400 transition"
              >
                <span className="text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-sm text-slate-400 border-t border-slate-800/60 leading-relaxed animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FINAL STRONG CTA BANNER
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-3xl p-8 sm:p-14 text-center text-slate-950 space-y-6 shadow-2xl shadow-amber-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-block bg-slate-950 text-amber-400 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              NO EXCUSES • TIME TO ACT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
              YOUR FITNESS JOURNEY STARTS TODAY.
            </h2>
            <p className="text-base sm:text-lg text-slate-900 font-medium">
              Join SAH Muscle Hub in Joudge Courd. Experience real strength training, expert supervision, and affordable monthly plans starting at just ₹800.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact?action=join"
                className="w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-amber-400 font-black px-8 py-4 rounded-xl text-sm uppercase tracking-wider shadow-lg transition"
              >
                Become A Member Now
              </Link>
              <a
                href={gymConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/90 hover:bg-white text-slate-950 font-bold px-7 py-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${gymConfig.phoneRaw}`}
                className="w-full sm:w-auto bg-slate-900/40 hover:bg-slate-900/60 text-slate-950 font-bold px-6 py-4 rounded-xl text-sm flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call {gymConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GYM TOUR MODAL
         ========================================================================= */}
      {showTourModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setShowTourModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-100 flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-amber-400" />
                <span>Book Free Gym Tour</span>
              </h3>
              <p className="text-xs text-slate-400">
                Experience the equipment, ambience, and meet Trainer Pervesh at Joudge Courd.
              </p>
            </div>

            {tourSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-100">Tour Request Received!</h4>
                <p className="text-xs text-slate-300">
                  Redirecting to WhatsApp to confirm your preferred visit time...
                </p>
              </div>
            ) : (
              <form onSubmit={handleTourSubmit} className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={tourName}
                    onChange={(e) => setTourName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={tourPhone}
                    onChange={(e) => setTourPhone(e.target.value)}
                    placeholder="+91 9239888245"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={tourDate}
                    onChange={(e) => setTourDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold py-3 rounded-lg text-sm uppercase tracking-wider hover:from-amber-400 hover:to-amber-300 transition shadow-lg shadow-amber-500/20"
                >
                  Confirm Free Tour via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
