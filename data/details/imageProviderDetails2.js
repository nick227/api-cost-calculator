/**
 * Image Generation Provider Details - Part 2 (Premium Tier)
 * High-end models with best quality and features
 */

export const IMAGE_PROVIDER_DETAILS_2 = {
  'gemini-img': {
    subtitle: 'Google Imagen 2 via Gemini - Integrated Multimodal',
    description: 'Google\'s Imagen 2 accessed through Gemini API. Benefits from Google\'s multimodal understanding for better prompt interpretation. Handles complex scene composition well. Integrated with Gemini text models for context-aware generation. Good for Google Cloud ecosystem users.',
    features: [
      'Imagen 2: $0.039 per 1024×1024 image',
      'Native prompt understanding from Gemini',
      'Multiple aspect ratios supported',
      'Safety filters included',
      'Google Cloud infrastructure',
      'Integrated with Gemini models'
    ],
    pros: [
      'Excellent prompt understanding',
      'Google infrastructure reliability',
      'Integrates with Gemini ecosystem',
      'Good at complex compositions',
      'Enterprise-grade safety filters'
    ],
    useCases: ['Google Cloud users', 'Enterprise applications', 'Complex scene composition', 'Integrated AI workflows', 'Prompt-heavy tasks'],
    docsUrl: 'https://ai.google.dev/pricing',
    technicalDetails: 'Output Quality: 90-93% usable results. Excels at understanding complex prompts due to Gemini language model integration. Good at spatial relationships and scene composition. Competitive with DALL-E 3 for most tasks. Best for: complex scenes, Google ecosystem, enterprise deployments.'
  },

  'openai-img': {
    subtitle: 'DALL-E 3 - Best Prompt Adherence & Composition',
    description: 'DALL-E 3 represents OpenAI\'s image generation excellence. Best-in-class prompt adherence, understanding nuanced requests, and composing complex scenes. Integrated with ChatGPT for prompt refinement. Three quality tiers balance cost vs detail. Industry standard for professional marketing and creative work.',
    features: [
      'Low quality: $0.01 (1024×1024, drafts)',
      'Medium quality: $0.04 (1024×1024, standard)',
      'High quality: $0.17 (1024×1024, maximum detail)',
      'ChatGPT integration for prompt enhancement',
      'Excellent text rendering (90% accuracy)',
      'Natural language prompt understanding'
    ],
    pros: [
      'Best prompt adherence in industry',
      'Understands complex instructions',
      'Excellent text-in-image rendering',
      'ChatGPT can refine prompts',
      'Consistently high quality'
    ],
    useCases: ['Professional marketing', 'Creative advertising', 'Editorial content', 'Prompt-complex tasks', 'Text-in-image needs'],
    docsUrl: 'https://platform.openai.com/docs/guides/images',
    technicalDetails: 'Output Quality: 95-98% usable results on medium/high. Best at understanding abstract concepts ("make it feel nostalgic"). Text rendering 90% accurate. Composition handling superior to alternatives. Best for: professional work, complex prompts, mission-critical quality, text integration.'
  },

  'openrouter-img': {
    subtitle: 'Image Model Aggregator - Access Multiple Providers',
    description: 'OpenRouter provides unified access to multiple image generation providers through one API. Route to DALL-E, Stable Diffusion, Flux, and others dynamically. Perfect for A/B testing, fallback strategies, and cost optimization by selecting the right model per request.',
    features: [
      'Access to DALL-E, SD, Flux, and more',
      'Dynamic model selection per request',
      'Automatic fallback on failures',
      'Transparent, real-time pricing',
      'Compare models easily',
      'No vendor lock-in'
    ],
    pros: [
      'Maximum flexibility',
      'Test models without multiple integrations',
      'Automatic failover',
      'Cost optimization by task',
      'Stay model-agnostic'
    ],
    useCases: ['Multi-model testing', 'Fallback strategies', 'Cost optimization', 'Model comparison', 'Avoiding lock-in'],
    docsUrl: 'https://openrouter.ai/docs',
    technicalDetails: 'Output Quality: Depends on selected model. Enables sophisticated routing (cheap models for drafts, premium for finals). Adds ~100-300ms routing latency. Pricing varies: $0.001 (budget SD) to $0.17 (DALL-E high). Best for: enterprise needing flexibility, A/B testing, cost control.'
  },

  'grok-img': {
    subtitle: 'xAI Grok-2-Image - Latest Multimodal Model',
    description: 'Grok\'s image generation model integrated with their LLM. Benefits from Grok\'s strong prompt understanding and current events knowledge. Relatively new to market but shows promise for coherent image-text generation. Best for users already in xAI ecosystem.',
    features: [
      'Grok-2-image-1212: $0.07/image',
      'Integrated with Grok LLM',
      'Good prompt understanding',
      'Standard resolutions supported',
      'Fast inference',
      'xAI ecosystem integration'
    ],
    pros: [
      'Strong prompt interpretation',
      'Integrated with Grok intelligence',
      'Fast generation times',
      'Good for xAI users',
      'Competitive quality'
    ],
    useCases: ['xAI ecosystem users', 'Integrated workflows', 'Prompt-heavy generation', 'Quick iterations', 'Current events imagery'],
    docsUrl: 'https://docs.x.ai/docs/models',
    technicalDetails: 'Output Quality: ~88-92% usable results. Newer model still maturing but competitive. Leverages Grok\'s language understanding for better prompt parsing. Standard quality comparable to SD 3.0. Best for: xAI users, integrated text+image workflows, quick prototyping.'
  }
};

