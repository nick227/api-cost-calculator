/**
 * Voice/TTS API Code Examples
 * Text-to-speech synthesis examples
 * 
 * IMPORTANT NOTES:
 * - Official SDKs used where available
 * - Check docs for voice IDs and options
 * - Wrap in async function
 * - Install: npm install @google-cloud/text-to-speech @aws-sdk/client-polly elevenlabs
 */

export const VOICE_CODE_EXAMPLES = {
  'google-tts': `// Google Cloud Text-to-Speech
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs').promises;

const client = new textToSpeech.TextToSpeechClient();

const request = {
  input: { text: 'Hello, welcome to our service!' },
  voice: {
    languageCode: 'en-US',
    name: 'en-US-Neural2-A', // or Standard
    ssmlGender: 'NEUTRAL'
  },
  audioConfig: { audioEncoding: 'MP3' }
};

const [response] = await client.synthesizeSpeech(request);
await fs.writeFile('output.mp3', response.audioContent, 'binary');`,

  'amazon-polly': `// Amazon Polly SDK
const { PollyClient, SynthesizeSpeechCommand } = require('@aws-sdk/client-polly');
const fs = require('fs').promises;

const client = new PollyClient({ region: 'us-east-1' });

const command = new SynthesizeSpeechCommand({
  Text: 'Hello from Amazon Polly',
  OutputFormat: 'mp3',
  VoiceId: 'Joanna', // or Matthew, etc.
  Engine: 'neural' // or 'standard'
});

const response = await client.send(command);
const audioStream = response.AudioStream;
// Process audio stream`,

  'playht': `// Play.ht API
const fetch = require('node-fetch');

const response = await fetch('https://api.play.ht/api/v2/tts', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.PLAYHT_API_KEY}\`,
    'X-User-ID': process.env.PLAYHT_USER_ID,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: 'Welcome to Play.ht voice synthesis',
    voice: 's3://voice-cloning-zero-shot/...',
    output_format: 'mp3',
    voice_engine: 'PlayHT2.0'
  })
});

const data = await response.json();
console.log(data.url);`,

  'elevenlabs': `// ElevenLabs TTS SDK
const { ElevenLabsClient } = require('elevenlabs');
const fs = require('fs');

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY
});

const audio = await client.generate({
  voice: 'Rachel', // or custom voice ID
  text: 'Hello! This is ElevenLabs speaking.',
  model_id: 'eleven_turbo_v2_5'
});

const chunks = [];
for await (const chunk of audio) {
  chunks.push(chunk);
}
fs.writeFileSync('output.mp3', Buffer.concat(chunks));`,

  'openai-tts': `// OpenAI Text-to-Speech
const OpenAI = require('openai');
const fs = require('fs').promises;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const mp3 = await client.audio.speech.create({
  model: 'tts-1', // or 'tts-1-hd'
  voice: 'alloy', // alloy, echo, fable, onyx, nova, shimmer
  input: 'Welcome to OpenAI text-to-speech',
  speed: 1.0
});

const buffer = Buffer.from(await mp3.arrayBuffer());
await fs.writeFile('output.mp3', buffer);`
};

