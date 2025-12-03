/**
 * Comprehensive Provider Details - All Modalities
 * Research-based, technical comparisons for all 59 providers
 * Last updated: December 2024
 * 
 * IMPORTANT DISCLAIMER:
 * =====================
 * Performance metrics and quality estimates in these descriptions are based on:
 * - Public benchmarks and testing reports
 * - Official provider documentation
 * - Community feedback and reviews
 * - Independent testing where available
 * 
 * Actual results may vary significantly based on:
 * - Specific use cases and requirements
 * - Input quality and complexity
 * - Model configuration and parameters
 * - Provider updates and improvements
 * - Infrastructure and network conditions
 * 
 * Quality percentages (e.g., "85-90% usable") are approximate estimates
 * and should be interpreted as general guidance, not guarantees.
 * 
 * Pricing and model availability are subject to change without notice.
 * Always verify current pricing, features, and model names with official
 * provider documentation before making integration decisions.
 * 
 * For the most accurate and up-to-date information, consult each
 * provider's official documentation linked in the docsUrl field.
 */

import { TEXT_PROVIDER_DETAILS } from './details/textProviderDetails.js';
import { IMAGE_PROVIDER_DETAILS_1 } from './details/imageProviderDetails.js';
import { IMAGE_PROVIDER_DETAILS_2 } from './details/imageProviderDetails2.js';
import { VIDEO_PROVIDER_DETAILS } from './details/videoProviderDetails.js';
import { AVATAR_PROVIDER_DETAILS } from './details/avatarProviderDetails.js';
import { VOICE_PROVIDER_DETAILS } from './details/voiceProviderDetails.js';
import { STT_PROVIDER_DETAILS } from './details/sttProviderDetails.js';
import { MUSIC_PROVIDER_DETAILS } from './details/musicProviderDetails.js';
import { TEXT_3D_PROVIDER_DETAILS } from './details/text3DProviderDetails.js';

/**
 * Combined provider details for all modalities
 * Each provider includes:
 * - subtitle: Brief positioning statement
 * - description: Comprehensive overview with context
 * - features: Specific capabilities and pricing
 * - pros: Key advantages compared to alternatives
 * - useCases: Ideal applications and user types
 * - docsUrl: Official API documentation
 * - technicalDetails: Expected output quality, accuracy metrics, limitations
 * 
 * Total: 59 providers across 8 modalities
 */
export const PROVIDER_DETAILS = {
  ...TEXT_PROVIDER_DETAILS,
  ...IMAGE_PROVIDER_DETAILS_1,
  ...IMAGE_PROVIDER_DETAILS_2,
  ...VIDEO_PROVIDER_DETAILS,
  ...AVATAR_PROVIDER_DETAILS,
  ...VOICE_PROVIDER_DETAILS,
  ...STT_PROVIDER_DETAILS,
  ...MUSIC_PROVIDER_DETAILS,
  ...TEXT_3D_PROVIDER_DETAILS
};
