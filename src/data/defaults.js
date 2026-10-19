// Default fallback presets for client-side and static deployments (GitHub Pages)

export const DEFAULT_VOICES = [
  {
    id: '21m00Tcm4TlvDq8ikWAM',
    name: 'Rachel',
    gender: 'female',
    persona: 'Warm & Engaging',
    description: 'Natural, conversational, and energetic. Perfect for welcoming teasers and active co-hosting.',
    accent: 'American',
    recommendedFor: ['solo', 'alex']
  },
  {
    id: 'pNInz6obpgDQGcFmaJgB',
    name: 'Adam',
    gender: 'male',
    persona: 'Authoritative & Tech-Savvy',
    description: 'Deep, crisp, and articulate. Ideal for technical breakdowns and expert analysis.',
    accent: 'American',
    recommendedFor: ['solo', 'sam']
  },
  {
    id: 'AZnzlk1XvdvUeBnXmlld',
    name: 'Domi',
    gender: 'female',
    persona: 'Punchy & Confident',
    description: 'Fast-paced, bold, and high-retention. Built for viral social media hooks.',
    accent: 'American',
    recommendedFor: ['solo', 'alex']
  },
  {
    id: 'JBFqnCBsd6RMkjVDRZzb',
    name: 'George',
    gender: 'male',
    persona: 'Thoughtful Storyteller',
    description: 'Warm British voice with natural cadence, ideal for narrative explainers.',
    accent: 'British',
    recommendedFor: ['solo', 'sam']
  },
  {
    id: 'EXAVITQu4vr4xnSDxMaL',
    name: 'Bella',
    gender: 'female',
    persona: 'Dynamic Interviewer',
    description: 'Expressive and curious tone with playful inflections.',
    accent: 'American',
    recommendedFor: ['alex']
  },
  {
    id: 'nPczCjzI2devNBz1zQrb',
    name: 'Brian',
    gender: 'male',
    persona: 'Deep-Dive Specialist',
    description: 'Calm, grounded, and intellectual. Explains complex concepts with clarity.',
    accent: 'American',
    recommendedFor: ['sam']
  }
];

export const DEFAULT_PRESETS = {
  solo: '21m00Tcm4TlvDq8ikWAM',
  duo: {
    alex: '21m00Tcm4TlvDq8ikWAM',
    sam: 'pNInz6obpgDQGcFmaJgB'
  }
};

