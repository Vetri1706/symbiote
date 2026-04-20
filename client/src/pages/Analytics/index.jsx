import React from 'react';
import { Card } from '../../components/ui';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import { TrendingUp, CheckCircle, Zap, Activity, Clock } from 'lucide-react';

const COLORS = ['#3b82f6', '#8b5cf6', '#f97316', '#10b981', '#eab308'];

const StatCard = ({ icon: Icon, title, value, change, color }) => (
  <Card className="p-6">
    <div className="flex items-start justify-between">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className={`text-[10px] font-black px-2 py-0.5 rounded-full ${change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
        {change}
      </div>
    </div>
    <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest mt-4">{title}</p>
    <h3 className="text-2xl font-black text-white mt-1">{value}</h3>
  </Card>
);

export default function Analytics() {
  const trendData = [
    { name: 'W1', score: 6200, xp: 5800 },
    { name: 'W2', score: 7100, xp: 6400 },
    { name: 'W3', score: 7850, xp: 7200 },
    { name: 'W4', score: 8200, xp: 7900 },
    { name: 'W5', score: 8900, xp: 8500 },
    { name: 'W6', score: 9200, xp: 8950 },
    { name: 'W7', score: 10000, xp: 9800 },
  ];

  const activityData = [
    { day: 'Mon', active: 400 },
    { day: 'Tue', active: 100 },
    { day: 'Wed', active: 300 },
    { day: 'Thu', active: 250 },
    { day: 'Fri', active: 200 },
    { day: 'Sat', active: 450 },
    { day: 'Sun', active: 380 },
  ];

  const categoryData = [
    { name: 'Engineering', value: 42, color: '#3b82f6' },
    { name: 'Leadership', value: 25, color: '#8b5cf6' },
    { name: 'Product', value: 18, color: '#f97316' },
    { name: 'Quality', value: 10, color: '#10b981' },
    { name: 'Learning', value: 5, color: '#eab308' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20 px-4 animate-in fade-in duration-700">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-black text-white">Advanced Analytics</h1>
          <p className="text-gray-500 mt-2 font-medium">Quantifying your evolutionary behavior patterns.</p>
        </div>
        <div className="flex gap-2 bg-[#111111] p-1 rounded-xl border border-white/5">
           {['7 days', '30 days', 'All time'].map(t => (
             <button key={t} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${t === '7 days' ? 'bg-violet-600 text-white' : 'text-gray-500 hover:text-white'}`}>
               {t}
             </button>
           ))}
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={TrendingUp} title="Avg Daily Score" value="1,403" change="+8.2%" color="bg-blue-500" />
        <StatCard icon={Activity} title="Tasks / Week" value="18.1" change="+12%" color="bg-emerald-500" />
        <StatCard icon={CheckCircle} title="Goals On Track" value="4 / 6" change="67%" color="bg-orange-500" />
        <StatCard icon={Zap} title="Total XP Earned" value="8,450" change="+1,550 wk" color="bg-violet-500" />
      </div>

      {/* Main Trend Chart */}
      <Card className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
               <Activity className="w-4 h-4 text-emerald-500" /> Score Trend (Last 7 Weeks)
            </h2>
          </div>
          <div className="flex gap-4">
             <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-tighter">XP Earned</span>
             </div>
             <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-tighter">Score</span>
             </div>
          </div>
        </div>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorXP" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#4b5563', fontSize: 11, fontWeight: 700}} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#4b5563', fontSize: 11, fontWeight: 700}}
                dx={-10}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }} 
                itemStyle={{ fontSize: '11px', fontWeight: 900, textTransform: 'uppercase' }}
              />
              <Area type="monotone" dataKey="xp" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorXP)" />
              <Area type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Daily Activity */}
        <Card className="p-8">
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
             <Clock className="w-4 h-4 text-violet-500" /> Daily Activity (This Week)
          </h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#4b5563', fontSize: 11, fontWeight: 700}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#4b5563', fontSize: 11, fontWeight: 700}} dx={-10} />
                <Tooltip cursor={{fill: 'rgba(255,255,255,0.02)'}} contentStyle={{ borderRadius: '16px', backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.05)' }} />
                <Bar dataKey="active" fill="#8b5cf6" radius={[6, 6, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Performance by Category */}
        <Card className="p-8">
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
             <TrendingUp className="w-4 h-4 text-orange-500" /> Performance by Category
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
             <div className="w-48 h-48 flex-shrink-0">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                   <Pie
                     data={categoryData}
                     cx="50%"
                     cy="50%"
                     innerRadius={60}
                     outerRadius={80}
                     paddingAngle={8}
                     dataKey="value"
                   >
                     {categoryData.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={entry.color} />
                     ))}
                   </Pie>
                   <Tooltip contentStyle={{ borderRadius: '16px', backgroundColor: '#111111', border: 'none' }} />
                 </PieChart>
               </ResponsiveContainer>
             </div>
             <div className="flex-1 w-full space-y-4">
                {categoryData.map((cat, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
                       <div className="flex items-center gap-2 text-gray-400">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                          {cat.name}
                       </div>
                       <span className="text-white">{cat.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
                       <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${cat.value}%`, backgroundColor: cat.color }} />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </Card>

      </div>

    </div>
  );
}
