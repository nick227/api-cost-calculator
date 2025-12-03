/**
 * Text-to-3D API Code Examples
 * 3D model generation from text
 * 
 * IMPORTANT NOTES:
 * - 3D generation typically requires polling (minutes to complete)
 * - Verify endpoints and parameters with official docs
 * - Wrap in async function
 * - Download GLB/FBX files after generation completes
 */

export const TEXT_3D_CODE_EXAMPLES = {
  'meshy': `// Meshy Text-to-3D API
const fetch = require('node-fetch');

const response = await fetch('https://api.meshy.ai/v2/text-to-3d', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.MESHY_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    mode: 'preview', // or 'refine'
    prompt: 'A medieval sword with intricate details',
    art_style: 'realistic',
    negative_prompt: 'low quality, blurry'
  })
});

const data = await response.json();
console.log(data.result); // Task ID
// Poll for completion, then download GLB`,

  'tripo': `// Tripo AI Text-to-3D
const fetch = require('node-fetch');

const response = await fetch('https://api.tripo3d.ai/v2/openapi/task', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.TRIPO_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    type: 'text_to_model',
    prompt: 'A futuristic robot character',
    model_version: 'v2.0-20240919',
    face_limit: 10000
  })
});

const data = await response.json();
console.log(data.data.task_id);`,

  'luma-genie': `// Luma Genie API
const fetch = require('node-fetch');

const response = await fetch('https://api.lumalabs.ai/genie/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.LUMA_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'A decorative vase',
    style: 'realistic',
    material: 'ceramic'
  })
});

const data = await response.json();
console.log(data.model_url); // GLTF URL`,

  'hyper3d': `// Hyper3D API
const fetch = require('node-fetch');

const response = await fetch('https://api.hyper3d.ai/v1/generate', {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.HYPER3D_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'A game-ready treasure chest',
    output_format: 'fbx',
    polygon_count: 'medium',
    with_textures: true
  })
});

const data = await response.json();
console.log(data.download_url);`,

  'alpha3d': `// Alpha3D API
const fetch = require('node-fetch');

const response = await fetch('https://api.alpha3d.io/v1/text-to-3d', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.ALPHA3D_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'A modern office chair',
    output_format: 'glb',
    preview: true,
    batch_mode: false
  })
});

const data = await response.json();
console.log(data.job_id); // Poll for completion`,

  'csm-3d': `// CSM.ai Text/Image-to-3D
const fetch = require('node-fetch');

const response = await fetch('https://api.csm.ai/v1/generate', {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.CSM_API_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'A photorealistic apple',
    resolution: 'high', // low, medium, high
    with_rigging: false,
    materials: 'pbr',
    export_format: 'glb'
  })
});

const data = await response.json();
console.log(data.model_url);`,

  'shutterstock-3d': `// Shutterstock 3D API (NVIDIA Edify)
const fetch = require('node-fetch');

const response = await fetch('https://api.shutterstock.com/v2/ai/3d/generate', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.SHUTTERSTOCK_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'A realistic sports car',
    quality: 'high',
    format: 'usd',
    license: 'commercial'
  })
});

const data = await response.json();
console.log(data.asset_url);`
};

