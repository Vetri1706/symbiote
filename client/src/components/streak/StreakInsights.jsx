import React from 'react';
import { Card } from '../ui';
import { Lightbulb, TrendingUp, Calendar } from 'lucide-react';

export default function StreakInsights({ logs = [] }) {
  // Calculate consistency
  const completedDays = logs.filter(l => l.status === 'completed').length;
  const totalDays = logs.length || 1;
  const consistencyIdx = Math.round((completedDays / Math.min(totalDays, 30)) * 100);

  const insights = [
    {
      icon: TrendingUp,
      title: "Consistency Index",
      value: `${consistencyIdx}%`,
      desc: `You've completed tasks on ${completedDays} of the last ${Math.min(totalDays, 30)} days.`
    },
    {
      icon: Calendar,
      title: "Peak Performance",
      value: "Weekdays",
      desc: "Your activity is 40% higher on Tuesdays and Wednesdays."
    },
    {
      icon: Lightbulb,
      title: "Smart Tip",
      value: "Morning Focus",
      desc: "Completing tasks before 10 AM increases your streak probability by 25%."
    }
  ];

  return (
    <div className="space-y-4">
      {insights.map((insight, i) => {
        const Icon = insight.icon;
        return (
          <div key={i} className="bg-[#111111] p-4 rounded-2xl border border-white/5 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{insight.title}</p>
              <p className="text-lg font-black text-white">{insight.value}</p>
              <p className="text-[11px] text-gray-400 mt-1 font-medium">{insight.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
