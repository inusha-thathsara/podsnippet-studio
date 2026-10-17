import React from 'react';
import { Sparkles, Edit3, Wand2, Loader2, Play, Plus, RefreshCw, Clock, Volume2, ArrowLeft } from 'lucide-react';

export function ScriptViewer({
  scriptData,
  onUpdateSoloScript,
  onUpdateDuoTurn,
  onAddDuoTurn,
  onRegenerateScript,
  isGeneratingScript,
  onSynthesizeAudio,
  isSynthesizing,
  onBackToInput
}) {
  if (!scriptData) return null;

  const isSolo = scriptData.mode === 'solo';
  const totalWords = isSolo
    ? (scriptData.scriptText ? scriptData.scriptText.trim().split(/\s+/).filter(Boolean).length : 0)
    : (scriptData.turns ? scriptData.turns.reduce((acc, t) => acc + (t.text ? t.text.trim().split(/\s+/).filter(Boolean).length : 0), 0) : 0);

  // ~140 words per minute speaking rate
  const estDuration = Math.round((totalWords / 140) * 60);
  const estMins = Math.floor(estDuration / 60);
  const estSecs = estDuration % 60;

  return (
    <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2.5rem' }}>
      {/* Header bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
        gap: '1rem',
        borderBottom: '1px solid var(--border-color)',
        paddingBottom: '1.25rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.25rem' }}>
            <h3 style={{ fontSize: '1.35rem', margin: 0, letterSpacing: '-0.02em' }}>
              Review & Polish Audio Script
            </h3>
            <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
              <Sparkles size={11} /> Gemma 2 Generated
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <span>{isSolo ? '60-Second Flash Teaser' : 'NotebookLM Style Co-Host Dialogue'}</span>
            <span style={{ color: 'var(--border-color)' }}>•</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={12} /> {totalWords} words (~{estMins > 0 ? `${estMins}m ` : ''}{estSecs}s audio)
            </span>
          </div>
        </div>

        {/* Action Buttons: Edit source + Regenerate */}
        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <button
            onClick={onBackToInput}
            className="btn-secondary"
            style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem' }}
          >
            <ArrowLeft size={13} /> Edit Source Article
          </button>
          {onRegenerateScript && (
            <button
              onClick={onRegenerateScript}
              disabled={isGeneratingScript}
              className="btn-secondary"
              style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem' }}
              title="Regenerate script using Gemma 2"
            >
              <RefreshCw size={13} className={isGeneratingScript ? 'spin-animate' : ''} />
              <span>{isGeneratingScript ? 'Writing...' : 'Regenerate'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Mode A: Solo Monologue Script */}
      {isSolo && (
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <label style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Solo Narrator Spoken Script (Written for the ear with punchy cadence):
            </label>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              Feel free to tweak words before synthesis
            </span>
          </div>
          <textarea
            rows={7}
            value={scriptData.scriptText || ''}
            onChange={(e) => onUpdateSoloScript(e.target.value)}
            style={{
              width: '100%',
              fontSize: '0.98rem',
              lineHeight: 1.65,
              resize: 'vertical',
              padding: '1rem',
              fontFamily: 'var(--font-sans)',
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)'
            }}
          />
        </div>
      )}

      {/* Mode B: Dual-Host Conversation Script */}
      {!isSolo && (
        <div style={{ marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {scriptData.turns?.map((turn, index) => {
            const isAlex = turn.speaker === 'Alex';
            const turnWords = turn.text ? turn.text.trim().split(/\s+/).filter(Boolean).length : 0;
            const turnSecs = Math.round((turnWords / 140) * 60);

            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  background: isAlex ? 'rgba(6, 182, 212, 0.05)' : 'rgba(139, 92, 246, 0.05)',
                  border: isAlex ? '1px solid rgba(6, 182, 212, 0.25)' : '1px solid rgba(139, 92, 246, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Speaker Avatar */}
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: isAlex ? 'var(--accent-cyan)' : 'var(--accent-violet)',
                  color: isAlex ? '#06080d' : '#ffffff',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: isAlex ? '0 0 14px rgba(6, 182, 212, 0.5)' : '0 0 14px rgba(139, 92, 246, 0.5)'
                }}>
                  {isAlex ? 'A' : 'S'}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 800, color: isAlex ? 'var(--accent-cyan)' : 'var(--accent-violet)' }}>
                        {turn.speaker}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {isAlex ? '• Curious Co-Host' : '• Technical Expert'}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        ~{turnSecs}s ({turnWords}w)
                      </span>
                      <span className="badge" style={{ fontSize: '0.62rem', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)' }}>
                        Turn {index + 1}
                      </span>
                    </div>
                  </div>

                  <textarea
                    rows={2}
                    value={turn.text}
                    onChange={(e) => onUpdateDuoTurn(index, e.target.value)}
                    style={{
                      width: '100%',
                      fontSize: '0.92rem',
                      lineHeight: 1.55,
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid var(--border-color)',
                      resize: 'vertical',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  />
                </div>
              </div>
            );
          })}

          {/* Add Dialogue Turn Button */}
          {onAddDuoTurn && (
            <button
              onClick={onAddDuoTurn}
              className="btn-secondary"
              style={{
                alignSelf: 'center',
                padding: '0.5rem 1.25rem',
                fontSize: '0.8rem',
                borderRadius: 'var(--radius-full)',
                marginTop: '0.25rem'
              }}
            >
              <Plus size={14} /> Add Another Turn
            </button>
          )}
        </div>
      )}

      {/* Bottom Synthesis Action */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '1.5rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          <Sparkles size={13} color="var(--accent-indigo)" />
          <span>ElevenLabs will synthesize voices with word-level karaoke timestamps</span>
        </div>

        <button
          onClick={onSynthesizeAudio}
          disabled={isSynthesizing}
          className="btn-primary"
          style={{ padding: '0.95rem 2.2rem', fontSize: '1.02rem' }}
        >
          {isSynthesizing ? (
            <>
              <Loader2 size={20} className="spin-animate" />
              <span>Synthesizing Voiceovers with ElevenLabs...</span>
            </>
          ) : (
            <>
              <Play size={18} fill="currentColor" />
              <span>Render Broadcast Audio & 3D Stage</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
