import React from 'react';
import { Trophy, Star, Zap, Crown } from 'lucide-react';

const Milestone = ({ day, reward, icon: Icon, unlocked }) => (
  <div className={`flex flex-col items-center p-4 rounded-2xl border transition-all ${unlocked ? 'bg-violet-600/10 border-violet-500/50' : 'bg-[#111111] border-white/5 opacity-50'}`}>
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${unlocked ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30' : 'bg-neutral-800 text-gray-500'}`}>
      <Icon className="w-5 h-5" />
    </div>
    <span className="text-lg font-black text-white leading-none">{day}</span>
    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Days</span>
    <div className={`mt-3 text-[10px] font-black px-2 py-0.5 rounded ${unlocked ? 'bg-violet-500/20 text-violet-400' : 'bg-neutral-800 text-gray-600'}`}>
      {reward}
    </div>
  </div>
);

export default function StreakMilestones({ currentStreak = 0 }) {
  const milestones = [
    { day: 3, reward: '+50 XP', icon: Zap },
    { day: 7, reward: '+100 XP', icon: Star },
    { day: 15, reward: '+200 XP', icon: Trophy },
    { day: 30, reward: '+500 XP', icon: Crown },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {milestones.map(m => (
        <Milestone 
          key={m.day} 
          {...m} 
          unlocked={currentStreak >= m.day} 
        />
      ))}
    </div>
  );
}
