import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const DayCell = ({ day, status, isToday }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500/10 border-emerald-500/50 text-emerald-500';
      case 'missed':
        return 'bg-rose-500/10 border-rose-500/50 text-rose-500';
      case 'frozen':
        return 'bg-blue-500/10 border-blue-500/50 text-blue-500';
      default:
        return 'bg-[#1a1a1a] border-white/5 text-gray-600';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.05 }}
      className={`
        aspect-square rounded-xl border flex flex-col items-center justify-center relative
        ${getStatusStyles()}
        ${isToday ? 'ring-2 ring-violet-500 ring-offset-2 ring-offset-[#030303] border-violet-500' : ''}
      `}
    >
      <span className="text-[10px] font-black absolute top-1 left-2 opacity-40">
        {day}
      </span>
      {status === 'completed' && <Check className="w-5 h-5 mt-1" />}
      {status === 'missed' && <X className="w-5 h-5 mt-1" />}
      {status === 'frozen' && <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />}
      {(!status || status === 'upcoming') && <Minus className="w-4 h-4 opacity-20" />}
      
      {isToday && (
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-violet-500 rounded-full" />
      )}
    </motion.div>
  );
};

export default function StreakCalendar({ logs = [] }) {
  // Generate last 30 days
  const today = new Date();
  const days = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - (29 - i));
    return {
      date: d.toISOString().split('T')[0],
      dayNum: d.getDate(),
      isToday: d.toISOString().split('T')[0] === today.toISOString().split('T')[0]
    };
  });

  const getStatusForDate = (dateStr) => {
    const log = logs.find(l => l.activity_date.split('T')[0] === dateStr);
    return log ? log.status : (new Date(dateStr) < today ? 'upcoming' : 'upcoming');
  };

  return (
    <div className="bg-[#111111] p-6 rounded-[32px] border border-white/5 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-black text-white uppercase tracking-widest">Consistency Map</h3>
          <p className="text-[10px] text-gray-500 font-bold mt-1">Activity over the last 30 days</p>
        </div>
        <div className="flex gap-4">
           <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Done</span>
           </div>
           <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Missed</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
        {days.map((day) => (
          <DayCell 
            key={day.date} 
            day={day.dayNum} 
            status={getStatusForDate(day.date)} 
            isToday={day.isToday}
          />
        ))}
      </div>
    </div>
  );
}
