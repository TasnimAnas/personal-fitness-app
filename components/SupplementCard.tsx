import React from 'react';
import { Supplement } from '../types';
import { Pill, Clock4, Info } from 'lucide-react';

interface Props {
  supplements: Supplement[];
}

export const SupplementCard: React.FC<Props> = ({ supplements }) => {
  return (
    <div className="space-y-4 animate-fade-in pb-20">
      <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-4 mb-6">
        <div className="flex gap-3">
          <Info className="text-blue-400 flex-shrink-0" />
          <p className="text-sm text-blue-200">
            Supplements are additions, not replacements. Ensure your diet is solid first!
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {supplements.map((supp, idx) => (
          <div key={idx} className="bg-slate-800 rounded-xl p-5 border border-slate-700 flex flex-col gap-3 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none" />
             
             <div className="flex justify-between items-start z-10">
                <div className="flex items-center gap-3">
                    <div className="bg-slate-700 p-2 rounded-lg">
                        <Pill className="text-indigo-400" size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">{supp.name}</h3>
                        <span className="text-xs text-indigo-300 font-mono bg-indigo-900/50 px-2 py-0.5 rounded">{supp.dosage}</span>
                    </div>
                </div>
             </div>

             <div className="flex items-start gap-2 mt-2">
                <Clock4 size={16} className="text-slate-500 mt-0.5" />
                <p className="text-sm text-slate-300 leading-tight">
                    <span className="text-slate-500 text-xs uppercase block mb-1">When to take</span>
                    {supp.timing}
                </p>
             </div>

             <div className="bg-slate-900/50 p-3 rounded-lg mt-2">
                <p className="text-xs text-slate-400 italic">"{supp.reason}"</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};