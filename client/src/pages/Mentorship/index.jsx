import { Users, UserPlus, Star, Calendar, MessageSquare, Video, Search, ChevronRight, Activity, ArrowRight } from 'lucide-react';
import { Card } from '../../components/ui';

const mentors = [
  { id: 1, name: 'Vishnudharshan S', role: 'AI/ML Specialist & Research Lead', rating: 4.9, reviews: 124, availability: 'Available Tomorrow', skills: ['TensorFlow', 'Neural Networks', 'Python'] },
  { id: 2, name: 'Kavitha S.',    role: 'Senior Product Designer', rating: 4.8, reviews: 92, availability: 'Available Next Week', skills: ['UI/UX', 'Design Thinking', 'Figma'] },
];

const mentees = [
  { id: 201, name: 'Sriram R P', role: 'Level 12 • Active Mentee', progress: 75, status: 'Active', color: 'bg-emerald-100 text-emerald-700' },
  { id: 202, name: 'Amal Raajan S', role: 'Level 11 • Request Pending', progress: 0, status: 'Pending', color: 'bg-amber-100 text-amber-700' },
];

export default function Mentorship() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">

      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <Users className="w-6 h-6 text-violet-600" /> Mentorship Network
          </h1>
          <p className="text-sm text-gray-500 mt-1">Connect with industry experts or guide the next generation of talent.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Find a mentor..." className="pl-9 pr-4 py-2 border border-white/10 rounded-xl text-sm outline-none focus:ring-2 focus:ring-violet-500 transition-all w-60" />
          </div>
          <button className="bg-violet-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-violet-200">
            <UserPlus className="w-4 h-4" /> Become a Mentor
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT & CENTER: Mentor Discovery */}
        <div className="lg:col-span-2 space-y-6">
          <section className="space-y-4">
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Top Recommended Mentors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mentors.map((m) => (
                <Card key={m.id} className="p-5 flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center font-black text-violet-400 group-hover:scale-110 transition-transform">
                        {m.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded-full text-[10px] font-black">
                        <Star className="w-3 h-3 fill-yellow-600 border-none" /> {m.rating}
                      </div>
                    </div>
                    <h3 className="font-black text-white">{m.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{m.role}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {m.skills.map(s => (
                        <span key={s} className="text-[10px] bg-[#1a1a1a] text-gray-500 font-bold px-2 py-0.5 rounded-md border border-white/5">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <p className="text-[10px] font-bold text-emerald-600">{m.availability}</p>
                    <button className="text-xs font-black text-violet-600 hover:text-violet-400 flex items-center gap-1">
                      Book Session <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Recent Sessions */}
          <section className="space-y-4">
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">Recent Sessions</h2>
            <div className="bg-[#111111] rounded-3xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] divide-y divide-gray-50">
               {[
                 { mentor: 'Kavitha S.', topic: 'Portfolio Review & UX Strategy', date: 'Yesterday • 45 min', icon: Video },
                 { mentor: 'Vishnudharshan S', topic: 'Neural Networks Fundamentals', date: 'Oct 12 • 1 hour', icon: MessageSquare },
               ].map((s, i) => (
                 <div key={i} className="flex items-center justify-between p-4 hover:bg-[#1a1a1a]/50 transition-colors cursor-pointer">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center">
                       <s.icon className="w-5 h-5 text-gray-400" />
                     </div>
                     <div>
                       <p className="text-sm font-bold text-gray-200">{s.topic}</p>
                       <p className="text-xs text-gray-400">{s.mentor} &bull; {s.date}</p>
                     </div>
                   </div>
                   <button className="text-[10px] font-black text-violet-600 hover:text-violet-400 uppercase tracking-widest">Feedback Given</button>
                 </div>
               ))}
            </div>
          </section>
        </div>

        {/* RIGHT: My Mentees */}
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest px-1">My Mentees</h2>
            {mentees.map(m => (
              <Card key={m.id} className="p-5">
                <div className="flex justify-between items-start mb-3">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-black text-gray-500 text-xs">
                        {m.name.split(' ').map(n=>n[0]).join('')}
                     </div>
                     <div>
                       <h3 className="text-sm font-bold text-white leading-tight">{m.name}</h3>
                       <p className="text-[10px] text-gray-400 font-bold mt-0.5">{m.role}</p>
                     </div>
                   </div>
                   <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${m.color}`}>{m.status}</span>
                </div>
                {m.progress > 0 && (
                  <div className="mt-4 space-y-1.5">
                    <div className="flex justify-between text-[10px] font-bold">
                       <span className="text-gray-400">Mastery Progress</span>
                       <span className="text-emerald-600">{m.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                       <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${m.progress}%` }} />
                    </div>
                  </div>
                )}
                <button className="w-full mt-5 py-2 border border-white/5 rounded-xl text-xs font-bold text-gray-500 hover:bg-[#1a1a1a] hover:text-violet-600 transition-all flex items-center justify-center gap-2">
                   Open Dashboard <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Card>
            ))}
          </section>

          {/* Mentorship Stats */}
          <Card className="p-5 bg-gradient-to-br from-violet-600 to-violet-700 text-white">
            <Activity className="w-7 h-7 text-violet-200 mb-3" />
            <h3 className="font-bold text-base mb-1">Your Impact</h3>
            <p className="text-xs text-violet-100 opacity-80 mb-4">You have influenced 2 mentees this semester.</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-black">12h</p>
                <p className="text-[10px] uppercase font-bold text-violet-200">Session Time</p>
              </div>
              <div>
                <p className="text-2xl font-black">+450</p>
                <p className="text-[10px] uppercase font-bold text-violet-200">Influence XP</p>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
