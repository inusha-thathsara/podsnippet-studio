import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { VOICES, DEFAULT_PRESETS } from './voices.js';
import { SAMPLE_ARTICLES } from './samples.js';
import { generateScript } from './gemmaService.js';
import { synthesizeAudio } from './elevenlabsService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Healthcheck & Configuration Status
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    hasElevenLabsKey: Boolean(process.env.ELEVENLABS_API_KEY && process.env.ELEVENLABS_API_KEY.trim()),
    hasGemmaKey: Boolean(process.env.GEMMA_API_KEY && process.env.GEMMA_API_KEY.trim()),
  });
});

// Voice Profiles Catalog
app.get('/api/voices', (req, res) => {
  res.json({
    voices: VOICES,
    presets: DEFAULT_PRESETS,
  });
});

// Sample Articles Catalog
app.get('/api/samples', (req, res) => {
  res.json({
    samples: SAMPLE_ARTICLES,
  });
});

// Runtime configuration disabled in production
app.post('/api/config', (req, res) => {
  res.status(403).json({ error: 'Runtime configuration is disabled in production mode.' });
});

// Article Extraction Endpoint (From URL or Raw Markdown)
app.post('/api/extract', async (req, res) => {
  try {
    const { url, rawContent } = req.body;

    if (rawContent && rawContent.trim()) {
      const lines = rawContent.trim().split('\n');
      const firstHeading = lines.find((l) => l.startsWith('# '));
      const title = firstHeading ? firstHeading.replace('# ', '').trim() : 'Imported Document';
      return res.json({
        title,
        content: rawContent.trim(),
        wordCount: rawContent.trim().split(/\s+/).length,
      });
    }

    if (!url || !url.startsWith('http')) {
      return res.status(400).json({ error: 'Please provide a valid URL or Markdown content.' });
    }

    // Fetch and parse webpage
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) PodSnippetStudio/1.0',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch article: HTTP ${response.status}`);
    }

    const html = await response.text();

    // Extract title from <title> or <h1>
    const titleMatch = html.match(/<title>(.*?)<\/title>/i) || html.match(/<h1[^>]*>(.*?)<\/h1>/i);
    let title = titleMatch ? titleMatch[1].replace(/ - DEV Community.*$/, '').replace(/ \| Substack.*$/, '').trim() : 'Extracted Article';
    title = title.replace(/<[^>]+>/g, '').trim();

    // Strip HTML scripts, styles, and tags to extract clean text
    const cleanText = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, '')
      .replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, '')
      .replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, ' ')
      .trim();

    const truncated = cleanText.slice(0, 5000);

    res.json({
      title,
      content: truncated,
      wordCount: truncated.split(/\s+/).length,
    });
  } catch (err) {
    console.error('[Extract Error]:', err.message);
    res.status(500).json({ error: `Could not extract article: ${err.message}` });
  }
});

// Open-Weight Script Generation Endpoint (Gemma 2 Engine)
app.post('/api/generate-script', async (req, res) => {
  try {
    const { articleTitle, articleContent, mode = 'solo' } = req.body;

    if (!articleTitle || !articleContent) {
      return res.status(400).json({ error: 'Both article title and content are required.' });
    }

    const scriptData = await generateScript({
      articleTitle,
      articleContent,
      mode,
    });

    res.json(scriptData);
  } catch (err) {
    console.error('[Script Gen Error]:', err.message);
    res.status(500).json({ error: `Script generation failed: ${err.message}` });
  }
});

// Voice Synthesis & Multi-Speaker Stitching Endpoint (ElevenLabs Engine)
app.post('/api/generate-audio', async (req, res) => {
  try {
    const { scriptData, voiceSettings } = req.body;

    if (!scriptData) {
      return res.status(400).json({ error: 'Missing script data for synthesis.' });
    }

    const audioResult = await synthesizeAudio({
      scriptData,
      voiceSettings,
    });

    res.json(audioResult);
  } catch (err) {
    console.error('[Audio Gen Error]:', err.message);
    res.status(500).json({ error: `Audio synthesis failed: ${err.message}` });
  }
});

// Serve static frontend build
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');

app.use(express.static(distPath));

// SPA fallback for non-API routes
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🎙️ PodSnippet Studio Backend API listening on http://localhost:${PORT}`);
});

