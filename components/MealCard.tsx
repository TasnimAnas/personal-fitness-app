import React from 'react';
import { Meal } from '../types';
import { Clock, Flame, Utensils } from 'lucide-react';

interface Props {
  meals: Meal[];
}

export const MealCard: React.FC<Props> = ({ meals }) => {
  return (
    <div className="space-y-4 animate-fade-in pb-20">
      <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-orange-500/20 rounded-lg">
             <Flame className="w-5 h-5 text-orange-500" />
          </div>
          <h3 className="font-bold text-slate-200">Daily Target</h3>
        </div>
        <div className="flex justify-between text-sm">
           <span className="text-slate-400">Total Protein</span>
           <span className="font-bold text-white">{meals.reduce((acc, m) => acc + m.protein, 0)}g</span>
        </div>
        <div className="flex justify-between text-sm mt-1">
           <span className="text-slate-400">Est. Calories</span>
           <span className="font-bold text-white">{meals.reduce((acc, m) => acc + m.calories, 0)} kcal</span>
        </div>
      </div>

      {meals.map((meal, idx) => (
        <div key={idx} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700/50 shadow-sm">
          <div className="bg-slate-700/50 px-4 py-2 flex justify-between items-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{meal.type}</span>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Clock size={12} />
              <span>{meal.prepTimeMinutes}m prep</span>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-bold text-slate-100 mb-2">{meal.name}</h4>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {meal.ingredients.map((ing, i) => (
                <span key={i} className="text-xs bg-slate-900 text-slate-300 px-2 py-1 rounded-md border border-slate-700">
                  {ing}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                <div className="flex flex-col">
                    <span className="text-xs text-slate-500">Protein</span>
                    <span className="text-sm font-bold text-emerald-400">{meal.protein}g</span>
                </div>
                 <div className="flex flex-col items-end">
                    <span className="text-xs text-slate-500">Calories</span>
                    <span className="text-sm font-bold text-white">{meal.calories}</span>
                </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};