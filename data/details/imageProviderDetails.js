/**
 * Image Generation Provider Details - Part 1 (Budget & Mid-Tier)
 * Comprehensive technical comparisons and expected output quality
 */

export const IMAGE_PROVIDER_DETAILS_1 = {
  'dezgo-flux': {
    subtitle: 'Flux Model - Ultra Budget Flexible Pricing',
    description: 'Dezgo Flux offers the cheapest Flux-based image generation with flexible pricing based on resolution and steps. At $0.00076 for 512×512 (4 steps), it\'s incredibly affordable. Formula-based pricing ($0.000725/megapixel/step) allows precise cost control. Perfect for high-volume Flux generation without breaking the bank.',
    features: [
      'Flux: $0.00076 (512×512, 4 steps), $0.00304 (1024×1024, 4 steps)',
      'Formula: $0.000725/megapixel/step (>=4 steps)',
      'Under 4 steps: $0.000225/MP/step + $0.002 fixed',
      'LoRA support: +$0.0040 per LoRA',
      'Flexible resolution and step control',
      'Fast generation (3-5 seconds)'
    ],
    pros: [
      'Cheapest Flux API available',
      'Formula-based pricing for cost control',
      'LoRA adapter support',
      'Pay only for what you use',
      'Modern Flux quality at budget prices'
    ],
    useCases: ['Budget Flux generation', 'High-volume projects', 'Cost-sensitive workflows', 'Testing Flux models', 'Batch processing'],
    docsUrl: 'https://dev.dezgo.com/pricing/flux',
    technicalDetails: 'Output Quality: Flux provides modern quality (~85-90% usable). Fast 4-step generation suitable for most uses. Resolution scales with megapixel pricing. LoRA support enables style customization. Best for: budget-conscious Flux users, high-volume generation, cost-predictable workflows.'
  },

  'dezgo-sd': {
    subtitle: 'Stable Diffusion 1.5/2.1 - Legacy Budget Option',
    description: 'Dezgo SD provides bare-bones Stable Diffusion 1.5/2.1 API at rock-bottom prices. Uses older SD models without latest optimizations. Best for high-volume generation where cost matters more than cutting-edge quality, or for prototyping workflows before scaling to premium providers.',
    features: [
      'SD 1.5/2.1: $0.0019 (512×512, 30 steps), $0.0181 (1024×1024, 30 steps)',
      'Cost scales linearly with steps (half steps = half price)',
      'ControlNet support: +100% cost',
      'LoRA support: +$0.0012 per LoRA',
      'Upscaling cheaper than direct high-res generation',
      'Simple REST API'
    ],
    pros: [
      'Very cheap for basic SD models',
      'Linear step pricing for cost control',
      'ControlNet available',
      'LoRA adapter support',
      'Upscaling optimization saves money'
    ],
    useCases: ['High-volume legacy SD', 'Background assets', 'Prototyping', 'Budget constraints', 'Testing workflows'],
    docsUrl: 'https://dev.dezgo.com/pricing/sd1',
    technicalDetails: 'Output Quality: Older SD models produce typical artifacts (malformed hands, text issues, anatomy problems). ~70% usable results. Resolution up to 1024×1024. Tip: Generate at 512px then upscale (2x cheaper than direct 1024px). Best for: icons, textures, concept art, thumbnails.'
  },

  'dezgo-sdxl': {
    subtitle: 'Stable Diffusion XL - Mid-Tier Budget Option',
    description: 'Dezgo SDXL offers Stable Diffusion XL at competitive budget pricing with step-based tiers. At $0.0032 for 10 steps, it provides better quality than SD 1.5 while remaining affordable. Maximum 1 megapixel resolution with flexible step control for quality/cost optimization.',
    features: [
      'SDXL: $0.0032 (10 steps), $0.0075 (30 steps), $0.0181 (80 steps)',
      'Maximum 1 megapixel (1024×1024 or equivalent)',
      'Step-based pricing tiers for cost control',
      'LoRA support: +$0.0051 per LoRA',
      'Better quality than SD 1.5/2.1',
      'Fast 5-8 second generation'
    ],
    pros: [
      'Budget SDXL option',
      'Better quality than legacy SD',
      'Multiple step tiers for cost/quality balance',
      'LoRA adapter support',
      'Good for mid-quality needs'
    ],
    useCases: ['Budget SDXL generation', 'Mid-quality projects', 'Marketing materials', 'Product images', 'Social media content'],
    docsUrl: 'https://dev.dezgo.com/pricing/sdxl',
    technicalDetails: 'Output Quality: SDXL provides better composition and prompt adherence than SD 1.5 (~80-85% usable at 30 steps). 10 steps suitable for drafts. 30+ steps for production. Max 1MP limits resolution flexibility. Best for: budget-conscious quality improvement over SD 1.5.'
  },

  'runware': {
    subtitle: 'Optimized Stable Diffusion - Best Features for Price',
    description: 'Runware delivers blazing-fast Stable Diffusion with advanced features at incredible prices. Sub-second generation times with ControlNet support for layout-to-image workflows. Best value proposition: 1000+ images for $1 while supporting professional features like LoRA fine-tuning and IP-Adapter that budget competitors lack.',
    features: [
      '1000+ images for $1 ($0.001/image)',
      'Sub-second generation (0.5-1.5s typical)',
      'ControlNet support: Canny, Depth, Pose, Scribble, Segmentation',
      'LoRA loading for style control',
      'IP-Adapter for image-guided generation',
      'Custom model support (upload your own)'
    ],
    pros: [
      'Best features/price ratio',
      'Among the fastest inference available',
      'Professional features at budget price',
      'ControlNet enables layout-to-image',
      'No infrastructure management'
    ],
    useCases: ['High-volume generation', 'Real-time applications', 'UI/UX wireframe-to-image', 'Game asset creation', 'Batch processing'],
    docsUrl: 'https://docs.runware.ai',
    technicalDetails: 'Output Quality: Modern SD optimizations typically provide 85-90% usable results. ControlNet accuracy approximately 90% for structural adherence. Supports SDXL, SD 1.5/2.1. Resolution up to 1024×1024 standard, 2048×2048 with SDXL. Best for: controlled generation, production workflows, cost-sensitive projects requiring quality and features.'
  },

  'deapi-image': {
    subtitle: 'Decentralized GPU Cloud - Open Source Models at Scale',
    description: 'deAPI provides ultra-cheap image generation through a decentralized network of consumer GPUs running open-source models like Flux Schnell. At $0.00136/image (512×512), it offers exceptional value with access to multiple resolutions. Built for scalability, deAPI can handle thousands of concurrent requests with up to 20x cost savings vs traditional providers. $20 free credits included.',
    features: [
      'Flux Schnell: $0.00136 (512×512), $0.00191 (768×768), $0.00268 (1024×1024)',
      'Multiple open-source models (Flux, Qwen Edit, Nvidia Sana)',
      'Decentralized GPU network (thousands of GPUs)',
      'Scalable to high concurrent requests',
      'Up to 2048×2048 resolution',
      '$20 free credits for new users'
    ],
    pros: [
      'Very competitive pricing',
      'Multiple resolution options',
      'Decentralized = reliable uptime',
      'Open-source model flexibility',
      'Transparent pay-per-use pricing',
      'Free credits to test'
    ],
    useCases: ['High-volume generation', 'Multi-resolution needs', 'Startups & SaaS', 'Budget-conscious projects', 'Testing/prototyping', 'Batch processing'],
    docsUrl: 'https://docs.gamercoin.com/depin-api/api/text-to-image',
    technicalDetails: 'Output Quality: Flux Schnell provides modern quality (~80-85% usable). Fast 4-step generation. Resolution scaling: 512px to 2048px with corresponding price increases. Decentralized routing ensures sub-10s response times. Async task-based API with polling. Best for: flexible resolution needs, cost-sensitive high-volume projects, modern SD alternatives.'
  },

  'stability': {
    subtitle: 'Stable Diffusion 3.5 - Official Creator, Best Control',
    description: 'Stability AI created Stable Diffusion and offers the official API with latest models. SD 3.5 Large provides state-of-the-art open model quality with excellent prompt adherence and composition. Multiple tiers (Large/Medium/Turbo) optimize for quality vs speed. ControlNet support for professional workflows.',
    features: [
      'SD 3.5 Large: $0.04/image (best quality)',
      'SD 3.5 Medium: $0.035/image (balanced)',
      'SD 3.5 Turbo: $0.004/image (speed optimized)',
      'ControlNet: Structure, Canny, Depth support',
      'Inpainting and outpainting',
      'Ultra model (8B params) for maximum quality'
    ],
    pros: [
      'Official SD creator - first access to new models',
      'Multiple quality/speed tiers',
      'Excellent prompt understanding',
      'ControlNet for professional control',
      'Best open-source model quality'
    ],
    useCases: ['Professional image creation', 'Marketing materials', 'Product visualization', 'Controlled generation', 'Open source preference'],
    docsUrl: 'https://platform.stability.ai/docs',
    technicalDetails: 'Output Quality: SD 3.5 Large rivals DALL-E 3 for composition and prompt adherence. Approximately 95% usable results with good prompts. Excellent at text rendering (approximately 70% accuracy vs 20% for SD 1.5). Resolution up to 2048×2048. Best for: professional work, accurate prompt following, text-in-image.'
  },

  'replicate': {
    subtitle: 'Multi-Model Platform - Flux, SDXL, Community Models',
    description: 'Replicate hosts hundreds of image models with pay-per-use pricing. Access to Flux Schnell (fast), Flux Dev (quality), SDXL, and thousands of community-trained models. Ideal for experimentation and finding the perfect model for your use case. ControlNet models available.',
    features: [
      'Flux Schnell: ~$0.003/image (fast, good quality)',
      'Flux Dev: ~$0.05/image (slow, best quality)',
      'SDXL and variants: $0.008-0.02/image',
      '1000+ community models (LoRAs, checkpoints)',
      'ControlNet models available',
      'Hardware autoscaling included'
    ],
    pros: [
      'Access to cutting-edge community models',
      'Experiment without training infrastructure',
      'Pay only for runtime (CPU/GPU seconds)',
      'Version control for models',
      'Community-driven innovation'
    ],
    useCases: ['Model experimentation', 'Finding specialized styles', 'Community model access', 'Rapid prototyping', 'Custom workflows'],
    docsUrl: 'https://replicate.com/docs',
    technicalDetails: 'Output Quality: Varies by model. Flux Dev rivals Midjourney v6 (96% usable). Flux Schnell offers 90% quality at 10x speed. SDXL provides 85-90% usable results. Best for: style experimentation, accessing niche models, finding perfect aesthetic match.'
  },

  'falai': {
    subtitle: 'Fal.ai - Flux, Qwen, Seedream Multi-Model Platform',
    description: 'Fal.ai provides fast inference for multiple cutting-edge models: Flux (photorealism), Qwen (Chinese text support), Seedream V4 (speed optimized). Optimized infrastructure delivers 2-5 second generation times. ControlNet support. Excellent choice for accessing multiple model architectures through one API.',
    features: [
      'Seedream V4: $0.03/image (primary, fast)',
      'Flux Pro: $0.04/image (photorealistic)',
      'Qwen: $0.02/MP (Chinese text capable)',
      'ControlNet: Canny, Depth, OpenPose',
      'Fast inference pipeline (2-5s)',
      'Multiple resolution options'
    ],
    pros: [
      'Access to latest models quickly',
      'Optimized inference infrastructure',
      'Multiple model architectures',
      'Good price/performance balance',
      'Fast deployment of new models'
    ],
    useCases: ['Multi-model workflows', 'Professional image creation', 'International markets (Qwen)', 'Production applications', 'Latest model access'],
    docsUrl: 'https://fal.ai/docs',
    technicalDetails: 'Output Quality: Seedream V4 provides 88-92% usable results with excellent speed. Flux Pro achieves 94-97% quality for photorealistic needs. Qwen handles Chinese characters (80% accuracy vs 10% for Western models). Best for: production workflows needing multiple models, international content.'
  }
};
