import React from 'react';
import { WorkoutSession } from '../types';
import { Timer, Dumbbell, Activity } from 'lucide-react';

interface Props {
  workout: WorkoutSession;
}

export const WorkoutCard: React.FC<Props> = ({ workout }) => {
  const isRestDay = workout.focus.toLowerCase().includes('rest');

  if (isRestDay) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-slate-800 rounded-2xl p-6 border border-slate-700 animate-fade-in">
        <div className="p-4 bg-emerald-900/30 rounded-full mb-4">
          <Activity className="w-12 h-12 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Active Recovery</h3>
        <p className="text-slate-400 text-center">
          Take a walk, do some stretching, or just chill. Recovery is when muscle grows.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 animate-fade-in pb-20">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 shadow-lg">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">{workout.focus}</h2>
            <div className="flex items-center mt-2 text-emerald-100 space-x-2">
              <Timer size={18} />
              <span className="font-medium">{workout.durationMinutes} min session</span>
            </div>
          </div>
          <Dumbbell className="text-emerald-200 opacity-50" size={48} />
        </div>
      </div>

      <div className="space-y-3">
        {workout.exercises.map((ex, idx) => (
          <div key={idx} className="bg-slate-800 p-4 rounded-xl border border-slate-700/50 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-lg text-slate-100">{ex.name}</h4>
              <span className="text-xs font-bold bg-slate-700 text-emerald-400 px-2 py-1 rounded-md uppercase">
                {ex.sets} Sets
              </span>
            </div>
            <div className="flex justify-between items-center text-sm text-slate-400">
              <span>{ex.reps} Reps</span>
              {ex.notes && <span className="italic text-xs text-slate-500 max-w-[60%] text-right">{ex.notes}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};