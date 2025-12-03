/**
 * Text Generation Provider Details
 * Comprehensive, research-based information
 */

export const TEXT_PROVIDER_DETAILS = {
  'grok': {
    subtitle: 'xAI - Fastest & Most Affordable Frontier Model',
    description: 'Grok-2 represents exceptional value in the LLM space, delivering near-frontier performance at a fraction of traditional costs. Built by Elon Musk\'s xAI with real-time web access, code execution, and diverse training data including X/Twitter posts for current events understanding.',
    features: [
      'Grok-2: $0.20/1M input, $0.50/1M output (15-26x cheaper than GPT-4o/Claude)',
      'Real-time web search integration ($5/1000 calls)',
      'Native code execution environment',
      'Extended context: 128K tokens',
      'Reasoning and non-reasoning modes',
      'API-first with competitive latency'
    ],
    pros: [
      'Exceptional price/performance ratio',
      'Built-in web search and code execution',
      'Real-time information access',
      'Fast inference (typically <2s)',
      'No rate limiting on standard tier'
    ],
    useCases: ['High-volume applications', 'Budget-conscious development', 'Real-time web data', 'Code generation', 'Current events'],
    docsUrl: 'https://docs.x.ai/docs',
    technicalDetails: 'Architecture optimized for speed without sacrificing quality. Excels at conversational tasks, coding, and current events. Competitive with top-tier models on most tasks while significantly more affordable.'
  },

  'deepseek': {
    subtitle: 'Chinese Ultra-Budget Model with Off-Peak Discounts',
    description: 'DeepSeek offers Chinese-developed AI models at extremely competitive pricing. DeepSeek-Chat provides strong general capabilities while DeepSeek-Reasoner excels at complex reasoning tasks. Unique off-peak pricing (50-75% discount during 16:30-00:30 UTC) makes it ideal for flexible workloads and US/EU developers working during their daytime hours.',
    features: [
      'DeepSeek-Chat: $0.27/1M input, $1.10/1M output',
      'Cache hits: $0.07/1M input (74% cheaper!)',
      'Off-peak discounts: 50-75% off during US/EU daytime',
      'DeepSeek-Reasoner: Advanced reasoning with CoT',
      '64K context window',
      'OpenAI-compatible API'
    ],
    pros: [
      'Second cheapest after Grok',
      'Massive off-peak discounts (up to 75%)',
      'Cache system drastically reduces costs',
      'Strong reasoning capabilities',
      'OpenAI-compatible for easy migration'
    ],
    useCases: ['Budget-constrained projects', 'High-volume batch processing', 'Development/testing', 'Complex reasoning tasks', 'Cost-sensitive applications'],
    docsUrl: 'https://api-docs.deepseek.com',
    technicalDetails: 'Chinese-developed model competitive with Western alternatives. Cache hit pricing makes repeat queries extremely cheap. Off-peak hours (16:30-00:30 UTC) align with 8:30am-4:30pm PST and 11:30am-7:30pm EST, perfect for US/EU developers. Reasoning model includes visible chain-of-thought.'
  },

  'anthropic': {
    subtitle: 'Claude 3.5 Sonnet - Balanced Excellence',
    description: 'Claude 3.5 Sonnet strikes the optimal balance between capability and cost. Known for superior long-context understanding, nuanced reasoning, and reduced hallucination rates. Preferred for enterprise applications requiring reliability and safety.',
    features: [
      'Claude 3.5 Sonnet: $3/1M input, $15/1M output ($9/1M blended)',
      '200K context window (industry-leading)',
      'Extended thinking for complex tasks',
      'Superior instruction following',
      'Lower hallucination rate vs competitors',
      'Vision capabilities for document analysis'
    ],
    pros: [
      'Best-in-class long-context performance',
      'Excellent at nuanced reasoning',
      'Strong safety and alignment',
      'Reliable for production workloads',
      'Great for analysis and writing'
    ],
    useCases: ['Document analysis', 'Long-form content', 'Enterprise applications', 'Complex reasoning', 'Safety-critical tasks'],
    docsUrl: 'https://www.anthropic.com/api',
    technicalDetails: 'Constitutional AI training provides stronger alignment. Excels at tasks requiring careful reasoning over long contexts. Haiku (cheaper) and Opus (more capable) variants available.'
  },

  'openrouter': {
    subtitle: 'Aggregator - Access 200+ Models via One API',
    description: 'OpenRouter provides unified API access to virtually every major language model, allowing dynamic model selection and fallback strategies. Pricing varies by selected model, making it ideal for multi-model workflows and experimentation.',
    features: [
      'Access to 200+ models (GPT, Claude, Gemini, Llama, etc.)',
      'Single API endpoint for all models',
      'Automatic fallback on rate limits',
      'Real-time model availability and pricing',
      'Pay only for what you use',
      'No vendor lock-in'
    ],
    pros: [
      'Maximum flexibility in model selection',
      'Compare models without multiple integrations',
      'Automatic failover reduces downtime',
      'Transparent, real-time pricing',
      'Community-contributed model catalog'
    ],
    useCases: ['Multi-model experimentation', 'A/B testing', 'Fallback strategies', 'Model comparison', 'Avoiding vendor lock-in'],
    docsUrl: 'https://openrouter.ai/docs',
    technicalDetails: 'Pricing ranges from $0.0002/1K (tiny models) to $60/1M (o1-pro). Provides normalized API format across providers. Adds ~50-200ms latency for routing.'
  },

  'together': {
    subtitle: 'Open Source Model Hosting - Llama, Mixtral, Qwen',
    description: 'Together AI specializes in hosting open-source models with optimized inference. Best known for Llama 3.1 405B hosting at competitive prices. Excellent for teams wanting open model benefits without infrastructure complexity.',
    features: [
      'Llama 3.1 405B: $2.70/1M tokens blended ($0.0027/1K)',
      'Smaller models from $0.20/1M (Llama 3B)',
      'Custom model fine-tuning and deployment',
      'Flash Attention 2 for speed',
      '24/7 model availability',
      'Inference optimization included'
    ],
    pros: [
      'Open source model access without DevOps',
      'Competitive pricing for large models',
      'Custom model deployment support',
      'Fast inference (Flash Attention)',
      'Transparent model hosting'
    ],
    useCases: ['Open source preference', 'Custom model deployment', 'Budget-friendly inference', 'Model experimentation', 'Research'],
    docsUrl: 'https://www.together.ai/pricing',
    technicalDetails: 'Optimized for Llama, Mixtral, Qwen families. Inference speed rivals commercial providers. Budget models (3B-7B) 10-50x cheaper than frontier models while suitable for many tasks.'
  },

  'openai': {
    subtitle: 'GPT-4o - Flagship Multimodal Model',
    description: 'OpenAI\'s GPT-4o represents their most advanced production model. Excels at complex reasoning, advanced coding, mathematical problem-solving, and multimodal understanding. The benchmark against which other models are compared.',
    features: [
      'GPT-4o: $2.50/1M input, $10/1M output ($6.25/1M blended)',
      '128K context window',
      'Native vision, audio, and function calling',
      'Structured outputs with JSON schema',
      'Excellent code generation',
      'Extensive ecosystem and tooling'
    ],
    pros: [
      'Top-tier quality for complex tasks',
      'Excellent reasoning and problem-solving',
      'Native multimodal capabilities',
      'Rich ecosystem (LangChain, etc.)',
      'Highly reliable infrastructure'
    ],
    useCases: ['Enterprise applications', 'Complex reasoning', 'Advanced coding', 'Research', 'Multimodal tasks'],
    docsUrl: 'https://platform.openai.com/docs',
    technicalDetails: 'Trained on diverse dataset. Excels at tasks requiring deep reasoning, creative writing, and complex code. Premium pricing justified for mission-critical applications. GPT-4o mini ($0.15/$0.60 per 1M) available for simpler tasks.'
  },

  'gemini': {
    subtitle: 'Google Gemini 1.5 Pro - Multimodal Powerhouse',
    description: 'Gemini 1.5 Pro combines exceptional reasoning with native multimodal understanding. Excellent for tasks involving mixed media (text, images, video, audio). Massive 2M token context window enables unprecedented long-document analysis.',
    features: [
      'Gemini 1.5 Pro: $1.25/1M input, $10/1M output',
      '2M token context (longest available)',
      'Native multimodal: text, image, video, audio',
      'Excellent at math and code',
      'Flash variants for speed/cost tradeoffs',
      'Grounding with Google Search'
    ],
    pros: [
      'Massive 2M context window',
      'True native multimodal (not vision-only)',
      'Excellent at STEM tasks',
      'Google infrastructure reliability',
      'Flash model significantly cheaper'
    ],
    useCases: ['Long document analysis', 'Multimodal tasks', 'STEM problems', 'Video understanding', 'Research'],
    docsUrl: 'https://ai.google.dev/pricing',
    technicalDetails: 'Native multimodal architecture processes images/video/audio without embeddings. 2M context enables entire codebases or books. Gemini 1.5 Flash ($0.075/$0.30 per 1M) for budget tasks.'
  }
};

