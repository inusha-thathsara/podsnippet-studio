import React from 'react';
import { Mic, Radio, Sparkles, Key, CheckCircle, AlertCircle, Box, Cpu } from 'lucide-react';

export function Header({ hasElevenLabsKey, onOpenSettings, currentStep, onJumpStep, hasScript, hasAudio }) {
  return (
    <div style={{
      position: 'sticky',
      top: '1rem',
      zIndex: 100,
      padding: '0 1rem',
      width: '100%',
    }}>
      <header className="glass-nav-capsule container" style={{
        padding: '0.75rem 1.6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        margin: '0 auto',
      }}>
        {/* Brand Logo & Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'var(--gradient-brand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 24px rgba(99, 102, 241, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
            flexShrink: 0
          }}>
            <Radio size={20} color="#ffffff" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.22rem',
                letterSpacing: '-0.03em',
                lineHeight: 1.1
              }}>
                PodSnippet <span className="text-gradient-brand">Studio</span>
              </span>
              <span className="badge badge-brand" style={{ fontSize: '0.62rem', padding: '0.15rem 0.55rem' }}>
                HF26 Week 2
              </span>
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.2 }}>
              Open-Source AI Podcast & Audio Teaser Engine
            </p>
          </div>
        </div>

        {/* Center: Glass Tech Stack Badges */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
        }} className="header-tech-pills">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            padding: '0.28rem 0.68rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.72rem',
            color: 'var(--accent-cyan-bright)',
            fontFamily: 'var(--font-mono)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15)'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', boxShadow: '0 0 8px var(--accent-cyan)' }} />
            <Cpu size={12} /> Gemma 2 (9B)
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            padding: '0.28rem 0.68rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.72rem',
            color: 'var(--accent-violet-bright)',
            fontFamily: 'var(--font-mono)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15)'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-violet)', boxShadow: '0 0 8px var(--accent-violet)' }} />
            <Mic size={12} /> ElevenLabs v2
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            padding: '0.28rem 0.68rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.72rem',
            color: '#c7d2fe',
            fontFamily: 'var(--font-mono)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.15)'
          }}>
            <Box size={12} /> 3D WebGL
          </div>
        </div>

        {/* Right Action: Partner Tech Badges & Settings */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button 
            onClick={onOpenSettings}
            className="btn-glass-pill"
            style={{
              padding: '0.45rem 0.95rem',
              fontSize: '0.8rem',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
            title="Configure ElevenLabs and Gemma API Keys"
          >
            <Key size={13} color="var(--accent-cyan)" />
            <span style={{ fontWeight: 600 }}>API Keys</span>
            {hasElevenLabsKey ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--accent-emerald)', fontSize: '0.75rem', fontWeight: 600 }}>
                <CheckCircle size={13} /> Active
              </span>
            ) : (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--accent-amber)', fontSize: '0.75rem', fontWeight: 600 }}>
                <AlertCircle size={13} /> Demo Mode
              </span>
            )}
          </button>
        </div>
      </header>
    </div>
  );
}