export const DEFAULT_SAMPLES = [
  {
    id: 'local-first-sqlite',
    title: 'Why SQLite in the Browser with WebAssembly is Changing Local-First Apps',
    author: 'Alex Rivera',
    url: 'https://dev.to/alexrivera/local-first-sqlite-in-the-browser-49b2',
    category: 'Architecture',
    readTime: '6 min read',
    content: `# Why SQLite in the Browser with WebAssembly is Changing Local-First Apps

For the past decade, web developers have accepted an unspoken truth: your client application is just a dumb terminal rendering JSON fetched from a distant relational database in us-east-1. If the user goes offline or enters a subway tunnel, the spinner freezes, mutations fail, and the experience breaks.

Enter SQLite compiled to WebAssembly with Origin Private File System (OPFS) storage.

### The Problem with Cloud-Only State
When your web app relies on REST or GraphQL queries for every interaction, latency dominates your UI performance. Every search query requires a network round-trip. Every filter change stalls the main thread while waiting for a response.

### How In-Browser SQLite Works
By compiling SQLite to Wasm and backing it with the browser's OPFS API, we can persist gigabytes of relational data directly inside IndexedDB/OPFS at near-native I/O speeds:
1. **Sub-millisecond queries:** Searching 100,000 rows takes 2ms directly in browser memory.
2. **True offline capability:** The app works with zero internet connection.
3. **Sync engines:** Background workers sync delta changes to server Postgres using conflict-free replicated data types (CRDTs).

### The Trade-offs You Need to Know
It is not all sunshine and rainbows. Initial bundle sizes increase by ~800KB for the Wasm binary. Migration management shifts from a centralized DB migration script to distributed client schema reconciliation. But for high-productivity software like Notion, Linear, or Figma, local-first architecture is no longer optional—it is the modern standard.`
  },
  {
    id: 'monolith-vs-microservices',
    title: 'Microservices Are Overrated: How Our Solo Startup Hit $50k MRR on a Modular Monolith',
    author: 'Elena Rostova',
    url: 'https://dev.to/erostova/microservices-are-overrated-50k-mrr-monolith-881a',
    category: 'Startups & DevOps',
    readTime: '5 min read',
    content: `# Microservices Are Overrated: How Our Solo Startup Hit $50k MRR on a Modular Monolith

Every junior architect reads about Netflix or Uber's distributed microservices and immediately assumes their 2-person SaaS startup needs Kubernetes, gRPC, and 14 separate Docker containers.

We fell into that trap early. It almost killed our business.

### The Distributed Systems Tax
In our first architecture, we split auth, billing, notifications, and analytics into separate services.
Here is what happened:
- Deployments took 45 minutes because of inter-service dependency chains.
- Debugging a single checkout failure required tracing distributed OpenTelemetry spans across 4 network hops.
- Cloud hosting bills reached $1,400/month before we even made our first dollar in customer revenue.

### The Turning Point: The Boring Monolith
We spent three grueling weeks tearing down the microservices and consolidating everything into a single Node.js / PostgreSQL monolith hosted on a single $40/month VPS.

The results were astonishing:
- Deployment dropped from 45 minutes to 30 seconds via simple git pushes.
- Database transactions became atomic again without complex two-phase commits.
- Feature velocity tripled. We shipped our billing overhaul in two days instead of two weeks.

### The Lesson for Indie Builders
Don't optimize for Netflix problems before you have Netflix scale. A clean modular monolith with clear domain boundaries can easily scale past $10M in revenue. Your customers care about reliability, not your distributed tracing dashboard.`
  },
  {
    id: 'cloudflare-pingora',
    title: 'Why Cloudflare Replaced NGINX with Pingora and Rust in Production',
    author: 'David Chen',
    url: 'https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/',
    category: 'Systems & Rust',
    readTime: '8 min read',
    content: `# Why Cloudflare Replaced NGINX with Pingora and Rust in Production

For over a decade, Cloudflare relied heavily on NGINX to power its global edge network proxy. NGINX was battle-tested, extremely performant in C, and served over a trillion requests each day.

So why throw it away and rebuild the entire core proxy from scratch in Rust?

### The Architectural Ceiling of NGINX
NGINX uses a multi-process worker architecture where incoming TCP connections are pinned to specific worker processes. While simple and reliable, this introduced severe load imbalances:
1. **Connection pooling penalties:** Each worker maintains its own pool of upstream connections, multiplying overall TLS handshake overhead.
2. **Tail latency spikes:** A single heavy request on worker 3 would stall other lightweight requests routed to that same process.
3. **C Memory Safety Risk:** At global scale, even subtle buffer edge cases in custom C Lua modules present catastrophic zero-day vulnerabilities.

### The Pingora Breakthrough in Rust
Pingora implements a multi-threaded async runtime with work-stealing thread pools built on Tokio:
- **70% CPU reduction:** Shared connection pooling eliminated redundant upstream handshakes.
- **50% p99 latency cut:** Work-stealing prevents slow requests from starving fast requests.
- **Zero memory safety crashes:** Rust's borrow checker enforces compile-time guarantees across trillions of edge transactions.

If your systems team operates at high concurrency, the transition from C to Rust is no longer speculative—it is a proven operational win.`
  }
];

