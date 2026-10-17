import React, { useState } from 'react';

export function SourceIngestionView({
  selectedMode,
  onSelectMode,
  articleTitle,
  articleContent,
  articleUrl,
  onChangeTitle,
  onChangeContent,
  onChangeUrl,
  onExtract,
  isExtracting,
  onProceedToScript,
  isGeneratingScript,
  onSelectSample,
  samples,
}) {
  const [activeTab, setActiveTab] = useState('url'); // 'url' | 'md'
  const [activeTone, setActiveTone] = useState('engaging');
  const [targetDuration, setTargetDuration] = useState(3.0);
  const [fetchSuccessToast, setFetchSuccessToast] = useState(false);

  const handleFetchClick = async () => {
    if (!articleUrl.trim()) return;
    await onExtract();
    setFetchSuccessToast(true);
    setTimeout(() => setFetchSuccessToast(false), 2500);
  };

  const handleFormatClick = (mode) => {
    onSelectMode(mode === 'A' ? 'solo' : 'duo');
    if (mode === 'A') {
      setTargetDuration(1.0);
    } else {
      setTargetDuration(3.0);
    }
  };

  const formatRuntime = (val) => {
    const mins = Math.floor(val);
    const secs = Math.round((val % 1) * 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const isModeA = selectedMode === 'solo';
  const isModeB = selectedMode === 'duo';

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto pt-2 pb-16">
      {/* Header Titles */}
      <div className="space-y-1.5">
        <h1 className="font-headline text-2xl lg:text-3xl text-white tracking-tight font-semibold">
          Source Ingestion &amp; Setup
        </h1>
        <p className="text-sm text-slate-400 max-w-xl">
          Import your technical content and configure narrative pacing.
        </p>
      </div>

      {/* Format Archetype Selection */}
      <section className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
          <span>Format Archetype</span>
          <span className="text-[11px] font-mono text-slate-500">
            Switch format any time
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="formatSelectorGroup">
          {/* Card Mode A: Solo Flash Teaser */}
          <div
            onClick={() => handleFormatClick('A')}
            className={`group relative cursor-pointer rounded-2xl p-6 flex flex-col justify-between transition-all ${
              isModeA ? 'glass-card-selected' : 'glass-card hover:border-white/20'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isModeA
                      ? 'bg-cyan-500/20 border border-cyan-400/40 text-cyan-300'
                      : 'bg-white/[0.04] border border-white/[0.08] text-slate-400 group-hover:scale-105'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                </div>
                <div>
                  <h3 className="font-headline text-base text-white font-semibold">
                    Solo Flash Teaser
                  </h3>
                  <span className="text-xs text-slate-400">1 Narrator • Fast recap</span>
                </div>
              </div>
              <span
                className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full border ${
                  isModeA
                    ? 'bg-cyan-500/15 border-cyan-400/30 text-cyan-300'
                    : 'bg-white/[0.05] border-white/[0.08] text-slate-400'
                }`}
              >
                60s
              </span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/[0.05] text-xs text-slate-400">
              <span>Engineered for X &amp; LinkedIn discovery</span>
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                  isModeA
                    ? 'bg-cyan-400 border border-cyan-200 shadow-[0_0_8px_#00f2fe]'
                    : 'border border-white/20'
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    isModeA ? 'bg-black' : 'bg-transparent'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Card Mode B: Dual-Host Deep Dive */}
          <div
            onClick={() => handleFormatClick('B')}
            className={`group relative cursor-pointer rounded-2xl p-6 flex flex-col justify-between transition-all ${
              isModeB ? 'glass-card-selected' : 'glass-card hover:border-white/20'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isModeB
                      ? 'bg-cyan-500/20 border border-cyan-400/40 text-cyan-300'
                      : 'bg-white/[0.04] border border-white/[0.08] text-slate-400 group-hover:scale-105'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">forum</span>
                </div>
                <div>
                  <h3 className="font-headline text-base text-white font-semibold">
                    Dual-Host Deep Dive
                  </h3>
                  <span className="text-xs text-slate-400">
                    Alex &amp; Sam • Conversational Banter
                  </span>
                </div>
              </div>
              <span
                className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full border ${
                  isModeB
                    ? 'bg-cyan-500/15 border-cyan-400/30 text-cyan-300'
                    : 'bg-white/[0.05] border-white/[0.08] text-slate-400'
                }`}
              >
                3m
              </span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/[0.05] text-xs text-slate-400">
              <span>Substack, Apple RSS &amp; YouTube ready</span>
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                  isModeB
                    ? 'bg-cyan-400 border border-cyan-200 shadow-[0_0_8px_#00f2fe]'
                    : 'border border-white/20'
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    isModeB ? 'bg-black' : 'bg-transparent'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form: Ingestion Body (8 cols) & Parameter Deck (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: URL / Markdown Ingestion */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="rounded-2xl glass-card p-6 space-y-5">
            {/* Tab switch */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('url')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === 'url'
                      ? 'bg-cyan-500/20 border border-cyan-400/30 text-cyan-300'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  Import from URL
                </button>
                <button
                  onClick={() => setActiveTab('md')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeTab === 'md'
                      ? 'bg-cyan-500/20 border border-cyan-400/30 text-cyan-300'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  Paste Markdown
                </button>
              </div>
              <span className="text-xs text-slate-400 hidden sm:inline">
                Substack, Dev.to, GitHub, Medium
              </span>
            </div>

            {/* URL Input Form */}
            {activeTab === 'url' ? (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative w-full flex-1 flex items-center glass-input rounded-xl px-4 py-3">
                    <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">
                      link
                    </span>
                    <input
                      className="w-full bg-transparent border-none text-xs text-white placeholder-slate-500 focus:outline-none font-mono"
                      placeholder="https://blog.cloudflare.com/how-we-built-pingora-in-rust"
                      type="text"
                      value={articleUrl}
                      onChange={(e) => onChangeUrl(e.target.value)}
                    />
                    {articleUrl && (
                      <button
                        onClick={() => onChangeUrl('')}
                        className="text-slate-400 hover:text-white p-1 rounded"
                        title="Clear URL"
                      >
                        <span className="material-symbols-outlined text-[16px]">close</span>
                      </button>
                    )}
                  </div>
                  <button
                    onClick={handleFetchClick}
                    disabled={isExtracting || !articleUrl.trim()}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-cyan-400 text-black font-semibold text-xs hover:bg-cyan-300 transition-all flex items-center justify-center gap-1.5 shrink-0 disabled:opacity-50"
                  >
                    <span
                      className={`material-symbols-outlined text-[16px] font-semibold ${
                        isExtracting ? 'animate-spin' : ''
                      }`}
                    >
                      {fetchSuccessToast ? 'check' : 'sync'}
                    </span>
                    <span>
                      {isExtracting
                        ? 'Fetching...'
                        : fetchSuccessToast
                        ? 'Article Cleaned'
                        : 'Fetch Article'}
                    </span>
                  </button>
                </div>

                {/* Extracted Preview Card */}
                {articleTitle && (
                  <div className="bg-black/40 border border-white/[0.06] rounded-xl p-5 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-headline text-base text-white font-semibold tracking-tight">
                          {articleTitle}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          {articleUrl ? new URL(articleUrl.startsWith('http') ? articleUrl : `https://${articleUrl}`).hostname : 'blog-source'} • {articleContent ? articleContent.split(/\s+/).length : 2100} words (~9 min read)
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-xs text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/20 font-medium">
                        ~{isModeA ? '1m' : '3m'} target
                      </span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                      <li className="flex items-baseline gap-2">
                        <span className="text-cyan-400 text-[10px]">●</span>
                        <span>Extracts technical architecture and core implementation takeaways.</span>
                      </li>
                      <li className="flex items-baseline gap-2">
                        <span className="text-purple-400 text-[10px]">●</span>
                        <span>Translates complex code snippets into high-impact spoken banter.</span>
                      </li>
                      <li className="flex items-baseline gap-2">
                        <span className="text-emerald-400 text-[10px]">●</span>
                        <span>Optimized for retention across mobile podcast listening habits.</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              /* Markdown Input Form */
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Episode / Article Title..."
                  value={articleTitle}
                  onChange={(e) => onChangeTitle(e.target.value)}
                  className="w-full glass-input rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 font-headline focus:outline-none"
                />
                <textarea
                  className="w-full glass-input rounded-xl p-4 text-slate-200 font-mono text-xs placeholder-slate-500 focus:outline-none resize-none leading-relaxed"
                  placeholder="# Paste markdown article content here...&#10;&#10;## Architecture Overview&#10;In this post we review how we upgraded..."
                  rows={7}
                  value={articleContent}
                  onChange={(e) => onChangeContent(e.target.value)}
                />
                <div className="flex justify-between items-center text-xs text-slate-500 font-mono">
                  <span>{articleContent ? articleContent.split(/\s+/).filter(Boolean).length : 0} words</span>
                  <span>Markdown formatting supported</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Demo Samples */}
          <div className="space-y-2">
            <div className="text-xs text-slate-400 font-medium">Quick Demo Samples</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div
                onClick={() => {
                  if (samples && samples.length > 0) {
                    onSelectSample(samples[0]);
                  } else {
                    onChangeUrl('https://blog.cloudflare.com/how-we-built-pingora-in-rust');
                    onChangeTitle("How We Built Pingora in Rust to Power Cloudflare's Edge");
                  }
                }}
                className="cursor-pointer rounded-xl glass-card p-3.5 hover:border-cyan-400/40 transition-all group"
              >
                <div className="text-xs font-semibold text-white line-clamp-1 mb-1 group-hover:text-cyan-300">
                  Swapping Docker for Podman
                </div>
                <div className="text-[11px] text-slate-400">DevOps • 1,840 words</div>
              </div>

              <div
                onClick={() => {
                  if (samples && samples.length > 1) {
                    onSelectSample(samples[1]);
                  } else {
                    onChangeUrl('https://substrate.io/blog/low-latency-edge-runtimes-rust-wasm');
                    onChangeTitle('Low-Latency Rust & Wasm on Edge Micro-Nodes');
                  }
                }}
                className="cursor-pointer rounded-xl glass-card p-3.5 hover:border-amber-400/40 transition-all group"
              >
                <div className="text-xs font-semibold text-white line-clamp-1 mb-1 group-hover:text-amber-300">
                  Low-Latency Rust &amp; Wasm
                </div>
                <div className="text-[11px] text-slate-400">Systems • 2,200 words</div>
              </div>

              <div
                onClick={() => {
                  if (samples && samples.length > 2) {
                    onSelectSample(samples[2]);
                  } else {
                    onChangeUrl('https://ai.google.dev/gemma/docs/spoken-audio-synthesizer-pipeline');
                    onChangeTitle('Text-to-Speech Scripting via Google Gemma 2');
                  }
                }}
                className="cursor-pointer rounded-xl glass-card p-3.5 hover:border-purple-400/40 transition-all group"
              >
                <div className="text-xs font-semibold text-white line-clamp-1 mb-1 group-hover:text-purple-300">
                  Text-to-Speech via Gemma 2
                </div>
                <div className="text-[11px] text-slate-400">AI/ML • 1,400 words</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Parameters (Tone, Duration, Voice Preview) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="rounded-2xl glass-card p-6 space-y-6">
            {/* Conversational Tone */}
            <div>
              <label className="block text-xs text-slate-400 font-medium mb-3">
                Conversational Tone
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'engaging', label: 'Engaging' },
                  { id: 'deep', label: 'Deep Tech' },
                  { id: 'casual', label: 'Casual' },
                  { id: 'story', label: 'Story' },
                ].map((tone) => (
                  <button
                    key={tone.id}
                    onClick={() => setActiveTone(tone.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      activeTone === tone.id
                        ? 'bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 font-semibold'
                        : 'bg-black/20 border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {tone.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Duration Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <label className="text-slate-400 font-medium">Target Duration</label>
                <span className="font-mono text-cyan-300 font-semibold">
                  {formatRuntime(targetDuration)}
                </span>
              </div>
              <input
                className="w-full h-1.5 bg-white/[0.08] rounded-lg appearance-none cursor-pointer accent-cyan-400"
                max="5"
                min="1"
                step="0.5"
                type="range"
                value={targetDuration}
                onChange={(e) => setTargetDuration(parseFloat(e.target.value))}
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>1m</span>
                <span>3m</span>
                <span>5m</span>
              </div>
            </div>

            {/* Voice Casting Summary */}
            <div className="pt-4 border-t border-white/[0.06] space-y-3">
              <span className="text-xs text-slate-400 font-medium block">Voice Casting</span>
              {isModeA ? (
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="text-white font-medium">Alex</span>
                    <span className="text-slate-400 text-[11px]">• Lead Narrator</span>
                  </div>
                  <span className="text-slate-400 text-[11px] font-mono">ElevenLabs</span>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      <span className="text-white font-medium">Alex</span>
                      <span className="text-slate-400 text-[11px]">• Systems Lead</span>
                    </div>
                    <span className="text-slate-400 text-[11px] font-mono">ElevenLabs</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                      <span className="text-white font-medium">Sam</span>
                      <span className="text-slate-400 text-[11px]">• Conversational</span>
                    </div>
                    <span className="text-slate-400 text-[11px] font-mono">ElevenLabs</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-24 left-60 right-0 z-30 flex justify-center px-6 pointer-events-none">
        <div className="w-full max-w-4xl p-3.5 rounded-2xl bg-[#11131c]/90 backdrop-blur-2xl border border-white/[0.1] shadow-2xl flex items-center justify-between gap-4 pointer-events-auto">
          <div className="flex items-center gap-3 pl-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs text-slate-400">
              Ready to synthesize{' '}
              <strong className="text-white font-semibold">
                {isModeA ? 'Solo Flash Teaser (~1m)' : 'Dual-Host Deep Dive (~3m)'}
              </strong>
            </span>
          </div>

          <button
            onClick={onProceedToScript}
            disabled={isGeneratingScript || !articleTitle.trim()}
            className="px-6 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs tracking-tight transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
          >
            <span
              className={`material-symbols-outlined text-[18px] ${
                isGeneratingScript ? 'animate-spin' : ''
              }`}
            >
              {isGeneratingScript ? 'refresh' : 'record_voice_over'}
            </span>
            <span>
              {isGeneratingScript ? 'Generating Script...' : 'Generate Audio Script'}
            </span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
