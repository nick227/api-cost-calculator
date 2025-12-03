/**
 * All Provider Code Examples - Consolidated
 * Node.js API integration examples for all 59 providers
 */

import { TEXT_CODE_EXAMPLES } from './codeExamples/textCodeExamples.js';
import { IMAGE_CODE_EXAMPLES } from './codeExamples/imageCodeExamples.js';
import { VIDEO_CODE_EXAMPLES } from './codeExamples/videoCodeExamples.js';
import { AVATAR_CODE_EXAMPLES } from './codeExamples/avatarCodeExamples.js';
import { VOICE_CODE_EXAMPLES } from './codeExamples/voiceCodeExamples.js';
import { STT_CODE_EXAMPLES } from './codeExamples/sttCodeExamples.js';
import { MUSIC_CODE_EXAMPLES } from './codeExamples/musicCodeExamples.js';
import { TEXT_3D_CODE_EXAMPLES } from './codeExamples/text3DCodeExamples.js';

/**
 * Combined code examples for all providers
 * Each example shows minimal working code for API integration
 */
export const PROVIDER_CODE_EXAMPLES = {
  ...TEXT_CODE_EXAMPLES,
  ...IMAGE_CODE_EXAMPLES,
  ...VIDEO_CODE_EXAMPLES,
  ...AVATAR_CODE_EXAMPLES,
  ...VOICE_CODE_EXAMPLES,
  ...STT_CODE_EXAMPLES,
  ...MUSIC_CODE_EXAMPLES,
  ...TEXT_3D_CODE_EXAMPLES
};

/**
 * Get code example for a provider
 * @param {string} providerId - Provider ID
 * @returns {string|null} Code example or null
 */
export function getProviderCodeExample(providerId) {
  return PROVIDER_CODE_EXAMPLES[providerId] || null;
}

