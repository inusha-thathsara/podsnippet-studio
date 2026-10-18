import React, { useState, useEffect, useRef } from 'react';
import { StudioScene3D } from './StudioScene3D';

export function StudioStageView({
  audioData,
  scriptData,
  articleTitle,
  selectedMode,
  currentTime,
  duration,
  isPlaying,
  onTogglePlay,
  onSeek,
  alexVoiceId,
  samVoiceId,
}) {
  const [cameraMode, setCameraMode] = useState('studio'); // 'studio' | 'orbit'
  const [copyToast, setCopyToast] = useState(false);
  const scrubberRef = useRef(null);

  const displayTitle = articleTitle || 'The Edge Dilemma: Scaling Rust Microservices';
  const turns = scriptData?.turns || [];

  // Determine current active turn & active speaker based on currentTime
  let activeTurnIndex = 0;
  let activeSpeaker = 'Alex';
  let activeQuote = "Wait, so why does everyone deploy Kubernetes on a single Raspberry Pi?";

  if (turns.length > 0 && duration > 0) {
    const turnDuration = duration / turns.length;
    activeTurnIndex = Math.min(turns.length - 1, Math.floor(currentTime / turnDuration));
    const activeTurn = turns[activeTurnIndex];
    if (activeTurn) {
      activeSpeaker = activeTurn.speaker || (activeTurnIndex % 2 === 0 ? 'Alex' : 'Sam');
      activeQuote = activeTurn.text || activeQuote;
    }
  }

  // Split active quote into words for karaoke highlighting
  const words = activeQuote.split(/\s+/).filter(Boolean);
  const wordsCount = words.length || 1;
  const turnProgress = (currentTime % (duration / Math.max(1, turns.length))) / (duration / Math.max(1, turns.length));
  const activeWordIndex = Math.min(wordsCount - 1, Math.floor(turnProgress * wordsCount));

  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleScrubberClick = (e) => {
    if (!scrubberRef.current || !duration) return;
    const rect = scrubberRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    onSeek(ratio * duration);
  };

  const handleDownloadMp3 = () => {
    const filename = `${displayTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.mp3`;
    if (audioData?.audioUrl) {
      const a = document.createElement('a');
      a.href = audioData.audioUrl;
      a.download = filename;
      a.click();
    } else {
      const a = document.createElement('a');
      const blob = new Blob(['PodSnippet Studio Audio Master'], { type: 'audio/mpeg' });
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      a.click();
    }
  };

  const handleDownloadSrt = () => {
    let srtContent = '';
    const turnDuration = (duration || 194) / Math.max(1, turns.length);

    turns.forEach((turn, idx) => {
      const start = idx * turnDuration;
      const end = (idx + 1) * turnDuration;
      const formatSrtTime = (sec) => {
        const h = String(Math.floor(sec / 3600)).padStart(2, '0');
        const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
        const s = String(Math.floor(sec % 60)).padStart(2, '0');
        const ms = String(Math.floor((sec % 1) * 1000)).padStart(3, '0');
        return `${h}:${m}:${s},${ms}`;
      };

      srtContent += `${idx + 1}\n`;
      srtContent += `${formatSrtTime(start)} --> ${formatSrtTime(end)}\n`;
      srtContent += `[${turn.speaker}]: ${turn.text}\n\n`;
    });

    const blob = new Blob([srtContent || '1\n00:00:00,000 --> 00:00:05,000\n[Alex]: The Edge Dilemma\n'], {
      type: 'text/plain',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${displayTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.srt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShareLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopyToast(true);
    setTimeout(() => setCopyToast(false), 2000);
  };

  const alexAvatar =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAvStxvHH8Ia89-2oOjgpolHm5GPXxi7ljd4S-Il9Iylb_vPVAzjIWHpwwE5dRm2xTAj6lsNmcMZ91dOdX_PBtJqRSs6A0ySUZ8gQWzuv--nzv8bEwlH7-RxmngnKLF_sVL1ySxWO0MXUILWSLWQytVbDXP82KMEeShViVo65EFkXm1OEpj0z0ahG4Bo26GVuMv27wceosV0dwASQJRrWkpzGm-u_SBMyUN8aUJINN2';
  const samAvatar =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBc40bF0omU-caXomvw5hwQbATVvZyuzSqwEzhCp1Efy63HeaIzNBDzupSLS6i5b6MJ1PDp6hYenOKvNNvfZPvq37oAcN_UohdATeGGSdl-zR0TQ_UQE7SdOaxkNAEm4qssUFZA_J7aQmWKcNH2Qsao0_1P9FDngdPAmw-Dbn7lOSQi07mtlaklx0hSvmy29ysYQE9Z6Kn8p-qfXtidRulx6EioE5Fu4MDJRChdheYS';

  const scrubberPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex flex-col gap-8 w-full max-w-[1600px] mx-auto pt-2 pb-28">
      {/* Toast */}
      {copyToast && (
        <div className="fixed top-20 right-8 z-50 bg-cyan-400 text-black px-4 py-2 rounded-xl font-medium text-xs shadow-xl animate-fade-in flex items-center gap-2">
          <span className="material-symbols-outlined text-base font-bold">check</span>
          <span>Episode share link copied to clipboard!</span>
        </div>
      )}

      {/* Episode Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-500 font-mono mb-1 tracking-wider uppercase">
            KUBERNETES-IN-PRODUCTION / EPISODE 04
          </div>
          <h1 className="text-2xl lg:text-3xl font-headline font-semibold text-white tracking-tight">
            {displayTitle}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>{formatTime(duration || 194)} Total Length</span>
          </div>
        </div>
      </div>

      {/* Main Layout Grid: Hero Stage & Control Sidebar */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Left Hero Area (8 Cols) */}
        <div className="xl:col-span-8 flex flex-col gap-6">
          {/* 3D WebGL Studio Hero Canvas */}
          <div className="relative w-full rounded-3xl obsidian-card-elevated overflow-hidden border border-white/[0.09] shadow-2xl">
            {/* Stage Toolbar */}
            <div className="absolute top-5 inset-x-6 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 pointer-events-auto bg-black/50 backdrop-blur-md px-2 py-1 rounded-xl border border-white/10 text-xs">
                <button
                  onClick={() => setCameraMode('studio')}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    cameraMode === 'studio'
                      ? 'bg-cyan-400/20 text-cyan-300 font-medium'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Studio View
                </button>
                <button
                  onClick={() => setCameraMode('orbit')}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    cameraMode === 'orbit'
                      ? 'bg-cyan-400/20 text-cyan-300 font-medium'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Orbit
                </button>
              </div>

              <div className="pointer-events-auto flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 text-xs text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>60 FPS</span>
              </div>
            </div>

            {/* Sleek 3D Stage Space */}
            <div className="relative w-full aspect-[16/9] min-h-[440px] bg-gradient-to-b from-[#090c16] via-[#070912] to-[#05060b] flex items-center justify-center overflow-hidden">
              {/* Radial subtle grid */}
              <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:32px_32px]"></div>

              {/* Ambient visualizer wave glow */}
              <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-500/10 bg-cyan-500/[0.03] blur-3xl pointer-events-none"></div>

              {/* Embedded Interactive 3D WebGL Scene */}
              <div className="absolute inset-0 z-0">
                <StudioScene3D
                  isPlaying={isPlaying}
                  currentSpeaker={activeSpeaker}
                  mode={selectedMode}
                />
              </div>

              {/* Foreground Visual Overlay with Dual Speaker Avatars */}
              <div className="relative z-10 w-full max-w-xl px-8 flex items-center justify-between pointer-events-none">
                {/* Host Alex (Cyan Active Spotlight) */}
                <div
                  className={`flex flex-col items-center gap-3 transition-all duration-300 ${
                    activeSpeaker === 'Alex' ? 'opacity-100 scale-105' : 'opacity-65'
                  }`}
                >
                  <div className="relative">
                    {activeSpeaker === 'Alex' && (
                      <div className="absolute -inset-3.5 rounded-full bg-cyan-400/25 blur-xl animate-pulse"></div>
                    )}
                    <div
                      className={`relative w-24 h-24 lg:w-28 lg:h-28 rounded-full p-1 border-2 bg-[#0a0f1d] transition-all ${
                        activeSpeaker === 'Alex'
                          ? 'border-cyan-400 soft-glow-cyan'
                          : 'border-white/20'
                      }`}
                    >
                      <img
                        className="w-full h-full rounded-full object-cover"
                        src={alexAvatar}
                        alt="Alex"
                      />
                    </div>
                    <div
                      className={`absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                        activeSpeaker === 'Alex'
                          ? 'bg-cyan-400 text-black'
                          : 'bg-black/60 text-slate-400 border border-white/20'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm font-bold">
                        {activeSpeaker === 'Alex' ? 'mic' : 'mic_none'}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-headline font-semibold text-white text-base tracking-wide">
                      Alex
                    </div>
                    <div className="text-xs text-cyan-300 font-mono mt-0.5">Host A</div>
                  </div>
                </div>

                {/* Central Audio Spectrum Bars */}
                <div className="flex items-center gap-1.5 h-14 px-4 py-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/[0.08]">
                  {[24, 40, 56, 36, 20].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        height: isPlaying ? `${Math.max(12, (h * (1 + (i % 2) * 0.4)) % 56)}px` : '10px',
                      }}
                      className={`w-1 rounded-full transition-all duration-150 ${
                        i < 3 ? 'bg-cyan-400 shadow-[0_0_6px_#00f2fe]' : 'bg-purple-400 shadow-[0_0_6px_#a855f7]'
                      } ${isPlaying ? 'animate-pulse' : ''}`}
                    />
                  ))}
                </div>

                {/* Host Sam (Purple Active Spotlight) */}
                <div
                  className={`flex flex-col items-center gap-3 transition-all duration-300 ${
                    activeSpeaker === 'Sam' ? 'opacity-100 scale-105' : 'opacity-65'
                  }`}
                >
                  <div className="relative">
                    {activeSpeaker === 'Sam' && (
                      <div className="absolute -inset-3 rounded-full bg-purple-500/25 blur-lg animate-pulse"></div>
                    )}
                    <div
                      className={`relative w-24 h-24 lg:w-28 lg:h-28 rounded-full p-1 border-2 bg-[#0a0f1d] transition-all ${
                        activeSpeaker === 'Sam'
                          ? 'border-purple-400 soft-glow-purple'
                          : 'border-white/20'
                      }`}
                    >
                      <img
                        className="w-full h-full rounded-full object-cover"
                        src={samAvatar}
                        alt="Sam"
                      />
                    </div>
                    <div
                      className={`absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                        activeSpeaker === 'Sam'
                          ? 'bg-purple-600 text-white'
                          : 'bg-black/60 text-slate-400 border border-white/20'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {activeSpeaker === 'Sam' ? 'mic' : 'mic_none'}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-headline font-semibold text-white text-base tracking-wide">
                      Sam
                    </div>
                    <div className="text-xs text-purple-300 font-mono mt-0.5">Host B</div>
                  </div>
                </div>
              </div>

              {/* Streamlined Active Dialogue Callout */}
              <div className="absolute bottom-5 inset-x-8 z-20 flex justify-center pointer-events-none">
                <div className="bg-black/60 backdrop-blur-xl px-6 py-2.5 rounded-2xl border border-white/10 text-center max-w-xl shadow-xl">
                  <span
                    className={`font-mono text-xs font-semibold uppercase mr-2 ${
                      activeSpeaker === 'Alex' ? 'text-cyan-300' : 'text-purple-300'
                    }`}
                  >
                    {activeSpeaker}:
                  </span>
                  <span className="text-slate-200 text-xs sm:text-sm italic font-normal">
                    "{activeQuote}"
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Karaoke Subtitle & Player Area */}
          <div className="obsidian-card rounded-2xl p-6 border border-white/[0.08] flex flex-col gap-5">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span className="text-white font-headline font-medium text-sm">
                Live Spoken Script
              </span>
              <span>
                {formatTime(currentTime)} / {formatTime(duration || 194)}
              </span>
            </div>

            {/* Karaoke Transcript Line */}
            <div className="py-3 px-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center flex-wrap gap-2 text-sm sm:text-base text-slate-400 leading-relaxed min-h-[52px]">
              {words.map((w, wIdx) => {
                const isCurrent = wIdx === activeWordIndex;
                const isPast = wIdx < activeWordIndex;
                return (
                  <span
                    key={wIdx}
                    className={`transition-all duration-150 ${
                      isCurrent
                        ? 'px-2 py-0.5 rounded-lg bg-cyan-400/20 text-cyan-200 font-semibold border border-cyan-400/40 shadow-sm scale-105'
                        : isPast
                        ? 'text-white'
                        : 'text-slate-400'
                    }`}
                  >
                    {w}
                  </span>
                );
              })}
            </div>

            {/* High-End Waveform Visual Scrubber */}
            <div
              ref={scrubberRef}
              onClick={handleScrubberClick}
              className="relative w-full h-14 bg-black/40 rounded-xl overflow-hidden flex items-center px-3 border border-white/[0.06] cursor-pointer group"
            >
              {/* Waveform Bars */}
              <div className="w-full h-10 flex items-center justify-between gap-[3px]">
                {[
                  35, 60, 90, 45, 80, 100, 65, 85, 40, 75, 95, 50, 70, 88, 60, 40, 75, 90, 35, 55,
                  70, 85, 30, 65, 90, 50, 80, 40, 60, 85,
                ].map((val, bIdx) => {
                  const barPercent = (bIdx / 30) * 100;
                  const isPlayed = barPercent <= scrubberPercent;
                  return (
                    <div
                      key={bIdx}
                      style={{ height: `${val}%` }}
                      className={`w-1 rounded-full transition-all duration-150 ${
                        isPlayed
                          ? 'bg-cyan-400 shadow-[0_0_6px_#00f2fe]'
                          : 'bg-white/20 group-hover:bg-white/30'
                      }`}
                    />
                  );
                })}
              </div>

              {/* Playhead Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-cyan-400 shadow-[0_0_8px_#00f2fe] pointer-events-none transition-all duration-75"
                style={{ left: `${scrubberPercent}%` }}
              >
                <div className="absolute -top-1 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_6px_#ffffff]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Minimal Control Sidebar (4 Cols) */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          {/* Episode Overview & Voice Timbre */}
          <div className="obsidian-card rounded-2xl p-6 border border-white/[0.08] flex flex-col gap-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
              Voice Casting Summary
            </h2>

            <div className="space-y-3">
              {/* Alex Voice */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-cyan-400/10 text-cyan-300 flex items-center justify-center border border-cyan-400/20">
                    <span className="material-symbols-outlined text-base">graphic_eq</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      Alex <span className="text-xs text-slate-400 font-mono ml-1">• Adam</span>
                    </div>
                    <div className="text-xs text-slate-400">Warm Tech Lead</div>
                  </div>
                </div>
                <button
                  onClick={onTogglePlay}
                  className="p-2 rounded-lg hover:bg-white/10 text-cyan-400 transition-colors"
                >
                  <span className="material-symbols-outlined text-base">
                    {isPlaying && activeSpeaker === 'Alex' ? 'pause' : 'play_arrow'}
                  </span>
                </button>
              </div>

              {/* Sam Voice */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-500/10 text-purple-300 flex items-center justify-center border border-purple-500/20">
                    <span className="material-symbols-outlined text-base">graphic_eq</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">
                      Sam <span className="text-xs text-slate-400 font-mono ml-1">• Rachel</span>
                    </div>
                    <div className="text-xs text-slate-400">Crisp Analyst</div>
                  </div>
                </div>
                <button
                  onClick={onTogglePlay}
                  className="p-2 rounded-lg hover:bg-white/10 text-purple-300 transition-colors"
                >
                  <span className="material-symbols-outlined text-base">
                    {isPlaying && activeSpeaker === 'Sam' ? 'pause' : 'play_arrow'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Clean Export & Delivery Panel */}
          <div className="obsidian-card rounded-2xl p-6 border border-white/[0.08] flex flex-col gap-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
              Broadcast &amp; Export
            </h2>

            {/* Primary Master MP3 */}
            <button
              onClick={handleDownloadMp3}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-cyan-400/20 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              <span>Download Master MP3</span>
            </button>

            {/* Video Audiogram */}
            <button
              onClick={() =>
                alert('Audiogram MP4 rendering: Exporting 1080p video with animated waveform & karaoke subtitles.')
              }
              className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm flex items-center justify-between border border-white/[0.08] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-purple-300 text-lg">movie</span>
                <span>Export Audiogram MP4</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">1080p</span>
            </button>

            {/* Secondary Actions: SRT & Share */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                onClick={handleDownloadSrt}
                className="py-2.5 px-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-xs font-mono text-slate-300 border border-white/[0.06] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm text-cyan-400">subtitles</span>
                <span>SRT Subtitles</span>
              </button>

              <button
                onClick={handleShareLink}
                className="py-2.5 px-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-xs font-mono text-slate-300 border border-white/[0.06] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm text-purple-400">share</span>
                <span>Share Link</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
