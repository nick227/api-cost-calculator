/**
 * Music Generation API Code Examples
 * AI music creation examples
 * 
 * IMPORTANT NOTES:
 * - API structures are illustrative - verify with providers
 * - Music generation often requires polling for completion
 * - Wrap in async function
 * - Check official docs for current endpoints
 */

export const MUSIC_CODE_EXAMPLES = {
  'aimusicapi': `// AI MusicAPI
const fetch = require('node-fetch');

const response = await fetch('https://api.aimusicapi.ai/v1/generate', {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.AIMUSIC_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Upbeat electronic dance music',
    duration: 30,
    with_vocals: false,
    genre: 'electronic'
  })
});

const data = await response.json();
console.log(data.audio_url);`,

  'riffusion': `// Riffusion API
const fetch = require('node-fetch');

const response = await fetch('https://api.riffusionapi.com/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.RIFFUSION_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Ambient lo-fi hip hop beats',
    duration_seconds: 30,
    style: 'lofi'
  })
});

const data = await response.json();
console.log(data.audio_url);`,

  'poyo': `// PoYo AI Music API
const fetch = require('node-fetch');

const response = await fetch('https://api.poyo.ai/v1/music/generate', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.POYO_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Epic orchestral soundtrack',
    model: 'v2',
    with_vocals: true,
    mood: 'epic'
  })
});

const data = await response.json();
console.log(data.track_url);`,

  'tempolor': `// TemPolor Music API
const fetch = require('node-fetch');

const response = await fetch('https://api.tempolor.com/v1/generate', {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.TEMPOLOR_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Corporate background music',
    duration: 60,
    genre: 'corporate',
    with_vocals: false,
    output_format: 'mp3'
  })
});

const data = await response.json();
console.log(data.download_url);`,

  'musicapi': `// MusicAPI.ai - Sonic/Nuro
const fetch = require('node-fetch');

const response = await fetch('https://api.musicapi.ai/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.MUSICAPI_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'sonic', // or 'nuro'
    prompt: 'Cinematic film score',
    duration: 90,
    video_context: 'dramatic action scene'
  })
});

const data = await response.json();
console.log(data.music_url);`,

  'beatoven': `// Beatoven.ai Context-Aware API
const fetch = require('node-fetch');

const response = await fetch('https://api.beatoven.ai/v1/compose', {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.BEATOVEN_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Background music for tech video',
    video_url: 'https://path-to-video.mp4', // optional
    mood: 'uplifting',
    duration: 120,
    genre: 'electronic'
  })
});

const data = await response.json();
console.log(data.composition_url);`,

  'mubert': `// Mubert Render API
const fetch = require('node-fetch');

const response = await fetch('https://api.mubert.com/v2/RecordTrack', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    method: 'RecordTrack',
    params: {
      pat: process.env.MUBERT_API_KEY,
      mode: 'track',
      duration: 60,
      tags: 'ambient,chill,relaxing',
      bitrate: 320
    }
  })
});

const data = await response.json();
console.log(data.data.tasks[0].result.downloadLink);`,

  'soundverse': `// Soundverse Enterprise API
const fetch = require('node-fetch');

const response = await fetch('https://api.soundverse.ai/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.SOUNDVERSE_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Modern pop song with vocals',
    language: 'en',
    duration: 180,
    with_vocals: true,
    with_stems: true // Separate stems
  })
});

const data = await response.json();
console.log(data.track_url, data.stems);`
};

