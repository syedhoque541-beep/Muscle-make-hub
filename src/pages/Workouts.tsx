import { useState, useMemo } from 'react';
import {
  Search,
  Dumbbell,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  X,
  Target,
} from 'lucide-react';
import { workoutsData, WORKOUT_CATEGORIES, WorkoutExercise } from '../data/workoutsData';
import { gymConfig } from '../data/gymConfig';

export default function Workouts() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [activeModalExercise, setActiveModalExercise] = useState<WorkoutExercise | null>(null);

  // Filter exercises by category, search query, and difficulty
  const filteredWorkouts = useMemo(() => {
    return workoutsData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesDifficulty =
        selectedDifficulty === 'All' || item.difficulty === selectedDifficulty;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.targetMuscle.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.equipment.toLowerCase().includes(query);

      return matchesCategory && matchesDifficulty && matchesSearch;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  return (
    <div className="space-y-16 pb-24">
      {/* =========================================================================
          PAGE HEADER
         ========================================================================= */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 text-center">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Every Lift & Movement</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-100 tracking-tight">
            WORKOUT <span className="text-amber-400">VARIATIONS & PROGRAMS</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore our curated exercise encyclopedia covering compound lifts, hypertrophy splits, functional conditioning, and injury-prevention mobility.
          </p>
        </div>
      </section>

      {/* =========================================================================
          HEALTH & SAFETY DISCLAIMER BANNER (Prompt Requirement)
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 flex items-start gap-4 text-xs text-amber-200">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1 leading-relaxed">
            <strong className="text-amber-300 font-bold">Important Training & Health Disclaimer:</strong>
            <p className="text-slate-300">
              Workout routines and sets/reps provided below are educational examples. Always warm up thoroughly before loading weights and adapt intensity to your personal physical condition. If you have medical concerns or prior injuries, consult a qualified physician or train under the direct supervision of Trainer Pervesh at SAH Muscle Hub.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEARCH & CATEGORY FILTERS
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search bar */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search exercise, muscle, or equipment..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Difficulty filter buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1">
            <span className="text-xs text-slate-400 font-medium shrink-0">Difficulty:</span>
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map((diff) => (
              <button
                key={diff}
                type="button"
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition shrink-0 ${
                  selectedDifficulty === diff
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-slate-800">
          {WORKOUT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================================
          EXERCISES GRID
         ========================================================================= */}
      <section className="container mx-auto px-4 sm:px-6">
        {filteredWorkouts.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800 space-y-4">
            <Dumbbell className="w-10 h-10 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-200">No exercises found</h3>
            <p className="text-xs text-slate-400">
              Try adjusting your category filter or search query.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedDifficulty('All');
                setSearchQuery('');
              }}
              className="text-xs text-amber-400 hover:underline font-semibold"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkouts.map((exercise) => (
              <div
                key={exercise.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={exercise.image}
                      alt={exercise.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-slate-950/80 backdrop-blur-sm text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-amber-500/30 uppercase">
                        {exercise.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-md border backdrop-blur-sm ${
                          exercise.difficulty === 'Beginner'
                            ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60'
                            : exercise.difficulty === 'Intermediate'
                            ? 'bg-amber-950/80 text-amber-400 border-amber-800/60'
                            : 'bg-rose-950/80 text-rose-400 border-rose-800/60'
                        }`}
                      >
                        {exercise.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-400 transition">
                        {exercise.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Target: <strong className="text-slate-200">{exercise.targetMuscle}</strong></span>
                      </p>
                    </div>

                    <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs flex justify-between items-center">
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">Suggested Split</span>
                        <span className="text-amber-400 font-bold">{exercise.setsReps}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">Equipment</span>
                        <span className="text-slate-300 font-medium">{exercise.equipment}</span>
                      </div>
                    </div>

                    {/* Short instruction preview */}
                    <div className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {exercise.instructions[0]}
                    </div>
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setActiveModalExercise(exercise)}
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2"
                  >
                    <span>View Step-By-Step & Safety Tips</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          EXERCISE DETAILS MODAL
         ========================================================================= */}
      {activeModalExercise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setActiveModalExercise(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
                  {activeModalExercise.category}
                </span>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                  {activeModalExercise.difficulty}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-100">
                {activeModalExercise.name}
              </h3>
              <p className="text-xs text-slate-400">
                🎯 Primary Focus: <strong className="text-amber-400">{activeModalExercise.targetMuscle}</strong>
                {activeModalExercise.secondaryMuscles && (
                  <span> • Secondary: {activeModalExercise.secondaryMuscles}</span>
                )}
              </p>
            </div>

            {/* Image banner inside modal */}
            <div className="aspect-video rounded-2xl overflow-hidden border border-slate-800">
              <img
                src={activeModalExercise.image}
                alt={activeModalExercise.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <div>
                <p className="text-slate-500 font-semibold text-[11px] uppercase">Equipment Needed</p>
                <p className="text-slate-200 font-bold mt-0.5">{activeModalExercise.equipment}</p>
              </div>
              <div>
                <p className="text-slate-500 font-semibold text-[11px] uppercase">Example Sets & Repetitions</p>
                <p className="text-amber-400 font-bold mt-0.5">{activeModalExercise.setsReps}</p>
              </div>
            </div>

            {/* Step-by-step instructions */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Execution Instructions</span>
              </h4>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-300 list-decimal list-inside leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                {activeModalExercise.instructions.map((step, idx) => (
                  <li key={idx} className="pl-1 py-1">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Safety Tips */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
              <p className="font-bold text-amber-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Trainer Pervesh's Safety Tips:</span>
              </p>
              <p className="text-slate-300 leading-relaxed">
                {activeModalExercise.safetyTips}
              </p>
            </div>

            {/* WhatsApp action */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={gymConfig.getWhatsAppUrl(
                  `Hello Trainer Pervesh! Can you help me master the form for "${activeModalExercise.name}" at SAH Muscle Hub?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold py-3 rounded-xl text-xs uppercase tracking-wider text-center transition"
              >
                Ask Trainer About This Exercise
              </a>
              <button
                type="button"
                onClick={() => setActiveModalExercise(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs uppercase transition hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
