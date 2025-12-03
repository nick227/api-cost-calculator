/**
 * Voice/TTS Provider Details  
 * Comprehensive comparison of voice synthesis quality and capabilities
 */

export const VOICE_PROVIDER_DETAILS = {
  'google-tts': {
    subtitle: 'Google Cloud TTS - Budget Champion',
    description: 'Google Cloud Text-to-Speech offers industry-low pricing with massive selection. Standard voices at $4/1M characters (45x cheaper than ElevenLabs) provide adequate quality for most applications. WaveNet/Neural2 ($16/1M) deliver near-human quality. 380+ voices across 50+ languages with SSML fine control. Best value proposition for high-volume TTS.',
    features: [
      'Standard: $0.004/1K characters (45x cheaper)',
      'WaveNet/Neural2: $0.016/1K characters',
      '380+ voices, 50+ languages',
      'SSML markup for prosody control',
      'Custom voice training available',
      'Google infrastructure reliability'
    ],
    pros: [
      'Most cost-effective option',
      'Massive voice and language selection',
      'Reliable Google infrastructure',
      'Custom voice training',
      'SSML fine control'
    ],
    useCases: ['High-volume TTS', 'Multilingual apps', 'Cost-sensitive projects', 'Assistive technology', 'Automated systems'],
    docsUrl: 'https://cloud.google.com/text-to-speech/docs',
    technicalDetails: 'Output Quality: Standard voices 70-75% naturalness (robotic for extended listening). WaveNet/Neural2 85-90% natural (acceptable for most professional use). Pronunciation accuracy 90%+. Emotion expression limited. Best for: applications prioritizing cost and language coverage over premium quality.'
  },

  'amazon-polly': {
    subtitle: 'AWS Polly - Enterprise Reliability',
    description: 'Amazon Polly delivers consistent TTS quality with AWS infrastructure. Standard and Neural voices match Google pricing ($4/$16 per 1M). Excellent for AWS ecosystem users with tight integrations. 12-month free tier (5M chars/month) makes testing risk-free. SSML support with speech marks for lip-sync timing.',
    features: [
      'Standard/Neural: Same pricing as Google',
      '12-month free tier: 5M chars/month',
      'Speech marks for lip-sync',
      'SSML support',
      'AWS ecosystem integration',
      'Brand voice custom training'
    ],
    pros: [
      'AWS infrastructure reliability',
      'Generous free tier',
      'Speech marks for animation',
      'Tight AWS integrations',
      'Cost matches Google'
    ],
    useCases: ['AWS applications', 'Lip-sync animation', 'Alexa skills', 'Enterprise AWS stacks', 'Automated notifications'],
    docsUrl: 'https://aws.amazon.com/polly/pricing',
    technicalDetails: 'Output Quality: Standard 70-75%, Neural 87-91% naturalness. Slightly better prosody than Google Standard. Speech marks enable precise lip-sync (timing accurate to 50ms). Emotional range limited. Best for: AWS users, lip-sync needs, enterprise requiring AWS compliance.'
  },

  'playht': {
    subtitle: 'Play.ht - Ultra-Realistic Voices',
    description: 'Play.ht specializes in ultra-realistic voice synthesis at mid-tier pricing (~$16/1M chars estimate). Voice quality approaches ElevenLabs while costing 10x less. Good balance for projects needing high quality without premium pricing. API access on paid plans. Growing reputation for natural-sounding output.',
    features: [
      'Ultra-realistic: ~$0.016/1K characters',
      'High-quality voice cloning',
      'Multiple languages supported',
      'Natural prosody and emotion',
      'Real-time and pre-generation',
      'Voice library + custom'
    ],
    pros: [
      '10x cheaper than ElevenLabs',
      'Near-premium quality',
      'Good emotion expression',
      'Voice cloning capable',
      'Best mid-tier value'
    ],
    useCases: ['Audiobooks', 'Podcasts', 'Marketing videos', 'E-learning', 'Content creation'],
    docsUrl: 'https://play.ht/pricing',
    technicalDetails: 'Output Quality: 88-92% naturalness (approaching premium tier). Good emotional expression and prosody variation. Pronunciation 92% accurate. Voice cloning quality 85-88%. Best for: projects needing high quality at reasonable cost, audiobook narration, professional content.'
  },

  'openai-tts': {
    subtitle: 'OpenAI TTS - Natural Conversational Quality',
    description: 'OpenAI\'s text-to-speech offers exceptional natural quality with conversational tone. TTS ($15/1M) and TTS-HD ($30/1M) provide excellent value given quality level. Best-in-class for conversational applications. Integrated with ChatGPT ecosystem. Limited voice selection but each voice highly refined for specific use cases.',
    features: [
      'TTS: $0.015/1K characters',
      'TTS-HD: $0.030/1K characters',
      'Highly natural conversational tone',
      '6 optimized voices (Alloy, Echo, Fable, Onyx, Nova, Shimmer)',
      'Excellent prosody and pacing',
      'ChatGPT ecosystem integration'
    ],
    pros: [
      'Most natural conversational tone',
      'Excellent prosody',
      'Good value for quality',
      'OpenAI reliability',
      'Voices well-optimized'
    ],
    useCases: ['Conversational AI', 'ChatGPT integrations', 'Virtual assistants', 'Interactive apps', 'Professional narration'],
    docsUrl: 'https://platform.openai.com/docs/guides/text-to-speech',
    technicalDetails: 'Output Quality: 91-94% naturalness. Best conversational flow in industry. Pacing and prosody human-like. Emotional authenticity high. Limited voice variety (6 options). Best for: conversational AI, apps requiring natural dialogue, professional applications prioritizing quality.'
  },

  'elevenlabs': {
    subtitle: 'ElevenLabs - Premium Voice Cloning Leader',
    description: 'ElevenLabs delivers the highest quality AI voice synthesis available, with industry-leading voice cloning and emotional expressiveness. Turbo v2.5 (~$0.18/1K) provides ultra-realistic output indistinguishable from human for short clips. 29 languages with natural accents. Premium pricing justified for mission-critical audio quality and voice replication needs.',
    features: [
      'Turbo v2.5: ~$0.18/1K characters',
      'Industry-best voice cloning',
      'Ultra-realistic synthesis',
      '29 languages with authentic accents',
      'Full emotional expression control',
      'Professional voice library'
    ],
    pros: [
      'Premium voice quality',
      'Advanced voice cloning',
      'Natural emotional expression',
      'High-quality voice replication',
      'Near-human quality (short clips)'
    ],
    useCases: ['Premium audiobooks', 'Character voices', 'Celebrity replication', 'High-end marketing', 'Film/TV voiceover'],
    docsUrl: 'https://elevenlabs.io/docs',
    technicalDetails: 'Output Quality: 96-98% naturalness (highest available). Voice cloning 94-96% accuracy. Emotional range excellent. Handles complex prosody. Pronunciation 95%+. Authentic accents. Best for: premium content, voice cloning, projects requiring indistinguishable-from-human quality, audiobook production.'
  }
};

