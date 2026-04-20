import { Card, ProgressBar } from '../../components/ui';
import { AlertTriangle, ShieldAlert, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Accountability() {
  const penalties = [
    { id: 1, type: 'Missed Deadline', context: 'Project Titan Wireframes', penalty: 50, date: '10/24/2026', resolved: false },
    { id: 2, type: 'Code Quality', context: 'Failed 3 CI/CD checks consecutively', penalty: 20, date: '10/21/2026', resolved: true },
    { id: 3, type: 'Unresponsive', context: 'Ignored critical P0 Slack alert for 4 hours', penalty: 100, date: '09/15/2026', resolved: true },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-white">Accountability Center</h1>
          <p className="text-gray-400">A transparent look at missed objectives and system penalties.</p>
        </div>
        <div className="flex gap-2 text-sm font-semibold">
          <div className="bg-orange-50 text-orange-600 px-3 py-1 rounded-md border border-orange-100 flex items-center">
            <AlertTriangle className="w-4 h-4 mr-1" /> 1 Active Penalty
          </div>
          <div className="bg-[#0a0a0a] border border-white/5 text-gray-300 px-3 py-1 rounded-md border border-success-100 flex items-center">
            <ShieldCheck className="w-4 h-4 mr-1" /> 98% Adherence Rate
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6 md:col-span-2">
          <h2 className="text-lg font-bold text-white mb-4">Recent Infractions</h2>
          <div className="space-y-4">
            {penalties.map((item) => (
              <div key={item.id} className={`p-4 rounded-xl border ${item.resolved ? 'bg-[#1a1a1a] border-white/5' : 'bg-orange-50 border-orange-200'}`}>
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className={`mt-1 ${item.resolved ? 'text-gray-500' : 'text-orange-500'}`}>
                      {item.resolved ? <CheckCircle className="w-5 h-5"/> : <AlertTriangle className="w-5 h-5"/>}
                    </div>
                    <div>
                      <h4 className={`font-bold ${item.resolved ? 'text-gray-300' : 'text-orange-800'}`}>{item.type}</h4>
                      <p className={`text-sm mt-1 ${item.resolved ? 'text-gray-400' : 'text-orange-600/80'}`}>{item.context}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block font-black text-lg text-white">-{item.penalty} XP</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6 bg-gradient-to-br from-neutral-800 to-neutral-900 border-none text-white">
            <ShieldAlert className="w-8 h-8 text-gray-500 mb-4" />
            <h3 className="font-bold text-lg mb-2">System Rules</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Penalties are automatically issued by the Rules Engine when critical thresholds (e.g., deadlines, SLAs) are breached. Multiple penalties degrade user Tier status.
            </p>
            <div className="bg-neutral-800 p-3 rounded flex items-center justify-between text-sm">
              <span className="font-semibold text-neutral-300">Tier Protection</span>
              <span className="text-success-400 font-bold">Active</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
