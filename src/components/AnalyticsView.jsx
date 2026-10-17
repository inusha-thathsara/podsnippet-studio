import React, { useState } from 'react';

export function AnalyticsView({ onSelectEpisode }) {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  const episodes = [
    {
      id: 1,
      title: "How We Built Pingora in Rust to Power Cloudflare's Edge",
      format: 'Dual-Host Deep Dive',
      duration: '03:14',
      plays: '3,840',
      retention: '88.2%',
      date: 'Oct 14, 2026',
    },
    {
      id: 2,
      title: 'Swapping Docker for Podman on Bare-Metal Servers',
      format: 'Solo Flash Teaser',
      duration: '01:02',
      plays: '1,920',
      retention: '94.5%',
      date: 'Oct 12, 2026',
    },
    {
      id: 3,
      title: 'Low-Latency Rust & Wasm on Edge Micro-Nodes',
      format: 'Dual-Host Deep Dive',
      duration: '03:28',
      plays: '2,650',
      retention: '84.0%',
      date: 'Oct 09, 2026',
    },
    {
      id: 4,
      title: 'Spoken Audio Synthesis Pipelines with Google Gemma 2',
      format: 'Dual-Host Deep Dive',
      duration: '03:05',
      plays: '4,110',
      retention: '89.6%',
      date: 'Oct 05, 2026',
    },
  ];

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto pt-2 pb-28">
      {/* Header */}
      <div className="flex flex-col gap-2 relative z-10">
        <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400">
          Micro-SaaS Metrics • Open-Source AI Side Hustle
        </span>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl font-semibold text-white tracking-tight">
              Studio Metrics &amp; Analytics
            </h1>
            <p className="text-sm text-slate-400 mt-0.5">
              Track listener retention, conversion spikes, and marginal cost savings with Gemma 2
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono">
            {['7d', '30d', 'All'].map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPeriod(p)}
                className={`px-3 py-1 rounded-lg transition-all ${
                  selectedPeriod === p
                    ? 'bg-cyan-400/20 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1 */}
        <div className="glass-card glass-specular rounded-2xl p-5 border border-white/[0.08] flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs text-slate-400 font-mono">Repurposed Articles</span>
              <div className="text-2xl font-headline font-bold text-white mt-1">18</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">article</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-4 font-mono">
            <span className="material-symbols-outlined text-sm font-bold">trending_up</span>
            <span>+38% vs last month</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="glass-card glass-specular rounded-2xl p-5 border border-white/[0.08] flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs text-slate-400 font-mono">Total Broadcast Audio</span>
              <div className="text-2xl font-headline font-bold text-white mt-1">52.4m</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/20 text-purple-300 flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">graphic_eq</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-purple-300 mt-4 font-mono">
            <span className="material-symbols-outlined text-sm font-bold">check_circle</span>
            <span>Studio Master Quality</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="glass-card glass-specular rounded-2xl p-5 border border-white/[0.08] flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs text-slate-400 font-mono">Open-Source AI Savings</span>
              <div className="text-2xl font-headline font-bold text-emerald-400 mt-1">
                $184.20
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">savings</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-4 font-mono">
            <span className="text-cyan-300 font-medium">Gemma 2</span> vs closed proprietary APIs
          </div>
        </div>

        {/* Card 4 */}
        <div className="glass-card glass-specular rounded-2xl p-5 border border-white/[0.08] flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs text-slate-400 font-mono">Average Completion</span>
              <div className="text-2xl font-headline font-bold text-white mt-1">86.4%</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/20 text-amber-300 flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">pie_chart</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-amber-300 mt-4 font-mono">
            <span className="material-symbols-outlined text-sm font-bold">bolt</span>
            <span>3.4x vs text bounce rates</span>
          </div>
        </div>
      </div>

      {/* Retention Chart & Platform Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Retention Curve (8 cols) */}
        <div className="lg:col-span-8 glass-card rounded-2xl p-6 border border-white/[0.08] space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-headline text-base font-semibold text-white">
                Audience Retention Curve
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Drop-off analysis across 3-minute Dual-Host episodes
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/30">
              86.4% Completion
            </span>
          </div>

          {/* SVG Line Curve */}
          <div className="relative w-full h-56 pt-4">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150">
              <defs>
                <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.06)" strokeDasharray="4" />
              <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(255,255,255,0.06)" strokeDasharray="4" />
              <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.06)" strokeDasharray="4" />

              {/* Area */}
              <path
                d="M 0,10 Q 120,25 250,30 T 500,42 L 500,150 L 0,150 Z"
                fill="url(#curveGradient)"
              />

              {/* Line */}
              <path
                d="M 0,10 Q 120,25 250,30 T 500,42"
                fill="none"
                stroke="#00f2fe"
                strokeWidth="3"
                className="filter drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]"
              />

              {/* Highlight Points */}
              <circle cx="120" cy="22" r="4" fill="#ffffff" stroke="#00f2fe" strokeWidth="2" />
              <circle cx="250" cy="30" r="4" fill="#ffffff" stroke="#a855f7" strokeWidth="2" />
              <circle cx="500" cy="42" r="4" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
            </svg>

            {/* Time labels */}
            <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-3 border-t border-white/[0.06]">
              <span>00:00 (100%)</span>
              <span>01:00 (Hook)</span>
              <span>02:00 (Core Tech)</span>
              <span>03:14 (86.4% Completed)</span>
            </div>
          </div>
        </div>

        {/* Platform Distribution (4 cols) */}
        <div className="lg:col-span-4 glass-card rounded-2xl p-6 border border-white/[0.08] space-y-5">
          <h3 className="font-headline text-base font-semibold text-white">
            Listener Channels
          </h3>

          <div className="space-y-4">
            {[
              { name: 'Apple Podcasts', share: '42%', color: 'from-cyan-400 to-cyan-300' },
              { name: 'Spotify Audio', share: '35%', color: 'from-emerald-400 to-emerald-300' },
              { name: 'Substack Newsletter Player', share: '15%', color: 'from-purple-400 to-purple-300' },
              { name: 'X & LinkedIn Audiograms', share: '8%', color: 'from-amber-400 to-amber-300' },
            ].map((p, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">{p.name}</span>
                  <span className="text-slate-400 font-mono">{p.share}</span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${p.color}`}
                    style={{ width: p.share }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-white/[0.06] text-xs text-slate-400 flex items-center justify-between font-mono">
            <span>RSS Auto-Syndication</span>
            <span className="text-emerald-400 font-semibold">ENABLED</span>
          </div>
        </div>
      </div>

      {/* Recent Repurposed Episodes Table */}
      <div className="glass-card rounded-2xl p-6 border border-white/[0.08] space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <h3 className="font-headline text-base font-semibold text-white">
            Recent Repurposed Episodes
          </h3>
          <span className="text-xs text-slate-400 font-mono">Auto-Saved to Cloud Cache</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/[0.06] text-slate-400 font-mono">
                <th className="pb-3 font-normal">Episode Title</th>
                <th className="pb-3 font-normal">Archetype</th>
                <th className="pb-3 font-normal">Runtime</th>
                <th className="pb-3 font-normal">Plays</th>
                <th className="pb-3 font-normal">Retention</th>
                <th className="pb-3 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {episodes.map((ep) => (
                <tr key={ep.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="py-3.5 pr-4">
                    <span className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                      {ep.title}
                    </span>
                    <span className="block text-[11px] text-slate-500 font-mono mt-0.5">
                      {ep.date}
                    </span>
                  </td>
                  <td className="py-3.5 font-mono text-slate-300">{ep.format}</td>
                  <td className="py-3.5 font-mono text-cyan-400">{ep.duration}</td>
                  <td className="py-3.5 font-mono text-slate-300">{ep.plays}</td>
                  <td className="py-3.5 font-mono text-emerald-400">{ep.retention}</td>
                  <td className="py-3.5 text-right space-x-2">
                    <button
                      onClick={() => onSelectEpisode && onSelectEpisode(ep)}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 transition-all font-mono"
                    >
                      Load
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
