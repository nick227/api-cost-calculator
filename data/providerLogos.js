/**
 * Provider Logo Configuration
 * Maps provider IDs to logo files or URLs
 * 
 * IMPLEMENTATION OPTIONS:
 * 
 * Option 1: Local files (recommended for production)
 * - Download logos manually and place in assets/logos/
 * - Reference: logo: 'assets/logos/openai.svg'
 * 
 * Option 2: Clearbit Logo API (automatic, free)
 * - Uses company domain to fetch logos
 * - Format: https://logo.clearbit.com/{domain}
 * - No downloads needed, works automatically
 * 
 * Option 3: Company favicon URLs (quick solution)
 * - Direct links to company favicons
 * - May have mixed quality/sizes
 */

export const PROVIDER_LOGOS = {
  // TEXT PROVIDERS - Using Clearbit Logo API (automatic)
  'grok': 'https://logo.clearbit.com/x.ai',
  'deepseek': 'https://logo.clearbit.com/deepseek.com',
  'anthropic': 'https://logo.clearbit.com/anthropic.com',
  'openrouter': 'https://logo.clearbit.com/openrouter.ai',
  'together': 'https://logo.clearbit.com/together.ai',
  'openai': 'https://logo.clearbit.com/openai.com',
  'gemini': 'https://logo.clearbit.com/google.com',

  // IMAGE PROVIDERS
  'runware': 'https://logo.clearbit.com/runware.ai',
  'dezgo-flux': 'https://logo.clearbit.com/dezgo.com',
  'deapi-image': 'https://logo.clearbit.com/deapi.ai',
  'dezgo-sd': 'https://logo.clearbit.com/dezgo.com',
  'dezgo-sdxl': 'https://logo.clearbit.com/dezgo.com',
  'stability': 'https://logo.clearbit.com/stability.ai',
  'replicate': 'https://logo.clearbit.com/replicate.com',
  'falai': 'https://logo.clearbit.com/fal.ai',
  'gemini-img': 'https://logo.clearbit.com/google.com',
  'openai-img': 'https://logo.clearbit.com/openai.com',
  'openrouter-img': 'https://logo.clearbit.com/openrouter.ai',
  'grok-img': 'https://logo.clearbit.com/x.ai',

  // VIDEO PROVIDERS
  'deapi-video': 'https://logo.clearbit.com/deapi.ai',
  'minimax-hailuo': 'https://logo.clearbit.com/minimax.io',
  'runway': 'https://logo.clearbit.com/runwayml.com',
  'falai-video': 'https://logo.clearbit.com/fal.ai',
  'falai-kling': 'https://logo.clearbit.com/fal.ai',
  'falai-ovi': 'https://logo.clearbit.com/fal.ai',
  'gemini-video': 'https://logo.clearbit.com/google.com',
  'falai-veo3': 'https://logo.clearbit.com/fal.ai',

  // AVATAR PROVIDERS
  'a2e': 'https://logo.clearbit.com/a2e.ai',
  'hedra': 'https://logo.clearbit.com/hedra.com',
  'heygen': 'https://logo.clearbit.com/heygen.com',
  'tavus': 'https://logo.clearbit.com/tavus.io',
  'did': 'https://logo.clearbit.com/d-id.com',
  'colossyan': 'https://logo.clearbit.com/colossyan.com',
  'synthesia': 'https://logo.clearbit.com/synthesia.io',

  // VOICE PROVIDERS
  'google-tts': 'https://logo.clearbit.com/google.com',
  'amazon-polly': 'https://logo.clearbit.com/aws.amazon.com',
  'playht': 'https://logo.clearbit.com/play.ht',
  'elevenlabs': 'https://logo.clearbit.com/elevenlabs.io',
  'openai-tts': 'https://logo.clearbit.com/openai.com',

  // SPEECH-TO-TEXT PROVIDERS
  'assemblyai': 'https://logo.clearbit.com/assemblyai.com',
  'lemonfox-whisper': 'https://logo.clearbit.com/lemonfox.ai',
  'google-stt-batch': 'https://logo.clearbit.com/google.com',
  'speechmatics': 'https://logo.clearbit.com/speechmatics.com',
  'deepgram-batch': 'https://logo.clearbit.com/deepgram.com',
  'openai-whisper': 'https://logo.clearbit.com/openai.com',
  'deepgram-stream': 'https://logo.clearbit.com/deepgram.com',
  'google-stt': 'https://logo.clearbit.com/google.com',
  'azure-stt': 'https://logo.clearbit.com/microsoft.com',
  'agora-stt': 'https://logo.clearbit.com/agora.io',
  'speechtext': 'https://logo.clearbit.com/speechtext.ai',

  // MUSIC PROVIDERS
  'aimusicapi': 'https://logo.clearbit.com/aimusicapi.ai',
  'riffusion': 'https://logo.clearbit.com/riffusion.com',
  'poyo': 'https://logo.clearbit.com/poyo.ai',
  'tempolor': 'https://logo.clearbit.com/tempolor.com',
  'musicapi': 'https://logo.clearbit.com/musicapi.ai',
  'beatoven': 'https://logo.clearbit.com/beatoven.ai',
  'mubert': 'https://logo.clearbit.com/mubert.com',
  'soundverse': 'https://logo.clearbit.com/soundverse.ai',

  // TEXT-TO-3D PROVIDERS
  'meshy': 'https://logo.clearbit.com/meshy.ai',
  'tripo': 'https://logo.clearbit.com/tripo3d.ai',
  'luma-genie': 'https://logo.clearbit.com/lumalabs.ai',
  'hyper3d': 'https://logo.clearbit.com/hyper3d.ai',
  'alpha3d': 'https://logo.clearbit.com/alpha3d.io',
  'csm-3d': 'https://logo.clearbit.com/csm.ai',
  'shutterstock-3d': 'https://logo.clearbit.com/shutterstock.com'
};

/**
 * Get logo URL for a provider
 * @param {string} providerId - The provider ID
 * @returns {string|null} Logo URL or null if not available
 */
export function getProviderLogo(providerId) {
  return PROVIDER_LOGOS[providerId] || null;
}

/**
 * MANUAL DOWNLOAD GUIDE:
 * =====================
 * If you prefer local logos for better control and reliability:
 * 
 * 1. Visit each provider's website
 * 2. Download their logo (usually in Press Kit or About page)
 * 3. Save as SVG or PNG in assets/logos/
 * 4. Naming: {provider-id}.svg or {provider-id}.png
 *    Examples: openai.svg, anthropic.png, runway.svg
 * 5. Update PROVIDER_LOGOS to use local paths:
 *    'openai': 'assets/logos/openai.svg'
 * 
 * RECOMMENDED LOGO SOURCES:
 * - Company press kits (best quality)
 * - Company GitHub repos
 * - Clearbit Logo API (automatic)
 * - Brandfetch.com
 * - LogoSearch.com
 */

