import { Wallet as WalletIcon, ArrowUpRight, ArrowDownLeft, Coins, Gem, Zap, Clock, Search, Filter, CreditCard } from 'lucide-react';
import { Card } from '../../components/ui';

const stats = [
  { label: 'Total XP', value: '4,280', icon: Zap, color: 'text-violet-600', bg: 'bg-[#1a1a1a] border border-white/5', sub: 'Lifetime Earnings' },
  { label: 'TechCoins', value: '1,850', icon: Coins, color: 'text-indigo-600', bg: 'bg-indigo-50', sub: 'Spendable Currency' },
  { label: 'TechGems', value: '12', icon: Gem, color: 'text-violet-500', bg: 'bg-[#1a1a1a] border border-white/5', sub: 'Premium Assets' },
];

const transactions = [
  { id: 1, title: 'Innovation Pitch Prep', date: 'Oct 15, 2:30 PM', amount: '+200 XP', type: 'credit', icon: Zap, color: 'text-violet-600' },
  { id: 2, title: 'Redeemed Premium Course', date: 'Oct 14, 11:15 AM', amount: '-200 Coins', type: 'debit', icon: Coins, color: 'text-rose-500' },
  { id: 3, title: 'Peer Kudos from Amal Raajan S', date: 'Oct 13, 9:00 AM', amount: '+15 Coins', type: 'credit', icon: Coins, color: 'text-amber-500' },
  { id: 4, title: 'Daily Streak Bonus', date: 'Oct 12, 11:59 PM', amount: '+460 XP', type: 'credit', icon: Zap, color: 'text-violet-600' },
  { id: 5, title: 'Code Review Sprint', date: 'Oct 12, 5:45 PM', amount: '+50 XP', type: 'credit', icon: Zap, color: 'text-violet-600' },
];

export default function Wallet() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-20">

      {/* ── Header ── */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-white flex items-center gap-2">
            <WalletIcon className="w-6 h-6 text-violet-600" /> Digital Wallet & Assets
          </h1>
          <p className="text-sm text-gray-500 mt-1">Manage your earnings, currencies, and transaction history.</p>
        </div>
        <button className="bg-[#111111] border border-white/10 px-4 py-2 rounded-xl text-sm font-bold text-gray-400 flex items-center gap-2 hover:bg-[#1a1a1a] transition-all">
          <CreditCard className="w-4 h-4" /> Card Settings
        </button>
      </div>

      {/* ── Visual Cards Section ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <Card key={i} className="p-6 relative overflow-hidden group">
               <div className="relative z-10">
                 <div className={`w-12 h-12 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6" />
                 </div>
                 <p className="text-3xl font-black text-white">{s.value}</p>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{s.label}</p>
                 <p className="text-[10px] text-gray-400 mt-4 opacity-70">{s.sub}</p>
               </div>
               
               {/* Background abstract decoration for card feel */}
               <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Icon className="w-24 h-24" />
               </div>
            </Card>
          );
        })}
      </div>

      {/* ── Transaction Feed ── */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 px-1">
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" /> Recent Activity
          </h2>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input type="text" placeholder="Search history..." className="pl-9 pr-4 py-2 border border-white/5 bg-[#1a1a1a] rounded-xl text-xs outline-none focus:ring-2 focus:ring-violet-500 w-48 transition-all" />
            </div>
            <button className="p-2 border border-white/5 rounded-xl bg-[#1a1a1a] text-gray-400 hover:text-violet-600 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-[#111111] rounded-3xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden">
           <table className="w-full text-left">
              <thead className="bg-[#1a1a1a]/50 border-b border-white/5">
                 <tr>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Transaction</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Amount</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                 {transactions.map((t) => {
                   const Icon = t.icon;
                   return (
                     <tr key={t.id} className="hover:bg-[#1a1a1a]/30 transition-colors cursor-pointer group">
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#111111] transition-colors`}>
                                 <Icon className={`w-5 h-5 ${t.color}`} />
                              </div>
                              <div>
                                 <p className="text-sm font-bold text-white">{t.title}</p>
                                 <p className="text-[10px] text-gray-400 font-bold mt-0.5">{t.date}</p>
                              </div>
                           </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                           <div className="inline-flex flex-col items-end">
                              <p className={`text-sm font-black ${t.type === 'credit' ? 'text-emerald-600' : 'text-rose-500'}`}>
                                 {t.amount}
                              </p>
                              <div className="flex items-center gap-1 mt-0.5">
                                 {t.type === 'credit' ? <ArrowDownLeft className="w-3 h-3 text-emerald-500" /> : <ArrowUpRight className="w-3 h-3 text-rose-500" />}
                                 <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.type}</span>
                              </div>
                           </div>
                        </td>
                     </tr>
                   );
                 })}
              </tbody>
           </table>
           <div className="px-6 py-4 bg-[#1a1a1a]/30 text-center">
              <button className="text-[10px] font-black text-violet-600 uppercase tracking-widest hover:underline">
                 View Full Transaction Log
              </button>
           </div>
        </div>
      </section>

    </div>
  );
}
