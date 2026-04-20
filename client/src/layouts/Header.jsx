import { Bell, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-[#0a0a0a] border-b border-white/5 flex items-center justify-between px-8 shrink-0 z-10 shadow-md">
      <h1 className="text-[17px] font-medium text-white tracking-wide">Dashboard</h1>

      <div className="flex items-center gap-5">
        {/* Company toggle */}
        <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
          Company
          <div className="w-9 h-5 bg-[#222] rounded-full relative cursor-pointer border border-white/10">
            <div className="absolute right-0.5 top-0.5 w-3.5 h-3.5 bg-violet-500 rounded-full shadow-md" />
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
          <input
            type="text"
            className="bg-[#111111] border border-white/5 text-gray-200 text-xs rounded-full pl-9 pr-4 py-2 w-56 outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500 transition-all placeholder:text-gray-600 shadow-inner"
            placeholder="Search..."
          />
        </div>

        {/* Bell */}
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
          <Bell className="w-[18px] h-[18px]" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-violet-500 rounded-full" />
        </button>
      </div>
    </header>
  );
}
