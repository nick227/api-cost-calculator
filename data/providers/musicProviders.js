export const MUSIC_PROVIDERS = [
  {
    id: 'aimusicapi',
    name: 'AI MusicAPI',
    pricing: { music: 0.08 },
    pricingUnits: { music: 'per track (30s generation)' },
    apiUrl: 'https://aimusicapi.ai',
    notes: '$0.08/generation. Vocal+instrumental, music extension, covers. Studio-quality in 30s. CHEAPEST confirmed.'
  },
  {
    id: 'riffusion',
    name: 'Riffusion API',
    pricing: { music: 0.09 },
    pricingUnits: { music: 'per track' },
    apiUrl: 'https://riffusionapi.com',
    notes: '$9/month for 100 generations ($0.09/track). Unlimited plan $19/mo. Real-time, full control over style/genre.'
  },
  {
    id: 'poyo',
    name: 'PoYo AI',
    pricing: { music: 0.10 },
    pricingUnits: { music: 'per track generation' },
    apiUrl: 'https://poyo.ai/ai-music-api',
    notes: '$0.10/generation. Text-to-music, customizable styles, vocals, multiple model versions. Credit-based, no subscription.'
  },
  {
    id: 'tempolor',
    name: 'TemPolor',
    pricing: { music: 0.12 },
    pricingUnits: { music: 'per track (estimate)' },
    apiUrl: 'https://www.tempolor.com/ai-music-api',
    notes: 'Plans start $10. High-quality royalty-free music, vocals, instrumentals, lyrics gen, stem separation. ACR-certified.'
  },
  {
    id: 'musicapi',
    name: 'MusicAPI.ai',
    pricing: { music: 0.15 },
    pricingUnits: { music: 'per track (estimate)' },
    apiUrl: 'https://musicapi.ai',
    notes: 'Dual models (Sonic/Nuro). Text-to-music, visual storytelling, section replacement, covers. Royalty-free commercial use.'
  },
  {
    id: 'beatoven',
    name: 'Beatoven.ai',
    pricing: { music: 0.18 },
    pricingUnits: { music: 'per track (estimate)' },
    apiUrl: 'https://www.beatoven.ai/api',
    notes: 'Text-to-music, video-to-music. Context-aware music generation. Fits video content perfectly.'
  },
  {
    id: 'mubert',
    name: 'Mubert API',
    pricing: { music: 0.20 },
    pricingUnits: { music: 'per track (estimate)' },
    apiUrl: 'https://mubert.com/render/api',
    notes: 'Royalty-free music, multiple genres. API for apps/content creation. Extensive music library.'
  },
  {
    id: 'soundverse',
    name: 'Soundverse',
    pricing: { music: 0.25 },
    pricingUnits: { music: 'per track (enterprise estimate)' },
    apiUrl: 'https://www.soundverse.ai',
    notes: 'Enterprise API. Full instrumentals, multilingual singing, style cloning, stem separation. Scalable deployment.'
  }
];

