export const SPEECH_TO_TEXT_PROVIDERS = [
  {
    id: 'assemblyai',
    name: 'AssemblyAI Nano',
    pricing: { stt: 0.002 },
    pricingUnits: { stt: 'per minute (Nano model)' },
    apiUrl: 'https://www.assemblyai.com/pricing',
    notes: 'Nano: $0.12/hour ($0.002/min). Best: $0.37/hour. Free $50 credits. CHEAPEST!'
  },
  {
    id: 'lemonfox-whisper',
    name: 'Lemonfox Whisper',
    pricing: { stt: 0.00283 },
    pricingUnits: { stt: 'per minute' },
    apiUrl: 'https://www.lemonfox.ai/whisper-api',
    notes: '$0.17/hour ($0.00283/min). 50% cheaper than OpenAI Whisper. 100+ languages.'
  },
  {
    id: 'google-stt-batch',
    name: 'Google STT (Batch)',
    pricing: { stt: 0.003 },
    pricingUnits: { stt: 'per minute (batch)' },
    apiUrl: 'https://cloud.google.com/speech-to-text/pricing',
    notes: 'Batch: $0.003/min. Standard: $0.016/min. 60 free min/month.'
  },
  {
    id: 'speechmatics',
    name: 'Speechmatics',
    pricing: { stt: 0.004 },
    pricingUnits: { stt: 'per minute (Pro tier)' },
    apiUrl: 'https://www.speechmatics.com/pricing',
    notes: 'Pro: $0.24/hour ($0.004/min). 55+ languages. Free: 480 min/month.'
  },
  {
    id: 'deepgram-batch',
    name: 'Deepgram (Batch)',
    pricing: { stt: 0.0043 },
    pricingUnits: { stt: 'per minute (Nova-3 batch)' },
    apiUrl: 'https://deepgram.com/pricing',
    notes: 'Nova-3 batch: $0.0043/min. Streaming: $0.0077/min. $200 free credits.'
  },
  {
    id: 'openai-whisper',
    name: 'OpenAI Whisper',
    pricing: { stt: 0.006 },
    pricingUnits: { stt: 'per minute' },
    apiUrl: 'https://platform.openai.com/docs/pricing',
    notes: 'Whisper API: $0.006/minute. High accuracy, 100+ languages.'
  },
  {
    id: 'deepgram-stream',
    name: 'Deepgram (Streaming)',
    pricing: { stt: 0.0077 },
    pricingUnits: { stt: 'per minute (Nova-3 streaming)' },
    apiUrl: 'https://deepgram.com/pricing',
    notes: 'Nova-3 streaming: $0.0077/min. Real-time transcription.'
  },
  {
    id: 'google-stt',
    name: 'Google Cloud STT',
    pricing: { stt: 0.016 },
    pricingUnits: { stt: 'per minute (standard)' },
    apiUrl: 'https://cloud.google.com/speech-to-text/pricing',
    notes: 'Standard v2: $0.016/min. 125+ languages. Free 60 min/month.'
  },
  {
    id: 'azure-stt',
    name: 'Microsoft Azure STT',
    pricing: { stt: 0.0167 },
    pricingUnits: { stt: 'per minute' },
    apiUrl: 'https://azure.microsoft.com/pricing/details/cognitive-services/speech-services',
    notes: 'Standard: $1/hour ($0.0167/min). Custom models available.'
  },
  {
    id: 'agora-stt',
    name: 'Agora STT',
    pricing: { stt: 0.017 },
    pricingUnits: { stt: 'per minute (real-time)' },
    apiUrl: 'https://www.agora.io/en/pricing/speech-to-text',
    notes: 'Real-time: $16.99/1000min ($0.017/min). First 300 min free.'
  },
  {
    id: 'speechtext',
    name: 'SpeechText.AI',
    pricing: { stt: 0.018 },
    pricingUnits: { stt: 'per minute (Lite tier)' },
    apiUrl: 'https://speechtext.ai/speech-recognition-api',
    notes: 'Lite: $49/2700min ($0.018/min). Industry-specific models available.'
  }
];

