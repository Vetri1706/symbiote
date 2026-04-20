import { useState } from 'react';
import { Medal, Target, Trophy, FileX, ShieldAlert, ChevronRight, AlertCircle } from 'lucide-react';

const missedAlerts = [
  { name: 'Balavignesh VT', quote: '"Your commits are like gym visits — promised daily, delivered weekly!"', targetStr: 'Target: 5/day', actualStr: 'Actual: ', actualVal: '2/day', riskColor: 'text-rose-600', badgeColor: 'bg-rose-100 text-rose-700', borderHover: 'hover:border-rose-300' },
  { name: 'Lokesh Kumar M S', quote: '"Your OKR progress is slower than Mumbai monsoon traffic!"', targetStr: 'Target: 75%', actualStr: 'Actual: ', actualVal: '45%', riskColor: 'text-rose-600', badgeColor: 'bg-rose-100 text-rose-700', borderHover: 'hover:border-rose-300' },
  { name: 'Jabbastin Akash K', quote: '"Sprint velocity needs less \'sprint\' more \'Usain Bolt\'!"', targetStr: 'Target: 35 pts', actualStr: 'Actual: ', actualVal: '23 pts', riskColor: 'text-rose-600', badgeColor: 'bg-rose-100 text-rose-700', borderHover: 'hover:border-rose-300' },
];

const champions = [
  { name: 'Sriram R P', quote: '"Coding like possessed by spirit of Linus Torvalds!"', metric: '15 days green', badgeColor: 'bg-emerald-100 text-emerald-700', borderHover: 'hover:border-emerald-300' },
  { name: 'Vetri Kalanjiyam B', quote: '"Teamwork smoother than butter chicken!"', metric: 'Sync: 98%', badgeColor: 'bg-emerald-100 text-emerald-700', borderHover: 'hover:border-emerald-300' },
  { name: 'Amal Raajan S', quote: '"Debugging sharper than my sergeant wit!"', metric: '2.3h avg', badgeColor: 'bg-emerald-100 text-emerald-700', borderHover: 'hover:border-emerald-300' },
];

export default function Sergeants() {
  return (
    <div className="space-y-6">
      
      {/* ── Header ── */}
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2.5 rounded-xl bg-violet-100 text-violet-400">
          <Medal className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-black text-white">Sergeant's Corner</h1>
      </div>

      {/* ── Battle Cry Hero ── */}
      <div className="relative overflow-hidden bg-[#111111] rounded-2xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-8 text-center group hover:shadow-md transition-all">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-50/50 via-transparent to-transparent opacity-100" />
        <div className="relative z-10">
          <p className="text-xs font-black uppercase tracking-widest text-amber-500 mb-4">Today's Battle Cry</p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-200 italic leading-snug mb-4">
            "Code like your startup depends on it... because it does!"
          </h2>
          <p className="text-sm font-semibold text-gray-500">— Sergeant Excellence</p>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LEFT COLUMN: Missed Targets */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-200 flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-rose-500" /> Missed Target Alerts
          </h3>
          <div className="space-y-4">
            {missedAlerts.map((alert, i) => (
              <div key={i} className={`group relative bg-[#111111] border border-white/5 rounded-xl p-5 cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 ${alert.borderHover} hover:shadow-md sm:hover:translate-x-1 overflow-hidden`}>
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-rose-400 group-hover:w-2 transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] bg-rose-500 transition-opacity duration-300" />
                
                <h4 className="text-base font-black text-white mb-1">{alert.name}</h4>
                <p className="text-sm text-gray-400 italic font-medium mb-3">"{alert.quote}"</p>
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className="text-gray-500">{alert.targetStr}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500">{alert.actualStr}<span className={alert.riskColor}>{alert.actualVal}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Champions */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-200 flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-amber-500" /> Champion Celebrations
          </h3>
          <div className="space-y-4">
            {champions.map((champ, i) => (
              <div key={i} className={`group relative bg-[#111111] border border-white/5 rounded-xl p-5 cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 ${champ.borderHover} hover:shadow-md sm:hover:translate-x-1 overflow-hidden`}>
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-400 group-hover:w-2 transition-all duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] bg-emerald-500 transition-opacity duration-300" />
                
                <h4 className="text-base font-black text-white mb-1">{champ.name}</h4>
                <p className="text-sm text-gray-400 italic font-medium mb-3">"{champ.quote}"</p>
                <p className={`inline-block px-2.5 py-1 rounded-md text-xs font-bold ${champ.badgeColor}`}>
                  {champ.metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Grid (Protocols) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        
        {/* Exit Protocol */}
        <div className="bg-[#111111] rounded-2xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-6 relative overflow-hidden group hover:border-rose-200 transition-all">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
            <FileX className="w-24 h-24 text-rose-600" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <FileX className="w-5 h-5 text-rose-500" />
              <h3 className="font-bold text-gray-200">Exit Protocol</h3>
            </div>
            <p className="text-xl font-black text-rose-600 mb-2">3 Red Tickets/Month = Exit</p>
            <p className="text-sm font-semibold text-gray-400 mb-5">Three strikes means find a better fit.</p>
            <span className="inline-block px-3 py-1 bg-rose-100 text-rose-800 text-xs font-black uppercase tracking-widest rounded-lg">
              AT RISK: 2
            </span>
          </div>
        </div>

        {/* Bootcamp Protocol */}
        <div className="bg-[#111111] rounded-2xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-6 relative overflow-hidden group hover:border-orange-200 transition-all">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
            <ShieldAlert className="w-24 h-24 text-orange-600" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="w-5 h-5 text-orange-500" />
              <h3 className="font-bold text-gray-200">Bootcamp Protocol</h3>
            </div>
            <p className="text-xl font-black text-orange-600 mb-2">0 Green in 2 Weeks = Bootcamp</p>
            <p className="text-sm font-semibold text-gray-400 mb-5">Invest your own time. Wake-up call!</p>
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-black uppercase tracking-widest rounded-lg">
              AT RISK: 5
            </span>
          </div>
        </div>

      </div>

    </div>
  );
}
