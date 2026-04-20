import { Shield, Trophy, Star, Lock, Sparkles, Sword, BookOpen, Target, Activity } from 'lucide-react';
import { Card, ProgressBar } from '../../components/ui';

const bosses = [
  { id: 1, name: 'Publication Dragon', stages: 5, currentStage: 2, xp: 3000, color: 'text-violet-600', bg: 'bg-[#1a1a1a] border border-white/5', border: 'border-violet-100', icon: Sword },
  { id: 2, name: 'Startup Sprint',    stages: 6, currentStage: 1, xp: 2500, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100', icon: Target },
  { id: 3, name: 'Full Stack Fortress', stages: 5, currentStage: 0, xp: 3000, color: 'text-violet-500', bg: 'bg-[#1a1a1a] border border-white/5/50', border: 'border-violet-100', icon: Shield },
];

const skillTrees = [
  { 
    name: 'Attitude', 
    skills: [
      { name: 'Curiosity Champion', level: 3, max: 5 },
      { name: 'Resilience King', level: 1, max: 3 },
      { name: 'Empathy Lead', level: 4, max: 4, completed: true }
    ]
  },
  { 
    name: 'Logic', 
    skills: [
      { name: 'Design Thinker', level: 2, max: 5 },
      { name: 'Pattern Master', level: 0, max: 3 },
      { name: 'Algorithmic Ace', level: 5, max: 5, completed: true }
    ]
  },
  { 
    name: 'Technical', 
    skills: [
      { name: 'First Commit', level: 5, max: 5, completed: true },
      { name: 'API Architect', level: 2, max: 5 },
      { name: 'Security Ninja', level: 1, max: 3 }
    ]
  },
];

export default function Achievements() {
  return (
    <div className="space-y-10 max-w-6xl mx-auto pb-20">

      {/* ── Header ── */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black text-white tracking-tight">Mastery & Achievements</h1>
        <p className="text-gray-500">Defeat bosses and climb the skill trees to earn legendary recognition.</p>
      </div>

      {/* ── Boss Battles ── */}
      <section className="space-y-4">
        <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1 flex items-center gap-2">
          <Sword className="w-3.5 h-3.5" /> Active Boss Battles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bosses.map((boss) => {
            const Icon = boss.icon;
            const progress = (boss.currentStage / boss.stages) * 100;
            return (
              <Card key={boss.id} className="p-6 relative group overflow-hidden border-white/5">
                <div className={`w-14 h-14 rounded-2xl ${boss.bg} ${boss.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                   <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-black text-lg text-white leading-tight">{boss.name}</h3>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Boss Reward: {boss.xp.toLocaleString()} XP</p>
                
                <div className="mt-8 space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-gray-400">Stage {boss.currentStage} of {boss.stages}</span>
                    <span className="text-violet-600 font-bold">{Math.round(progress)}%</span>
                  </div>
                  <ProgressBar progress={progress} color="bg-violet-600" />
                </div>

                <button className="mt-6 w-full py-2 border border-white/5 rounded-xl text-xs font-black text-gray-500 hover:bg-[#1a1a1a] border border-white/5 hover:text-violet-600 transition-all uppercase tracking-widest">
                  Continue Battle
                </button>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ── Mastery Skill Trees ── */}
      <section className="space-y-6">
        <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" /> Mastery Skill Trees
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {skillTrees.map((tree) => (
             <div key={tree.name} className="space-y-4">
                <h3 className="font-black text-white flex items-center gap-2">
                   <div className="w-1.5 h-6 bg-violet-600 rounded-full" />
                   {tree.name}
                </h3>
                <div className="space-y-3">
                   {tree.skills.map((skill) => (
                     <Card key={skill.name} className={`p-4 flex items-center justify-between border-white/5 ${skill.completed ? 'bg-emerald-50/50' : 'bg-[#111111]'}`}>
                        <div>
                           <p className={`text-sm font-bold ${skill.completed ? 'text-emerald-700' : 'text-gray-200'}`}>{skill.name}</p>
                           <div className="flex gap-1 mt-1.5">
                             {Array.from({ length: skill.max }).map((_, i) => (
                               <div key={i} className={`w-3 h-1 rounded-full ${i < skill.level ? (skill.completed ? 'bg-emerald-500' : 'bg-violet-600') : 'bg-gray-100'}`} />
                             ))}
                           </div>
                        </div>
                        {skill.completed ? (
                          <Shield className="w-5 h-5 text-emerald-500 fill-emerald-50/50" />
                        ) : (
                          <button className="p-1.5 hover:bg-[#1a1a1a] border border-white/5 rounded-lg text-violet-600 transition-colors">
                             <Lock className="w-4 h-4" />
                          </button>
                        )}
                     </Card>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </section>

    </div>
  );
}
