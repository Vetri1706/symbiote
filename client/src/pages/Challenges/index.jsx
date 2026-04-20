import { useState } from 'react';
import { Card, ProgressBar } from '../../components/ui';
import {
  Swords, Clock, Zap, Users, Trophy, Target,
  Compass, Lock, ShieldCheck, Heart, UserPlus, Code, Activity, 
  ArrowRight, Flame, Star, TrendingUp, AlertCircle, ChevronRight, 
  MoreHorizontal, MessageSquare, Plus
} from 'lucide-react';

// ── New Data Schema ────────────────────────────────────────────────────────────
const aiRecommended = [
  { 
    id: 10, title: 'Industry Connect Sprint', tag: 'Networking', 
    xp: 250, coins: 50, icon: UserPlus, color: 'text-violet-600', bg: 'bg-[#1a1a1a] border border-white/5',
    skills: ['Communication', 'Network'], impact: '+15% Social Pillar',
    intelligence: { successRate: 92, optimalTime: '2 PM - 4 PM' }
  },
  { 
    id: 11, title: 'SPINE Mindfulness Week', tag: 'Character', 
    xp: 150, coins: 20, icon: Heart, color: 'text-violet-600', bg: 'bg-[#1a1a1a] border border-white/5',
    skills: ['Wellness', 'Resilience'], impact: '+10% Wellbeing',
    intelligence: { successRate: 98, optimalTime: 'Morning' }
  },
  { 
    id: 12, title: 'Pair Programming', tag: 'Learning', 
    xp: 300, coins: 100, icon: Code, color: 'text-violet-600', bg: 'bg-[#1a1a1a] border border-white/5',
    skills: ['JS', 'Teamwork'], impact: '+20% Upskilling',
    intelligence: { successRate: 85, optimalTime: 'Afternoon' }
  },
];

const activeChallenges = [
  { 
    id: 1, title: 'Code Review Sprint', type: 'Sprint', difficulty: 'Medium', 
    endsIn: '9h', players: 12, metric: 'Reviews', current: 2, target: 3, 
    pct: 66, rank: 2, trend: 'up', streakImpact: '+2d Streak',
    rewards: { xp: 500, coins: 120, badge: 'Quality Guardian', boost: '1.2x XP' },
    skills: ['Code Quality', 'Feedback'],
    atRisk: false
  },
  { 
    id: 2, title: 'Innovation Pitch Prep', type: 'Skill', difficulty: 'Hard', 
    endsIn: '13d', players: 45, metric: 'Slides', current: 1, target: 5, 
    pct: 20, rank: 5, trend: 'down', streakImpact: 'Shields Streak',
    rewards: { xp: 1200, coins: 400, badge: 'Visionary', boost: 'Level Up' },
    skills: ['Presentation', 'Ideation'],
    atRisk: true
  },
  { 
    id: 3, title: 'Network Builder', type: 'Discovery', difficulty: 'Easy', 
    endsIn: '3d', players: 28, metric: 'Conns', current: 3, target: 4, 
    pct: 75, rank: 3, trend: 'up', streakImpact: '+1d Streak',
    rewards: { xp: 400, coins: 80, badge: 'Connector' },
    skills: ['Social', 'Growth'],
    atRisk: false
  },
];

