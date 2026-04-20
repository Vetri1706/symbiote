import { Package, Lock, Unlock, Sparkles, Box, Key, Search, Gift, Zap } from 'lucide-react';
import { Card, ProgressBar } from '../../components/ui';

const lootBoxes = [
  {
    id: 1,
    name: 'Weekly Discovery Box',
    desc: 'Contains rare badges, bonus XP, and community tokens.',
    progress: 80,
    statusText: '4/5 Challenges Complete',
    locked: false,
    rarity: 'Common',
    color: 'from-blue-500 to-indigo-600',
    icon: Box
  },
  {
    id: 2,
    name: "Explorer's Vault",
    desc: 'Unlocks only if you find hidden logic gaps in the system.',
    progress: 33,
    statusText: '1/3 Hidden Challenges Found',
    locked: false,
    rarity: 'Epic',
    color: 'from-violet-600 to-fuchsia-600',
    icon: Key
  },
  {
    id: 3,
    name: 'Season Grand Treasure',
    desc: 'The ultimate season reward. Full of legendary artifacts.',
    progress: 0,
    statusText: 'Unlocks at Level 15',
    locked: true,
    rarity: 'Legendary',
    color: 'from-amber-400 to-orange-600',
    icon: Lock
  },
];

export default function Mystery() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">

      {/* ── Header ── */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-black text-white flex items-center justify-center gap-3 tracking-tight">
          <Sparkles className="w-8 h-8 text-amber-500" /> Mystery & Loot
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">Discover hidden treasures and unlock rare rewards through exploration and consistency.</p>
      </div>

      {/* ── Loot Boxes Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lootBoxes.map((box) => {
          const Icon = box.icon;
          return (
            <Card key={box.id} className={`relative p-6 flex flex-col justify-between h-[400px] group transition-all duration-300 ${box.locked ? 'bg-[#1a1a1a] opacity-80' : 'bg-[#111111]'}`}>
              
              {/* Box Rarity Badge */}
              <div className="flex justify-between items-start">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border
                  ${box.rarity === 'Common' ? 'bg-[#1a1a1a] shadow-inner text-blue-600 border-blue-100' :
                    box.rarity === 'Epic' ? 'bg-[#1a1a1a] border border-white/5 text-violet-600 border-violet-100' :
                    'bg-amber-50 text-amber-600 border-amber-100'}`}>
                  {box.rarity}
                </span>
                {box.locked ? <Lock className="w-4 h-4 text-gray-300" /> : <Unlock className="w-4 h-4 text-gray-300" />}
              </div>

              {/* Box Visual */}
              <div className="flex-1 flex flex-col items-center justify-center py-6">
                <div className={`relative w-32 h-32 rounded-3xl bg-gradient-to-br ${box.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                   <Icon className="w-16 h-16 text-white group-hover:rotate-12 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-[#111111] opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity" />
                </div>
                <h3 className="mt-6 font-black text-lg text-white text-center leading-tight">{box.name}</h3>
                <p className="mt-2 text-xs text-center text-gray-400 leading-relaxed px-4">{box.desc}</p>
              </div>

              {/* Progress and Action */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-gray-400">Progress</span>
                    <span className={box.locked ? 'text-gray-400' : 'text-violet-600'}>{box.statusText}</span>
                  </div>
                  <ProgressBar progress={box.progress} color={box.locked ? 'bg-gray-200' : 'bg-violet-600'} />
                </div>
                <button 
                  disabled={box.locked || box.progress < 100}
                  className={`w-full py-3 rounded-xl text-sm font-black transition-all shadow-md
                    ${box.progress === 100 
                      ? 'bg-violet-600 text-white hover:bg-[#1a1a1a] border border-white/50 shadow-violet-200' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'}`}>
                  {box.progress === 100 ? 'Open Now! ⚡' : 'In Progress'}
                </button>
              </div>

              {box.locked && (
                <div className="absolute inset-0 bg-[#1a1a1a]/50 backdrop-blur-[1px] rounded-2xl flex items-center justify-center pointer-events-none">
                  {/* Visual lock overlay */}
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {/* ── Exploration Section ── */}
      <section className="bg-[#111] rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl">
         <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           <div>
             <div className="inline-flex items-center gap-2 text-amber-500 text-xs font-black uppercase tracking-widest mb-4">
               <Search className="w-4 h-4" /> Secret Discoveries
             </div>
             <h2 className="text-3xl font-black mb-4">Finding the Unfindable</h2>
             <p className="text-gray-400 text-base leading-relaxed mb-8">
               Our system has hidden nodes hidden within the source code and logic layers. The first players to identify these gaps unlock the Explorer's Vault.
             </p>
             <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4 bg-[#111111]/5 border border-white/10 p-4 rounded-2xl">
                 <div className="w-10 h-10 bg-[#1a1a1a] border border-white/50/20 rounded-xl flex items-center justify-center text-violet-400">
                   <Key className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-sm font-bold">Sherlock Nodes</p>
                   <p className="text-xs text-gray-500">1 of 3 nodes identified in Platform Core</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 bg-[#111111]/5 border border-white/10 p-4 rounded-2xl">
                 <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400">
                   <Zap className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-sm font-bold">Logic Breach #41</p>
                   <p className="text-xs text-gray-500">Known gap in the Rewards distribution logic</p>
                 </div>
               </div>
             </div>
           </div>

           <div className="relative aspect-square max-w-[340px] mx-auto">
             {/* Abstract tech circular pulse */}
             <div className="absolute inset-0 rounded-full border border-violet-500/30 animate-ping" />
             <div className="absolute inset-4 rounded-full border border-amber-500/20 animate-ping delay-700" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-violet-600 to-amber-600 flex items-center justify-center shadow-[0_0_80px_-10px_rgba(124,58,237,0.5)]">
                   <Gift className="w-20 h-20 text-white" />
                </div>
             </div>
           </div>
         </div>
         {/* Background glow */}
         <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-violet-600/20 rounded-full blur-[100px]" />
      </section>

    </div>
  );
}
