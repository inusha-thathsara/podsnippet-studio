import React, { useState } from 'react';
import { Mic, Users, Volume2, Sparkles, Check, Play, Pause } from 'lucide-react';

export function VoiceConfig({
  mode,
  voices,
  soloVoiceId,
  onChangeSoloVoice,
  alexVoiceId,
  onChangeAlexVoice,
  samVoiceId,
  onChangeSamVoice
}) {
  const [playingVoiceId, setPlayingVoiceId] = useState(null);

  // Audition voice tone with Web Speech API or voice characteristics
  const handleAuditionVoice = (voice, e) => {
    e.stopPropagation();
    if (playingVoiceId === voice.id) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setPlayingVoiceId(null);
      return;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const sampleText = `Hello! I'm ${voice.name}. Ready to turn your written post into high-impact audio.`;
      const utterance = new SpeechSynthesisUtterance(sampleText);
      utterance.pitch = voice.gender === 'female' ? 1.15 : 0.9;
      utterance.rate = 1.05;

      utterance.onend = () => setPlayingVoiceId(null);
      utterance.onerror = () => setPlayingVoiceId(null);

      setPlayingVoiceId(voice.id);
      window.speechSynthesis.speak(utterance);
    } else {
      setPlayingVoiceId(voice.id);
      setTimeout(() => setPlayingVoiceId(null), 2500);
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '1.75rem', marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'rgba(99, 102, 241, 0.15)',
            color: 'var(--accent-indigo)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Mic size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', margin: 0 }}>
              {mode === 'solo' ? 'Select Solo Narrator Voice' : 'Configure Co-Host Personalities'}
            </h3>
            <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Broadcast-grade ElevenLabs neural voice models with timbre & accent matching
            </p>
          </div>
        </div>

        <span className="badge badge-emerald" style={{ fontSize: '0.68rem' }}>
          <Sparkles size={11} /> 6 Neural Voices Available
        </span>
      </div>

      {mode === 'solo' ? (
        /* Solo Voice Selector Grid */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem'
        }}>
          {voices.map((v) => {
            const isSelected = soloVoiceId === v.id;
            const isAuditioning = playingVoiceId === v.id;

            return (
              <div
                key={v.id}
                onClick={() => onChangeSoloVoice(v.id)}
                style={{
                  padding: '1.15rem',
                  borderRadius: 'var(--radius-md)',
                  background: isSelected ? 'rgba(99, 102, 241, 0.16)' : 'rgba(255, 255, 255, 0.02)',
                  border: isSelected ? '2px solid var(--accent-indigo)' : '1px solid var(--border-color)',
                  boxShadow: isSelected ? '0 0 24px rgba(99, 102, 241, 0.3)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
              >
                {isSelected && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'var(--accent-indigo)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 10px rgba(99, 102, 241, 0.7)'
                  }}>
                    <Check size={12} strokeWidth={3} />
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.4rem', paddingRight: isSelected ? '1.5rem' : '0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '1rem', color: isSelected ? '#ffffff' : 'var(--text-primary)' }}>
                      {v.name}
                    </span>
                    <span className="badge" style={{ fontSize: '0.62rem', background: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-secondary)' }}>
                      {v.gender} • {v.accent}
                    </span>
                  </div>
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.45rem' }}>
                  {v.persona}
                </div>

                <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', margin: '0 0 0.85rem 0', lineHeight: 1.45 }}>
                  {v.description}
                </p>

                {/* Audition Button */}
                <button
                  onClick={(e) => handleAuditionVoice(v, e)}
                  className="btn-secondary"
                  style={{
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.74rem',
                    borderRadius: 'var(--radius-full)',
                    width: '100%',
                    justifyContent: 'center',
                    background: isAuditioning ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    borderColor: isAuditioning ? 'var(--accent-cyan)' : 'var(--border-color)',
                    color: isAuditioning ? 'var(--accent-cyan)' : 'var(--text-secondary)'
                  }}
                >
                  {isAuditioning ? <Pause size={12} /> : <Volume2 size={12} />}
                  <span>{isAuditioning ? 'Auditioning Voice...' : 'Preview Voice Audition'}</span>
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        /* Dual Host (Alex & Sam) Voice Matcher */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {/* Alex (Curious Co-Host) */}
          <div style={{
            background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0.02) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.35)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--accent-cyan)',
                color: '#07090e',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                boxShadow: '0 0 16px rgba(6, 182, 212, 0.6)'
              }}>
                A
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--accent-cyan)' }}>Alex</h4>
                  <span className="badge badge-cyan" style={{ fontSize: '0.62rem', padding: '0.1rem 0.5rem' }}>Curious Co-Host</span>
                </div>
                <p style={{ margin: '0.15rem 0 0 0', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Hooks listener interest, frames core questions, and brings relatable analogies
                </p>
              </div>
            </div>

            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>
              Voice Profile Assignment
            </label>
            <select
              value={alexVoiceId}
              onChange={(e) => onChangeAlexVoice(e.target.value)}
              style={{ width: '100%', fontSize: '0.88rem', marginBottom: '0.85rem' }}
            >
              {voices.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name} — {v.persona} ({v.accent})
                </option>
              ))}
            </select>

            <button
              onClick={(e) => {
                const found = voices.find(v => v.id === alexVoiceId) || voices[0];
                handleAuditionVoice(found, e);
              }}
              className="btn-secondary"
              style={{
                width: '100%',
                padding: '0.45rem',
                fontSize: '0.75rem',
                borderRadius: 'var(--radius-sm)',
                justifyContent: 'center'
              }}
            >
              <Volume2 size={13} color="var(--accent-cyan)" />
              <span>Audition Alex's Voice Tone</span>
            </button>
          </div>

          {/* Sam (Expert Co-Host) */}
          <div style={{
            background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.02) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.35)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.5rem',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--accent-violet)',
                color: '#ffffff',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                boxShadow: '0 0 16px rgba(139, 92, 246, 0.6)'
              }}>
                S
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--accent-violet)' }}>Sam</h4>
                  <span className="badge badge-brand" style={{ fontSize: '0.62rem', padding: '0.1rem 0.5rem' }}>Technical Expert</span>
                </div>
                <p style={{ margin: '0.15rem 0 0 0', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Deep-dives into trade-offs, architecture decisions, and code benchmarks
                </p>
              </div>
            </div>

            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>
              Voice Profile Assignment
            </label>
            <select
              value={samVoiceId}
              onChange={(e) => onChangeSamVoice(e.target.value)}
              style={{ width: '100%', fontSize: '0.88rem', marginBottom: '0.85rem' }}
            >
              {voices.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name} — {v.persona} ({v.accent})
                </option>
              ))}
            </select>

            <button
              onClick={(e) => {
                const found = voices.find(v => v.id === samVoiceId) || voices[1];
                handleAuditionVoice(found, e);
              }}
              className="btn-secondary"
              style={{
                width: '100%',
                padding: '0.45rem',
                fontSize: '0.75rem',
                borderRadius: 'var(--radius-sm)',
                justifyContent: 'center'
              }}
            >
              <Volume2 size={13} color="var(--accent-violet)" />
              <span>Audition Sam's Voice Tone</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
