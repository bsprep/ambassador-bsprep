"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { LayoutDashboard, Users, Target, ShieldAlert, Bell, UserCog, Sun, Moon } from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Ambassadors", href: "/admin/ambassadors", icon: UserCog },
    { name: "Leaderboard", href: "/admin/leaderboard", icon: Users },
    { name: "Bounty Review", href: "/admin/bounties", icon: Target },
    { name: "Announcements", href: "/admin/announcements", icon: Bell },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-[#0a0a0a] text-black dark:text-white border-r border-slate-200 dark:border-white/10 h-screen sticky top-0 flex flex-col uppercase tracking-widest font-semibold text-xs shrink-0 hidden md:flex transition-colors">
      <div className="p-6 border-b border-slate-200 dark:border-white/5 flex items-center gap-3">
        <div className="relative w-8 h-8 shrink-0">
          <Image src="/bsprep.png" alt="BSPrep Logo" fill className="object-contain" />
        </div>
        <div className="flex flex-col">
          <span className="text-black dark:text-white">BSPrep</span>
          <span className="text-[9px] text-[#273E57] font-bold flex items-center gap-1 mt-0.5">
            <ShieldAlert size={10} /> ADMIN PANEL
          </span>
        </div>
      </div>

      <nav className="flex-1 py-6 flex flex-col gap-2 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? "bg-[#273E57] text-white shadow-md shadow-[#273E57]/20" 
                  : "text-slate-500 hover:bg-slate-50 dark:text-white/50 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
              }`}
            >
              <item.icon size={18} className={isActive ? "opacity-100" : "opacity-50"} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 mt-auto border-t border-slate-200 dark:border-white/5">
         <div className="flex items-center justify-between px-4 py-3 mb-2">
           <span className="text-[10px] opacity-50">THEME</span>
           <button 
             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
             className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
           >
             <Sun size={14} className="hidden dark:block" />
             <Moon size={14} className="block dark:hidden" />
           </button>
         </div>
         <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 dark:text-white/50 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-all w-full"
          >
            Switch to User View
         </Link>
      </div>
    </aside>
  );
}
