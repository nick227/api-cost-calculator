/**
 * Text-to-3D Provider Details
 * 3D model generation - topology, formats, and use case comparisons
 */

export const TEXT_3D_PROVIDER_DETAILS = {
  'meshy': {
    subtitle: 'Meshy - Cheapest with Clean Topology',
    description: 'Meshy offers the cheapest text-to-3D generation at $0.15/model with clean quad topology suitable for production. Free 200 credits/month for testing. Blender/Unity integration makes it ideal for game development and real-time applications. Best value for indie developers and small studios.',
    features: [
      '$0.15/model (cheapest)',
      'Clean quad topology',
      'Free: 200 credits/month',
      'Blender integration',
      'Unity/Unreal compatible',
      'Fast generation (2-5 minutes)'
    ],
    pros: [
      'Best price in market',
      'Production-ready topology',
      'Good free tier',
      'Game engine integration',
      'Fast turnaround'
    ],
    useCases: ['Game development', 'Indie projects', 'Rapid prototyping', 'Budget 3D assets', 'Unity/Unreal games'],
    docsUrl: 'https://www.meshy.ai/api',
    technicalDetails: 'Quality: Topology 85-90% production-ready. Geometry clean, suitable for rigging. Resolution adequate for games. Texture quality 80-85%. Polygon count optimized. Exports: GLB, FBX, OBJ. Best for: game devs, indie studios, projects prioritizing topology over photo-realism.'
  },

  'tripo': {
    subtitle: 'Tripo AI - Game Asset Specialist',
    description: 'Tripo AI ($0.18/model) specializes in game asset creation with clean geometry and auto-rigging. Production-ready 3D assets optimized for real-time rendering. Good topology for animation. Excellent for game studios needing reliable, game-optimized 3D content at scale.',
    features: [
      '$0.18/model',
      'Game asset optimization',
      'Clean geometry',
      'Auto-rigging included',
      'Real-time rendering ready',
      'Animation-friendly topology'
    ],
    pros: [
      'Game-optimized output',
      'Auto-rigging saves time',
      'Animation-ready',
      'Clean geometry',
      'Production reliability'
    ],
    useCases: ['Game assets', 'Real-time rendering', 'Animated characters', 'Props and environments', 'Game production'],
    docsUrl: 'https://www.tripo3d.ai/api',
    technicalDetails: 'Quality: Topology 88-92% game-ready. Auto-rigging 80-85% usable without editing. Optimized polygon counts for real-time. Texture maps included. Best for: game studios, character creation, animated 3D content, real-time applications.'
  },

  'luma-genie': {
    subtitle: 'Luma Genie - Customizable with AR Support',
    description: 'Luma Genie ($0.20/model) provides text-to-3D with customizable materials/styles and AR exploration support. Good balance of quality and flexibility. Suitable for product visualization, AR experiences, and creative projects needing style control.',
    features: [
      '$0.20/model',
      'Customizable materials/styles',
      'AR exploration support',
      'Product visualization',
      'Style control',
      'Multiple export formats'
    ],
    pros: [
      'Good customization',
      'AR-ready output',
      'Product viz quality',
      'Style flexibility',
      'Clean exports'
    ],
    useCases: ['AR experiences', 'Product visualization', 'E-commerce 3D', 'Creative projects', 'Style exploration'],
    docsUrl: 'https://lumalabs.ai/genie',
    technicalDetails: 'Quality: 3D accuracy 85-89%. Materials customizable. AR-optimized models. Product visualization 88-92% realistic. Exports: GLTF, USDZ for AR. Best for: AR apps, e-commerce, product marketing, projects needing AR compatibility.'
  },

  'hyper3d': {
    subtitle: 'Hyper3D - Natural Language Game Dev Focus',
    description: 'Hyper3D ($0.22/model) excels at natural language to 3D asset conversion with Blender/Unity/Unreal compatibility. Optimized for game development and product design workflows. Good prompt understanding makes iteration faster. Suitable for professional studios needing reliable asset generation.',
    features: [
      '$0.22/model',
      'Natural language processing',
      'Blender/Unity/Unreal ready',
      'Game dev optimized',
      'Product design quality',
      'Professional workflows'
    ],
    pros: [
      'Excellent prompt understanding',
      'Professional tool integration',
      'Game dev optimized',
      'Reliable output',
      'Good iteration speed'
    ],
    useCases: ['Game development', 'Product design', 'Professional studios', 'Asset libraries', 'Rapid iteration'],
    docsUrl: 'https://hyper3d.ai',
    technicalDetails: 'Quality: Prompt adherence 87-91%. Topology suitable for production. Tool integration excellent. Professional-grade output. Export flexibility. Best for: professional game studios, product designers, iterative workflows requiring prompt control.'
  },

  'alpha3d': {
    subtitle: 'Alpha3D - Enterprise Game & AR/VR',
    description: 'Alpha3D ($0.25/model) serves game studios and AR/VR teams with text/image-to-3D capabilities. Batch generation, browser preview, and GLB/USD export. Enterprise features for teams needing scalable 3D asset production. Good for studios with high-volume needs.',
    features: [
      '$0.25/model',
      'Text or image to 3D',
      'Batch generation',
      'Browser preview',
      'GLB/USD export',
      'Enterprise team features'
    ],
    pros: [
      'Batch processing',
      'Image-to-3D capable',
      'Enterprise features',
      'Preview system',
      'Multiple input methods'
    ],
    useCases: ['Game studios', 'AR/VR development', 'Batch asset creation', 'Enterprise teams', 'High-volume production'],
    docsUrl: 'https://www.alpha3d.io/api',
    technicalDetails: 'Quality: 3D accuracy 86-90%. Batch processing enables scale. Image-to-3D adds flexibility. Preview streamlines workflow. Enterprise-grade reliability. Best for: studios needing volume, AR/VR projects, teams requiring batch capabilities.'
  },

  'csm-3d': {
    subtitle: 'CSM.ai - Configurable Quality Tiers',
    description: 'CSM.ai ($0.25/model) offers image/text to 3D with pricing varying $0.20-0.30 based on resolution, materials, rigging, and export format. Flexibility in quality vs cost tradeoff. Good for projects with varying quality needs or budget optimization.',
    features: [
      '$0.20-0.30/model (configurable)',
      'Image or text input',
      'Resolution options',
      'Materials customization',
      'Optional rigging',
      'Multiple export formats'
    ],
    pros: [
      'Flexible pricing tiers',
      'Quality vs cost control',
      'Image-to-3D capable',
      'Rigging options',
      'Format flexibility'
    ],
    useCases: ['Variable quality needs', 'Budget optimization', 'Mixed-quality pipelines', 'Cost-sensitive projects', 'Flexible workflows'],
    docsUrl: 'https://www.csm.ai',
    technicalDetails: 'Quality: Low tier 80-85%, high tier 90-93%. Rigging 85-90% usable when included. Materials customizable. Resolution scales with price. Best for: projects with varying quality needs, budget-optimized workflows, flexible requirements.'
  },

  'shutterstock-3d': {
    subtitle: 'Shutterstock - Ethical Enterprise NVIDIA Edify',
    description: 'Shutterstock 3D ($0.30/model enterprise) built on NVIDIA Edify provides ethically-sourced, enterprise-grade 3D generation. Licensed training data ensures compliance. Realistic models suitable for commercial use. Premium pricing reflects ethical AI practices and enterprise support. Best for compliance-sensitive organizations.',
    features: [
      '$0.30/model (enterprise)',
      'NVIDIA Edify powered',
      'Ethical, licensed training',
      'Enterprise-grade compliance',
      'Realistic output',
      'Commercial licensing clear'
    ],
    pros: [
      'Ethically trained (licensed data)',
      'Enterprise compliance',
      'NVIDIA technology',
      'Commercial clarity',
      'Professional support'
    ],
    useCases: ['Enterprise with compliance needs', 'Ethical AI requirements', 'Commercial projects', 'Brand-safe content', 'Professional applications'],
    docsUrl: 'https://www.shutterstock.com/api',
    technicalDetails: 'Quality: Realism 89-93%. NVIDIA Edify ensures quality. Ethical training = compliance-safe. Enterprise support included. Commercial licensing clear. Best for: enterprises prioritizing ethical AI, compliance-sensitive organizations, professional commercial use.'
  }
};

