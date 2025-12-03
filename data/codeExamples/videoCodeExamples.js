/**
 * Video Generation API Code Examples
 * Node.js examples for video generation providers
 * 
 * IMPORTANT NOTES:
 * - Video generation is typically async - most require polling
 * - Check official docs for current endpoints
 * - Wrap in async function
 * - Install: npm install @fal-ai/serverless-client node-fetch
 */

export const VIDEO_CODE_EXAMPLES = {
  'deapi-video': `// deAPI Text-to-Video - LTX Video (4s, 512×512)
const fetch = require('node-fetch');
const FormData = require('form-data');

// Step 1: Submit video generation task
const form = new FormData();
form.append('prompt', 'A serene sunset over mountains');
form.append('width', '512');
form.append('height', '512');
form.append('steps', '20');
form.append('frames', '120');  // 4 seconds at 30fps
form.append('fps', '30');
form.append('guidance', '7.5');
form.append('seed', Math.floor(Math.random() * 1000000).toString());
form.append('model', 'Ltxv_13B_0_9_8_Distilled_FP8');

const response = await fetch('https://api.deapi.ai/api/v1/client/txt2video', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.DEAPI_API_KEY}\`,
    'Accept': 'application/json'
  },
  body: form
});

const { data } = await response.json();
console.log('Request ID:', data.request_id);

// Step 2: Poll for results using /api/v1/client/results/:request_id
// Cost: $0.005644 per 4s video (512×512px)`,

  'minimax-hailuo': `// MiniMax Hailuo Video API
const fetch = require('node-fetch');

// Step 1: Submit video generation task
const taskResponse = await fetch('https://api.minimax.chat/v1/video_generation', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.MINIMAX_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'video-01',  // Hailuo-02 model
    prompt: 'A cat walking in a garden',
    prompt_optimizer: true
  })
});

const task = await taskResponse.json();
const taskId = task.task_id;

// Step 2: Poll for completion
let status = 'Processing';
while (status === 'Processing') {
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const statusResponse = await fetch(
    \`https://api.minimax.chat/v1/query/video_generation?task_id=\${taskId}\`,
    { headers: { 'Authorization': \`Bearer \${process.env.MINIMAX_API_KEY}\` }}
  );
  
  const result = await statusResponse.json();
  status = result.status;
  
  if (status === 'Success') {
    console.log('Video URL:', result.file_id);
  }
}`,

  'runware-video': `// Runware Video API
const fetch = require('node-fetch');

const response = await fetch('https://api.runware.ai/v1/video/generate', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.RUNWARE_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'A cat playing piano',
    duration: 5,
    resolution: '1080p'
  })
});

const data = await response.json();
console.log(data.videoUrl);`,

  'falai-video': `// Fal.ai Wan 2.5 Video
const fal = require('@fal-ai/serverless-client');

fal.config({
  credentials: process.env.FAL_KEY
});

const result = await fal.subscribe('fal-ai/wan-2-5', {
  input: {
    prompt: 'Ocean waves crashing on beach',
    duration: 5,
    aspect_ratio: '16:9'
  },
  logs: true,
  onQueueUpdate: (update) => {
    console.log('Status:', update.status);
  }
});

console.log(result.video.url);`,

  'falai-kling': `// Fal.ai Kling 2.5 Turbo
const fal = require('@fal-ai/serverless-client');

fal.config({
  credentials: process.env.FAL_KEY
});

const result = await fal.subscribe('fal-ai/kling-video/v1.5/pro/text-to-video', {
  input: {
    prompt: 'A drone flying over a city',
    duration: '5',
    aspect_ratio: '16:9'
  }
});

console.log(result.video.url);`,

  'falai-ovi': `// Fal.ai Ovi - Per-Video Pricing
const fal = require('@fal-ai/serverless-client');

fal.config({
  credentials: process.env.FAL_KEY
});

const result = await fal.subscribe('fal-ai/ovi', {
  input: {
    prompt: 'A cat jumping and playing',
    aspect_ratio: '16:9'
  }
});

console.log(result.video.url);
console.log('Cost: $0.20 per video (flat rate)');`,

  'runway': `// Runway Gen-4 Turbo API
const fetch = require('node-fetch');

// Create generation task
const taskResponse = await fetch('https://api.runwayml.com/v1/tasks', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.RUNWAY_API_TOKEN}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    taskType: 'gen4_turbo',
    prompt: 'A cinematic shot of sunset',
    duration: 10
  })
});

const task = await taskResponse.json();
// Poll for completion - Cost: $0.05/second (5 credits/s)
const videoUrl = task.output.videoUrl;
console.log(videoUrl);`,

  'gemini-video': `// Google Veo REST API  
const fetch = require('node-fetch');

const response = await fetch(
  'https://generativelanguage.googleapis.com/v1beta/models/veo-001:generateVideo',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': process.env.GOOGLE_API_KEY
    },
    body: JSON.stringify({
      prompt: 'A time-lapse of flowers blooming',
      parameters: {
        duration: '5s',
        aspectRatio: '16:9'
      }
    })
  }
);

const data = await response.json();
console.log(data.generatedVideo.uri);`,

  'falai-veo3': `// Fal.ai Veo 3 Premium
const fal = require('@fal-ai/serverless-client');

fal.config({
  credentials: process.env.FAL_KEY
});

const result = await fal.subscribe('fal-ai/veo-3', {
  input: {
    prompt: 'Professional product showcase video',
    duration: 8,
    resolution: '1080p',
    aspect_ratio: '16:9'
  }
});

console.log(result.video.url);`
};

