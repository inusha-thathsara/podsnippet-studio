import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, RotateCcw, Volume2, VolumeX, Download, Code, Check, 
  Box, FastForward, Rewind, FileText, Share2, Sparkles, Activity
} from 'lucide-react';
import { StudioScene3D } from './StudioScene3D';

export function AudioStudioPlayer({ audioData, scriptData, articleTitle }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [copiedEmbed, setCopiedEmbed] = useState(false);
  const [copiedTranscript, setCopiedTranscript] = useState(false);
  const [hoverSeekTime, setHoverSeekTime] = useState(null);
  const [hoverSeekPos, setHoverSeekPos] = useState(0);
  const [analyserNode, setAnalyserNode] = useState(null);

  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const captionsContainerRef = useRef(null);
  const waveformCanvasRef = useRef(null);

  const isDuo = scriptData?.mode === 'duo';
  const words = audioData?.words || [];

  // Find currently active word and speaker
  const activeWordIndex = words.findIndex((w) => currentTime >= w.start && currentTime <= w.end);
  const currentSpeaker = activeWordIndex !== -1 ? words[activeWordIndex].speaker : (isDuo ? 'Alex' : 'Solo Host');

  // Initialize Audio Source
  useEffect(() => {
    if (!audioData?.audioBase64) return;

    const audioUrl = `data:audio/mp3;base64,${audioData.audioBase64}`;
    const audio = new Audio(audioUrl);
    audioRef.current = audio;
    audio.playbackRate = playbackSpeed;

    audio.onloadedmetadata = () => {
      setDuration(audio.duration || audioData.durationSeconds || 60);
    };

    audio.ontimeupdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.onended = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    return () => {
      audio.pause();
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [audioData]);

  // Setup Web Audio API Analyser
  const setupAudioContext = () => {
    if (audioContextRef.current) return;

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 128;

      const source = ctx.createMediaElementSource(audioRef.current);
      source.connect(analyser);
      analyser.connect(ctx.destination);

      audioContextRef.current = ctx;
      analyserRef.current = analyser;
      sourceRef.current = source;
      setAnalyserNode(analyser);
    } catch (e) {
      console.warn('Web Audio API initialized in fallback mode:', e);
    }
  };

  // Keyboard shortcut: Spacebar to toggle play/pause
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  // Draw Audio Waveform Visualization
  useEffect(() => {
    const canvas = waveformCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const barCount = 70;
    const barWidth = width / barCount - 2;
    const progressPercent = duration > 0 ? currentTime / duration : 0;

    for (let i = 0; i < barCount; i++) {
      const barPercent = i / barCount;
      const isPlayed = barPercent <= progressPercent;

      // Simulated acoustic energy waveform curve
      const heightFactor = Math.sin(i * 0.22) * 0.4 + Math.cos(i * 0.5) * 0.35 + 0.5;
      const barHeight = Math.max(6, heightFactor * (height * 0.75));

      const x = i * (barWidth + 2);
      const y = (height - barHeight) / 2;

      if (isPlayed) {
        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, '#06b6d4');
        gradient.addColorStop(1, '#6366f1');
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      }

      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barHeight, 3);
      ctx.fill();
    }
  }, [currentTime, duration]);

  // Auto-scroll active subtitle word into view
  useEffect(() => {
    if (activeWordIndex !== -1 && captionsContainerRef.current) {
      const activeEl = captionsContainerRef.current.querySelector(`.word-${activeWordIndex}`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    }
  }, [activeWordIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    setupAudioContext();

    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error('Playback failed:', err);
      });
    }
  };

  const handleSeek = (newTime) => {
    const clampedTime = Math.max(0, Math.min(newTime, duration));
    setCurrentTime(clampedTime);
    if (audioRef.current) {
      audioRef.current.currentTime = clampedTime;
    }
  };

  const handleSkip = (seconds) => {
    handleSeek(currentTime + seconds);
  };

  const handleSpeedChange = (rate) => {
    setPlaybackSpeed(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const handleVolume = (e) => {
    const newVol = Number(e.target.value);
    setVolume(newVol);
    setIsMuted(newVol === 0);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume || 1;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const handleDownloadMp3 = () => {
    const link = document.createElement('a');
    link.href = `data:audio/mp3;base64,${audioData.audioBase64}`;
    link.download = `${(articleTitle || 'podsnippet').toLowerCase().replace(/[^a-z0-9]+/g, '-')}.mp3`;
    link.click();
  };

  const handleCopyEmbed = () => {
    const embedCode = `<!-- PodSnippet Studio 3D Interactive Card -->
<iframe src="https://podsnippet.tech/embed/${encodeURIComponent(articleTitle || 'preview')}" width="100%" height="380" frameborder="0" allow="autoplay"></iframe>`;
    navigator.clipboard.writeText(embedCode);
    setCopiedEmbed(true);
    setTimeout(() => setCopiedEmbed(false), 2500);
  };

  const handleExportTranscript = () => {
    const transcriptText = isDuo
      ? scriptData.turns?.map(t => `${t.speaker}: ${t.text}`).join('\n\n')
      : scriptData.scriptText || '';
    
    const blob = new Blob([transcriptText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${(articleTitle || 'podsnippet').toLowerCase().replace(/[^a-z0-9]+/g, '-')}-transcript.txt`;
    link.click();
    URL.revokeObjectURL(url);
    setCopiedTranscript(true);
    setTimeout(() => setCopiedTranscript(false), 2500);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleWaveformClick = (e) => {
    const canvas = waveformCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));
    handleSeek(percent * duration);
  };

  const handleWaveformHover = (e) => {
    const canvas = waveformCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const hoverX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, hoverX / rect.width));
    setHoverSeekTime(percent * duration);
    setHoverSeekPos(hoverX);
  };

  return (
    <div className="glass-panel-elevated" style={{
      padding: '2.25rem',
      marginBottom: '2.5rem',
      border: '1px solid var(--border-glass-bright)',
      boxShadow: 'var(--shadow-glass-elevated)'
    }}>
      {/* Studio Header Banner */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.75rem',
        flexWrap: 'wrap',
        gap: '1rem',
        borderBottom: '1px solid var(--border-glass)',
        paddingBottom: '1.4rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem' }}>
            <span className="badge badge-emerald">
              <Sparkles size={11} /> Broadcast Mastered
            </span>
            <span className="badge badge-cyan" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Box size={11} /> 3D WebGL Audio Reactive
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {isDuo ? 'Dual-Host Episode' : 'Solo Flash Teaser'}
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', margin: 0, letterSpacing: '-0.02em' }}>
            {articleTitle}
          </h2>
        </div>

        {/* Action Export Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          <button
            onClick={handleDownloadMp3}
            className="btn-secondary"
            style={{ padding: '0.55rem 1rem', fontSize: '0.82rem' }}
            title="Download broadcast-grade MP3"
          >
            <Download size={14} color="var(--accent-cyan)" />
            <span>Download MP3</span>
          </button>
          
          <button
            onClick={handleExportTranscript}
            className="btn-secondary"
            style={{ padding: '0.55rem 1rem', fontSize: '0.82rem' }}
            title="Export full transcript text"
          >
            {copiedTranscript ? <Check size={14} color="var(--accent-emerald)" /> : <FileText size={14} />}
            <span>{copiedTranscript ? 'Downloaded!' : 'Export Transcript'}</span>
          </button>

          <button
            onClick={handleCopyEmbed}
            className="btn-secondary"
            style={{ padding: '0.55rem 1rem', fontSize: '0.82rem' }}
            title="Copy 3D Embed Iframe"
          >
            {copiedEmbed ? <Check size={14} color="var(--accent-emerald)" /> : <Code size={14} />}
            <span>{copiedEmbed ? 'Copied Embed!' : 'Embed 3D Card'}</span>
          </button>
        </div>
      </div>

      {/* 3D Interactive Studio Stage */}
      <div style={{ marginBottom: '1.5rem' }}>
        <StudioScene3D
          isPlaying={isPlaying}
          analyser={analyserNode}
          currentSpeaker={currentSpeaker}
          mode={scriptData?.mode}
        />
      </div>

      {/* Active Speaker Status HUD */}
      {isDuo ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.25rem',
          marginBottom: '1.5rem'
        }}>
          {/* Host A: Alex */}
          <div className="glass-card" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.4rem',
            borderRadius: 'var(--radius-lg)',
            background: currentSpeaker === 'Alex' ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.16) 0%, rgba(14, 20, 38, 0.6) 100%)' : 'rgba(255, 255, 255, 0.03)',
            border: currentSpeaker === 'Alex' ? '1.5px solid var(--accent-cyan)' : '1px solid var(--border-glass)',
            boxShadow: currentSpeaker === 'Alex' ? '0 0 24px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' : 'none',
            transition: 'all 0.25s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                className={isPlaying && currentSpeaker === 'Alex' ? 'speaker-active-alex' : ''}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--accent-cyan)',
                  color: '#06080d',
                  fontWeight: 900,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                A
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: 800, fontSize: '0.95rem', color: currentSpeaker === 'Alex' ? 'var(--accent-cyan)' : 'var(--text-primary)' }}>
                    Alex
                  </span>
                  {isPlaying && currentSpeaker === 'Alex' && (
                    <span className="badge badge-cyan" style={{ fontSize: '0.62rem', padding: '0.1rem 0.5rem' }}>
                      Live in 3D
                    </span>
                  )}
                </div>
                <p style={{ margin: 0, fontSize: '0.74rem', color: 'var(--text-muted)' }}>Curious Co-Host</p>
              </div>
            </div>

            {isPlaying && currentSpeaker === 'Alex' && (
              <div className="eq-container">
                <div className="eq-bar eq-bar-animated" style={{ animationDelay: '0s' }} />
                <div className="eq-bar eq-bar-animated" style={{ animationDelay: '0.2s' }} />
                <div className="eq-bar eq-bar-animated" style={{ animationDelay: '0.4s' }} />
              </div>
            )}
          </div>

          {/* Host B: Sam */}
          <div className="glass-card" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.4rem',
            borderRadius: 'var(--radius-lg)',
            background: currentSpeaker === 'Sam' ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.16) 0%, rgba(14, 20, 38, 0.6) 100%)' : 'rgba(255, 255, 255, 0.03)',
            border: currentSpeaker === 'Sam' ? '1.5px solid var(--accent-violet)' : '1px solid var(--border-glass)',
            boxShadow: currentSpeaker === 'Sam' ? '0 0 24px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' : 'none',
            transition: 'all 0.25s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                className={isPlaying && currentSpeaker === 'Sam' ? 'speaker-active-sam' : ''}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--accent-violet)',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                S
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: 800, fontSize: '0.95rem', color: currentSpeaker === 'Sam' ? 'var(--accent-violet)' : 'var(--text-primary)' }}>
                    Sam
                  </span>
                  {isPlaying && currentSpeaker === 'Sam' && (
                    <span className="badge badge-brand" style={{ fontSize: '0.62rem', padding: '0.1rem 0.5rem' }}>
                      Live in 3D
                    </span>
                  )}
                </div>
                <p style={{ margin: 0, fontSize: '0.74rem', color: 'var(--text-muted)' }}>Technical Expert</p>
              </div>
            </div>

            {isPlaying && currentSpeaker === 'Sam' && (
              <div className="eq-container">
                <div className="eq-bar eq-bar-animated" style={{ animationDelay: '0.1s', background: 'var(--accent-violet)' }} />
                <div className="eq-bar eq-bar-animated" style={{ animationDelay: '0.3s', background: 'var(--accent-violet)' }} />
                <div className="eq-bar eq-bar-animated" style={{ animationDelay: '0.5s', background: 'var(--accent-violet)' }} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.9rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(99, 102, 241, 0.1)',
          border: '1px solid rgba(99, 102, 241, 0.35)',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            <div
              className={isPlaying ? 'speaker-active-alex' : ''}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--gradient-brand)',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              🎙️
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 800, fontSize: '0.95rem' }}>Solo Narrator</span>
                {isPlaying && <span className="badge badge-cyan" style={{ fontSize: '0.62rem' }}>Live 3D Audio</span>}
              </div>
              <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>60-Second High Retention Teaser</p>
            </div>
          </div>

          {isPlaying && (
            <div className="eq-container">
              <div className="eq-bar eq-bar-animated" style={{ animationDelay: '0s' }} />
              <div className="eq-bar eq-bar-animated" style={{ animationDelay: '0.2s' }} />
              <div className="eq-bar eq-bar-animated" style={{ animationDelay: '0.4s' }} />
            </div>
          )}
        </div>
      )}

      {/* Karaoke Synchronized Captions Viewport */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>
            Synchronized Interactive Transcript
          </span>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            Click any word to seek playback immediately
          </span>
        </div>

        <div
          ref={captionsContainerRef}
          style={{
            maxHeight: '135px',
            overflowY: 'auto',
            background: 'var(--bg-glass-input)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid var(--border-glass)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem 1.5rem',
            lineHeight: 1.85,
            fontSize: '0.98rem',
            fontFamily: 'var(--font-sans)',
            boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.45)'
          }}
        >
          {words.map((w, index) => {
            const isSpoken = currentTime > w.end;
            const isActive = currentTime >= w.start && currentTime <= w.end;

            return (
              <span
                key={index}
                className={`karaoke-word word-${index} ${isActive ? 'active' : ''} ${isSpoken ? 'spoken' : ''}`}
                onClick={() => handleSeek(w.start)}
                style={{ cursor: 'pointer' }}
                title={`[${w.speaker || 'Host'}]: ${w.start}s - ${w.end}s (Click to jump)`}
              >
                {w.word}
              </span>
            );
          })}
        </div>
      </div>

      {/* Playback Controls & Waveform Scrubber */}
      <div style={{
        background: 'rgba(12, 17, 34, 0.65)',
        backdropFilter: 'blur(24px) saturate(190%)',
        WebkitBackdropFilter: 'blur(24px) saturate(190%)',
        border: '1px solid var(--border-glass-bright)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.18)',
        padding: '1.5rem'
      }}>
        {/* Visual Audio Waveform Scrubber with Hover Tooltip */}
        <div
          style={{ position: 'relative', marginBottom: '1rem', cursor: 'pointer' }}
          onClick={handleWaveformClick}
          onMouseMove={handleWaveformHover}
          onMouseLeave={() => setHoverSeekTime(null)}
        >
          <canvas
            ref={waveformCanvasRef}
            width={800}
            height={44}
            style={{ width: '100%', height: '44px', display: 'block', borderRadius: '4px' }}
          />

          {hoverSeekTime !== null && (
            <div style={{
              position: 'absolute',
              top: '-26px',
              left: `${hoverSeekPos}px`,
              transform: 'translateX(-50%)',
              background: 'rgba(6, 8, 13, 0.95)',
              border: '1px solid var(--accent-cyan)',
              color: 'var(--accent-cyan)',
              padding: '0.1rem 0.4rem',
              borderRadius: '4px',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono)',
              pointerEvents: 'none',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            }}>
              {formatTime(hoverSeekTime)}
            </div>
          )}
        </div>

        {/* Timestamps & Traditional Range Progress Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 600, width: '42px' }}>
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 1}
            step={0.1}
            value={currentTime}
            onChange={(e) => handleSeek(Number(e.target.value))}
            style={{ flex: 1, accentColor: 'var(--accent-cyan)', cursor: 'pointer', height: '6px' }}
          />
          <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', width: '42px', textAlign: 'right' }}>
            {formatTime(duration)}
          </span>
        </div>

        {/* Transport Toolbar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Main Playback Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Skip Backward 5s */}
            <button
              onClick={() => handleSkip(-5)}
              className="btn-secondary"
              style={{ width: '38px', height: '38px', borderRadius: '50%', padding: 0 }}
              title="Skip back 5s"
            >
              <Rewind size={16} />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="btn-primary"
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(99, 102, 241, 0.5)'
              }}
              title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
            >
              {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" style={{ marginLeft: '3px' }} />}
            </button>

            {/* Skip Forward 5s */}
            <button
              onClick={() => handleSkip(5)}
              className="btn-secondary"
              style={{ width: '38px', height: '38px', borderRadius: '50%', padding: 0 }}
              title="Skip forward 5s"
            >
              <FastForward size={16} />
            </button>

            {/* Replay */}
            <button
              onClick={() => handleSeek(0)}
              className="btn-secondary"
              style={{ width: '38px', height: '38px', borderRadius: '50%', padding: 0 }}
              title="Replay from start"
            >
              <RotateCcw size={15} />
            </button>
          </div>

          {/* Speed Selector Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.04)',
            padding: '3px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-color)',
            gap: '2px'
          }}>
            {[0.75, 1, 1.25, 1.5, 2].map((speed) => (
              <button
                key={speed}
                onClick={() => handleSpeedChange(speed)}
                style={{
                  background: playbackSpeed === speed ? 'var(--accent-indigo)' : 'transparent',
                  color: playbackSpeed === speed ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: playbackSpeed === speed ? 700 : 500,
                  padding: '0.22rem 0.55rem',
                  borderRadius: 'var(--radius-full)',
                }}
              >
                {speed}x
              </button>
            ))}
          </div>

          {/* Volume Control */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button
              onClick={toggleMute}
              className="btn-secondary"
              style={{ width: '36px', height: '36px', borderRadius: '50%', padding: 0 }}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={16} color="var(--accent-rose)" /> : <Volume2 size={16} />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={isMuted ? 0 : volume}
              onChange={handleVolume}
              style={{ width: '85px', accentColor: 'var(--accent-indigo)', height: '4px', cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
