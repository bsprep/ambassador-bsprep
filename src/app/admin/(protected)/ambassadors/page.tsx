"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Search, Loader2, Edit2, Ban, CheckCircle, ShieldAlert } from "lucide-react";

export default function AmbassadorsManagementPage() {
  const [ambassadors, setAmbassadors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [editingPoints, setEditingPoints] = useState<string | null>(null);
  const [newPoints, setNewPoints] = useState<number>(0);
  
  const supabase = createClient();

  const fetchAmbassadors = async () => {
    setLoading(true);
    // Note: Assuming 'is_banned' is added to the table by the user. If it fails, it will just log an error.
    const { data, error } = await supabase
      .from("ambassadors")
      .select("id, name, email, points, referral_code, is_admin, is_banned")
      .order("points", { ascending: false });
      
    if (error) {
      console.error("Error fetching ambassadors:", error);
    } else {
      setAmbassadors(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAmbassadors();
  }, []);

  const handleUpdatePoints = async (id: string) => {
    setActionLoading(id);
    const { error } = await supabase
      .from("ambassadors")
      .update({ points: newPoints })
      .eq("id", id);
      
    if (!error) {
      setAmbassadors(prev => prev.map(a => a.id === id ? { ...a, points: newPoints } : a));
      setEditingPoints(null);
    } else {
      alert("Failed to update points: " + error.message);
    }
    setActionLoading(null);
  };

  const handleToggleBan = async (id: string, currentBanStatus: boolean) => {
    // If is_banned column doesn't exist, this will fail. We warn the user in the plan.
    if (!confirm(`Are you sure you want to ${currentBanStatus ? 'unban' : 'ban'} this user?`)) return;
    
    setActionLoading(id + "-ban");
    const { error } = await supabase
      .from("ambassadors")
      .update({ is_banned: !currentBanStatus })
      .eq("id", id);
      
    if (!error) {
      setAmbassadors(prev => prev.map(a => a.id === id ? { ...a, is_banned: !currentBanStatus } : a));
    } else {
      alert("Failed to update ban status. Did you add the 'is_banned' boolean column in Supabase? Error: " + error.message);
    }
    setActionLoading(null);
  };

  const filteredAmbassadors = ambassadors.filter(a => 
    (a.name?.toLowerCase() || "").includes(searchQuery.toLowerCase()) || 
    (a.email?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
    (a.referral_code?.toLowerCase() || "").includes(searchQuery.toLowerCase())
  );

  return (
    <main className="p-4 sm:p-6 md:p-8 max-w-7xl w-full font-semibold uppercase tracking-widest text-black dark:text-white">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl mb-2 text-black dark:text-white tracking-tight">
            Ambassadors Management
          </h1>
          <p className="text-[10px] sm:text-xs normal-case font-medium opacity-60 max-w-xl leading-relaxed">
            Manage all ambassadors, manually adjust points, or ban accounts for fraud.
          </p>
        </div>
        
        <div className="relative w-full md:w-64 shrink-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search size={14} />
          </div>
          <input
            type="text"
            placeholder="Search by name, email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-[#1A1A1A] border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs normal-case outline-none focus:border-[#273E57] transition-colors shadow-sm"
          />
        </div>
      </div>

      {loading ? (
        <div className="py-20 flex justify-center text-[#273E57]">
          <Loader2 className="animate-spin" size={32} />
        </div>
      ) : (
        <div className="bg-white dark:bg-[#1A1A1A] border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-sm overflow-x-auto transition-colors">
          <table className="w-full text-left text-xs min-w-[800px]">
            <thead className="text-[10px] text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-white/5">
              <tr>
                <th className="pb-4 px-2 font-medium">Name & Email</th>
                <th className="pb-4 px-2 font-medium">Ref Code</th>
                <th className="pb-4 px-2 font-medium">Status</th>
                <th className="pb-4 px-2 font-medium">Points</th>
                <th className="pb-4 px-2 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAmbassadors.map((ambassador) => (
                <tr key={ambassador.id} className={`border-b border-slate-50 dark:border-white/5 last:border-0 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors ${ambassador.is_banned ? 'opacity-50' : ''}`}>
                  <td className="py-4 px-2">
                    <div className="flex flex-col">
                      <span className="font-bold flex items-center gap-2">
                        {ambassador.name || "Unknown"}
                        {ambassador.is_admin && <span className="text-[8px] bg-[#273E57] text-white px-1.5 py-0.5 rounded uppercase tracking-wider">ADMIN</span>}
                      </span>
                      <span className="text-[10px] normal-case opacity-60 font-medium">{ambassador.email}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2 font-mono text-[10px] opacity-60">
                    {ambassador.referral_code}
                  </td>
                  <td className="py-4 px-2">
                    {ambassador.is_banned ? (
                      <span className="text-red-500 bg-red-50 dark:bg-red-500/10 px-2 py-1 rounded-md text-[9px] font-bold">BANNED</span>
                    ) : (
                      <span className="text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-md text-[9px] font-bold">ACTIVE</span>
                    )}
                  </td>
                  <td className="py-4 px-2">
                    {editingPoints === ambassador.id ? (
                      <div className="flex items-center gap-2">
                        <input 
                          type="number" 
                          value={newPoints}
                          onChange={(e) => setNewPoints(Number(e.target.value))}
                          className="w-16 bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-md px-2 py-1 text-xs normal-case outline-none"
                        />
                        <button 
                          onClick={() => handleUpdatePoints(ambassador.id)}
                          disabled={actionLoading === ambassador.id}
                          className="bg-green-500 text-white p-1 rounded hover:bg-green-600 disabled:opacity-50 transition-colors"
                        >
                          {actionLoading === ambassador.id ? <Loader2 size={12} className="animate-spin" /> : <CheckCircle size={12} />}
                        </button>
                      </div>
                    ) : (
                      <div className="font-bold text-[#273E57] text-sm">
                        {ambassador.points}
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-2 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => {
                          setEditingPoints(ambassador.id);
                          setNewPoints(ambassador.points);
                        }}
                        className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                        title="Edit Points"
                      >
                        <Edit2 size={14} />
                      </button>
                      <button 
                        onClick={() => handleToggleBan(ambassador.id, !!ambassador.is_banned)}
                        disabled={actionLoading === ambassador.id + "-ban" || ambassador.is_admin}
                        className={`p-1.5 rounded-lg border transition-colors ${
                          ambassador.is_banned 
                            ? "border-green-200 text-green-500 hover:bg-green-50 dark:border-green-500/20 dark:hover:bg-green-500/10" 
                            : "border-red-200 text-red-500 hover:bg-red-50 dark:border-red-500/20 dark:hover:bg-red-500/10"
                        } disabled:opacity-30`}
                        title={ambassador.is_banned ? "Unban Account" : "Ban Account"}
                      >
                        {actionLoading === ambassador.id + "-ban" ? (
                          <Loader2 size={14} className="animate-spin" />
                        ) : ambassador.is_banned ? (
                          <ShieldAlert size={14} />
                        ) : (
                          <Ban size={14} />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {filteredAmbassadors.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-10 text-center opacity-50 normal-case text-xs">
                    No ambassadors found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
