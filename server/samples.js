// Sample technical articles for instant 1-click testing

export const SAMPLE_ARTICLES = [
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
    id: 'ai-agents-observability',
    title: 'The Silent Killer of Production AI Agents: Non-Deterministic Latency Spikes',
    author: 'Marcus Chen',
    url: 'https://dev.to/marcuschen/the-silent-killer-of-production-ai-agents-312c',
    category: 'AI & Engineering',
    readTime: '7 min read',
    content: `# The Silent Killer of Production AI Agents: Non-Deterministic Latency Spikes

Building an AI agent prototype in a Jupyter notebook is easy. Keeping that agent under a 3-second p99 latency SLA in production with 10,000 concurrent users is a nightmare.

### The Cascade Effect
Traditional APIs fail predictably with timeouts or 500 errors. AI agent workflows fail unpredictably:
- A tool-calling loop that normally executes in 2 steps suddenly decides to hallucinate a 7-step recursive search.
- Upstream LLM token streaming speeds drop from 80 tokens/sec to 12 tokens/sec during peak provider load.
- Memory context grows exponentially, causing token truncation and cascading re-prompting.

### How to Fix Agent Reliability
1. **Strict Loop Budgets:** Never allow an agent to loop tools indefinitely. Enforce hard iteration limits (e.g., maximum 3 tool executions per request).
2. **Speculative Execution:** Parallelize tool calls whenever dependencies permit.
3. **Open-Weight Local Fallbacks:** Route fast classification and intent routing to a local Gemma model (sub-50ms), and only invoke heavy reasoning models when necessary.

If you are not tracing your agent step durations with granular telemetry, you are flying blind in production.`
  }
];
