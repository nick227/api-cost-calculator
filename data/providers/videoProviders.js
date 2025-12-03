export const VIDEO_PROVIDERS = [
  {
    id: 'deapi-video',
    name: 'deAPI',
    pricing: { video: 0.001411 },
    pricingUnits: { video: 'per second' },
    apiUrl: 'https://deapi.ai',
    notes: 'deAPI: $0.001411/s (CHEAPEST - 708s per $1!). LTX Video model, 512×512, 4s clips. 10x cheaper than alternatives!'
  },
  {
    id: 'minimax-hailuo',
    name: 'MiniMax Hailuo-02',
    pricing: { video: 0.015 },
    pricingUnits: { video: 'per second' },
    apiUrl: 'https://platform.minimax.io/docs/pricing/pay-as-you-go',
    notes: 'Hailuo-02: $0.015/s (67s per $1). 512P quality, 10s clips.'
  },
  {
    id: 'runway',
    name: 'Runway Gen-4 Turbo',
    pricing: { video: 0.05 },
    pricingUnits: { video: 'per second' },
    apiUrl: 'https://docs.dev.runwayml.com/guides/pricing',
    notes: 'Gen-4 Turbo: $0.05/s (5 credits/s, $0.01/credit). Professional filmmaking quality.'
  },
  {
    id: 'falai-video',
    name: 'Fal.ai Wan 2.5',
    pricing: { video: 0.05 },
    pricingUnits: { video: 'per second' },
    apiUrl: 'https://fal.ai/pricing',
    notes: 'Wan 2.5: $0.05/s. High quality, popular choice.'
  },
  {
    id: 'falai-kling',
    name: 'Fal.ai Kling 2.5',
    pricing: { video: 0.07 },
    pricingUnits: { video: 'per second' },
    apiUrl: 'https://fal.ai/pricing',
    notes: 'Kling 2.5 Turbo Pro: $0.07/s. Mid-tier quality.'
  },
  {
    id: 'falai-ovi',
    name: 'Fal.ai Ovi',
    pricing: { video: 0.20 },
    pricingUnits: { video: 'per video' },
    apiUrl: 'https://fal.ai/pricing',
    notes: 'Ovi: $0.20/video (5 videos per $1). Priced per video, not per second. Good for quick generations.'
  },
  {
    id: 'gemini-video',
    name: 'Google Veo 3.1 Fast',
    pricing: { video: 0.10 },
    pricingUnits: { video: 'per second' },
    apiUrl: 'https://ai.google.dev/pricing',
    notes: 'Veo 3.1 Fast (no audio): $0.10/s (via Runway API). Veo 3.1 Standard: $0.20/s. With audio: $0.15/s.'
  },
  {
    id: 'falai-veo3',
    name: 'Fal.ai Veo 3',
    pricing: { video: 0.40 },
    pricingUnits: { video: 'per second' },
    apiUrl: 'https://fal.ai/pricing',
    notes: 'Veo 3 Standard: $0.40/s. Premium quality via Fal.ai. (Runway offers it for same price via API)'
  },
];
