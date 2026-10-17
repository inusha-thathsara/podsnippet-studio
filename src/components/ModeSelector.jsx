import React from 'react';
import { Zap, Users, Clock, Share2, Headphones, Radio, Sparkles, Check, Volume2 } from 'lucide-react';
import { CardTilt3D } from './CardTilt3D';

export function ModeSelector({ selectedMode, onSelectMode }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '0.4rem' }}>
          <Sparkles size={14} color="var(--accent-cyan)" />
          <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
            Step 1: Audio Product Format
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', marginBottom: '0.4rem' }}>
          Choose Your Audio Distribution Product
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.5 }}>
          Select the optimal format for your audience—from high-energy 60-second social teasers to rich NotebookLM-style conversational deep dives.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.75rem'
      }}>
        {/* Mode A: Solo Flash Teaser */}
        <div onClick={() => onSelectMode('solo')} style={{ cursor: 'pointer' }}>
          <CardTilt3D
            maxTilt={6}
            style={{
              padding: '2rem',
              borderRadius: 'var(--radius-xl)',
              border: selectedMode === 'solo' 
                ? '1.5px solid var(--accent-cyan)' 
                : '1px solid var(--border-glass)',
              background: selectedMode === 'solo'
                ? 'linear-gradient(145deg, rgba(6, 182, 212, 0.16) 0%, rgba(14, 20, 38, 0.65) 100%)'
                : 'rgba(14, 20, 38, 0.45)',
              backdropFilter: 'blur(28px) saturate(190%)',
              WebkitBackdropFilter: 'blur(28px) saturate(190%)',
              boxShadow: selectedMode === 'solo' 
                ? '0 20px 50px rgba(6, 182, 212, 0.28), 0 0 35px rgba(6, 182, 212, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.25)' 
                : 'var(--shadow-glass)',
              position: 'relative',
              overflow: 'hidden',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Top selection ribbon */}
            {selectedMode === 'solo' && (
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: 'var(--accent-cyan)',
                color: '#06080d',
                fontSize: '0.7rem',
                fontWeight: 800,
                padding: '0.3rem 0.95rem',
                borderBottomLeftRadius: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                boxShadow: '0 2px 14px rgba(6, 182, 212, 0.6)'
              }}>
                <Check size={12} strokeWidth={3} /> Selected
              </div>
            )}

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(6, 182, 212, 0.18)',
                  border: '1px solid rgba(6, 182, 212, 0.4)',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 24px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                }}>
                  <Zap size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.28rem', margin: 0, letterSpacing: '-0.025em' }}>⚡ Solo Flash Teaser</h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan-bright)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    60-Second Social Hook & Audiogram
                  </span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.4rem', lineHeight: 1.55 }}>
                A punchy, single-narrator breakdown crafted for high retention on LinkedIn, X, and the header of your blog. Pinpoints the problem, core insight, and actionable takeaway.
              </p>
            </div>

            <div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
                borderTop: '1px solid var(--border-glass)',
                paddingTop: '1.1rem'
              }}>
                <span className="badge badge-cyan" style={{ fontSize: '0.72rem', textTransform: 'none' }}>
                  <Clock size={12} /> 50–60s Duration
                </span>
                <span className="badge" style={{ fontSize: '0.72rem', textTransform: 'none', background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-secondary)', border: '1px solid var(--border-glass)' }}>
                  <Radio size={12} /> 1 Solo Narrator
                </span>
                <span className="badge" style={{ fontSize: '0.72rem', textTransform: 'none', background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-secondary)', border: '1px solid var(--border-glass)' }}>
                  <Share2 size={12} /> Social Reels & Feeds
                </span>
              </div>
            </div>
          </CardTilt3D>
        </div>

        {/* Mode B: Dual-Host Deep Dive */}
        <div onClick={() => onSelectMode('duo')} style={{ cursor: 'pointer' }}>
          <CardTilt3D
            maxTilt={6}
            style={{
              padding: '2rem',
              borderRadius: 'var(--radius-xl)',
              border: selectedMode === 'duo' 
                ? '1.5px solid var(--accent-violet)' 
                : '1px solid var(--border-glass)',
              background: selectedMode === 'duo'
                ? 'linear-gradient(145deg, rgba(139, 92, 246, 0.16) 0%, rgba(14, 20, 38, 0.65) 100%)'
                : 'rgba(14, 20, 38, 0.45)',
              backdropFilter: 'blur(28px) saturate(190%)',
              WebkitBackdropFilter: 'blur(28px) saturate(190%)',
              boxShadow: selectedMode === 'duo' 
                ? '0 20px 50px rgba(139, 92, 246, 0.28), 0 0 35px rgba(139, 92, 246, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.25)' 
                : 'var(--shadow-glass)',
              position: 'relative',
              overflow: 'hidden',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Top selection ribbon */}
            {selectedMode === 'duo' && (
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: 'var(--accent-violet)',
                color: '#ffffff',
                fontSize: '0.7rem',
                fontWeight: 800,
                padding: '0.3rem 0.95rem',
                borderBottomLeftRadius: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                boxShadow: '0 2px 14px rgba(139, 92, 246, 0.6)'
              }}>
                <Check size={12} strokeWidth={3} /> Selected
              </div>
            )}

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.1rem' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(139, 92, 246, 0.18)',
                  border: '1px solid rgba(139, 92, 246, 0.4)',
                  color: 'var(--accent-violet)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 24px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                }}>
                  <Users size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.28rem', margin: 0, letterSpacing: '-0.025em' }}>🎙️ Dual-Host Deep Dive</h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--accent-violet-bright)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    NotebookLM Style Dynamic Dialogue
                  </span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.4rem', lineHeight: 1.55 }}>
                Two distinct AI co-hosts (Alex & Sam) discuss, challenge, and dissect your post. Features natural interruptions, organic humor, and balanced technical rigor.
              </p>
            </div>

            <div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.65rem',
                borderTop: '1px solid var(--border-glass)',
                paddingTop: '1.1rem'
              }}>
                <span className="badge badge-brand" style={{ fontSize: '0.72rem', textTransform: 'none' }}>
                  <Clock size={12} /> 2.5–3.5m Audio
                </span>
                <span className="badge" style={{ fontSize: '0.72rem', textTransform: 'none', background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-secondary)', border: '1px solid var(--border-glass)' }}>
                  <Headphones size={12} /> 2 Co-Hosts (Alex & Sam)
                </span>
                <span className="badge" style={{ fontSize: '0.72rem', textTransform: 'none', background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-secondary)', border: '1px solid var(--border-glass)' }}>
                  <Volume2 size={12} /> Newsletter Audio Edition
                </span>
              </div>
            </div>
          </CardTilt3D>
        </div>
      </div>
    </div>
  );
}
