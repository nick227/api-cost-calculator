/**
 * Speech-to-Text Provider Details
 * Transcription accuracy, speed, and feature comparisons
 */

export const STT_PROVIDER_DETAILS = {
  'assemblyai': {
    subtitle: 'AssemblyAI Nano - Absolute Cheapest Accurate STT',
    description: 'AssemblyAI Nano model offers the cheapest high-accuracy transcription at $0.12/hour ($0.002/min). Despite low cost, accuracy remains competitive for clear audio. Best tier (~$0.37/hour) provides speaker labels, sentiment, and content moderation. $50 free credits for testing. Best value in STT market.',
    features: [
      'Nano: $0.12/hour (cheapest)',
      'Best: $0.37/hour (full features)',
      '95%+ accuracy on clear audio',
      'Speaker diarization',
      'Content moderation',
      '$50 free credits'
    ],
    pros: [
      'Cheapest high-quality STT',
      'Good accuracy despite price',
      'Speaker labels included',
      'Content safety features',
      'Generous free tier'
    ],
    useCases: ['High-volume transcription', 'Budget projects', 'Content moderation', 'Meeting transcription', 'Podcast processing'],
    docsUrl: 'https://www.assemblyai.com/pricing',
    technicalDetails: 'Accuracy: Nano 92-94% (clear audio), Best 96-98%. Speed: 0.3x realtime. Speaker diarization 85-90% accurate. Handles accents reasonably. Punctuation good. Best for: cost-sensitive high-volume needs, clear audio sources.'
  },

  'lemonfox-whisper': {
    subtitle: 'Lemonfox - Budget Whisper Alternative',
    description: 'Lemonfox provides Whisper API 50% cheaper than OpenAI at $0.17/hour. Same Whisper model, optimized infrastructure. 100+ languages with Whisper\'s excellent multilingual support. Good for projects needing Whisper quality at lower cost.',
    features: [
      '$0.17/hour (50% cheaper than OpenAI)',
      'Whisper model (same as OpenAI)',
      '100+ languages',
      'Fast processing',
      'Simple pricing',
      'No complexity charges'
    ],
    pros: [
      'Half the price of OpenAI Whisper',
      'Same model quality',
      'Excellent multilingual',
      'Simple, transparent pricing',
      'Fast turnaround'
    ],
    useCases: ['Multilingual transcription', 'Budget Whisper alternative', 'International content', 'Language learning', 'Global meetings'],
    docsUrl: 'https://www.lemonfox.ai/whisper-api',
    technicalDetails: 'Accuracy: 95-97% (Whisper quality). Multilingual 90-95% across 100+ languages. Speed: 0.5-0.7x realtime. Best for: multilingual needs, projects wanting Whisper at lower cost, international content.'
  },

  'google-stt-batch': {
    subtitle: 'Google STT Batch - Ultra-Budget Cloud Option',
    description: 'Google Cloud STT batch processing at $0.003/min offers extreme affordability for non-urgent transcription. Standard real-time $0.016/min for live needs. 60 free minutes monthly. 125+ languages with Google\'s infrastructure. Best for delayed processing where cost matters most.',
    features: [
      'Batch: $0.003/min (ultra-cheap)',
      'Standard: $0.016/min (real-time)',
      '125+ languages',
      '60 free min/month',
      'Google infrastructure',
      'Custom model training'
    ],
    pros: [
      'Ultra-cheap batch processing',
      'Most languages available',
      'Google reliability',
      'Free tier included',
      'Custom training possible'
    ],
    useCases: ['Batch transcription', 'Archival processing', 'Multilingual content', 'Non-urgent needs', 'High-volume archives'],
    docsUrl: 'https://cloud.google.com/speech-to-text/pricing',
    technicalDetails: 'Accuracy: 92-95% across languages. Batch processing takes hours. Real-time: sub-second latency. Punctuation adequate. Best for: non-urgent high-volume, archival content, multilingual batch processing.'
  },

  'speechmatics': {
    subtitle: 'Speechmatics - Real-Time Specialist',
    description: 'Speechmatics Pro ($0.24/hour) specializes in real-time transcription with low latency. 55+ languages with excellent accent handling. Free 480 min/month for testing. Good for live events, calls, and streaming applications requiring immediate transcription.',
    features: [
      'Pro: $0.24/hour real-time',
      '55+ languages',
      'Low-latency streaming',
      'Excellent accent handling',
      'Free: 480 min/month',
      'Speaker recognition'
    ],
    pros: [
      'Optimized for real-time',
      'Low latency',
      'Great accent recognition',
      'Generous free tier',
      'Professional features'
    ],
    useCases: ['Live events', 'Real-time captioning', 'Call transcription', 'Streaming media', 'Broadcast'],
    docsUrl: 'https://www.speechmatics.com/pricing',
    technicalDetails: 'Accuracy: 94-96% with accents. Latency: sub-500ms. Speaker labels 88-92%. Real-time optimized. Punctuation good. Best for: live applications, accent-heavy audio, real-time captioning needs.'
  },

  'deepgram-batch': {
    subtitle: 'Deepgram Nova-3 Batch - Fast & Accurate',
    description: 'Deepgram\'s Nova-3 batch ($0.0043/min) offers fast, accurate transcription optimized for speed. Streaming option ($0.0077/min) for real-time. $200 free credits. Known for excellent accuracy and fast processing. Good balance of speed, accuracy, and cost.',
    features: [
      'Nova-3 batch: $0.0043/min',
      'Streaming: $0.0077/min',
      'Fast processing (0.2x realtime)',
      'High accuracy (95-97%)',
      '$200 free credits',
      'Advanced features'
    ],
    pros: [
      'Fastest processing available',
      'High accuracy maintained',
      'Good free credits',
      'Streaming option',
      'Modern API'
    ],
    useCases: ['Quick turnaround', 'Media production', 'Content creation', 'Real-time streaming', 'Professional transcription'],
    docsUrl: 'https://deepgram.com/pricing',
    technicalDetails: 'Accuracy: 96-98% (best in class). Speed: 0.2x realtime (fastest). Streaming latency <300ms. Excellent punctuation. Speaker labels 90%+. Best for: projects prioritizing speed+accuracy, professional media production.'
  },

  'openai-whisper': {
    subtitle: 'OpenAI Whisper - Multilingual Gold Standard',
    description: 'OpenAI Whisper API at $0.006/min represents the multilingual transcription gold standard. 100+ languages with exceptional accuracy across all. Robust to background noise, accents, and audio quality. Industry standard for multilingual needs despite moderate pricing.',
    features: [
      '$0.006/minute',
      '100+ languages (best multilingual)',
      'Robust to noise and quality',
      'Excellent accent handling',
      'Automatic language detection',
      'OpenAI reliability'
    ],
    pros: [
      'Best multilingual accuracy',
      'Handles poor audio well',
      'Excellent with accents',
      'Auto language detection',
      'Industry standard'
    ],
    useCases: ['Multilingual content', 'Poor audio quality', 'International meetings', 'Diverse accents', 'Language learning'],
    docsUrl: 'https://platform.openai.com/docs/guides/speech-to-text',
    technicalDetails: 'Accuracy: English 96-98%, other languages 90-95%. Robust to noise (maintains 90%+ accuracy). Handles code-switching. Auto-detects language. Best for: multilingual content, challenging audio, international applications.'
  },

  'deepgram-stream': {
    subtitle: 'Deepgram Streaming - Real-Time Champion',
    description: 'Deepgram Nova-3 streaming ($0.0077/min) optimized for real-time applications. Industry-leading latency (<300ms) enables natural conversation transcription. Best for live captioning, call centers, and streaming events requiring immediate text output.',
    features: [
      'Streaming: $0.0077/min',
      'Ultra-low latency (<300ms)',
      'Real-time optimized',
      'Speaker recognition',
      'Interim results',
      'High accuracy maintained'
    ],
    pros: [
      'Lowest latency available',
      'Maintains high accuracy',
      'True real-time performance',
      'Excellent for conversations',
      'Professional reliability'
    ],
    useCases: ['Live captions', 'Call centers', 'Video conferencing', 'Live events', 'Customer service'],
    docsUrl: 'https://deepgram.com/pricing',
    technicalDetails: 'Accuracy: 95-97% in real-time. Latency: 250-350ms typical. Interim results every 100ms. Speaker labels real-time. Best for: live applications requiring sub-second transcription, conversational AI, live events.'
  },

  'google-stt': {
    subtitle: 'Google Cloud STT Standard - Enterprise Reliable',
    description: 'Google Cloud STT standard ($0.016/min) provides enterprise-grade reliability with 125+ languages. Good for applications requiring Google infrastructure, compliance, and extensive language support. Free 60 min/month. Custom models for specialized vocabulary.',
    features: [
      'Standard v2: $0.016/min',
      '125+ languages',
      'Custom vocabulary',
      'Enhanced models (phone/video)',
      'Free: 60 min/month',
      'Google compliance/infrastructure'
    ],
    pros: [
      'Most languages available',
      'Google infrastructure',
      'Custom model training',
      'Enterprise compliance',
      'Enhanced models'
    ],
    useCases: ['Enterprise applications', 'Google ecosystem', 'Compliance needs', 'Custom vocabulary', 'Global organizations'],
    docsUrl: 'https://cloud.google.com/speech-to-text/pricing',
    technicalDetails: 'Accuracy: 93-96% across languages. Enhanced models improve specific domains. Custom vocabulary boosts accuracy 5-10%. Latency ~500ms. Best for: enterprises using Google Cloud, compliance-sensitive, custom vocabulary needs.'
  },

  'azure-stt': {
    subtitle: 'Microsoft Azure STT - Enterprise Microsoft Stack',
    description: 'Azure Speech-to-Text ($1/hour, $0.0167/min) integrates tightly with Microsoft ecosystem. Custom models, extensive language support, and enterprise features. Best for organizations on Azure/Microsoft stack requiring integrated speech capabilities.',
    features: [
      '$1/hour ($0.0167/min)',
      'Azure ecosystem integration',
      'Custom Speech training',
      'Real-time and batch',
      'Speaker identification',
      'Microsoft compliance'
    ],
    pros: [
      'Azure integration',
      'Microsoft enterprise support',
      'Custom model training',
      'Compliance certified',
      'Good accuracy'
    ],
    useCases: ['Azure applications', 'Microsoft ecosystem', 'Enterprise compliance', 'Custom models', 'Office integration'],
    docsUrl: 'https://azure.microsoft.com/pricing/details/cognitive-services/speech-services',
    technicalDetails: 'Accuracy: 93-96%. Custom Speech improves domain-specific accuracy significantly. Latency ~600ms. Good language coverage. Best for: Azure users, Microsoft-centric organizations, enterprises requiring Microsoft compliance.'
  },

  'agora-stt': {
    subtitle: 'Agora STT - Real-Time Communication Focus',
    description: 'Agora STT ($16.99/1000min, $0.017/min) specializes in real-time communication with tight integration to Agora\'s RTC platform. First 300 minutes free. Best for applications already using Agora for video/voice communication needing integrated transcription.',
    features: [
      '$16.99/1000min ($0.017/min)',
      'First 300 min free',
      'Agora RTC integration',
      'Real-time transcription',
      'Low latency',
      'Communication optimized'
    ],
    pros: [
      'Tight Agora integration',
      'Optimized for RTC',
      'Free trial included',
      'Good for communication apps',
      'Simple integration'
    ],
    useCases: ['Video conferencing', 'Voice calls', 'Agora users', 'Communication apps', 'Live transcription'],
    docsUrl: 'https://www.agora.io/en/pricing/speech-to-text',
    technicalDetails: 'Accuracy: 92-95% in communication context. Optimized for conversational audio. Latency ~400ms. Best for: Agora platform users, real-time communication apps, video conferencing solutions.'
  },

  'speechtext': {
    subtitle: 'SpeechText.AI - Industry-Specific Models',
    description: 'SpeechText.AI Lite ($49/2700min, $0.018/min) offers industry-specific models for medical, legal, and financial transcription. Specialized vocabulary and formatting. Higher cost justified by domain expertise and accuracy improvements in specialized fields.',
    features: [
      'Lite: $49/2700min ($0.018/min)',
      'Industry-specific models',
      'Medical/Legal/Financial specialization',
      'Domain vocabulary',
      'Formatted output',
      'High accuracy for domain'
    ],
    pros: [
      'Specialized domain models',
      'Better accuracy for industries',
      'Proper formatting',
      'Technical terminology',
      'Compliance features'
    ],
    useCases: ['Medical transcription', 'Legal documents', 'Financial reports', 'Technical content', 'Industry-specific needs'],
    docsUrl: 'https://speechtext.ai/speech-recognition-api',
    technicalDetails: 'Accuracy: 97-99% with domain models (vs 85-90% general models). Proper medical/legal terminology. Formatting for domain conventions. Best for: specialized industries needing domain expertise, medical/legal/financial transcription.'
  }
};

