import { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { galleryItems, GalleryItem } from '../data/galleryData';
import { gymConfig } from '../data/gymConfig';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Workouts' | 'Interior' | 'Events'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const showNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const currentItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="space-y-16 pb-24">
      {/* =========================================================================
          PAGE HEADER
         ========================================================================= */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 text-center">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Tour & Club Ambience</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-100 tracking-tight">
            THE MUSCLE MAKE HUB <span className="text-amber-400">EXPERIENCE</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Step inside our premier Joudge Courd facility. Explore our heavy iron floor, high-performance machines, and motivating fitness community.
          </p>
        </div>
      </section>

      {/* =========================================================================
          OWNER NOTE (Prompt Requirement)
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-3 text-xs text-slate-400">
          <Info className="w-5 h-5 text-amber-400 shrink-0" />
          <span>
            <strong className="text-slate-200">Note for Visitors:</strong> Featured photographs showcase the authentic training atmosphere, equipment caliber, and standards at SAH Muscle Hub. Official member gallery updates can be submitted via WhatsApp.
          </span>
        </div>
      </section>

      {/* =========================================================================
          CATEGORY FILTER TABS
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
          {(['All', 'Workouts', 'Interior', 'Events'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {cat === 'All' ? 'All Photographs' : cat === 'Interior' ? 'Gym Interior' : cat === 'Events' ? 'Events & Community' : 'Workout Sessions'}
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================================
          RESPONSIVE IMAGE GRID WITH HOVER OVERLAY
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-500/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Category tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-slate-950/80 backdrop-blur-sm border border-amber-500/30 px-3 py-1 rounded-md">
                  {item.tag}
                </span>
              </div>

              {/* Zoom icon button */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1 transform group-hover:-translate-y-1 transition duration-300">
                <h3 className="text-base font-bold text-slate-100 group-hover:text-amber-400 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          LIGHTBOX MODAL (Prompt Requirement)
         ========================================================================= */}
      {currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200">
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 text-slate-300 hover:text-white p-2.5 rounded-full bg-slate-900 border border-slate-700 transition"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 text-slate-300 hover:text-amber-400 p-3 rounded-full bg-slate-900/90 border border-slate-700 transition"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 text-slate-300 hover:text-amber-400 p-3 rounded-full bg-slate-900/90 border border-slate-700 transition"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content container */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-black">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center max-w-xl space-y-1">
              <div className="flex items-center justify-center gap-2">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  {currentItem.category} • {currentItem.tag}
                </span>
                <span className="text-xs text-slate-500">
                  {lightboxIndex! + 1} of {filteredItems.length}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-100">{currentItem.title}</h3>
              <p className="text-xs text-slate-400">{currentItem.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          BOTTOM INVITATION BANNER
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-slate-100">
            Want to see the gym in person?
          </h3>
          <p className="text-sm text-slate-400">
            Drop by our Joudge Courd facility near TV Tower Ground anytime between 6:00 AM and 9:00 PM for an in-person tour.
          </p>
          <div className="pt-2">
            <a
              href={gymConfig.getWhatsAppUrl('Hello SAH Muscle Hub! I saw your gallery and want to visit for a personal gym tour.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition"
            >
              <span>Schedule A Free Visit via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
