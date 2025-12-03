export const IMAGE_PROVIDERS = [
  {
    id: 'dezgo-flux',
    name: 'Dezgo Flux',
    pricing: { image: 0.00076 },
    pricingUnits: { image: 'per image (512×512, 4 steps)' },
    apiUrl: 'https://dev.dezgo.com/pricing/flux',
    notes: 'Flux: $0.00076 (512×512, 4 steps). CHEAPEST! Formula: $0.000725/MP/step. 1024×1024: $0.00304.'
  },
  {
    id: 'runware',
    name: 'Runware',
    pricing: { image: 0.001 },
    pricingUnits: { image: 'per image (1000+ for $1)' },
    apiUrl: 'https://runware.ai/image-generation',
    notes: 'SD API. Supports ControlNet (layout/sketch-to-image), LoRA, IP-Adapter. 1000+ for $1. Best features for price!'
  },
  {
    id: 'deapi-image',
    name: 'deAPI',
    pricing: { image: 0.00136 },
    pricingUnits: { image: 'per image (512×512, 4 steps)' },
    apiUrl: 'https://docs.gamercoin.com/depin-api/api/text-to-image',
    notes: 'Flux Schnell: $0.00136 (512×512, 4 steps). 768×768: $0.00191. 1024×1024: $0.00268. Decentralized GPU cloud.'
  },
  {
    id: 'dezgo-sd',
    name: 'Dezgo SD 1/2',
    pricing: { image: 0.0019 },
    pricingUnits: { image: 'per image (512×512, 30 steps)' },
    apiUrl: 'https://dev.dezgo.com/pricing/sd1',
    notes: 'Stable Diffusion 1.5/2.1: $0.0019 (512×512). 1024×1024: $0.0181. Scales linearly with steps.'
  },
  {
    id: 'dezgo-sdxl',
    name: 'Dezgo SDXL',
    pricing: { image: 0.0032 },
    pricingUnits: { image: 'per image (10 steps, 1MP max)' },
    apiUrl: 'https://dev.dezgo.com/pricing/sdxl',
    notes: 'Stable Diffusion XL: $0.0032 (10 steps). 20 steps: $0.0054. 30 steps: $0.0075. Max 1MP resolution.'
  },
  {
    id: 'stability',
    name: 'Stability AI',
    pricing: { image: 0.04 },
    pricingUnits: { image: 'per image (SD 3.5 Large)' },
    apiUrl: 'https://platform.stability.ai/pricing',
    notes: 'SD 3.5 Large: $0.04. Medium: $0.035. Turbo: $0.004. ControlNet support. Official SD API.'
  },
  {
    id: 'replicate',
    name: 'Replicate',
    pricing: { image: 0.003 },
    pricingUnits: { image: 'per image (Flux Schnell avg)' },
    apiUrl: 'https://replicate.com/pricing',
    notes: 'Multi-model platform. Flux Schnell ~$0.003. ControlNet models available. Pay-per-use.'
  },
  {
    id: 'falai',
    name: 'Fal.ai',
    pricing: { image: 0.03 },
    pricingUnits: { image: 'per image (Seedream V4)' },
    apiUrl: 'https://fal.ai/pricing',
    notes: 'Seedream V4: $0.03 (primary). Flux Pro $0.04, Qwen $0.02/MP. ControlNet support. Fast inference.'
  },
  {
    id: 'gemini-img',
    name: 'Google Gemini',
    pricing: { image: 0.039 },
    pricingUnits: { image: 'per image (1024×1024)' },
    apiUrl: 'https://ai.google.dev/pricing',
    notes: 'Imagen 2 via Gemini API: $0.039/image (1024×1024)'
  },
  {
    id: 'openai-img',
    name: 'OpenAI',
    pricing: { image: 0.04 },
    pricingUnits: { image: 'per image (medium)' },
    apiUrl: 'https://platform.openai.com/docs/pricing',
    notes: 'gpt-image-1: Low $0.01, Medium $0.04, High $0.17'
  },
  {
    id: 'openrouter-img',
    name: 'OpenRouter',
    pricing: { image: 0.04 },
    pricingUnits: { image: 'per image (varies)' },
    apiUrl: 'https://openrouter.ai/docs',
    notes: 'AGGREGATOR - depends on model selection'
  },
  {
    id: 'grok-img',
    name: 'Grok (xAI)',
    pricing: { image: 0.07 },
    pricingUnits: { image: 'per image' },
    apiUrl: 'https://docs.x.ai/docs/models',
    notes: 'grok-2-image-1212: $0.07/image'
  }
];