const lockedChallenges = [
  { id: 20, title: 'Backend Overlord', unlockAt: 'Level 18', type: 'Skill', difficulty: 'Legendary' },
  { id: 21, title: 'CTO Round Table', unlockAt: '500+ Reviews', type: 'Team', difficulty: 'Hard' },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function DifficultyBadge({ level }) {
  const colors = {
    'Easy': 'bg-emerald-50 text-emerald-600 border-emerald-100',
    'Medium': 'bg-[#1a1a1a] border border-white/5 text-violet-600 border-violet-100',
    'Hard': 'bg-amber-50 text-amber-600 border-amber-100',
    'Legendary': 'bg-rose-50 text-rose-600 border-rose-100',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${colors[level] || colors.Medium}`}>
      {level}
    </span>
  );
}

function RewardIcon({ icon: Icon, label, color, value }) {
  return (
    <div className="flex items-center gap-1 group/reward">
       <div className={`w-5 h-5 rounded-md ${color} flex items-center justify-center`}>
          <Icon className="w-3 h-3 text-white" />
       </div>
       <span className="text-[10px] font-black text-gray-300">{value}</span>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Challenges() {
  const [activeTab, setActiveTab] = useState('Ongoing');

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20">

      {/* ── Page Header ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <Swords className="w-6 h-6 text-violet-600" /> Challenges
          </h1>
          <p className="text-sm text-gray-500 mt-1">Product-level intelligence for your behavior growth.</p>
        </div>
        <div className="flex gap-2 bg-[#111111] p-1 rounded-2xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          {['Ongoing', 'Completed', 'Locked'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all
                ${activeTab === tab 
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-200' 
                  : 'text-gray-400 hover:text-violet-600 hover:bg-[#1a1a1a] border border-white/5'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'Ongoing' && (
        <>
          {/* ── AI Recommended (Pillar Gaps) ── */}
          <section className="space-y-4">
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1 flex items-center gap-2">
              <Target className="w-3.5 h-3.5" /> AI Recommended — Fill your Pillar Gaps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aiRecommended.map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="bg-[#111111] p-5 rounded-3xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] group cursor-pointer hover:border-violet-300 transition-all relative overflow-hidden">
                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div className="text-right">
                         <div className="text-[10px] font-black text-emerald-500 flex items-center justify-end gap-1">
                            <TrendingUp className="w-3 h-3" /> {item.intelligence.successRate}% Success
                         </div>
                         <p className="text-[10px] text-gray-400 font-bold mt-0.5">{item.intelligence.optimalTime}</p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-base font-black text-white">{item.title}</h3>
                      <p className="text-[10px] font-bold text-violet-600 mt-0.5">{item.impact}</p>
                      <div className="flex flex-wrap gap-1 mt-3">
                         {item.skills.map(s => (
                           <span key={s} className="px-1.5 py-0.5 bg-[#1a1a1a] text-[9px] font-bold text-gray-500 rounded border border-white/5 uppercase">+ {s}</span>
                         ))}
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between relative z-10 border-t border-gray-50 pt-3">
                       <span className="text-xs font-black text-gray-200">+{item.xp} XP</span>
                       <button className="p-1 rounded-lg hover:bg-[#1a1a1a] border border-white/5 text-gray-400 hover:text-violet-600 transition-colors">
                          <ChevronRight className="w-4 h-4" />
                       </button>
                    </div>
                    {/* Background abstract decoration */}
                    <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-violet-600/5 rounded-full blur-2xl group-hover:bg-violet-600/10 transition-all" />
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Active Challenges Grid ── */}
          <section className="space-y-4">
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5" /> Active Challenges
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {activeChallenges.map((c) => (
                <Card key={c.id} className={`p-6 border-2 transition-all hover:shadow-xl ${c.atRisk ? 'border-rose-100 bg-rose-50/10' : 'border-white'}`}>
                  {/* Top Row: Meta Info */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                         <DifficultyBadge level={c.difficulty} />
                         <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-100 px-2 py-0.5 rounded-full">{c.type}</span>
                         {c.atRisk && <span className="text-[10px] font-black text-rose-500 flex items-center gap-1 animate-pulse"><AlertCircle className="w-3 h-3" /> At Risk</span>}
                      </div>
                      <h3 className="font-black text-xl text-white leading-tight">{c.title}</h3>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                       <div className="flex items-center gap-2">
                          <RewardIcon icon={Zap} value={c.rewards.xp} color="bg-[#1a1a1a] border border-white/50" />
                          <RewardIcon icon={Star} value={c.rewards.coins} color="bg-amber-500" />
                       </div>
                       {c.rewards.badge && (
                         <div className="text-[9px] font-black text-violet-600 bg-[#1a1a1a] border border-white/5 px-2 py-0.5 rounded border border-violet-100">
                           🏆 {c.rewards.badge}
                         </div>
                       )}
                    </div>
                  </div>

                  {/* Middle Row: Progress & Stats */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Progress Column */}
                    <div className="lg:col-span-2 space-y-3">
                       <div className="flex justify-between items-center text-xs font-bold">
                          <span className="text-gray-500 uppercase tracking-widest flex items-center gap-1.5"><Clock className="w-3 h-3 text-violet-400" /> {c.endsIn} remaining</span>
                          <span className="text-white">{c.current} / {c.target} {c.metric}</span>
                       </div>
                       <div className="relative h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-violet-600 transition-all duration-1000 relative" style={{ width: `${c.pct}%` }}>
                             <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                          </div>
                          {/* Milestone marker */}
                          <div className="absolute left-[75%] top-0 h-full w-0.5 bg-[#111111]/50 z-10" />
                       </div>
                    </div>
                    {/* Ranking & Social Column */}
                    <div className="bg-[#1a1a1a]/50 rounded-2xl p-3 border border-white/5 flex flex-col justify-center">
                       <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rank</span>
                          <span className={`text-[10px] font-black flex items-center ${c.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                             {c.trend === 'up' ? '↑' : '↓'} Rank Change
                          </span>
                       </div>
                       <div className="text-2xl font-black text-white flex items-center justify-between">
                          #{c.rank}
                          <div className="flex -space-x-2">
                             {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-violet-200 border-2 border-white" />)}
                          </div>
                       </div>
                       <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-widest text-right">{c.players} players active</p>
                    </div>
                  </div>

                  {/* Bottom Row: Insights & Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-50 pt-4 mt-2">
                     <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                           <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Streak Impact</span>
                           <span className="text-xs font-bold text-rose-500 flex items-center gap-1"><Flame className="w-3 h-3 fill-rose-500" /> {c.streakImpact}</span>
                        </div>
                        <div className="w-px h-6 bg-gray-100" />
                        <div className="flex flex-col">
                           <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Skill Boost</span>
                           <div className="flex gap-1">
                              {c.skills.map(s => <span key={s} className="text-[10px] font-bold text-violet-600">+{s}</span>)}
                           </div>
                        </div>
                     </div>
                     <div className="flex gap-2 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none p-2 rounded-xl border border-white/10 text-gray-400 hover:text-violet-600 hover:bg-[#1a1a1a] border border-white/5 transition-all">
                           <MoreHorizontal className="w-4 h-4" />
                        </button>
                        <button className="flex-1 sm:flex-none px-6 py-2 bg-violet-600 text-white rounded-xl text-xs font-black shadow-lg shadow-violet-200 hover:bg-violet-700 transition-all uppercase tracking-widest">
                           Continue
                        </button>
                     </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* ── Explorer Mode Section ── */}
          <section className="space-y-4">
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" /> Explorer Mode — Secret Discoveries
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl group">
                 <div className="relative z-10 flex flex-col h-full">
                   <div className="flex items-center gap-2 text-violet-400 text-[10px] font-black uppercase tracking-widest mb-3">
                     <ShieldCheck className="w-4 h-4" /> Secret Quest Available
                   </div>
                   <h3 className="text-2xl font-black mb-2">Secret Logic Flaw Hunt</h3>
                   <p className="text-gray-400 text-sm max-w-md mb-8">A hidden vulnerability was discovered in the Rewards subsystem. First detective to patch it wins "The Sherlock" status.</p>
                   
                   <div className="mt-auto flex items-center gap-8">
                      <div className="flex flex-col">
                         <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Reward Pot</span>
                         <span className="text-lg font-black text-violet-400 flex items-center gap-2">5,000 TechCoins <TrendingUp className="w-4 h-4" /></span>
                      </div>
                      <button className="bg-violet-600 hover:bg-[#1a1a1a] border border-white/50 text-white px-8 py-3 rounded-2xl text-sm font-black transition-all shadow-lg shadow-violet-900/40">
                         Initial Investigation
                      </button>
                   </div>
                 </div>
                 {/* Decorative elements */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-violet-600/20 transition-all" />
                 <div className="absolute bottom-10 right-10 opacity-10 group-hover:scale-110 transition-transform">
                    <Compass className="w-32 h-32 text-white" />
                 </div>
              </div>

              <div className="flex flex-col gap-4">
                 <div className="flex-1 bg-[#111111] border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-violet-200 transition-all">
                    <Plus className="w-8 h-8 text-gray-200 group-hover:text-violet-600 transition-all mb-2" />
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Invite Teammates</p>
                    <p className="text-xs text-gray-400 mt-1">Earn 5% shared progress bonus</p>
                 </div>
                 <div className="flex-1 bg-[#1a1a1a]/50 border border-dashed border-gray-300 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
                    <Lock className="w-6 h-6 text-gray-300 mb-2" />
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Global Boss Unlocks in 4d</p>
                 </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'Locked' && (
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lockedChallenges.map(c => (
              <div key={c.id} className="bg-[#1a1a1a] border border-dashed border-white/10 rounded-3xl p-8 flex flex-col items-center text-center group grayscale hover:grayscale-0 transition-all">
                 <div className="w-16 h-16 bg-[#111111] rounded-2xl flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                    <Lock className="w-8 h-8 text-gray-300 group-hover:text-violet-600 transition-all" />
                 </div>
                 <DifficultyBadge level={c.difficulty} />
                 <h3 className="text-xl font-black text-gray-400 mt-3">{c.title}</h3>
                 <p className="text-xs text-gray-400 font-bold mt-2 uppercase tracking-widest">Requirement: <span className="text-violet-600">{c.unlockAt}</span></p>
                 <button className="mt-8 px-6 py-2 bg-[#111111] border border-white/5 rounded-xl text-xs font-bold text-gray-300 cursor-not-allowed uppercase tracking-widest font-black">Locked</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === 'Completed' && (
        <section className="flex flex-col items-center justify-center py-20 text-center space-y-4">
           <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-10 h-10 text-emerald-500" />
           </div>
           <div>
              <h2 className="text-xl font-black text-white">Legend in the Making</h2>
              <p className="text-gray-500 text-sm max-w-xs mx-auto mt-2">You haven't archived any challenges yet this season. Finish your active sprints to see them here.</p>
           </div>
           <button onClick={() => setActiveTab('Ongoing')} className="text-xs font-black text-violet-600 uppercase tracking-widest hover:underline">Return to Ongoing</button>
        </section>
      )}

    </div>
  );
}
