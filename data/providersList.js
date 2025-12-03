/**
 * Complete provider list - aggregated from category files
 * Last Updated: December 2, 2025
 */

import { TEXT_PROVIDERS } from './providers/textProviders.js';
import { IMAGE_PROVIDERS } from './providers/imageProviders.js';
import { VIDEO_PROVIDERS } from './providers/videoProviders.js';
import { AVATAR_PROVIDERS } from './providers/avatarProviders.js';
import { VOICE_PROVIDERS } from './providers/voiceProviders.js';
import { SPEECH_TO_TEXT_PROVIDERS } from './providers/speechToTextProviders.js';
import { MUSIC_PROVIDERS } from './providers/musicProviders.js';
import { TEXT_3D_PROVIDERS } from './providers/text3DProviders.js';

/**
 * Merge all providers into single config
 */
export const PROVIDERS_CONFIG = [
  ...TEXT_PROVIDERS,
  ...IMAGE_PROVIDERS,
  ...VIDEO_PROVIDERS,
  ...AVATAR_PROVIDERS,
  ...VOICE_PROVIDERS,
  ...SPEECH_TO_TEXT_PROVIDERS,
  ...MUSIC_PROVIDERS,
  ...TEXT_3D_PROVIDERS
];
