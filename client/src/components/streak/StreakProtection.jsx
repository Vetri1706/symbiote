import React from 'react';
import { Card } from '../ui';
import { Snowflake, Shield, HeartPulse } from 'lucide-react';

const ProtectionCard = ({ item, onUse }) => {
  const Icon = item.icon;
  return (
    <Card className="p-5 flex items-start gap-5 group hover:border-white/10 transition-all text-left">
      <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0 mt-1`}>
        <Icon className={`w-7 h-7 ${item.color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-black text-white text-sm uppercase tracking-tight">{item.name}</h3>
          <div className="flex items-center gap-1.5 bg-[#1a1a1a] px-2 py-0.5 rounded-md border border-white/10 shadow-inner">
             <span className="text-[8px] font-black text-gray-500 uppercase">Inv</span>
             <span className="text-[11px] font-black text-violet-400">{item.count}</span>
          </div>
        </div>
        <p className="text-[11px] text-gray-500 leading-normal font-medium">{item.desc}</p>
        <div className="mt-4 flex justify-end">
          <button 
             onClick={() => item.count > 0 && onUse(item.id)}
             className={`px-5 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
             ${item.count > 0 
               ? 'bg-violet-600/10 text-violet-400 hover:bg-violet-600 hover:text-white border border-violet-500/20 shadow-lg shadow-violet-500/10' 
               : 'bg-neutral-900 text-gray-600 cursor-not-allowed border border-white/5 opacity-60'}`}
           >
             {item.count > 0 ? 'Activate' : 'Empty'}
           </button>
        </div>
      </div>
    </Card>
  );
};

export default function StreakProtection({ streak, onUseFreeze }) {
  const items = [
    {
      id: 'freeze',
      name: 'Streak Freeze',
      desc: 'Pauses your streak for 1 day if you miss a daily goal.',
      count: streak?.freeze_count || 0,
      icon: Snowflake,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border border-blue-500/20',
    },
    {
      id: 'shield',
      name: 'Streak Shield',
      desc: 'Auto-protection from misses for the next 24 hours.',
      count: streak?.shield_active ? 1 : 0,
      icon: Shield,
      color: 'text-violet-400',
      bg: 'bg-violet-500/10 border border-violet-500/20',
    },
    {
      id: 'insurance',
      name: 'XP Insurance',
      desc: 'Retains 50% of earned XP on a failed group challenge.',
      count: streak?.xp_insurance ? 1 : 0,
      icon: HeartPulse,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border border-rose-500/20',
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {items.map(item => (
        <ProtectionCard key={item.id} item={item} onUse={onUseFreeze} />
      ))}
    </div>
  );
}
