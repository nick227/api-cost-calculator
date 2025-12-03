/**
 * Video Generation Provider Details
 * Comprehensive technical comparisons and expected output quality
 */

export const VIDEO_PROVIDER_DETAILS = {
  'deapi-video': {
    subtitle: 'Decentralized GPU Cloud - Ultra Cheap Open Source Models',
    description: 'deAPI provides the absolute cheapest video generation at $0.001411/second through a decentralized GPU network running open-source models like LTX Video. At 10x cheaper than alternatives, it\'s perfect for high-volume applications. Uses consumer-grade GPUs worldwide to deliver up to 20x lower costs than traditional providers. $20 free credits to start.',
    features: [
      'LTX Video: $0.005644 per 4s clip ($0.001411/s)',
      '512×512 resolution, 4-second videos',
      'Decentralized GPU cloud (thousands of GPUs)',
      'Open-source models (LTX Video, Flux, etc.)',
      'Up to 20x cheaper than traditional providers',
      '$20 free credits for new users'
    ],
    pros: [
      'CHEAPEST video API available (10x cheaper!)',
      'Decentralized = no single point of failure',
      'Open-source model freedom',
      'Transparent usage-based pricing',
      'Scalable to thousands of requests',
      'Free credits to test'
    ],
    useCases: ['Bulk video generation', 'High-volume apps', 'Prototyping', 'Cost-critical projects', 'Startups/SaaS', 'Testing/development'],
    docsUrl: 'https://docs.gamercoin.com/depin-api/api/text-to-video',
    technicalDetails: 'Output Quality: Open-source LTX Video model, basic quality suitable for testing and volume work. 512×512 at 4s clips. Decentralized GPU routing ensures fast inference. Async task-based API with polling. Not suitable for premium/professional use but unbeatable for cost-sensitive bulk generation. Response time typically under 10s. 100 requests/min default limit.'
  },

  'minimax-hailuo': {
    subtitle: 'Hailuo-02 - Ultra Budget Chinese Provider',
    description: 'MiniMax Hailuo-02 offers very cheap video API at $0.015/second (67 seconds per $1). This Chinese provider offers basic 512P video generation at rock-bottom pricing. Quality is entry-level with 10s maximum clip length. Best for high-volume projects where cost matters more than quality. API available direct or via fal.ai/Vertex AI.',
    features: [
      'Hailuo-02: $0.015/second (2nd cheapest)',
      '512P resolution, 6-10 second clips',
      'Text-to-video generation',
      'Image-to-video support',
      'Fast inference (30-45s)',
      'Also offers premium Hailuo-2.3 ($0.03-$0.08/s)'
    ],
    pros: [
      'Absolute cheapest option available',
      'Good for testing/prototyping',
      'Fast generation times',
      'High-volume friendly pricing',
      'Multiple model tiers available'
    ],
    useCases: ['Bulk video generation', 'Prototype/testing', 'Draft content', 'High-volume projects', 'Cost-critical applications'],
    docsUrl: 'https://platform.minimax.io/docs/pricing/pay-as-you-go',
    technicalDetails: 'Output Quality: Basic tier (~65-70% usable). 512P resolution limits detail. Temporal coherence adequate for 6-10s clips. Motion handling simple. Prompt adherence ~65%. Best for: cost-sensitive bulk processing, prototypes, drafts. Not suitable for professional/marketing use without manual curation.'
  },

  'runware-video': {
    subtitle: 'Budget Video Transformation - Second Cheapest',
    description: 'Runware\'s video API provides basic video transformation and generation at rock-bottom prices. Best for bulk processing, simple animations, and cost-sensitive projects. Quality adequate for draft work and thumbnails but not broadcast-ready. Expect $0.01-$0.03/second depending on model and batch size.',
    features: [
      '$0.02/second mid-range estimate',
      'Video-to-video transformation',
      'Basic motion animation',
      'Batch processing discounts',
      'Fast processing (1-2x realtime)',
      'Standard resolutions up to 1080p'
    ],
    pros: [
      'Cheapest video API available',
      'Good for high-volume processing',
      'Fast turnaround times',
      'Batch discounts',
      'No minimum spend'
    ],
    useCases: ['Video thumbnails', 'Draft animations', 'High-volume processing', 'Budget constraints', 'Proof-of-concept'],
    docsUrl: 'https://runware.ai/video-generation',
    technicalDetails: 'Output Quality: Basic coherence, occasional flicker/artifacts. Approximately 60-70% usable for non-critical applications. Motion blur common. Not suitable for professional/marketing use. Resolution limited to 1080p. Frame rate 24-30fps. Best for: drafts, thumbnails, background content.'
  },

  'falai-video': {
    subtitle: 'Wan 2.5 - Budget-Friendly with Good Quality',
    description: 'Fal.ai\'s Wan 2.5 model offers the cheapest quality video generation at $0.05/second. Decent motion coherence and reasonable prompt adherence. Good balance of cost and quality for content creators and marketers needing affordable video without premium pricing.',
    features: [
      'Wan 2.5: $0.05/second (5-10s clips)',
      'Text-to-video generation',
      'Image-to-video animation',
      'Decent motion coherence',
      '720p-1080p output',
      'Fast inference (30-60s for 5s clip)'
    ],
    pros: [
      'Best price/quality ratio',
      'Good motion consistency',
      'Fast generation times',
      'Suitable for social media',
      'Simple API integration'
    ],
    useCases: ['Social media content', 'Marketing videos', 'Content creation', 'Budget productions', 'Product demos'],
    docsUrl: 'https://fal.ai/pricing',
    technicalDetails: 'Output Quality: Typically 75-80% usable results. Good temporal coherence within 5s clips. Motion appears natural but limited complexity. Prompt adherence approximately 70%. Resolution 720p-1080p. Best for: social media, simple product animations, content creators on budget.'
  },

  'falai-kling': {
    subtitle: 'Kling 2.5 Turbo Pro - Mid-Tier Quality & Speed',
    description: 'Kling 2.5 offers improved motion understanding over Wan with better prompt adherence and temporal consistency. At $0.07/second, it\'s positioned as mid-tier: significantly better than budget options while more affordable than premium. Good for professional content not requiring broadcast quality.',
    features: [
      'Kling 2.5 Turbo Pro: $0.07/second',
      '5-10 second clips with consistency',
      'Better motion dynamics than Wan',
      'Improved prompt understanding',
      'Up to 1080p resolution',
      'Moderate generation time (45-90s)'
    ],
    pros: [
      'Good quality/price balance',
      'Better motion than budget options',
      'Suitable for professional use',
      'Good temporal consistency',
      'Reliable results'
    ],
    useCases: ['Professional marketing', 'YouTube content', 'Product showcases', 'Explainer videos', 'Commercial projects'],
    docsUrl: 'https://fal.ai/models/fal-ai/kling-video',
    technicalDetails: 'Output Quality: 82-87% usable for professional contexts. Temporal coherence good for 5-8s clips. Complex motion handling adequate. Prompt adherence 78%. Physics simulation basic. Best for: professional content creators, mid-budget productions, polished social content.'
  },

  'falai-ovi': {
    subtitle: 'Ovi - Per-Video Flat Rate Pricing',
    description: 'Fal.ai Ovi offers a unique flat per-video pricing model at $0.20 per video. Unlike per-second pricing, this makes costs perfectly predictable regardless of video length. At 5 videos per $1, it\'s cost-effective for short standardized clips where consistency matters more than variable duration.',
    features: [
      'Ovi: $0.20 per video (flat rate)',
      '5 videos per $1',
      'Fixed cost regardless of duration',
      'Quick generation times',
      'Good for short-form content',
      'Via Fal.ai platform'
    ],
    pros: [
      'Predictable flat-rate pricing',
      'Simple budgeting (no duration tracking)',
      'Cost-effective for short videos',
      'Good for batch processing',
      'Fal.ai infrastructure reliability'
    ],
    useCases: ['Social media shorts', 'Quick clips', 'Standardized output', 'Batch short-form content', 'Predictable budget projects'],
    docsUrl: 'https://fal.ai/pricing',
    technicalDetails: 'Output Quality: Optimized for short-form content. Per-video pricing makes it economical for brief clips but potentially expensive for longer videos. Best for: consistent short-form needs, social media content, quick video snippets where per-second pricing would be unpredictable.'
  },

  'runway': {
    subtitle: 'Gen-4 Turbo - Professional Filmmaking Quality',
    description: 'Runway pioneered AI video for filmmakers with Gen-4 Turbo offering production-quality output. Industry-leading motion understanding, 3D dynamics, and temporal consistency. Used by professional studios and filmmakers. At $0.05/s, it matches Fal.ai Wan pricing while delivering superior quality.',
    features: [
      'Gen-4 Turbo: $0.05/second (5 credits/s, $0.01/credit)',
      '10-second clips with excellent coherence',
      'Text, image, or video-to-video',
      'Superior 3D dynamics understanding',
      'Professional motion quality',
      'Camera control and movement'
    ],
    pros: [
      'Top-tier video quality',
      'Professional filmmaking standard',
      'Excellent motion coherence',
      'Used by major studios',
      'Sophisticated physics simulation'
    ],
    useCases: ['Film production', 'High-end commercials', 'Music videos', 'Professional VFX', 'Broadcast content'],
    docsUrl: 'https://docs.dev.runwayml.com/guides/pricing',
    technicalDetails: 'Output Quality: 92-96% usable for professional work. Best temporal consistency in industry. Complex motion/physics well-handled. 3D space understanding excellent. Resolution 1080p-4K. Best for: professional filmmakers, high-budget commercials, broadcast TV, premium content.'
  },

  'gemini-video': {
    subtitle: 'Veo 3.1 Fast - Google\'s Speed-Optimized Model',
    description: 'Google\'s Veo 3.1 Fast provides good quality at competitive pricing ($0.10/s). Faster generation than premium models while maintaining professional output. Benefits from Google\'s research in motion prediction and scene understanding. Available via Runway API. Standard variant ($0.20/s) offers higher quality.',
    features: [
      'Veo 3.1 Fast: $0.10/second (no audio)',
      'Veo 3.1 Fast + Audio: $0.15/second',
      'Veo 3.1 Standard: $0.20/second',
      '8 second clips typical',
      'Good motion prediction',
      'Google infrastructure reliability'
    ],
    pros: [
      'Google research backing',
      'Competitive pricing',
      'Good quality/speed balance',
      'Reliable infrastructure',
      'Professional grade output'
    ],
    useCases: ['Enterprise video', 'Marketing content', 'Product videos', 'Presentations', 'Training materials'],
    docsUrl: 'https://docs.dev.runwayml.com/guides/pricing',
    technicalDetails: 'Output Quality: Fast model ~85-88% usable. Standard model ~90-94% professional grade. Good temporal coherence. Motion understanding competitive with Runway for most scenes. Available via Runway API (10 credits/s = $0.10/s). Best for: enterprise, fast iterations, Google ecosystem users.'
  },

  'falai-veo3': {
    subtitle: 'Veo 3 Standard via Fal.ai - Premium Quality',
    description: 'Fal.ai provides access to Google\'s premium Veo 3 Standard model with optimized inference. At $0.40/second, offers high-end quality with Google\'s research advantages. Same pricing as Runway\'s Veo 3 offering (40 credits/s) but through Fal.ai\'s platform. Excellent for projects needing maximum quality.',
    features: [
      'Veo 3 Standard: $0.40/second',
      'Premium quality output',
      'Excellent temporal consistency',
      'Complex scene handling',
      'Professional-grade results',
      'Fal.ai\'s fast infrastructure'
    ],
    pros: [
      'Premium quality tier',
      'Google research advantages',
      'Excellent coherence',
      'Transparent pricing',
      'Fast Fal.ai platform'
    ],
    useCases: ['Premium commercials', 'High-end marketing', 'Professional productions', 'Broadcast content', 'Premium brands'],
    docsUrl: 'https://fal.ai/pricing',
    technicalDetails: 'Output Quality: 90-94% professional grade. Temporal consistency excellent. Complex motion well-handled. Scene composition sophisticated. Physics simulation good. Resolution 1080p-4K capable. Best for: premium productions, professional studios, high-budget content.'
  }
};

