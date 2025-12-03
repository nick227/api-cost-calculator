/**
 * Text Generation API Code Examples
 * Node.js examples using official SDKs or standard fetch
 * 
 * IMPORTANT NOTES:
 * - These examples show typical integration patterns
 * - Always check official documentation for current API specs
 * - Wrap in async function: async function callAPI() { ... }
 * - Add error handling for production use
 * - Install required packages: npm install openai @anthropic-ai/sdk etc.
 */

export const TEXT_CODE_EXAMPLES = {
  'grok': `// xAI Grok API - OpenAI-compatible
const OpenAI = require('openai');

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: 'https://api.x.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'grok-2-latest',
  messages: [
    { role: 'user', content: 'Explain quantum computing' }
  ],
  temperature: 0.7
});

console.log(response.choices[0].message.content);`,

  'deepseek': `// DeepSeek API - OpenAI-compatible
const OpenAI = require('openai');

const client = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: 'https://api.deepseek.com'
});

const response = await client.chat.completions.create({
  model: 'deepseek-chat',  // or 'deepseek-reasoner' for CoT
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Write a Python function to sort a list' }
  ],
  temperature: 0.7,
  max_tokens: 2000
});

console.log(response.choices[0].message.content);
// Note: Use off-peak hours (16:30-00:30 UTC) for 50-75% discount!`,

  'anthropic': `// Anthropic Claude SDK
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

const message = await client.messages.create({
  model: 'claude-3-5-sonnet-20241022',
  max_tokens: 1024,
  messages: [
    { role: 'user', content: 'Analyze this document...' }
  ]
});

console.log(message.content[0].text);`,

  'openrouter': `// OpenRouter - OpenAI-compatible
const OpenAI = require('openai');

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': 'https://your-site.com',
    'X-Title': 'Your App Name'
  }
});

const response = await client.chat.completions.create({
  model: 'anthropic/claude-3.5-sonnet',
  messages: [
    { role: 'user', content: 'Hello!' }
  ]
});

console.log(response.choices[0].message.content);`,

  'together': `// Together AI - OpenAI-compatible
const OpenAI = require('openai');

const client = new OpenAI({
  apiKey: process.env.TOGETHER_API_KEY,
  baseURL: 'https://api.together.xyz/v1'
});

const response = await client.chat.completions.create({
  model: 'meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo',
  messages: [
    { role: 'user', content: 'Write a haiku about AI' }
  ],
  max_tokens: 512,
  temperature: 0.7
});

console.log(response.choices[0].message.content);`,

  'openai': `// OpenAI Official SDK
const OpenAI = require('openai');

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const response = await client.chat.completions.create({
  model: 'gpt-4o',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Explain machine learning' }
  ],
  temperature: 0.7,
  max_tokens: 1000
});

console.log(response.choices[0].message.content);`,

  'gemini': `// Google Generative AI SDK
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

const result = await model.generateContent({
  contents: [{
    role: 'user',
    parts: [{ text: 'Explain neural networks' }]
  }]
});

console.log(result.response.text());`
};

