/**
 * Avatar Video Generation API Code Examples
 * Talking head and avatar video creation
 * 
 * IMPORTANT NOTES:
 * - API structures are illustrative - verify with official documentation
 * - Wrap in async function or use top-level await
 * - Add error handling for production
 * - Many providers use polling for async video generation
 */

export const AVATAR_CODE_EXAMPLES = {
  'a2e': `// A2E Avatar API
const fetch = require('node-fetch');

const response = await fetch('https://api.a2e.ai/v1/avatar/generate', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.A2E_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    avatar_id: 'your-avatar-id',
    text: 'Hello, welcome to our platform!',
    voice_id: 'default',
    duration: 30
  })
});

const data = await response.json();
console.log(data.video_url);`,

  'hedra': `// Hedra Character API
const fetch = require('node-fetch');

const response = await fetch('https://api.hedra.com/v1/generate', {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.HEDRA_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    character: 'mascot-bear',
    script: 'Today we will learn about AI!',
    voice: 'friendly',
    duration: 60
  })
});

const data = await response.json();
console.log(data.videoUrl);`,

  'heygen': `// HeyGen Avatar IV API
const fetch = require('node-fetch');

const response = await fetch('https://api.heygen.com/v2/video/generate', {
  method: 'POST',
  headers: {
    'X-Api-Key': process.env.HEYGEN_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    video_inputs: [{
      character: {
        type: 'avatar',
        avatar_id: 'your-avatar-id'
      },
      voice: {
        type: 'text',
        input_text: 'Welcome to HeyGen!',
        voice_id: 'default'
      }
    }],
    dimension: { width: 1080, height: 1920 }
  })
});

const data = await response.json();
console.log(data.video_id);`,

  'tavus': `// Tavus Real-Time Avatar
const fetch = require('node-fetch');

const response = await fetch('https://tavusapi.com/v2/videos', {
  method: 'POST',
  headers: {
    'x-api-key': process.env.TAVUS_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    replica_id: 'your-replica-id',
    script: 'Hello, this is a real-time avatar!',
    background_url: 'https://...',
    stream: false
  })
});

const data = await response.json();
console.log(data.download_url);`,

  'did': `// D-ID Talking Photo API
const fetch = require('node-fetch');

const response = await fetch('https://api.d-id.com/talks', {
  method: 'POST',
  headers: {
    'Authorization': \`Basic \${process.env.DID_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    source_url: 'https://path-to-image.jpg',
    script: {
      type: 'text',
      input: 'Hello from D-ID!',
      provider: {
        type: 'microsoft',
        voice_id: 'en-US-JennyNeural'
      }
    }
  })
});

const data = await response.json();
console.log(data.id); // Use to check status`,

  'colossyan': `// Colossyan Enterprise API
const fetch = require('node-fetch');

const response = await fetch('https://api.colossyan.com/v1/videos', {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.COLOSSYAN_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    avatar: 'professional-1',
    script: 'Safety training module introduction',
    language: 'en-US',
    voice_style: 'professional'
  })
});

const data = await response.json();
console.log(data.video_url);`,

  'synthesia': `// Synthesia Enterprise API - Simplified
const fetch = require('node-fetch');

const response = await fetch('https://api.synthesia.io/v2/videos', {
  method: 'POST',
  headers: {
    'Authorization': process.env.SYNTHESIA_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    input: [{
      avatar: 'anna_costume1_cameraA',
      scriptText: 'Welcome to our global training program',
      background: 'green_screen'
    }],
    title: 'Training Video'
  })
});

const data = await response.json();
console.log(data.id); // Poll for completion status`
};

