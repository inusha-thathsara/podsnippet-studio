import React from 'react';

export function StudioSidebar({ activeView, onViewChange, isSynthesizing, hasScript, hasAudio }) {
  const navItems = [
    {
      id: 'studio',
      label: '3D Studio Stage',
      icon: 'view_in_ar',
      badge: hasAudio ? 'Ready' : null,
      accentColor: 'text-cyan-400',
    },
    {
      id: 'script-editor',
      label: 'AI Script Editor',
      icon: 'edit_note',
      badge: hasScript ? 'Draft' : null,
      accentColor: 'text-purple-400',
    },
    {
      id: 'voice-casting',
      label: 'Voice Casting Lab',
      icon: 'record_voice_over',
      badge: null,
      accentColor: 'text-amber-400',
    },
    {
      id: 'input-source',
      label: 'Source Ingestion',
      icon: 'article',
      badge: null,
      accentColor: 'text-cyan-400',
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: 'analytics',
      badge: 'Live',
      accentColor: 'text-emerald-400',
    },
  ];

  return (
    <aside className="fixed left-0 top-16 bottom-20 w-60 bg-[#090a10]/75 backdrop-blur-2xl border-r border-white/[0.06] z-40 flex flex-col py-6 px-3">
      <nav className="flex-1 space-y-1.5">
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all text-left ${
                isActive
                  ? 'bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 shadow-[0_0_16px_rgba(0,242,254,0.12)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`material-symbols-outlined text-[19px] ${
                    isActive ? 'text-cyan-300' : item.accentColor
                  }`}
                >
                  {item.icon}
                </span>
                <span className={isActive ? 'font-semibold text-white' : 'font-normal'}>
                  {item.label}
                </span>
              </div>
              {item.badge && (
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/[0.06] text-slate-300 border border-white/[0.08]">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Synthesizer Status Footer */}
      <div className="px-3.5 pt-4 border-t border-white/[0.06] text-xs text-slate-400 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-mono text-[11px] text-slate-300">ElevenLabs Studio</span>
          <span className="text-emerald-400 font-mono text-[10px] font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            ACTIVE
          </span>
        </div>
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-slate-500">Synthesizer</span>
          <span className="text-cyan-400 font-mono font-medium">
            {isSynthesizing ? 'Synthesizing...' : 'Ready'}
          </span>
        </div>
        <div className="w-full bg-white/[0.06] rounded-full h-1 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              isSynthesizing
                ? 'w-full bg-cyan-400 animate-pulse'
                : 'w-3/4 bg-gradient-to-r from-cyan-400 to-purple-400'
            }`}
          />
        </div>
      </div>
    </aside>
  );
}
