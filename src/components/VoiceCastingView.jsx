import React, { useState } from 'react';

export function VoiceCastingView({
  voices,
  soloVoiceId,
  onChangeSoloVoice,
  alexVoiceId,
  onChangeAlexVoice,
  samVoiceId,
  onChangeSamVoice,
  onSynthesizeAudio,
  isSynthesizing,
  selectedMode,
  scriptData,
}) {
  const [stability, setStability] = useState(0.65);
  const [clarity, setClarity] = useState(0.85);
  const [auditioningVoice, setAuditioningVoice] = useState(null);

  // Curated Roster matching minimalist_voice_casting/code.html
  const voiceRoster = [
    {
      id: 'pNInz6obpgDQGcFmaJgB', // Adam ID
      name: 'Adam',
      role: 'Warm Tech Lead',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCC7DVpetRtGxu44bdee45FcpcNZGR36L-fj2E6ALP9GO8LDVAQAvCxBvLkIVYlUFILIpSysNsqE9lzoiVTX8lRaY-oiPlVPWeYbOvfIj1brRptIWsRkalP3OGuvIv7cLsh2jysJAMOmA3Sb28CK7pHiANbmpx1zDUpxDPGcyF-HehC3yJoRDNIN2yJQ3RNd-RarN731DqBw4VKTR2xFOYgnf9u_VWHktaQNjFYpwOz',
      previewPhrase:
        'Pingora replaced our entire reverse proxy fleet, handling over a trillion requests every single day with zero memory crashes.',
    },
    {
      id: '21m00Tcm4TlvDq8ikWAM', // Rachel ID
      name: 'Rachel',
      role: 'Crisp Analyst',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB-I8W8om7bxCpJCNjxCVo9SrhOIpZeisFl7Cswul0ZOVKH7LJ85X-pyuvwMjmgrma9SkgGKv90oYrqBP93QH3nVX_5FcPHtu2FCdnCldys7O82-NU8ZkDR5DS6OVlif2mfp991Qekk0sOnfJUOovxzTkLw-R4fqqvYFLAyc8tj6mCmHrjbYxQvejE8TFjkJC-PjsJSPBfckBlgAMVDx2H5L0WfVrGM4FgusaI9gMLB',
      previewPhrase:
        'And the benchmark numbers speak for themselves. CPU consumption dropped by nearly seventy percent across all edge clusters.',
    },
    {
      id: 'JBFqnCBsd6RMkjVDRZzb', // George ID
      name: 'George',
      role: 'British Documentary',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAVCawI4TV_O7PBCyj9umQp0np7ABqM_Nt-jXcx03VUju9F7xBA-4OKmXA-pGn8dxyKDvtQyMJsOc9iPEB_mIdG_hLjuOFfD69Lyj1DkTBFcr56VIkRpnrPUEhlc9bHBj4z0AEnTyRC8yXtHG-xTsDHPI8dKEsliobazyzzaGNksRbYPfBz8zzkjgxGL8PoV6-caaAd2h4IcIKQDRf3--04tCqN4lPb9fKanYruf8D9',
      previewPhrase:
        'Let us observe the fundamental shift in systems architecture as compiled languages replace legacy runtimes.',
    },
    {
      id: 'EXAVITQu4vr4xnSDxMaL', // Sarah ID
      name: 'Sarah',
      role: 'Conversational Casual',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA89_E8j53jhaYOXmFdqq25w-tnLDGp6HgiQTx2zNwK9R2La88TGxRV4fH7QmzcMcHlLOjDlxin0Xcsu5xs8flxRM59sUmbsCkrfBk_1YuAenbALnCZYkWP7ElDfGfOcsecEzfUUhxQ_L6iPM9zdbAkF9CeF0enRmUkwpSBbosW4M-Bhr_modNnTGPp24D4nH6_2NVlilj6fgzt8KUQXj14BWKQdQ03jxHO9yNPdZkE',
      previewPhrase:
        'Honestly, setting this up took less than ten minutes, and the audio quality sounds like an actual broadcast booth.',
    },
    {
      id: 'IKne3meq5aSn9X800x57', // Charlie ID
      name: 'Charlie',
      role: 'Energetic & Fast',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBZjsSztifXmOSPuVTlLJ2pUEtc5QlAm5BIvF8SAqI7gThqqVqOjeKJ0hkr9JSv_U_jCuzP3CwXgtSE6DhP8itEqzxSHbytFoAg2uiRCsg4_EIWgSmc_aPqoLxII-G2DFif_b7PJyJnBUPQEpL9qLzYiIWfLivuVIZLbjeqT2eBl_gT1I0bVCm0DSAa8gEUlM9o3YRNyojRYyHcQBAHCofkd6dSIdWz2h776GjTFDL-',
      previewPhrase:
        'If you are still distributing raw text articles without an audio teaser, you are leaving seventy percent of your reach on the table!',
    },
    {
      id: 'TX3LPaxmHKxFdv7VOQHJ', // Liam ID
      name: 'Liam',
      role: 'Deep Resonant',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAF_-_IRgplBn8q7c9xMnZlSIcG4VeBxyNjyzo1Z8lVTH3GWFeWwgRkuFkZFz--PywALjF9TxfgcY53z4qcT9ehjYMEHLaTPwiW-SDU63Tzv27fAqX1nm0waDN_xgwlTkYCraq3Z8ah8xf6Q_AR0OGvTP2GeeCo8khcLljfHJJGzcvqAiMc8wY0CaB9zgEstcT_6yuNxcFcNQttym8WHSSznlhHH94QQ74JDRWLbjcU',
      previewPhrase:
        'This is the definitive guide to deploying resilient infrastructure at massive cloud scale.',
    },
  ];

  // Audition preview handler
  const handleToggleAudition = (persona) => {
    if (auditioningVoice === persona.name) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setAuditioningVoice(null);
    } else {
      setAuditioningVoice(persona.name);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(persona.previewPhrase);
        utterance.rate = 1.05;
        utterance.pitch = persona.name === 'Adam' || persona.name === 'Liam' ? 0.9 : 1.05;
        utterance.onend = () => setAuditioningVoice(null);
        utterance.onerror = () => setAuditioningVoice(null);
        window.speechSynthesis.speak(utterance);
      } else {
        setTimeout(() => setAuditioningVoice(null), 3000);
      }
    }
  };

  // Find host names for display
  const alexPersona = voiceRoster.find((v) => v.id === alexVoiceId) || voiceRoster[0];
  const samPersona = voiceRoster.find((v) => v.id === samVoiceId) || voiceRoster[1];

  // Calculate characters count
  const turns = scriptData?.turns || [];
  const charCount = turns.length
    ? turns.reduce((acc, t) => acc + (t.text || '').length, 0)
    : (scriptData?.scriptText || '').length || 1420;

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto pt-2 pb-28">
      {/* Scandinavian Header */}
      <div className="flex flex-col gap-2 mb-8 relative z-10">
        <span className="text-[11px] font-mono tracking-widest uppercase text-cyan-400">
          Audio Architecture • ElevenLabs Engine
        </span>
        <div className="flex items-baseline justify-between">
          <h1 className="font-headline text-3xl font-light text-white tracking-tight">
            Voice Casting Studio
          </h1>
          <p className="text-sm text-slate-400 font-normal hidden sm:block">
            Select host personas and tune synthesis fidelity
          </p>
        </div>
      </div>

      {/* Consolidated Elegant Header Bar: Host Slots + Acoustic Sliders */}
      <div className="glass-card glass-specular rounded-2xl p-6 mb-10 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Host 1 Alex Slot */}
          <div className="lg:col-span-3 flex items-center gap-4 pr-6 border-b lg:border-b-0 lg:border-r border-white/[0.06] pb-4 lg:pb-0">
            <div className="w-11 h-11 rounded-xl bg-cyan-950/30 border border-cyan-400/30 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-cyan-400 text-xl">mic</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-medium">
                Host 1 • Alex
              </div>
              <div className="text-base font-headline text-white font-medium truncate">
                {alexPersona.name}
              </div>
              <div className="text-xs text-slate-400 truncate">{alexPersona.role}</div>
            </div>
          </div>

          {/* Host 2 Sam Slot */}
          <div className="lg:col-span-3 flex items-center gap-4 pr-6 border-b lg:border-b-0 lg:border-r border-white/[0.06] pb-4 lg:pb-0">
            <div className="w-11 h-11 rounded-xl bg-purple-950/30 border border-purple-400/30 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-purple-400 text-xl">
                headset_mic
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-medium">
                Host 2 • Sam
              </div>
              <div className="text-base font-headline text-white font-medium truncate">
                {samPersona.name}
              </div>
              <div className="text-xs text-slate-400 truncate">{samPersona.role}</div>
            </div>
          </div>

          {/* Acoustic Controls: Stability & Style Slider Duo */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 pl-0 lg:pl-2">
            {/* Stability */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Stability</span>
                <span className="font-mono text-cyan-400 font-medium text-[11px]">
                  {stability.toFixed(2)}
                </span>
              </div>
              <input
                className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-cyan-400"
                max="1"
                min="0"
                step="0.01"
                type="range"
                value={stability}
                onChange={(e) => setStability(parseFloat(e.target.value))}
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>Expressive</span>
                <span>Steady</span>
              </div>
            </div>

            {/* Clarity & Style */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Clarity &amp; Style</span>
                <span className="font-mono text-purple-300 font-medium text-[11px]">
                  {clarity.toFixed(2)}
                </span>
              </div>
              <input
                className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer slider-secondary accent-purple-400"
                max="1"
                min="0"
                step="0.01"
                type="range"
                value={clarity}
                onChange={(e) => setClarity(parseFloat(e.target.value))}
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>Natural</span>
                <span>Theatrical</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacious Scandinavian Persona Roster Grid (6 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {voiceRoster.map((persona) => {
          const isAssignedAlex = alexVoiceId === persona.id;
          const isAssignedSam = samVoiceId === persona.id;
          const isAuditioning = auditioningVoice === persona.name;

          let cardBorder = 'border-white/[0.08]';
          let roleTag = null;

          if (isAssignedAlex) {
            cardBorder = 'border-cyan-400/40 bg-cyan-950/15';
            roleTag = (
              <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-cyan-300">
                Host 1 (Alex)
              </span>
            );
          } else if (isAssignedSam) {
            cardBorder = 'border-purple-400/40 bg-purple-950/15';
            roleTag = (
              <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-950/40 border border-purple-400/30 text-purple-300">
                Host 2 (Sam)
              </span>
            );
          }

          return (
            <div
              key={persona.id}
              className={`glass-card glass-specular glass-card-hover rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group ${cardBorder}`}
            >
              <div>
                {/* Persona Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden ring-1 ring-white/10 flex items-center justify-center shrink-0">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={persona.avatar}
                        alt={persona.name}
                      />
                    </div>
                    <div>
                      <h3 className="font-headline text-lg text-white font-medium tracking-tight">
                        {persona.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">{persona.role}</p>
                    </div>
                  </div>
                  {roleTag}
                </div>

                {/* Animated Waveform Visualizer */}
                <div className="py-4 my-2">
                  <div className="h-8 flex items-end gap-1.5 px-1">
                    {[35, 70, 95, 50, 80, 100, 60, 40, 85, 65, 40, 20, 50, 75, 30, 15].map(
                      (val, barIdx) => {
                        const barHeight = isAuditioning
                          ? `${Math.max(15, (val + (barIdx % 3) * 15) % 100)}%`
                          : `${val}%`;
                        const barColor = isAssignedAlex
                          ? 'bg-cyan-400 shadow-[0_0_6px_#00f2fe]'
                          : isAssignedSam
                          ? 'bg-purple-400 shadow-[0_0_6px_#e5b5ff]'
                          : 'bg-white/25';
                        return (
                          <span
                            key={barIdx}
                            style={{ height: barHeight }}
                            className={`w-1 rounded-full transition-all duration-150 ${barColor} ${
                              isAuditioning ? 'animate-pulse' : ''
                            }`}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Audition & Assign */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-white/[0.04]">
                {/* Audition Button */}
                <button
                  onClick={() => handleToggleAudition(persona)}
                  className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white flex items-center justify-center transition-colors shrink-0"
                  title="Audition Persona"
                >
                  <span
                    className={`material-symbols-outlined text-lg ${
                      isAuditioning ? 'text-cyan-400' : 'text-slate-300'
                    }`}
                  >
                    {isAuditioning ? 'pause' : 'play_arrow'}
                  </span>
                </button>

                {/* Assignment Button */}
                {isAssignedAlex ? (
                  <button className="flex-1 py-2 px-3 rounded-xl bg-cyan-950/40 border border-cyan-400/40 text-cyan-300 text-xs font-medium flex items-center justify-center gap-1.5 cursor-default">
                    <span className="material-symbols-outlined text-sm">check</span>
                    <span>Assigned to Alex</span>
                  </button>
                ) : isAssignedSam ? (
                  <button className="flex-1 py-2 px-3 rounded-xl bg-purple-950/40 border border-purple-400/40 text-purple-300 text-xs font-medium flex items-center justify-center gap-1.5 cursor-default">
                    <span className="material-symbols-outlined text-sm">check</span>
                    <span>Assigned to Sam</span>
                  </button>
                ) : (
                  <div className="flex-1 flex gap-1.5">
                    <button
                      onClick={() => onChangeAlexVoice(persona.id)}
                      className="flex-1 py-2 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 hover:border-cyan-400/30 border border-white/[0.08] text-slate-300 hover:text-cyan-300 text-[11px] font-medium transition-all"
                      title="Set as Host 1 (Alex)"
                    >
                      Set Alex
                    </button>
                    <button
                      onClick={() => onChangeSamVoice(persona.id)}
                      className="flex-1 py-2 rounded-xl bg-white/[0.04] hover:bg-purple-500/15 hover:border-purple-400/30 border border-white/[0.08] text-slate-300 hover:text-purple-300 text-[11px] font-medium transition-all"
                      title="Set as Host 2 (Sam)"
                    >
                      Set Sam
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Uncluttered Minimal Bottom Action Deck */}
      <div className="glass-card glass-specular rounded-2xl px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-emerald-400 text-xl animate-pulse">
            graphic_eq
          </span>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-white font-mono font-medium">{charCount} Characters</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 font-mono">
              ≈ ${( (charCount / 1000) * 0.045 ).toFixed(2)} inference
            </span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-slate-400 hidden md:inline font-mono">
              9,200 remaining in quota
            </span>
          </div>
        </div>

        <button
          onClick={onSynthesizeAudio}
          disabled={isSynthesizing}
          className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 text-[#002022] font-headline text-sm font-semibold tracking-tight hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(0,220,230,0.35)] disabled:opacity-50"
        >
          <span
            className={`material-symbols-outlined text-base ${
              isSynthesizing ? 'animate-spin' : ''
            }`}
          >
            {isSynthesizing ? 'sync' : 'record_voice_over'}
          </span>
          <span>{isSynthesizing ? 'Synthesizing Podcast...' : 'Synthesize Audio'}</span>
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
