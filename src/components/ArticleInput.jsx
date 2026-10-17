import React, { useState, useEffect } from 'react';
import { Globe, FileText, Sparkles, BookOpen, ArrowRight, Loader2, Clock, Mic, Sliders, Check } from 'lucide-react';

export function ArticleInput({
  articleTitle,
  articleContent,
  articleUrl,
  onChangeTitle,
  onChangeContent,
  onChangeUrl,
  onSelectSample,
  samples,
  onExtract,
  isExtracting,
  onProceedToScript,
  isGeneratingScript,
  selectedMode
}) {
  const [inputTab, setInputTab] = useState('url'); // 'url' | 'raw'
  const [selectedTone, setSelectedTone] = useState('engaging'); // 'engaging' | 'technical' | 'casual' | 'story'

  const wordCount = articleContent ? articleContent.trim().split(/\s+/).filter(Boolean).length : 0;
  const estimatedReadTime = Math.max(1, Math.round(wordCount / 220));
  // Spoken speech rate: ~140 words per minute for engaging podcast delivery
  const estimatedSpokenSeconds = Math.round((wordCount * 0.35) / 2.3); 
  const spokenFormatted = `${Math.floor(estimatedSpokenSeconds / 60)}m ${estimatedSpokenSeconds % 60}s`;

  // Keyboard shortcut: Ctrl+Enter / Cmd+Enter to proceed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        if (!isGeneratingScript && articleTitle.trim() && articleContent.trim()) {
          onProceedToScript();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGeneratingScript, articleTitle, articleContent, onProceedToScript]);

  return (
    <div className="glass-panel" style={{ padding: '2.25rem', marginBottom: '2.5rem' }}>
      {/* 1-Click Interactive Demo Articles Shelf */}
      <div style={{
        marginBottom: '2rem',
        background: 'rgba(255, 255, 255, 0.025)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '1.25rem 1.4rem',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-glass)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.9rem' }}>
          <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} color="var(--accent-cyan-bright)" /> 1-Click Demo Articles (Ready to Test):
          </span>
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Real technical posts for instant generation
          </span>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '0.85rem'
        }}>
          {samples.map((sample) => {
            const isSelected = articleTitle === sample.title;
            return (
              <button
                key={sample.id}
                onClick={() => onSelectSample(sample)}
                className="glass-card"
                style={{
                  padding: '0.95rem 1.1rem',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'left',
                  background: isSelected 
                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.16) 0%, rgba(99, 102, 241, 0.16) 100%)' 
                    : 'rgba(255, 255, 255, 0.03)',
                  border: isSelected ? '1.5px solid var(--accent-cyan)' : '1px solid var(--border-glass)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isSelected ? '0 0 20px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' : 'none',
                  transform: isSelected ? 'translateY(-2px)' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="badge badge-brand" style={{ fontSize: '0.64rem', padding: '0.12rem 0.55rem' }}>
                    {sample.category}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {sample.readTime}
                  </span>
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: isSelected ? '#ffffff' : 'var(--text-primary)',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  lineHeight: 1.4
                }}>
                  {sample.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Input Mode Selector Tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border-glass)',
        paddingBottom: '1rem',
        marginBottom: '1.75rem',
        flexWrap: 'wrap',
        gap: '0.85rem'
      }}>
        <div style={{ display: 'flex', gap: '0.6rem' }}>
          <button
            onClick={() => setInputTab('url')}
            className={`btn-glass-pill ${inputTab === 'url' ? 'active' : ''}`}
            style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem', cursor: 'pointer' }}
          >
            <Globe size={15} /> Import Article by URL
          </button>
          <button
            onClick={() => setInputTab('raw')}
            className={`btn-glass-pill ${inputTab === 'raw' ? 'active' : ''}`}
            style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem', cursor: 'pointer' }}
          >
            <FileText size={15} /> Paste Raw Markdown / Text
          </button>
        </div>

        {/* Tone Selector Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <Sliders size={13} color="var(--accent-cyan)" /> Narrative Tone:
          </span>
          <select
            value={selectedTone}
            onChange={(e) => setSelectedTone(e.target.value)}
            style={{
              padding: '0.4rem 0.85rem',
              fontSize: '0.8rem',
              background: 'rgba(10, 14, 28, 0.7)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--border-glass-bright)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            <option value="engaging">🔥 Engaging & Punchy</option>
            <option value="technical">🔬 Technical & Deep-Dive</option>
            <option value="casual">☕ Casual & Conversational</option>
            <option value="story">📖 Narrative & Story-Driven</option>
          </select>
        </div>
      </div>

      {/* URL Import View */}
      {inputTab === 'url' && (
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
            Article URL (Supports DEV.to, Substack, Medium, GitHub, or any public engineering blog)
          </label>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <input
              type="url"
              placeholder="https://dev.to/username/my-article-slug"
              value={articleUrl}
              onChange={(e) => onChangeUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onExtract()}
              style={{ flex: 1, fontSize: '0.92rem' }}
            />
            <button
              onClick={onExtract}
              disabled={isExtracting || !articleUrl.trim()}
              className="btn-secondary"
              style={{ whiteSpace: 'nowrap', padding: '0 1.4rem' }}
            >
              {isExtracting ? (
                <>
                  <Loader2 size={16} className="spin-animate" /> Extracting...
                </>
              ) : (
                'Extract Article'
              )}
            </button>
          </div>
        </div>
      )}

      {/* Title Field */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
          Article Title
        </label>
        <input
          type="text"
          placeholder="e.g. Why SQLite in the Browser with WebAssembly is Changing Everything"
          value={articleTitle}
          onChange={(e) => onChangeTitle(e.target.value)}
          style={{ width: '100%', fontSize: '1rem', fontWeight: 600 }}
        />
      </div>

      {/* Content Field */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <label style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Article Content (Markdown or Raw Text)
          </label>
          {wordCount > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.74rem', fontFamily: 'var(--font-mono)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>
                {wordCount.toLocaleString()} words
              </span>
              <span style={{ color: 'var(--border-color)' }}>•</span>
              <span style={{ color: 'var(--accent-cyan)' }}>
                ~{estimatedReadTime} min read
              </span>
              <span style={{ color: 'var(--border-color)' }}>•</span>
              <span style={{ color: 'var(--accent-emerald)', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                <Mic size={11} /> Est. audio {selectedMode === 'solo' ? '~60s teaser' : `~${spokenFormatted}`}
              </span>
            </div>
          )}
        </div>
        <textarea
          rows={8}
          placeholder="Paste article markdown or text here..."
          value={articleContent}
          onChange={(e) => onChangeContent(e.target.value)}
          style={{
            width: '100%',
            resize: 'vertical',
            fontSize: '0.88rem',
            fontFamily: 'var(--font-mono)',
            lineHeight: 1.6
          }}
        />
      </div>

      {/* Action Footer */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid var(--border-glass)',
        paddingTop: '1.5rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          <span style={{ padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.08)', fontFamily: 'var(--font-mono)' }}>
            Ctrl + Enter
          </span>
          <span>to proceed to script generation</span>
        </div>

        <button
          onClick={onProceedToScript}
          disabled={isGeneratingScript || !articleTitle.trim() || !articleContent.trim()}
          className="btn-primary"
          style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
        >
          {isGeneratingScript ? (
            <>
              <Loader2 size={19} className="spin-animate" />
              <span>Gemma 2 Crafting {selectedMode === 'solo' ? 'Teaser Script' : 'Duo Podcast Dialogue'}...</span>
            </>
          ) : (
            <>
              <span>Generate {selectedMode === 'solo' ? '⚡ 60s Solo Teaser' : '🎙️ Dual-Host Dialogue'}</span>
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
