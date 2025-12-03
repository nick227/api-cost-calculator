export const TEXT_PROVIDERS = [
  {
    id: 'grok',
    name: 'Grok (xAI)',
    pricing: { text: 0.00035 },
    pricingUnits: { text: 'per 1K tokens (blended)' },
    apiUrl: 'https://docs.x.ai/docs/models',
    notes: 'Grok-4.1-Fast: $0.20/1M in + $0.50/1M out. CHEAPEST text API.'
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    pricing: { text: 0.000685 },
    pricingUnits: { text: 'per 1K tokens (blended)' },
    apiUrl: 'https://api-docs.deepseek.com',
    notes: 'DeepSeek-Chat: $0.27/1M in + $1.10/1M out. Cache hit: $0.07/1M in. Off-peak: 50-75% discount!'
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude',
    pricing: { text: 0.009 },
    pricingUnits: { text: 'per 1K tokens (Sonnet blended)' },
    apiUrl: 'https://www.anthropic.com/pricing',
    notes: 'Claude 3.5 Sonnet: $3/1M in + $15/1M out = $9/1M blended. Haiku cheaper, Opus more.'
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    pricing: { text: 0.002 },
    pricingUnits: { text: 'per 1K tokens (varies by model)' },
    apiUrl: 'https://openrouter.ai/docs',
    notes: 'AGGREGATOR - routes to any model. Pricing varies wildly.'
  },
  {
    id: 'together',
    name: 'Together AI',
    pricing: { text: 0.0027 },
    pricingUnits: { text: 'per 1K tokens (Llama 405B blended)' },
    apiUrl: 'https://www.together.ai/pricing',
    notes: 'Open model hosting. Llama 3.1 405B: $2.70/1M = $0.0027/1K. Budget models much cheaper.'
  },
  {
    id: 'openai',
    name: 'OpenAI',
    pricing: { text: 0.00625 },
    pricingUnits: { text: 'per 1K tokens (GPT-4o blended)' },
    apiUrl: 'https://platform.openai.com/docs/pricing',
    notes: 'GPT-4o: $2.50/1M in + $10/1M out ≈ $6.25/1K blended. Flagship model.'
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    pricing: { text: 0.0055 },
    pricingUnits: { text: 'per 1K tokens (1.5 Pro blended)' },
    apiUrl: 'https://ai.google.dev/pricing',
    notes: 'Gemini 1.5 Pro: $1.25/1M in + $10/1M out. 2M context. Flash models cheaper.'
  }
];
