/**
 * Speech-to-Text API Code Examples
 * Audio transcription examples
 * 
 * IMPORTANT NOTES:
 * - Official SDKs highly recommended for streaming
 * - Check docs for supported audio formats
 * - Wrap in async function
 * - Install: npm install @deepgram/sdk assemblyai @google-cloud/speech
 */

export const STT_CODE_EXAMPLES = {
  'assemblyai': `// AssemblyAI SDK
const { AssemblyAI } = require('assemblyai');

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY
});

const transcript = await client.transcripts.transcribe({
  audio_url: 'https://path-to-audio.mp3',
  // or audio: fs.createReadStream('local.mp3')
  speaker_labels: true,
  auto_chapters: true
});

console.log(transcript.text);`,

  'lemonfox-whisper': `// Lemonfox Whisper API
const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

const form = new FormData();
form.append('file', fs.createReadStream('audio.mp3'));
form.append('model', 'whisper-large-v3');

const response = await fetch('https://api.lemonfox.ai/v1/audio/transcriptions', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.LEMONFOX_API_KEY}\`
  },
  body: form
});

const data = await response.json();
console.log(data.text);`,

  'google-stt-batch': `// Google Cloud Speech-to-Text (Batch)
const speech = require('@google-cloud/speech');

const client = new speech.SpeechClient();

const request = {
  audio: {
    uri: 'gs://bucket-name/audio.mp3' // GCS path for batch
  },
  config: {
    encoding: 'MP3',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
    enableAutomaticPunctuation: true
  }
};

const [operation] = await client.longRunningRecognize(request);
const [response] = await operation.promise();
console.log(response.results[0].alternatives[0].transcript);`,

  'speechmatics': `// Speechmatics Real-Time API
const fetch = require('node-fetch');
const fs = require('fs');

const audioBuffer = fs.readFileSync('audio.wav');

const response = await fetch('https://asr.api.speechmatics.com/v2/jobs', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.SPEECHMATICS_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    type: 'transcription',
    transcription_config: {
      language: 'en',
      diarization: 'speaker',
      operating_point: 'enhanced'
    },
    audio_url: 'https://path-to-audio.mp3'
  })
});

const data = await response.json();
console.log(data.job.id);`,

  'deepgram-batch': `// Deepgram SDK (Batch)
const { createClient } = require('@deepgram/sdk');
const fs = require('fs');

const deepgram = createClient(process.env.DEEPGRAM_API_KEY);

const audioBuffer = fs.readFileSync('audio.mp3');

const { result } = await deepgram.listen.prerecorded.transcribeFile(
  audioBuffer,
  {
    model: 'nova-3',
    smart_format: true,
    diarize: true,
    punctuate: true
  }
);

console.log(result.results.channels[0].alternatives[0].transcript);`,

  'openai-whisper': `// OpenAI Whisper API
const OpenAI = require('openai');
const fs = require('fs');

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const transcription = await client.audio.transcriptions.create({
  file: fs.createReadStream('audio.mp3'),
  model: 'whisper-1',
  language: 'en', // optional
  response_format: 'json', // or 'text', 'srt', 'vtt'
  temperature: 0
});

console.log(transcription.text);`,

  'deepgram-stream': `// Deepgram SDK (Streaming)
const { createClient, LiveTranscriptionEvents } = require('@deepgram/sdk');
const fs = require('fs');

const deepgram = createClient(process.env.DEEPGRAM_API_KEY);

const connection = deepgram.listen.live({
  model: 'nova-3',
  smart_format: true,
  interim_results: true
});

connection.on(LiveTranscriptionEvents.Transcript, (data) => {
  console.log(data.channel.alternatives[0].transcript);
});

// Stream audio data
const audioStream = fs.createReadStream('audio.mp3');
audioStream.on('data', (chunk) => connection.send(chunk));`,

  'google-stt': `// Google Cloud Speech-to-Text (Standard)
const speech = require('@google-cloud/speech');
const fs = require('fs');

const client = new speech.SpeechClient();

const audioBytes = fs.readFileSync('audio.mp3').toString('base64');

const request = {
  audio: { content: audioBytes },
  config: {
    encoding: 'MP3',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
    model: 'latest_long',
    enableAutomaticPunctuation: true
  }
};

const [response] = await client.recognize(request);
console.log(response.results[0].alternatives[0].transcript);`,

  'azure-stt': `// Microsoft Azure Speech SDK
const sdk = require('microsoft-cognitiveservices-speech-sdk');

const speechConfig = sdk.SpeechConfig.fromSubscription(
  process.env.AZURE_SPEECH_KEY,
  process.env.AZURE_REGION
);

const audioConfig = sdk.AudioConfig.fromWavFileInput(
  fs.readFileSync('audio.wav')
);

const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

recognizer.recognizeOnceAsync((result) => {
  console.log(result.text);
  recognizer.close();
});`,

  'agora-stt': `// Agora Real-Time STT
const fetch = require('node-fetch');

const response = await fetch('https://api.agora.io/v1/projects/{projectId}/rtsc/speech-to-text/tasks', {
  method: 'POST',
  headers: {
    'Authorization': \`Basic \${Buffer.from(process.env.AGORA_CUSTOMER_ID + ':' + process.env.AGORA_CUSTOMER_SECRET).toString('base64')}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    audio_url: 'https://path-to-audio.mp3',
    language: 'en-US'
  })
});

const data = await response.json();
console.log(data.taskId);`,

  'speechtext': `// SpeechText.AI API
const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');

const form = new FormData();
form.append('audio_file', fs.createReadStream('audio.mp3'));
form.append('domain', 'medical'); // or 'legal', 'financial'

const response = await fetch('https://api.speechtext.ai/v1/transcribe', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.SPEECHTEXT_API_KEY}\`
  },
  body: form
});

const data = await response.json();
console.log(data.transcript);`
};

