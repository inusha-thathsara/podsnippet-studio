import React, { useState } from 'react';

export function ScriptEditorView({
  scriptData,
  onUpdateSoloScript,
  onUpdateDuoTurn,
  onAddDuoTurn,
  onRegenerateScript,
  isGeneratingScript,
  onNavigateToVoiceCasting,
  selectedMode,
  articleTitle,
}) {
  const [editingIndex, setEditingIndex] = useState(null);

  const turns = scriptData?.turns || [];
  const soloText = scriptData?.scriptText || '';
  const isSolo = selectedMode === 'solo' || !turns.length;

  // Calculate stats
  const totalWords = isSolo
    ? soloText.split(/\s+/).filter(Boolean).length
    : turns.reduce((acc, t) => acc + (t.text || '').split(/\s+/).filter(Boolean).length, 0);

  const estDurationSecs = Math.round((totalWords / 150) * 60) || (isSolo ? 60 : 194);
  const estMins = Math.floor(estDurationSecs / 60);
  const estSecs = estDurationSecs % 60;
  const estTimeFormatted = `${String(estMins).padStart(2, '0')}:${String(estSecs).padStart(2, '0')}`;

  const alexAvatar =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAvStxvHH8Ia89-2oOjgpolHm5GPXxi7ljd4S-Il9Iylb_vPVAzjIWHpwwE5dRm2xTAj6lsNmcMZ91dOdX_PBtJqRSs6A0ySUZ8gQWzuv--nzv8bEwlH7-RxmngnKLF_sVL1ySxWO0MXUILWSLWQytVbDXP82KMEeShViVo65EFkXm1OEpj0z0ahG4Bo26GVuMv27wceosV0dwASQJRrWkpzGm-u_SBMyUN8aUJINN2';
  const samAvatar =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBc40bF0omU-caXomvw5hwQbATVvZyuzSqwEzhCp1Efy63HeaIzNBDzupSLS6i5b6MJ1PDp6hYenOKvNNvfZPvq37oAcN_UohdATeGGSdl-zR0TQ_UQE7SdOaxkNAEm4qssUFZA_J7aQmWKcNH2Qsao0_1P9FDngdPAmw-Dbn7lOSQi07mtlaklx0hSvmy29ysYQE9Z6Kn8p-qfXtidRulx6EioE5Fu4MDJRChdheYS';

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto pt-2 pb-24">
      {/* Header */}
      <div className="flex flex-col gap-2 relative z-10">
        <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400">
          Narrative Pacing • Google Gemma 2 (Open-Weight)
        </span>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl font-semibold text-white tracking-tight">
              AI Script Editor
            </h1>
            <p className="text-sm text-slate-400 mt-0.5">
              Review dialogue pacing, refine punchlines, or adjust technical phrasing
            </p>
          </div>

          <button
            onClick={onRegenerateScript}
            disabled={isGeneratingScript}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] text-xs font-medium text-slate-200 transition-all self-start sm:self-auto disabled:opacity-50"
          >
            <span
              className={`material-symbols-outlined text-[16px] text-cyan-400 ${
                isGeneratingScript ? 'animate-spin' : ''
              }`}
            >
              refresh
            </span>
            <span>{isGeneratingScript ? 'Regenerating...' : 'Regenerate with Gemma 2'}</span>
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="glass-card glass-specular rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 border border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-300">
            <span className="material-symbols-outlined text-lg">description</span>
          </div>
          <div>
            <div className="text-xs font-semibold text-white truncate max-w-md font-headline">
              {articleTitle || 'Episode Script'}
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              {isSolo ? 'Solo Format' : `${turns.length} Turn Dialogue`} • {totalWords} words
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2">
            <span className="text-slate-400">Estimated Duration:</span>
            <span className="text-cyan-300 font-semibold">{estTimeFormatted}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-emerald-400 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Speech Optimized</span>
          </div>
        </div>
      </div>

      {/* Script Turns or Solo Editor */}
      {!isSolo && turns.length > 0 ? (
        <div className="flex flex-col gap-4">
          {turns.map((turn, idx) => {
            const isAlex = turn.speaker?.toLowerCase().includes('alex') || idx % 2 === 0;
            const speakerName = isAlex ? 'Alex' : 'Sam';
            const speakerRole = isAlex ? 'Systems Lead' : 'Conversational';
            const accentBorder = isAlex ? 'border-cyan-400/30' : 'border-purple-400/30';
            const accentBg = isAlex ? 'bg-cyan-950/20' : 'bg-purple-950/20';
            const pillColor = isAlex
              ? 'bg-cyan-950/40 border-cyan-400/40 text-cyan-300'
              : 'bg-purple-950/40 border-purple-400/40 text-purple-300';
            const avatar = isAlex ? alexAvatar : samAvatar;
            const turnWords = (turn.text || '').split(/\s+/).filter(Boolean).length;
            const turnEstSeconds = Math.round((turnWords / 150) * 60) || 5;

            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl p-5 border ${accentBorder} ${accentBg} transition-all duration-200 relative group`}
              >
                {/* Speaker Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={avatar}
                      alt={speakerName}
                      className="w-8 h-8 rounded-full object-cover ring-1 ring-white/20"
                    />
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${pillColor} font-medium flex items-center gap-1.5`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isAlex ? 'bg-cyan-400' : 'bg-purple-400'
                          }`}
                        />
                        {speakerName}
                      </span>
                      <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                        • {speakerRole}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <span>Turn #{idx + 1}</span>
                    <span>•</span>
                    <span className="text-slate-400">~{turnEstSeconds}s</span>
                  </div>
                </div>

                {/* Turn Text Area */}
                <textarea
                  value={turn.text}
                  onChange={(e) => onUpdateDuoTurn(idx, e.target.value)}
                  rows={Math.max(2, Math.ceil((turn.text?.length || 50) / 75))}
                  className="w-full bg-black/30 border border-white/[0.06] rounded-xl p-3.5 text-slate-200 text-sm font-body leading-relaxed focus:outline-none focus:border-cyan-400/50 resize-y transition-all"
                />
              </div>
            );
          })}

          {/* Add Dialogue Turn Button */}
          <button
            onClick={onAddDuoTurn}
            className="w-full py-4 rounded-2xl border border-dashed border-white/15 hover:border-cyan-400/40 bg-white/[0.02] hover:bg-white/[0.04] text-slate-400 hover:text-cyan-300 text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>Add Dialogue Turn</span>
          </button>
        </div>
      ) : (
        /* Solo Narrator Script Editor */
        <div className="glass-card rounded-2xl p-6 border border-cyan-400/30 bg-cyan-950/10 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <img
                src={alexAvatar}
                alt="Solo Narrator"
                className="w-8 h-8 rounded-full object-cover ring-1 ring-cyan-400/30"
              />
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-medium">
                Solo Flash Narrator • 60s Fast Recap
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono">{totalWords} words</span>
          </div>

          <textarea
            value={soloText}
            onChange={(e) => onUpdateSoloScript(e.target.value)}
            rows={10}
            className="w-full bg-black/40 border border-white/[0.08] rounded-xl p-4 text-slate-200 text-sm font-body leading-relaxed focus:outline-none focus:border-cyan-400/50 resize-y"
            placeholder="Write or edit your 60-second audio teaser script..."
          />
        </div>
      )}

      {/* Floating Bottom Action Deck */}
      <div className="fixed bottom-24 left-60 right-0 z-30 flex justify-center px-6 pointer-events-none">
        <div className="w-full max-w-4xl p-3.5 rounded-2xl bg-[#11131c]/90 backdrop-blur-2xl border border-white/[0.1] shadow-2xl flex items-center justify-between gap-4 pointer-events-auto">
          <div className="flex items-center gap-3 pl-2">
            <span className="material-symbols-outlined text-emerald-400 text-lg">graphic_eq</span>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-white font-mono font-medium">
                {totalWords * 5} Characters
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-mono">
                ≈ ${( (totalWords * 5) / 1000 * 0.03 ).toFixed(2)} inference
              </span>
            </div>
          </div>

          <button
            onClick={onNavigateToVoiceCasting}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 hover:brightness-105 text-[#002022] font-semibold text-xs tracking-tight transition-all flex items-center gap-2 shadow-lg shadow-cyan-400/20 active:scale-[0.99]"
          >
            <span>Proceed to Voice Casting</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
