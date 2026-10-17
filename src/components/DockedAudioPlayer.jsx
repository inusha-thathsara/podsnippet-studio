import React, { useState, useEffect, useRef } from 'react';

export function DockedAudioPlayer({
  audioData,
  articleTitle,
  selectedMode,
  onExport,
  currentTime,
  duration,
  isPlaying,
  onTogglePlay,
  onSeek,
}) {
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const progressBarRef = useRef(null);

  const displayTitle = articleTitle || 'Kubernetes vs Nomad: The Edge Dilemma';
  const displayMode = selectedMode === 'solo' ? 'Solo Flash' : 'Dual-Host';

  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleProgressBarClick = (e) => {
    if (!progressBarRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    onSeek(ratio * duration);
  };

  const currentPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-[#090a10]/85 backdrop-blur-2xl z-50 flex items-center justify-between px-6 lg:px-8 border-t border-white/[0.06]">
      {/* Left: Track Information */}
      <div className="flex items-center gap-3.5 w-1/4 min-w-[220px] max-w-sm">
        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_12px_rgba(0,242,254,0.15)]">
          <span className="material-symbols-outlined text-[20px] animate-pulse">
            graphic_eq
          </span>
        </div>
        <div className="flex flex-col truncate">
          <span className="text-xs text-white font-medium truncate font-headline">
            {displayTitle}
          </span>
          <span className="text-[11px] text-slate-400 font-mono mt-0.5">
            {displayMode} • {formatTime(duration || 194)}
          </span>
        </div>
      </div>

      {/* Center: Transport Controls & Scrubber */}
      <div className="flex flex-col items-center flex-1 max-w-xl px-4">
        {/* Buttons */}
        <div className="flex items-center gap-4 mb-1.5">
          <button
            onClick={() => onSeek(Math.max(0, currentTime - 5))}
            className="text-slate-400 hover:text-white transition-colors p-1"
            title="Rewind 5s"
          >
            <span className="material-symbols-outlined text-[19px]">replay_5</span>
          </button>

          <button
            onClick={onTogglePlay}
            className="w-9 h-9 rounded-full bg-cyan-400 text-black font-semibold flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_0_14px_rgba(0,242,254,0.45)] cursor-pointer"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            <span className="material-symbols-outlined text-[20px] font-bold">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>

          <button
            onClick={() => onSeek(Math.min(duration || 194, currentTime + 5))}
            className="text-slate-400 hover:text-white transition-colors p-1"
            title="Forward 5s"
          >
            <span className="material-symbols-outlined text-[19px]">forward_5</span>
          </button>
        </div>

        {/* Scrubber Bar */}
        <div className="w-full flex items-center gap-3">
          <span className="font-mono text-[10px] text-cyan-400 w-9 text-right">
            {formatTime(currentTime)}
          </span>
          <div
            ref={progressBarRef}
            onClick={handleProgressBarClick}
            className="flex-1 h-1.5 bg-white/[0.08] rounded-full relative flex items-center overflow-hidden cursor-pointer group"
          >
            <div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-75"
              style={{ width: `${currentPercent}%` }}
            />
            {/* Playhead thumb hover glow */}
            <div
              className="absolute h-3 w-1.5 bg-white rounded-full shadow-[0_0_6px_#00f2fe] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `calc(${currentPercent}% - 3px)` }}
            />
          </div>
          <span className="font-mono text-[10px] text-slate-400 w-9 text-left">
            {formatTime(duration || 194)}
          </span>
        </div>
      </div>

      {/* Right: Volume & Export Audio Button */}
      <div className="flex items-center justify-end gap-5 w-1/4 min-w-[200px]">
        {/* Volume */}
        <div className="hidden sm:flex items-center gap-2 text-slate-400">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-base">
              {isMuted || volume === 0 ? 'volume_off' : 'volume_up'}
            </span>
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              setVolume(parseFloat(e.target.value));
              if (isMuted) setIsMuted(false);
            }}
            className="w-16 h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-cyan-400"
          />
        </div>

        {/* Export Button */}
        <button
          onClick={onExport}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-medium text-white transition-all shadow-sm"
        >
          <span className="material-symbols-outlined text-[16px] text-cyan-400">download</span>
          <span>Export Audio</span>
        </button>
      </div>
    </div>
  );
}
