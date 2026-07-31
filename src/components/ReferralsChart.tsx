"use client";

import React, { useMemo } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

interface Referral {
  created_at: string;
  referred_user_email: string;
}

interface ReferralsChartProps {
  referrals: Referral[];
}

export default function ReferralsChart({ referrals }: ReferralsChartProps) {
  const chartData = useMemo(() => {
    if (!referrals || referrals.length === 0) return [];
    
    // Group referrals by date (YYYY-MM-DD)
    const grouped = referrals.reduce((acc, curr) => {
      const date = new Date(curr.created_at).toISOString().split('T')[0];
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    // Sort dates
    const sortedDates = Object.keys(grouped).sort();
    
    if (sortedDates.length === 0) return [];

    const firstDate = new Date(sortedDates[0]);
    const lastDate = new Date();
    
    const data = [];
    let cumulative = 0;
    
    // Create a data point for every day between first referral and today
    for (let d = new Date(firstDate); d <= lastDate; d.setDate(d.getDate() + 1)) {
      const dateStr = d.toISOString().split('T')[0];
      const count = grouped[dateStr] || 0;
      cumulative += count;
      
      data.push({
        date: d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        newReferrals: count,
        totalReferrals: cumulative
      });
    }
    
    return data;
  }, [referrals]);

  if (chartData.length === 0) {
    return null; // Don't show chart if no data
  }

  return (
    <div className="bg-white dark:bg-[#1A1A1A] border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-sm mb-6 transition-colors">
      <div className="mb-6">
        <h2 className="text-lg text-black dark:text-white tracking-tight">Referral Growth</h2>
        <p className="text-[10px] normal-case font-medium opacity-60">Cumulative referrals over time.</p>
      </div>
      
      <div className="h-64 w-full text-black dark:text-white">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#273E57" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#273E57" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="opacity-10" />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: "currentColor" }}
              className="opacity-50 font-semibold uppercase tracking-widest"
              minTickGap={20}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: "currentColor" }}
              className="opacity-50 font-semibold"
              allowDecimals={false}
            />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white dark:bg-[#1A1A1A] border border-slate-200 dark:border-white/10 p-3 rounded-xl shadow-lg">
                      <p className="text-[10px] uppercase font-bold tracking-widest opacity-60 mb-2">{label}</p>
                      <p className="text-[#273E57] dark:text-blue-400 text-sm font-bold">Total: {payload[0].value}</p>
                      <p className="text-xs normal-case opacity-60 font-medium mt-1">+{payload[0].payload.newReferrals} new that day</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area 
              type="monotone" 
              dataKey="totalReferrals" 
              stroke="#273E57" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorTotal)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