export function generateClientHeuristicScript(title, content, mode) {
  const cleanLines = content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 25 && !line.startsWith('#') && !line.startsWith('!'));

  const leadLine = cleanLines[0] || 'Every developer has run into this bottleneck.';
  const coreInsight = cleanLines[1] || 'The traditional approach creates unnecessary friction.';
  const practicalTakeaway = cleanLines[2] || 'By shifting this logic directly to modern tools, performance jumps dramatically.';

  if (mode === 'solo') {
    const scriptText = `What if everything we accepted about traditional web architecture was actually slowing us down? 
${leadLine.replace(/\.$/, '')}. But here is the breakthrough. 
${coreInsight} Instead of waiting on round-trip latency, modern teams are moving state directly into browser memory.
${practicalTakeaway}
If you want the complete technical breakdown, check out the full article: ${title}. Read it now on the blog!`;

    const wordCount = scriptText.split(/\s+/).length;
    return {
      mode: 'solo',
      title,
      scriptText,
      wordCount,
      estimatedSeconds: Math.round(wordCount / 2.3)
    };
  }

  const turns = [
    {
      speaker: 'Alex',
      text: `Welcome back to PodSnippet Studio! Today we are looking at an article that completely challenges conventional wisdom: ${title}. Sam, when I first read this, I was skeptical.`
    },
    {
      speaker: 'Sam',
      text: `You are not alone, Alex. Most teams instinctively reach for the most complex architecture because it feels enterprise-grade. But as the author points out, that complexity comes with a massive latency tax.`
    },
    {
      speaker: 'Alex',
      text: `Right! The article highlighted that every single request was jumping through multiple hops, blowing up debugging time and infrastructure bills.`
    },
    {
      speaker: 'Sam',
      text: `Exactly. And the solution here is surprisingly elegant. By keeping the architecture lean and moving data closer to the user, query times dropped from hundreds of milliseconds to under two milliseconds.`
    },
    {
      speaker: 'Alex',
      text: `Wait, under two milliseconds? That is a hundred times faster than a standard cloud database roundtrip!`
    },
    {
      speaker: 'Sam',
      text: `It is! Plus, the entire application works offline seamlessly. The lesson here is simple: stop optimizing for hypothetical Netflix scale before you have solved for developer velocity.`
    },
    {
      speaker: 'Alex',
      text: `Love that perspective. If you want the full code samples and benchmarks, make sure to read the full write-up on the blog. See you in the next episode!`
    }
  ];

  const totalWords = turns.reduce((acc, t) => acc + t.text.split(/\s+/).length, 0);

  return {
    mode: 'duo',
    title,
    summary: `Alex and Sam break down the core engineering trade-offs behind "${title}".`,
    turns,
    totalWords,
    estimatedSeconds: Math.round(totalWords / 2.4)
  };
}

export function generateClientSimulatedAudio(scriptData) {
  const words = [];
  let currentTime = 0.5;

  if (scriptData.mode === 'solo') {
    const rawWords = (scriptData.scriptText || '').split(/\s+/);
    for (const w of rawWords) {
      const duration = Math.max(0.2, (w.length * 0.05) + 0.15);
      words.push({
        word: w,
        start: Number(currentTime.toFixed(3)),
        end: Number((currentTime + duration).toFixed(3)),
        speaker: 'Solo Host'
      });
      currentTime += duration + 0.05;
    }
  } else {
    for (const turn of scriptData.turns || []) {
      const turnWords = (turn.text || '').split(/\s+/);
      for (const w of turnWords) {
        const duration = Math.max(0.18, (w.length * 0.045) + 0.14);
        words.push({
          word: w,
          start: Number(currentTime.toFixed(3)),
          end: Number((currentTime + duration).toFixed(3)),
          speaker: turn.speaker
        });
        currentTime += duration + 0.04;
      }
      currentTime += 0.35;
    }
  }

  const durationSeconds = Number(currentTime.toFixed(2));

  return {
    mode: scriptData.mode,
    audioBase64: null,
    words,
    durationSeconds,
    isSimulation: true
  };
}
