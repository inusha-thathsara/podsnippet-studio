import React, { useState, useEffect, useRef } from 'react';
import { TopHeader } from './components/TopHeader';
import { StudioSidebar } from './components/StudioSidebar';
import { DockedAudioPlayer } from './components/DockedAudioPlayer';
import { SourceIngestionView } from './components/SourceIngestionView';
import { ScriptEditorView } from './components/ScriptEditorView';
import { VoiceCastingView } from './components/VoiceCastingView';
import { StudioStageView } from './components/StudioStageView';
import { AnalyticsView } from './components/AnalyticsView';

export function App() {
  // Navigation: 'input-source' | 'script-editor' | 'voice-casting' | 'studio' | 'analytics'
  const [activeView, setActiveView] = useState('input-source');
  const [selectedMode, setSelectedMode] = useState('duo'); // 'duo' | 'solo'

  // Article State
  const [articleTitle, setArticleTitle] = useState(
    "How We Built Pingora in Rust to Power Cloudflare's Edge Proxy"
  );
  const [articleContent, setArticleContent] = useState(
    "Pingora handles over 1 trillion requests every day. By migrating from NGINX to our custom async Rust architecture, we eliminated memory safety bugs while cutting CPU consumption by 70%."
  );
  const [articleUrl, setArticleUrl] = useState(
    'https://blog.cloudflare.com/how-we-built-pingora-in-rust'
  );
  const [samples, setSamples] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Voice State (IDs matching ElevenLabs presets)
  const [voices, setVoices] = useState([]);
  const [soloVoiceId, setSoloVoiceId] = useState('21m00Tcm4TlvDq8ikWAM'); // Rachel
  const [alexVoiceId, setAlexVoiceId] = useState('pNInz6obpgDQGcFmaJgB'); // Adam
  const [samVoiceId, setSamVoiceId] = useState('21m00Tcm4TlvDq8ikWAM');   // Rachel

  // Script & Audio State
  const [scriptData, setScriptData] = useState({
    mode: 'duo',
    articleTitle: "How We Built Pingora in Rust to Power Cloudflare's Edge Proxy",
    turns: [
      {
        speaker: 'Alex',
        text: "Wait, so why did Cloudflare replace NGINX after using it to power their global proxy for more than a decade?",
      },
      {
        speaker: 'Sam',
        text: "Mainly architecture limitations and memory safety! At one trillion requests per day, even tiny C pointer edge cases become major reliability headaches.",
      },
      {
        speaker: 'Alex',
        text: "Right, and Rust gives you compile-time memory safety without a garbage collector stealing CPU cycles.",
      },
      {
        speaker: 'Sam',
        text: "Exactly. In production benchmarks, Pingora slashed CPU consumption by seventy percent while cutting p99 tail latency in half.",
      },
      {
        speaker: 'Alex',
        text: "Plus their custom work-stealing scheduler prevents slow HTTP connections from blocking fast requests.",
      },
      {
        speaker: 'Sam',
        text: "It is a masterclass in modern systems programming. The full open-source repo is live on GitHub right now.",
      },
    ],
    wordCount: 135,
  });

  const [audioData, setAudioData] = useState(null);

  // Status & Loaders
  const [isExtracting, setIsExtracting] = useState(false);
  const [isGeneratingScript, setIsGeneratingScript] = useState(false);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [hasElevenLabsKey, setHasElevenLabsKey] = useState(false);
  const [hasGemmaKey, setHasGemmaKey] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Global Audio Playback State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(194); // default 03:14
  const audioRef = useRef(null);
  const simIntervalRef = useRef(null);

  // Initial Fetch: Health, Voices, Samples
  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => {
        setHasElevenLabsKey(data.hasElevenLabsKey);
        setHasGemmaKey(data.hasGemmaKey);
      })
      .catch((err) => console.warn('Backend not responding yet:', err));

    fetch('/api/voices')
      .then((res) => res.json())
      .then((data) => {
        setVoices(data.voices || []);
        if (data.presets) {
          setSoloVoiceId(data.presets.solo || '21m00Tcm4TlvDq8ikWAM');
          setAlexVoiceId(data.presets.duo?.alex || 'pNInz6obpgDQGcFmaJgB');
          setSamVoiceId(data.presets.duo?.sam || '21m00Tcm4TlvDq8ikWAM');
        }
      })
      .catch((err) => console.warn('Could not load voices:', err));

    fetch('/api/samples')
      .then((res) => res.json())
      .then((data) => {
        setSamples(data.samples || []);
      })
      .catch((err) => console.warn('Could not load samples:', err));
  }, []);

  // Sync Audio Element when audioData changes
  useEffect(() => {
    if (audioData?.audioBase64) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audioUrl = `data:audio/mp3;base64,${audioData.audioBase64}`;
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onloadedmetadata = () => {
        setDuration(audio.duration || audioData.durationSeconds || 194);
      };

      audio.ontimeupdate = () => {
        setCurrentTime(audio.currentTime);
      };

      audio.onended = () => {
        setIsPlaying(false);
        setCurrentTime(0);
      };
    }
  }, [audioData]);

  // Audio Playback simulation or real audio play
  useEffect(() => {
    if (isPlaying) {
      if (audioRef.current && audioRef.current.src) {
        audioRef.current.play().catch(() => {});
      } else {
        // Fallback simulation timer
        simIntervalRef.current = setInterval(() => {
          setCurrentTime((prev) => {
            if (prev >= (duration || 194)) {
              setIsPlaying(false);
              return 0;
            }
            return prev + 0.25;
          });
        }, 250);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (simIntervalRef.current) {
        clearInterval(simIntervalRef.current);
      }
    }

    return () => {
      if (simIntervalRef.current) clearInterval(simIntervalRef.current);
    };
  }, [isPlaying, duration]);

  // Audio Control Handlers
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const seek = (time) => {
    setCurrentTime(time);
    if (audioRef.current && audioRef.current.src) {
      audioRef.current.currentTime = time;
    }
  };

  // Sample Selection
  const handleSelectSample = (sample) => {
    setArticleTitle(sample.title);
    setArticleContent(sample.content);
    setArticleUrl(sample.url || '');
    setErrorMsg('');
  };

  // Extract from URL
  const handleExtract = async () => {
    if (!articleUrl.trim()) return;
    setIsExtracting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: articleUrl }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to extract article.');

      setArticleTitle(data.title);
      setArticleContent(data.content);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setIsExtracting(false);
    }
  };

  // Ingestion -> Script Editor: Generate Script with Gemma 2
  const handleProceedToScript = async () => {
    if (!articleTitle.trim() || !articleContent.trim()) {
      setErrorMsg('Please provide an article title and content.');
      return;
    }

    setIsGeneratingScript(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/generate-script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleTitle,
          articleContent,
          mode: selectedMode,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to generate script.');

      setScriptData(data);
      setActiveView('script-editor');
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setIsGeneratingScript(false);
    }
  };

  // Script Editor updates
  const handleUpdateSoloScript = (newText) => {
    setScriptData((prev) => ({
      ...prev,
      scriptText: newText,
      wordCount: newText.split(/\s+/).filter(Boolean).length,
    }));
  };

  const handleUpdateDuoTurn = (index, newText) => {
    setScriptData((prev) => {
      const updatedTurns = [...prev.turns];
      updatedTurns[index] = { ...updatedTurns[index], text: newText };
      return {
        ...prev,
        turns: updatedTurns,
      };
    });
  };

  const handleAddDuoTurn = () => {
    setScriptData((prev) => {
      if (!prev?.turns) return prev;
      const lastSpeaker = prev.turns[prev.turns.length - 1]?.speaker;
      const nextSpeaker = lastSpeaker === 'Alex' ? 'Sam' : 'Alex';
      const newTurn = {
        speaker: nextSpeaker,
        text:
          nextSpeaker === 'Alex'
            ? "That's a key observation! But what about the production migration trade-offs?"
            : "Exactly. The p99 numbers make an undeniable case for low-level systems speed.",
      };
      return {
        ...prev,
        turns: [...prev.turns, newTurn],
      };
    });
  };

  // Synthesize Audio with ElevenLabs -> 3D Studio Stage
  const handleSynthesizeAudio = async () => {
    if (!scriptData) return;
    setIsSynthesizing(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/generate-audio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scriptData,
          voiceSettings: {
            soloVoiceId,
            alexVoiceId,
            samVoiceId,
          },
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Audio synthesis failed.');

      setAudioData(data);
      if (data.durationSeconds) {
        setDuration(data.durationSeconds);
      }
      setActiveView('studio');
      setIsPlaying(true);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setIsSynthesizing(false);
    }
  };


  // Load archived episode from analytics
  const handleSelectArchivedEpisode = (ep) => {
    setArticleTitle(ep.title);
    setSelectedMode(ep.format.includes('Solo') ? 'solo' : 'duo');
    setActiveView('studio');
    setIsPlaying(true);
    setCurrentTime(0);
  };

  return (
    <div className="bg-[#090a10] font-body text-slate-200 min-h-screen relative overflow-x-hidden antialiased selection:bg-cyan-400/25 selection:text-cyan-300">
      {/* Background Ambient Cosmic Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] left-[25%] w-[650px] h-[650px] rounded-full bg-cyan-500/[0.05] blur-[150px]"></div>
        <div className="absolute top-[35%] -right-[5%] w-[640px] h-[640px] rounded-full bg-purple-600/[0.05] blur-[160px]"></div>
        <div className="absolute bottom-[-10%] left-[35%] w-[550px] h-[550px] rounded-full bg-blue-600/[0.03] blur-[160px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px] opacity-60"></div>
      </div>

      {/* Top Persistent Header */}
      <TopHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Left Persistent Navigation Sidebar */}
      <StudioSidebar
        activeView={activeView}
        onViewChange={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isSynthesizing={isSynthesizing}
        hasScript={!!scriptData}
        hasAudio={!!audioData}
      />

      {/* Main Studio Viewport (Padded left for sidebar, padded bottom for docked player) */}
      <div className="pl-60 relative z-10">
        <main className="pt-24 pb-36 px-6 lg:px-12 min-h-screen w-full">
          {/* Global Error Banner */}
          {errorMsg && (
            <div className="max-w-4xl mx-auto mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-rose-400 text-lg">error</span>
                <span>{errorMsg}</span>
              </div>
              <button
                onClick={() => setErrorMsg('')}
                className="text-rose-400 hover:text-white p-1"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
          )}

          {/* SCREEN 1: Source Ingestion */}
          {activeView === 'input-source' && (
            <SourceIngestionView
              selectedMode={selectedMode}
              onSelectMode={setSelectedMode}
              articleTitle={articleTitle}
              articleContent={articleContent}
              articleUrl={articleUrl}
              onChangeTitle={setArticleTitle}
              onChangeContent={setArticleContent}
              onChangeUrl={setArticleUrl}
              onExtract={handleExtract}
              isExtracting={isExtracting}
              onProceedToScript={handleProceedToScript}
              isGeneratingScript={isGeneratingScript}
              onSelectSample={handleSelectSample}
              samples={samples}
            />
          )}

          {/* SCREEN 2: AI Script Editor */}
          {activeView === 'script-editor' && (
            <ScriptEditorView
              scriptData={scriptData}
              onUpdateSoloScript={handleUpdateSoloScript}
              onUpdateDuoTurn={handleUpdateDuoTurn}
              onAddDuoTurn={handleAddDuoTurn}
              onRegenerateScript={handleProceedToScript}
              isGeneratingScript={isGeneratingScript}
              onNavigateToVoiceCasting={() => setActiveView('voice-casting')}
              selectedMode={selectedMode}
              articleTitle={articleTitle}
            />
          )}

          {/* SCREEN 3: Voice Casting Studio */}
          {activeView === 'voice-casting' && (
            <VoiceCastingView
              voices={voices}
              soloVoiceId={soloVoiceId}
              onChangeSoloVoice={setSoloVoiceId}
              alexVoiceId={alexVoiceId}
              onChangeAlexVoice={setAlexVoiceId}
              samVoiceId={samVoiceId}
              onChangeSamVoice={setSamVoiceId}
              onSynthesizeAudio={handleSynthesizeAudio}
              isSynthesizing={isSynthesizing}
              selectedMode={selectedMode}
              scriptData={scriptData}
            />
          )}

          {/* SCREEN 4: 3D Studio Stage & Audiogram */}
          {activeView === 'studio' && (
            <StudioStageView
              audioData={audioData}
              scriptData={scriptData}
              articleTitle={articleTitle}
              selectedMode={selectedMode}
              currentTime={currentTime}
              duration={duration}
              isPlaying={isPlaying}
              onTogglePlay={togglePlay}
              onSeek={seek}
              alexVoiceId={alexVoiceId}
              samVoiceId={samVoiceId}
            />
          )}

          {/* SCREEN 5: Creator Analytics */}
          {activeView === 'analytics' && (
            <AnalyticsView onSelectEpisode={handleSelectArchivedEpisode} />
          )}
        </main>
      </div>

      {/* Bottom Persistent Docked Audio Player */}
      <DockedAudioPlayer
        audioData={audioData}
        articleTitle={articleTitle}
        selectedMode={selectedMode}
        onExport={() => {
          if (audioData?.audioUrl) {
            const a = document.createElement('a');
            a.href = audioData.audioUrl;
            a.download = 'podcast_episode.mp3';
            a.click();
          } else {
            setActiveView('studio');
          }
        }}
        currentTime={currentTime}
        duration={duration}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onSeek={seek}
      />

    </div>
  );
}
