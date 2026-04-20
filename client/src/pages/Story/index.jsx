import { BookOpen, CheckCircle2, Circle, Lock, ArrowRight, Star, Sparkles, Sword } from 'lucide-react';
import { Card, ProgressBar } from '../../components/ui';

const chapters = [
  { id: 1, title: 'The Awakening', status: 'Completed', icon: Sparkles, desc: 'Your journey into the world of behavioral intelligence begins.' },
  { id: 2, title: 'Trials of Logic', status: 'Completed', icon: Sword, desc: 'Mastering the fundamentals of problem solving and algorithmic thinking.' },
  { id: 3, title: 'The Innovation Forge', status: 'Active', icon: BookOpen, progress: 40, desc: 'Focusing on building and shipping products that matter.' },
  { id: 4, title: 'Network Nexus', status: 'Locked', icon: Lock, desc: 'Expanding your reach and building high-impact professional circles.' },
  { id: 5, title: 'The Leadership Crucible', status: 'Locked', icon: Lock, desc: 'Forging your path as a mentor and architectural leader.' },
];

export default function Story() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">

      {/* ── Page Header ── */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-black text-white tracking-tight">Your Narrative Journey</h1>
        <p className="text-gray-500 max-w-lg mx-auto italic">"Every line of code is a sentence in your story. Make sure it's a page-turner."</p>
      </div>

      {/* ── Chapter Timeline ── */}
      <div className="relative space-y-8">
        {/* The dashed vertical line */}
        <div className="absolute left-8 top-10 bottom-10 w-0.5 border-l-2 border-dashed border-white/5 -z-10" />

        {chapters.map((ch, idx) => {
          const isActive = ch.status === 'Active';
          const isDone = ch.status === 'Completed';
          const isNext = ch.status === 'Locked';
          const Icon = ch.icon;

          return (
            <div key={ch.id} className="relative flex items-start gap-8 group">
              
              {/* Timeline Marker */}
              <div className={`mt-2 w-16 h-16 rounded-3xl flex items-center justify-center transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                ${isDone ? 'bg-emerald-50 text-emerald-600' :
                  isActive ? 'bg-violet-600 text-white shadow-xl shadow-violet-200' :
                  'bg-[#1a1a1a] text-gray-300 border border-white/5'}`}>
                {isDone ? <CheckCircle2 className="w-8 h-8" /> : <Icon className="w-8 h-8" />}
              </div>

              {/* Content Card */}
              <div className="flex-1">
                <Card className={`p-6 transition-all duration-300 border-white/5 ${isActive ? 'ring-2 ring-violet-500 ring-offset-4 shadow-lg' : 'hover:border-violet-100'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-widest ${isDone ? 'text-emerald-600' : isActive ? 'text-violet-600' : 'text-gray-400'}`}>
                        Chapter {ch.id} &bull; {ch.status}
                      </p>
                      <h3 className="text-xl font-black text-white mt-0.5">{ch.title}</h3>
                    </div>
                    {isActive && (
                      <span className="bg-violet-100 text-violet-400 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">Current Chapter</span>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {ch.desc}
                  </p>

                  {isActive && (
                    <div className="space-y-3">
                       <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                         <span className="text-gray-400">Progression</span>
                         <span className="text-violet-600">{ch.progress}% Complete</span>
                       </div>
                       <ProgressBar progress={ch.progress} color="bg-violet-600" />
                       <button className="mt-4 w-full py-2.5 bg-violet-600 hover:bg-[#1a1a1a] border border-white/50 text-white rounded-xl text-sm font-bold shadow-lg shadow-violet-200 transition-all flex items-center justify-center gap-2">
                         Continue Your Story <ArrowRight className="w-4 h-4" />
                       </button>
                    </div>
                  )}

                  {isDone && (
                    <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-black uppercase tracking-widest">
                       <Star className="w-3.5 h-3.5 fill-emerald-600" /> Mastered all quests in this chapter
                    </div>
                  )}
                </Card>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
