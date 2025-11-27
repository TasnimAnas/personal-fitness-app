import React from 'react';
import { Tab } from '../types';
import { Dumbbell, Utensils, Pill } from 'lucide-react';

interface Props {
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export const BottomNav: React.FC<Props> = ({ currentTab, onTabChange }) => {
  const navItems = [
    { id: Tab.WORKOUT, label: 'Workout', icon: Dumbbell },
    { id: Tab.MEALS, label: 'Meals', icon: Utensils },
    { id: Tab.SUPPLEMENTS, label: 'Supplements', icon: Pill },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 pb-safe-area z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300 ${
                isActive ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <div className={`p-1 rounded-xl transition-all ${isActive ? 'bg-emerald-400/10 transform -translate-y-1' : ''}`}>
                 <Icon size={isActive ? 24 : 22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-medium mt-1 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};