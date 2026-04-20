import { Card, ProgressBar } from '../../components/ui';
import { HeartPulse, BedDouble, Wind, Coffee, ZapOff } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Wellness() {
  const burnoutData = [
    { name: 'Week 1', risk: 20 },
    { name: 'Week 2', risk: 35 },
    { name: 'Week 3', risk: 60 },
    { name: 'Week 4', risk: 45 },
  ];

  return (
    <div className="space-y-6 max-w-6xl">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-white">Wellness & Analytics</h1>
          <p className="text-gray-400">Monitor your work-life balance and burnout risk.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-5 flex flex-col items-center text-center justify-center bg-[#1a1a1a] shadow-inner/50 border-blue-100">
          <BedDouble className="w-8 h-8 text-blue-500 mb-3" />
          <h3 className="text-sm font-semibold text-gray-400">Average Sleep</h3>
          <p className="text-2xl font-black text-white">7.2 <span className="text-sm font-medium">hrs</span></p>
        </Card>
        
        <Card className="p-5 flex flex-col items-center text-center justify-center bg-[#0a0a0a] border border-white/5/50 border-success-100">
          <Wind className="w-8 h-8 text-success-500 mb-3" />
          <h3 className="text-sm font-semibold text-gray-400">Deep Focus</h3>
          <p className="text-2xl font-black text-white">4.5 <span className="text-sm font-medium">hrs/day</span></p>
        </Card>

        <Card className="p-5 flex flex-col items-center text-center justify-center bg-orange-50/50 border-orange-100">
          <Coffee className="w-8 h-8 text-orange-500 mb-3" />
          <h3 className="text-sm font-semibold text-gray-400">Break Intervals</h3>
          <p className="text-2xl font-black text-white">3 <span className="text-sm font-medium">per day</span></p>
        </Card>

        <Card className="p-5 flex flex-col items-center text-center justify-center bg-purple-50/50 border-purple-100">
          <ZapOff className="w-8 h-8 text-purple-500 mb-3" />
          <h3 className="text-sm font-semibold text-gray-400">Weekend Activity</h3>
          <p className="text-2xl font-black text-white mt-1">Minimal</p>
          <span className="text-xs text-gray-300 bg-success-100 px-2 py-0.5 rounded mt-1">Optimal</span>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2"><HeartPulse className="w-5 h-5 text-alert-500"/> Burnout Risk Velocity</h2>
              <p className="text-xs text-gray-400 mt-1">Calculated via consecutive hours logged without breaks.</p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={burnoutData}>
                <defs>
                  <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px -2px rgba(0,0,0,0.1)' }}/>
                <Area type="monotone" dataKey="risk" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorRisk)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        <Card className="p-6 flex flex-col justify-center">
            <h3 className="font-bold text-lg mb-2">Automated Advice</h3>
            <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl mb-4">
              <p className="text-sm font-medium text-orange-800">You peaked at a 60% risk index in Week 3. Consider deferring non-essential tasks to next week.</p>
            </div>
            <button className="w-full py-2 bg-neutral-800 text-white rounded-lg font-bold text-sm shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:bg-neutral-700 transition">
              Schedule Sync With Manager
            </button>
        </Card>
      </div>
    </div>
  );
}
