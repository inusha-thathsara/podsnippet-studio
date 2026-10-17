// Curated ElevenLabs voice profiles optimized for tech podcasts & audio teasers

export const VOICES = [
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
  solo: '21m00Tcm4TlvDq8ikWAM', // Rachel
  duo: {
    alex: '21m00Tcm4TlvDq8ikWAM', // Rachel (Curious Co-Host)
    sam: 'pNInz6obpgDQGcFmaJgB'   // Adam (Expert Co-Host)
  }
};
