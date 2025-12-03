export const VOICE_PROVIDERS = [
  {
    id: 'google-tts',
    name: 'Google Cloud TTS',
    pricing: { voice: 0.004 },
    pricingUnits: { voice: 'per 1,000 characters' },
    apiUrl: 'https://cloud.google.com/text-to-speech/pricing',
    notes: 'Standard voices: $4/1M chars. WaveNet: $16/1M chars. Neural2: $16/1M chars.'
  },
  {
    id: 'amazon-polly',
    name: 'Amazon Polly',
    pricing: { voice: 0.004 },
    pricingUnits: { voice: 'per 1,000 characters' },
    apiUrl: 'https://aws.amazon.com/polly/pricing',
    notes: 'Standard: $4/1M chars. Neural: $16/1M chars. Free tier: 5M chars/month (12mo).'
  },
  {
    id: 'playht',
    name: 'Play.ht',
    pricing: { voice: 0.016 },
    pricingUnits: { voice: 'per 1,000 characters' },
    apiUrl: 'https://play.ht/pricing',
    notes: 'API access on paid plans. Ultra-realistic voices. ~$16/1M chars estimate.'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    pricing: { voice: 0.18 },
    pricingUnits: { voice: 'per 1,000 characters' },
    apiUrl: 'https://elevenlabs.io/pricing',
    notes: 'Turbo v2.5: ~$0.18/1K chars. Premium quality, voice cloning.'
  },
  {
    id: 'openai-tts',
    name: 'OpenAI TTS',
    pricing: { voice: 0.015 },
    pricingUnits: { voice: 'per 1,000 characters' },
    apiUrl: 'https://platform.openai.com/docs/pricing',
    notes: 'TTS: $15/1M chars. TTS-HD: $30/1M chars. High quality voices.'
  }
];
