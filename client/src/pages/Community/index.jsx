import { Users, Heart, MessageSquare, Share2, Star, Plus, ShieldCheck, Zap, MoreHorizontal, UserCheck } from 'lucide-react';
import { Card } from '../../components/ui';

const stories = [
  { name: 'Vishnudharshan S', initials: 'V', color: 'bg-violet-100 text-violet-400', active: true },
  { name: 'Vetri Kalanjiyam B', initials: 'VK', color: 'bg-pink-100 text-pink-700', active: true },
  { name: 'Lokesh Kumar M S', initials: 'L', color: 'bg-teal-100 text-teal-700', active: false },
  { name: 'Amal Raajan S', initials: 'A', color: 'bg-orange-100 text-orange-700', active: false },
];

const feed = [
  {
    id: 1,
    user: 'Sriram R P',
    action: 'received Kudos for',
    target: 'Brilliant demo at the Innovation Pitch',
    time: '2 hours ago',
    likes: 24,
    comments: 5,
    icon: Star,
    color: 'text-amber-500'
  },
  {
    id: 2,
    user: 'Amal Raajan S',
    action: 'completed the',
    target: 'Sherlock Logic Discovery',
    time: '5 hours ago',
    likes: 18,
    comments: 2,
    icon: ShieldCheck,
    color: 'text-violet-600'
  },
  {
    id: 3,
    user: 'Vishnudharshan S',
    action: 'earned the',
    target: 'Curiosity Champion Badge',
    time: 'Yesterday',
    likes: 42,
    comments: 12,
    icon: Zap,
    color: 'text-emerald-500'
  },
];

export default function Community() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20">

      {/* ── Page Header ── */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-black text-white flex items-center gap-2">
          <Users className="w-6 h-6 text-violet-600" /> Community Hub
        </h1>
        <button className="p-2 border border-white/5 rounded-xl hover:bg-[#1a1a1a] transition-colors">
          <Plus className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* ── Developer Stories ── */}
      <section className="space-y-4">
        <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Developer Stories</h2>
        <div className="flex items-center gap-6 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
             <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center group-hover:bg-[#1a1a1a] border border-white/5 group-hover:border-violet-300 transition-all">
                <Plus className="w-6 h-6 text-gray-400" />
             </div>
             <span className="text-xs font-medium text-gray-400">Add Story</span>
          </div>
          {stories.map(s => (
            <div key={s.name} className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group">
               <div className={`w-16 h-16 rounded-full flex items-center justify-center font-black text-lg transition-all group-hover:scale-105 border-4 ${s.active ? 'border-violet-500' : 'border-white/5'} ${s.color}`}>
                  {s.initials}
               </div>
               <span className="text-xs font-medium text-gray-400 group-hover:text-violet-600">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <section className="space-y-4">
             <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Recent Activity</h2>
             {feed.map(item => (
               <Card key={item.id} className="p-5 hover:border-violet-100 transition-all">
                 <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                       <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center font-bold text-gray-400 text-xs shadow-inner">
                          {item.user.split(' ').map(n=>n[0]).join('')}
                       </div>
                       <div>
                          <p className="text-sm">
                             <span className="font-black text-white">{item.user}</span>
                             <span className="text-gray-500"> {item.action} </span>
                             <span className="font-bold text-violet-600">{item.target}</span>
                          </p>
                          <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wider">{item.time}</p>
                       </div>
                    </div>
                    <button className="text-gray-300 hover:text-gray-500 transition-colors">
                       <MoreHorizontal className="w-5 h-5" />
                    </button>
                 </div>

                 <div className="mt-5 flex items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-rose-500 transition-colors group">
                       <Heart className="w-4 h-4 group-hover:fill-rose-500" />
                       <span className="text-xs font-bold">{item.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-violet-600 transition-colors">
                       <MessageSquare className="w-4 h-4" />
                       <span className="text-xs font-bold">{item.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors">
                       <Share2 className="w-4 h-4" />
                    </button>
                 </div>
               </Card>
             ))}
          </section>
        </div>

        {/* Recognition Inbox */}
        <div className="space-y-6">
           <section className="space-y-4">
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Recognition Inbox</h2>
              <Card className="p-4 bg-gradient-to-br from-violet-600 to-indigo-700 text-white border-none shadow-xl shadow-violet-200">
                 <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#111111]/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                       <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-xs font-black text-violet-200 uppercase tracking-widest mb-1">From Jabbastin Akash K</p>
                       <p className="text-sm font-medium leading-relaxed italic opacity-90">
                          "Excellent catch on the logic flow in Chapter 3. Your attention to detail is truly impressive. Keep at it!"
                       </p>
                       <div className="mt-4 flex gap-2">
                          <button className="flex-1 bg-[#111111] text-violet-600 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">Thank</button>
                          <button className="flex-1 bg-transparent border border-white/30 text-white py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest">Reply</button>
                       </div>
                    </div>
                 </div>
              </Card>
           </section>

           {/* Popular Tags */}
           <Card className="p-5 border-white/5">
              <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Trending Topics</h2>
              <div className="flex flex-wrap gap-2">
                 {['#LogicHunt', '#GenAISprint', '#DailyStreak', '#MenteeSupport', '#CleanCode'].map(tag => (
                   <span key={tag} className="px-3 py-1 bg-[#1a1a1a] text-[10px] font-bold text-gray-400 rounded-lg hover:bg-[#1a1a1a] border border-white/5 hover:text-violet-600 cursor-pointer transition-all">
                      {tag}
                   </span>
                 ))}
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
}
