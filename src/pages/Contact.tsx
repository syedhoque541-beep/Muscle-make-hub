import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  Send,
  Navigation,
} from 'lucide-react';
import { gymConfig } from '../data/gymConfig';
import { membershipPlans } from '../data/membershipPlans';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedPlan = searchParams.get('plan') || '';

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(preselectedPlan || 'premium');
  const [enquiryType, setEnquiryType] = useState<'membership' | 'tour' | 'trial'>('membership');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (preselectedPlan) {
      setSelectedPlan(preselectedPlan);
    }
  }, [preselectedPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setFormError('Please enter a valid phone number (at least 8-10 digits).');
      return;
    }

    setIsSubmitting(true);

    // Simulate backend receipt and save locally
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const getWhatsAppForwardUrl = () => {
    const planName = membershipPlans.find((p) => p.id === selectedPlan)?.name || selectedPlan;
    const typeLabel =
      enquiryType === 'membership'
        ? 'Membership Registration'
        : enquiryType === 'tour'
        ? 'Gym Tour'
        : 'Free Trial Session';

    const text = `Hello SAH Muscle Hub!
I have submitted an enquiry:
• Name: ${name}
• Phone: ${phone}
• Interest: ${typeLabel} (${planName})
${message ? `• Note: ${message}` : ''}
Please share fees and schedule details!`;

    return gymConfig.getWhatsAppUrl(text);
  };

  return (
    <div className="space-y-20 pb-24">
      {/* =========================================================================
          PAGE HEADER
         ========================================================================= */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 text-center">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Start Training</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-100 tracking-tight">
            CONTACT US & <span className="text-amber-400">MEMBERSHIP</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Ready to train at Joudge Courd's top gym? Reach out via WhatsApp, give us a call, or book your free gym tour below.
          </p>

          {/* Quick Contact Buttons Header */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href={`tel:${gymConfig.phoneRaw}`}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/20 transition"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {gymConfig.phone}</span>
            </a>

            <a
              href={gymConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEMBERSHIP PLANS OVERVIEW
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Official Membership Plans
          </span>
          <h2 className="text-3xl font-black text-slate-100">
            Select Your <span className="text-amber-400">Tier</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Basic (₹800), Premium (₹1000), or Elite (₹1500) per month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {membershipPlans.map((plan) => {
            const isChosen = selectedPlan === plan.id;
            return (
              <div
                key={plan.id}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isChosen
                    ? 'bg-slate-900 border-amber-400 ring-2 ring-amber-400/30 shadow-xl'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-lg text-slate-100">{plan.name}</h3>
                    {plan.badge && (
                      <span className="text-[10px] font-black uppercase text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 my-3">
                    <span className="text-amber-400 font-bold text-xl">₹</span>
                    <span className="text-4xl font-black text-slate-100">{plan.price}</span>
                    <span className="text-xs text-slate-400">/ month</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 my-4">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedPlan(plan.id);
                    const formElement = document.getElementById('enquiry-form');
                    formElement?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition ${
                    isChosen
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {isChosen ? 'Selected For Enquiry' : 'Select Plan'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          CONTACT & ENQUIRY FORM + VERIFIED GYM DETAILS
         ========================================================================= */}
      <section id="enquiry-form" className="container mx-auto px-4 sm:px-6 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Official Registration & Questions
              </span>
              <h3 className="text-2xl font-black text-slate-100 mt-1">
                Membership & Tour Enquiry Form
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill in your details below. We confirm enquiries within an hour via phone or WhatsApp.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-100">
                  Enquiry Received Successfully!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{name}</strong>. Our team and Trainer Pervesh at SAH Muscle Hub have recorded your interest.
                </p>
                <div className="pt-3">
                  <a
                    href={getWhatsAppForwardUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Directly via WhatsApp Now</span>
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="block mx-auto text-xs text-slate-400 hover:text-white underline pt-3"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                    {formError}
                  </div>
                )}

                {/* Enquiry Type Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    I Want To:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'membership', label: 'Join Membership' },
                      { id: 'tour', label: 'Free Gym Tour' },
                      { id: 'trial', label: 'Workout Trial' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setEnquiryType(type.id as any)}
                        className={`py-2 px-2 text-xs font-semibold rounded-xl border text-center transition ${
                          enquiryType === type.id
                            ? 'bg-amber-500/20 border-amber-400 text-amber-400'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Syed Hoque"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 9239888245"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Email (Optional) & Plan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Preferred Membership
                    </label>
                    <select
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-amber-400"
                    >
                      {membershipPlans.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} (₹{p.price}/mo)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Goals or Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your fitness goal, past training experience, or question..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black py-4 rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Membership Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Verified Gym Details & Contact Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Verified Contact Details
                </span>
                <h3 className="text-2xl font-black text-slate-100 mt-1">
                  SAH Muscle Hub
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-200 block text-xs uppercase font-bold text-slate-400">
                      Gym Address
                    </strong>
                    <p className="text-slate-200 font-medium">{gymConfig.address}</p>
                    <p className="text-xs text-amber-400 mt-0.5">{gymConfig.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-200 block text-xs uppercase font-bold text-slate-400">
                      Phone Number
                    </strong>
                    <a
                      href={`tel:${gymConfig.phoneRaw}`}
                      className="text-slate-200 hover:text-amber-400 font-bold transition"
                    >
                      {gymConfig.phone}
                    </a>
                    <span className="text-[11px] text-slate-400 block">Click to call directly</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-200 block text-xs uppercase font-bold text-slate-400">
                      WhatsApp Chat
                    </strong>
                    <a
                      href={gymConfig.getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-bold transition"
                    >
                      {gymConfig.whatsapp}
                    </a>
                    <span className="text-[11px] text-slate-400 block">Instant enquiry & fees</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-200 block text-xs uppercase font-bold text-slate-400">
                      Opening Hours
                    </strong>
                    <p className="text-slate-200 font-semibold">{gymConfig.openingHours}</p>
                    <p className="text-xs text-slate-400">Open 7 days a week</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Pre-filled CTA Box */}
              <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 space-y-2">
                <p className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4" />
                  <span>Pre-Filled WhatsApp Message Ready:</span>
                </p>
                <p className="text-[11px] text-slate-300 italic bg-slate-950/60 p-2.5 rounded-lg border border-emerald-800/40">
                  "{gymConfig.defaultWhatsAppMessage}"
                </p>
                <a
                  href={gymConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider transition shadow-md"
                >
                  Send Pre-Filled Message Now
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          VERIFIED GOOGLE MAPS SECTION (Prompt Requirement)
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Location & Navigation
              </span>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 mt-1">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>{gymConfig.name} — {gymConfig.address}</span>
              </h3>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('SAH Muscle Hub Joudge Courd near TV Tower Ground')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Google Maps Directions</span>
            </a>
          </div>

          {/* Interactive Map Visual */}
          <div className="relative aspect-[21/9] sm:aspect-[21/7] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
            <iframe
              title="SAH Muscle Hub Location"
              src="https://maps.google.com/maps?q=Jorj+Kort+near+TV+Tower+Ground&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter invert contrast-125 opacity-85 hover:opacity-100 transition"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 bg-slate-950/90 backdrop-blur-md border border-amber-500/40 px-4 py-2.5 rounded-xl shadow-xl text-xs text-slate-200 hidden sm:flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span>SAH Muscle Hub • Joudge Courd (near TV Tower Ground)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
