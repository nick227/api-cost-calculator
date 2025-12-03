/**
 * Music Generation Provider Details
 * AI music creation - quality, style control, and licensing comparisons
 */

export const MUSIC_PROVIDER_DETAILS = {
  'aimusicapi': {
    subtitle: 'AI MusicAPI - Cheapest Studio Quality',
    description: 'AI MusicAPI delivers studio-quality music at $0.08/track (30s generations). Fastest generation times (~30 seconds) with vocal+instrumental support. Music extension, covers, and style control. Best value for creators needing professional royalty-free music at scale.',
    features: [
      '$0.08/track (30s generation)',
      'Studio-quality output',
      'Vocals + instrumentals',
      'Music extension/continuation',
      'Cover generation',
      'Fast: ~30s generation time'
    ],
    pros: [
      'Cheapest confirmed pricing',
      'Professional studio quality',
      'Fastest generation',
      'Vocal capabilities',
      'Good style control'
    ],
    useCases: ['YouTube content', 'Podcast intros', 'Social media', 'Background music', 'High-volume needs'],
    docsUrl: 'https://aimusicapi.ai',
    technicalDetails: 'Quality: Studio-grade mixing 85-90% professional. Musical coherence good for 30-60s. Style adherence 80-85%. Vocals 75-80% natural. Royalty-free commercial use. Best for: creators needing quantity, background music, budget productions.'
  },

  'riffusion': {
    subtitle: 'Riffusion - Real-Time Style Control',
    description: 'Riffusion API ($9/100 tracks = $0.09/track, unlimited $19/mo) offers real-time generation with full style/genre control. Unique approach using Stable Diffusion for audio spectrogram generation. Excellent for experimentation and style exploration. Fast iteration for finding perfect sound.',
    features: [
      '$9/month for 100 generations',
      'Unlimited plan: $19/month',
      'Real-time generation',
      'Full style/genre control',
      'Experimentation-friendly',
      'Fast iterations'
    ],
    pros: [
      'Real-time generation',
      'Excellent style control',
      'Good for experimentation',
      'Affordable unlimited option',
      'Fast iterations'
    ],
    useCases: ['Music exploration', 'Game audio', 'Style experimentation', 'Rapid prototyping', 'Creative projects'],
    docsUrl: 'https://riffusionapi.com',
    technicalDetails: 'Quality: 75-85% musical coherence. Unique spectrogram approach enables fine style control. Best for short loops/samples. Resolution adequate for most uses. Best for: experimentation, finding perfect style, game soundtracks, creative exploration.'
  },

  'poyo': {
    subtitle: 'PoYo AI - Customizable Multi-Version',
    description: 'PoYo AI ($0.10/generation) provides text-to-music with customizable styles, vocals, and multiple model versions. Credit-based with no subscription requirement. Good balance of quality and flexibility. Suitable for content creators needing varied musical styles.',
    features: [
      '$0.10/generation',
      'Text-to-music creation',
      'Customizable styles',
      'Vocal generation included',
      'Multiple model versions',
      'No subscription (credit-based)'
    ],
    pros: [
      'Good quality/price balance',
      'Style flexibility',
      'Vocal capabilities',
      'No subscription lock-in',
      'Multiple model options'
    ],
    useCases: ['Content creation', 'Marketing videos', 'Presentations', 'Social media', 'Varied music needs'],
    docsUrl: 'https://poyo.ai/ai-music-api',
    technicalDetails: 'Quality: 82-87% musical coherence. Vocals 78-82% natural. Style range excellent. Good for 60-120s tracks. Commercial licensing included. Best for: content creators needing variety, projects requiring vocals, flexible music needs.'
  },

  'tempolor': {
    subtitle: 'TemPolor - ACR-Certified Commercial Quality',
    description: 'TemPolor ($0.12/track estimate, plans from $10) offers ACR-certified royalty-free music. High-quality vocals, instrumentals, lyrics generation, and stem separation. Commercial-grade output suitable for professional productions. Good for projects requiring verified licensing.',
    features: [
      'Plans start $10/month',
      'ACR-certified royalty-free',
      'High-quality vocals',
      'Lyrics generation',
      'Stem separation',
      'Commercial-grade output'
    ],
    pros: [
      'Certified licensing',
      'Professional quality',
      'Stem separation included',
      'Lyrics generation',
      'Broadcast-safe'
    ],
    useCases: ['Commercial projects', 'Broadcast media', 'Professional videos', 'Advertising', 'Corporate content'],
    docsUrl: 'https://www.tempolor.com/ai-music-api',
    technicalDetails: 'Quality: 87-91% commercial grade. Vocals 83-87% professional. ACR certification ensures broadcast safety. Stem separation enables mixing. Best for: commercial productions, broadcast media, projects requiring verified licensing.'
  },

  'musicapi': {
    subtitle: 'MusicAPI.ai - Dual Model Visual Storytelling',
    description: 'MusicAPI.ai ($0.15/track estimate) features dual models (Sonic/Nuro) with visual storytelling focus. Text-to-music, section replacement, covers, and royalty-free commercial use. Good for video production needing music synchronized with visual narrative.',
    features: [
      'Dual models: Sonic & Nuro',
      'Visual storytelling focus',
      'Text-to-music generation',
      'Section replacement',
      'Cover generation',
      'Royalty-free commercial'
    ],
    pros: [
      'Optimized for video',
      'Visual narrative sync',
      'Dual model flexibility',
      'Section editing capability',
      'Commercial licensing'
    ],
    useCases: ['Video production', 'Film scoring', 'Storytelling content', 'Documentary', 'Marketing videos'],
    docsUrl: 'https://musicapi.ai',
    technicalDetails: 'Quality: 85-89% narrative coherence. Sonic model: ambient/cinematic. Nuro model: upbeat/commercial. Section editing enables story structure. Best for: video production, filmmakers, content requiring music-visual synchronization.'
  },

  'beatoven': {
    subtitle: 'Beatoven.ai - Context-Aware Video Matching',
    description: 'Beatoven.ai ($0.18/track estimate) specializes in context-aware music generation matching video content. Text-to-music and video-to-music capabilities. Analyzes video mood, pacing, and transitions to create perfectly fitted soundtrack. Premium pricing for intelligent video synchronization.',
    features: [
      'Text-to-music generation',
      'Video-to-music analysis',
      'Context-aware composition',
      'Mood/pacing matching',
      'Transition synchronization',
      'Multiple genre support'
    ],
    pros: [
      'Intelligent video matching',
      'Analyzes video context',
      'Perfect synchronization',
      'Mood-aware composition',
      'Professional results'
    ],
    useCases: ['Professional video', 'Film post-production', 'Advertising', 'Corporate video', 'Documentary'],
    docsUrl: 'https://www.beatoven.ai/api',
    technicalDetails: 'Quality: 88-92% context alignment. Analyzes video for mood, energy, transitions. Music adapts to visual pacing. Best for: professional video production, projects needing perfect video-music synchronization, intelligent soundtrack generation.'
  },

  'mubert': {
    subtitle: 'Mubert API - Extensive Library Platform',
    description: 'Mubert API ($0.20/track estimate) provides access to extensive royalty-free music library with generative capabilities. Multiple genres, styles, and moods. Good for apps and content creation needing varied, consistent music library access. Platform approach vs pure generation.',
    features: [
      'Extensive music library',
      'Multiple genres/styles',
      'Generative + library access',
      'Royalty-free licensing',
      'API for app integration',
      'Consistent quality'
    ],
    pros: [
      'Large library access',
      'Consistent quality',
      'Good for apps',
      'Multiple genres',
      'Reliable output'
    ],
    useCases: ['App background music', 'Content platforms', 'Game soundtracks', 'Podcast intros', 'Consistent branding'],
    docsUrl: 'https://mubert.com/render/api',
    technicalDetails: 'Quality: 85-89% library tracks. Generative coherence 82-86%. Best for projects needing library + generation. Consistency high across tracks. Best for: apps needing music libraries, platforms, consistent audio branding.'
  },

  'soundverse': {
    subtitle: 'Soundverse - Enterprise Full Production',
    description: 'Soundverse ($0.25/track enterprise estimate) offers full production capabilities: instrumentals, multilingual singing, style cloning, and stem separation. Enterprise API for scalable deployment. Premium tier for professional music production needs requiring comprehensive features and support.',
    features: [
      'Enterprise API access',
      'Full instrumental production',
      'Multilingual singing',
      'Style/voice cloning',
      'Stem separation',
      'Scalable deployment'
    ],
    pros: [
      'Full production capabilities',
      'Multilingual vocals',
      'Style cloning',
      'Enterprise scalability',
      'Comprehensive features'
    ],
    useCases: ['Enterprise applications', 'Music platforms', 'Professional production', 'Global content', 'Scalable solutions'],
    docsUrl: 'https://www.soundverse.ai',
    technicalDetails: 'Quality: 90-93% professional production. Multilingual vocals 85-90% across languages. Style cloning 88-92% accuracy. Stems enable professional mixing. Best for: enterprises, music platforms, professional productions, international content.'
  }
};

