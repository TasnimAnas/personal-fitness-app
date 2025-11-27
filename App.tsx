import React, { useState, useEffect } from "react";
import { Tab, WeeklyPlan } from "./types";
import { generateWeeklyPlan } from "./services/geminiService";
import { WorkoutCard } from "./components/WorkoutCard";
import { MealCard } from "./components/MealCard";
import { SupplementCard } from "./components/SupplementCard";
import { BottomNav } from "./components/BottomNav";
import {
  Loader2,
  Calendar,
  User,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const App: React.FC = () => {
  const [plan, setPlan] = useState<WeeklyPlan | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.WORKOUT);
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(0);

  // Initialize: Load plan
  useEffect(() => {
    const cDay = new Date().getDay();
    setCurrentDayIndex(cDay - 1);

    const loadPlan = async () => {
      setLoading(true);
      // Try to load from localStorage first for persistence during dev/usage
      const saved = localStorage.getItem("fitstudent_plan");
      if (saved) {
        setPlan(JSON.parse(saved));
        setLoading(false);
      } else {
        const generated = await generateWeeklyPlan();
        if (generated) {
          setPlan(generated);
          localStorage.setItem("fitstudent_plan", JSON.stringify(generated));
        }
        setLoading(false);
      }
    };
    loadPlan();
  }, []);

  const handleNextDay = () => {
    if (plan) {
      setCurrentDayIndex((prev) => (prev + 1) % plan.days.length);
    }
  };

  const handlePrevDay = () => {
    if (plan) {
      setCurrentDayIndex(
        (prev) => (prev - 1 + plan.days.length) % plan.days.length
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mb-4" />
        <h1 className="text-2xl font-bold text-white mb-2">
          Building Your Plan
        </h1>
        <p className="text-slate-400">
          Analyzing body stats (25M, 72kg, 5'6")...
        </p>
        <p className="text-slate-500 text-sm mt-2">
          Generating student-friendly meals & effective workouts.
        </p>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 text-center">
        <p className="text-red-400 mb-4">
          Could not generate plan. Please check API key.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-bold"
        >
          Retry
        </button>
      </div>
    );
  }

  const currentDay = plan.days[currentDayIndex];

  return (
    <div className="min-h-screen bg-slate-900 pb-20 font-sans">
      {/* Header Section */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 px-4 py-3 shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500/20 p-2 rounded-full">
              <User size={16} className="text-emerald-400" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-200">
                Recomp Protocol
              </h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-wide">
                Day {currentDayIndex + 1} of 7
              </p>
            </div>
          </div>
        </div>

        {/* Day Selector */}
        <div className="flex items-center justify-between bg-slate-800 rounded-lg p-1">
          <button
            onClick={handlePrevDay}
            className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-emerald-500" />
            <span className="font-bold text-white text-lg">
              {currentDay.dayName}
            </span>
          </div>
          <button
            onClick={handleNextDay}
            className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </header>

      {/* Content Area */}
      <main className="px-4 py-6 max-w-md mx-auto">
        {currentTab === Tab.WORKOUT && (
          <WorkoutCard workout={currentDay.workout} />
        )}
        {currentTab === Tab.MEALS && <MealCard meals={currentDay.meals} />}
        {currentTab === Tab.SUPPLEMENTS && (
          <SupplementCard supplements={currentDay.supplements} />
        )}
      </main>

      <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />
    </div>
  );
};

export default App;
