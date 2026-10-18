import React from 'react';

export function TopHeader({
  hasElevenLabsKey,
  hasGemmaKey,
  onOpenSettings,
  searchQuery,
  onSearchChange,
}) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#090a10]/80 backdrop-blur-2xl border-b border-white/[0.06] z-50 flex items-center justify-between px-6 lg:px-8">
      {/* Brand & Logo */}
      <div className="flex items-center gap-3">
        <img
          alt="PodSnippet Studio Logo"
          className="h-7 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,242,254,0.35)]"
          src="https://lh3.googleusercontent.com/aida/AEtjO1VHcdwmOzmpLcOj-8XUmLMAKFysTMIL6fv9LegUG_w5f4BBL3e7mfsm1qEvbe8KrAFNSAr7eqVTkmN_wvVC6PPgvU88mZHlxQVMf5nDI_gbkwnuGmWedVDNhsWHv5yPdRhmKbRrVHL7q7d8qrcYBQ_FvQn1r4GLlrGExUNnEqrD2DaxSS4T1rjdiWv6eXKjP2u9KX6G3Vr2VUEuXbBU0SO5nZQxYnLGucmrrgbqCDe87w"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="flex items-center gap-2">
          <span className="font-headline text-base text-white font-semibold tracking-tight">
            PodSnippet Studio
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
            PROD
          </span>
        </div>
      </div>

      {/* Search Bar with ⌘K shortcut */}
      <div className="hidden md:flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-3.5 py-1.5 w-80 lg:w-96 transition-all focus-within:border-cyan-400/40 focus-within:bg-white/[0.05]">
        <span className="material-symbols-outlined text-slate-400 text-lg">search</span>
        <input
          className="w-full bg-transparent border-none text-xs text-white placeholder-slate-500 focus:outline-none"
          placeholder="Search episodes, voices, transcripts..."
          type="text"
          value={searchQuery || ''}
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
        />
        <kbd className="font-mono text-[10px] px-1.5 py-0.5 bg-white/[0.06] text-slate-400 rounded">
          ⌘K
        </kbd>
      </div>

      {/* Right Controls: AI Engine Status & User Profile */}
      <div className="flex items-center gap-4">
        {/* Connection status indicator */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.08] rounded-full px-3 py-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981] animate-pulse"></span>
          <span>Studio Engine Live</span>
        </div>

        {/* User Profile Avatar */}
        <img
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover ring-1 ring-white/20 hover:ring-cyan-400/60 transition-all cursor-pointer"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5resuaU4zjpKM7octp1DkyQb8i_fn5reWmceF-yBhMt3AcgF33hIMwJHMNih7PQplEJYz-ude2xKeISy0CTm7W2JmfAXr3Ecr5ZE2hiWPl07ZTLJFLfsU66-Bwzzi9PvHyyEHlGqgj_A3QP7t5xsDFxJk1y8ZeOBF_7gfp37sv7uBJGrvaB5aiGUK1g_DKB4H0Ok5H34PXBYByub93KAq2ubhJFx9-zmVVhZzeeaR"
        />
      </div>
    </header>
  );
}
