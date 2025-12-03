/**
 * Image Generation API Code Examples
 * Node.js examples for image generation providers
 * 
 * IMPORTANT NOTES:
 * - Check official docs for current endpoints and parameters
 * - Wrap in async function or use top-level await
 * - Add error handling for production
 * - Install: npm install @fal-ai/serverless-client replicate openai node-fetch
 */

export const IMAGE_CODE_EXAMPLES = {
  'dezgo-flux': `// Dezgo Flux API
const fetch = require('node-fetch');
const FormData = require('form-data');

const form = new FormData();
form.append('prompt', 'A beautiful sunset over mountains');
form.append('width', '512');
form.append('height', '512');
form.append('steps', '4');  // Fast generation
form.append('guidance', '3.5');

const response = await fetch('https://api.dezgo.com/flux/text2image', {
  method: 'POST',
  headers: {
    'X-Dezgo-Key': process.env.DEZGO_API_KEY
  },
  body: form
});

const imageBuffer = await response.buffer();
// Cost: ~$0.00076 for 512×512 at 4 steps`,

  'dezgo-sd': `// Dezgo Stable Diffusion 1.5/2.1 API
const fetch = require('node-fetch');
const FormData = require('form-data');

const form = new FormData();
form.append('prompt', 'A serene lake landscape');
form.append('width', '512');
form.append('height', '512');
form.append('guidance', '7.5');
form.append('steps', '30');
form.append('sampler', 'dpmpp_2m');

const response = await fetch('https://api.dezgo.com/text2image', {
  method: 'POST',
  headers: {
    'X-Dezgo-Key': process.env.DEZGO_API_KEY
  },
  body: form
});

const imageBuffer = await response.buffer();
// Cost: $0.0019 for 512×512 at 30 steps`,

  'dezgo-sdxl': `// Dezgo Stable Diffusion XL API
const fetch = require('node-fetch');
const FormData = require('form-data');

const form = new FormData();
form.append('prompt', 'Professional portrait photograph');
form.append('width', '1024');
form.append('height', '1024');
form.append('steps', '30');  // Balance quality/cost
form.append('guidance', '7.5');
form.append('model', 'sdxl_1');

const response = await fetch('https://api.dezgo.com/sdxl/text2image', {
  method: 'POST',
  headers: {
    'X-Dezgo-Key': process.env.DEZGO_API_KEY
  },
  body: form
});

const imageBuffer = await response.buffer();
// Cost: $0.0075 for 1024×1024 at 30 steps`,

  'runware': `// Runware SD API with ControlNet
const { Runware } = require('@runware/sdk-js');

const runware = new Runware({
  apiKey: process.env.RUNWARE_API_KEY
});

await runware.connect();

const images = await runware.requestImages({
  positivePrompt: 'A futuristic city skyline',
  model: 'runware:100@1',
  numberResults: 1,
  width: 1024,
  height: 1024,
  // ControlNet for layout-to-image
  controlNet: [{
    model: 'canny',
    guideImage: 'base64_or_url',
    weight: 0.8
  }]
});

console.log(images[0].imageURL);`,

  'deapi-image': `// deAPI Text-to-Image - Flux Schnell
const fetch = require('node-fetch');
const FormData = require('form-data');

const form = new FormData();
form.append('prompt', 'A mystical forest with glowing mushrooms');
form.append('width', '512');
form.append('height', '512');
form.append('steps', '4');  // Fast generation
form.append('guidance', '3.5');
form.append('seed', Math.floor(Math.random() * 1000000).toString());
form.append('model', 'Flux_Schnell');

const response = await fetch('https://api.deapi.ai/api/v1/client/txt2image', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.DEAPI_API_KEY}\`,
    'Accept': 'application/json'
  },
  body: form
});

const { data } = await response.json();
console.log('Request ID:', data.request_id);
// Poll for results using /api/v1/client/results/:request_id
// Cost: $0.00136 for 512×512, 4 steps. Get $20 free credits!`,

  'stability': `// Stability AI REST API
const fetch = require('node-fetch');
const FormData = require('form-data');

const form = new FormData();
form.append('prompt', 'A serene landscape with mountains');
form.append('output_format', 'png');

const response = await fetch(
  'https://api.stability.ai/v2beta/stable-image/generate/sd3',
  {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${process.env.STABILITY_API_KEY}\`,
      ...form.getHeaders()
    },
    body: form
  }
);

const data = await response.json();
console.log(data.image); // Base64 image`,

  'replicate': `// Replicate API - Flux/SDXL
const Replicate = require('replicate');

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN
});

const output = await replicate.run(
  'black-forest-labs/flux-schnell',
  {
    input: {
      prompt: 'A photorealistic portrait',
      num_outputs: 1,
      aspect_ratio: '1:1'
    }
  }
);

console.log(output[0]); // Image URL`,

  'falai': `// Fal.ai Multi-Model API
const fal = require('@fal-ai/serverless-client');

fal.config({
  credentials: process.env.FAL_KEY
});

const result = await fal.subscribe('fal-ai/flux-pro', {
  input: {
    prompt: 'A magical forest scene',
    image_size: 'landscape_4_3',
    num_inference_steps: 28,
    guidance_scale: 3.5
  }
});

console.log(result.images[0].url);`,

  'gemini-img': `// Google Imagen REST API
const fetch = require('node-fetch');

const response = await fetch(
  'https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': process.env.GOOGLE_API_KEY
    },
    body: JSON.stringify({
      instances: [{
        prompt: 'A robot painting a picture'
      }],
      parameters: {
        sampleCount: 1,
        aspectRatio: '1:1'
      }
    })
  }
);

const data = await response.json();
console.log(data.predictions[0].bytesBase64Encoded);`,

  'openai-img': `// OpenAI DALL-E 3
const OpenAI = require('openai');

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const response = await client.images.generate({
  model: 'dall-e-3',
  prompt: 'A cute baby sea otter',
  n: 1,
  size: '1024x1024',
  quality: 'standard' // or 'hd'
});

console.log(response.data[0].url);`,

  'openrouter-img': `// OpenRouter Image - Routes to multiple providers
const fetch = require('node-fetch');

const response = await fetch('https://openrouter.ai/api/v1/images/generations', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.OPENROUTER_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'openai/dall-e-3',
    prompt: 'A serene mountain landscape',
    n: 1
  })
});

const data = await response.json();
console.log(data.data[0].url);`,

  'grok-img': `// xAI Grok Image Generation
const fetch = require('node-fetch');

const response = await fetch('https://api.x.ai/v1/images/generations', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.XAI_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'grok-2-image-1212',
    prompt: 'A futuristic robot',
    n: 1,
    size: '1024x1024'
  })
});

const data = await response.json();
console.log(data.data[0].url);`
};

