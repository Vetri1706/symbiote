import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  return (
    <div className="group/sidebar flex h-screen w-full bg-[#030303] overflow-hidden text-gray-200 font-sans">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 pl-[76px] group-hover/sidebar:pl-[260px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
        <Header />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
