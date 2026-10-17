import React, { useState } from 'react';
import { X, Key, Check, ExternalLink, Shield, Sparkles, Mic } from 'lucide-react';

export function SettingsModal({
  isOpen,
  onClose,
  hasElevenLabsKey,
  hasGemmaKey,
  onSaveKeys
}) {
  const [elevenLabsKey, setElevenLabsKey] = useState('');
  const [gemmaKey, setGemmaKey] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    onSaveKeys({
      elevenLabsApiKey: elevenLabsKey,
      gemmaApiKey: gemmaKey
    });
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: '1rem'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '540px',
        width: '100%',
        padding: '2rem',
        border: '1px solid var(--border-glow)',
        boxShadow: 'var(--shadow-lg)'
      }}>
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Key size={20} color="var(--accent-indigo)" />
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Studio API Keys</h3>
          </div>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '0.4rem', borderRadius: '50%' }}>
            <X size={16} />
          </button>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          Enter your API credentials below. Keys are kept strictly in local memory and used for direct requests.
        </p>

        <form onSubmit={handleSave}>
          {/* ElevenLabs API Key */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Mic size={14} color="var(--accent-emerald)" /> ElevenLabs API Key
              </label>
              <a
                href="https://elevenlabs.io"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', display: 'inline-flex', alignItems: 'center', gap: '3px', textDecoration: 'none' }}
              >
                Get Key <ExternalLink size={10} />
              </a>
            </div>
            <input
              type="password"
              placeholder={hasElevenLabsKey ? '••••••••••••••••••••••••••••' : 'xi-...'}
              value={elevenLabsKey}
              onChange={(e) => setElevenLabsKey(e.target.value)}
              style={{ width: '100%', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}
            />
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>
              Used for high-fidelity voice synthesis and word-level timestamps.
            </span>
          </div>

          {/* Gemma 2 / Google AI API Key */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Sparkles size={14} color="var(--accent-cyan)" /> Google Gemma 2 API Key (Optional)
              </label>
              <a
                href="https://aistudio.google.com/"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', display: 'inline-flex', alignItems: 'center', gap: '3px', textDecoration: 'none' }}
              >
                Get Key <ExternalLink size={10} />
              </a>
            </div>
            <input
              type="password"
              placeholder={hasGemmaKey ? '••••••••••••••••••••••••••••' : 'AIzaSy... (Leave blank for built-in model)'}
              value={gemmaKey}
              onChange={(e) => setGemmaKey(e.target.value)}
              style={{ width: '100%', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}
            />
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.25rem' }}>
              If left blank, the app uses the built-in intelligent script generator automatically.
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              {isSaved ? (
                <>
                  <Check size={16} /> Saved!
                </>
              ) : (
                'Save Credentials'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
