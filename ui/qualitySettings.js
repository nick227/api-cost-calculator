import {
  TEXT_MODELS,
  IMAGE_RESOLUTIONS,
  IMAGE_QUALITY,
  VIDEO_DURATIONS,
  AVATAR_DURATIONS,
  VOICE_QUALITY,
  getMultiplier
} from '../data/pricingTiers.js';

/**
 * Setup quality settings event handlers
 */
export function setupQualitySettings(elements, onUpdate) {
  const {
    textModelSelect,
    imageResolutionSelect,
    imageQualitySelect,
    videoDurationSelect,
    avatarDurationSelect,
    voiceQualitySelect
  } = elements;

  textModelSelect.addEventListener('change', onUpdate);
  imageResolutionSelect.addEventListener('change', onUpdate);
  imageQualitySelect.addEventListener('change', onUpdate);
  videoDurationSelect.addEventListener('change', onUpdate);
  avatarDurationSelect.addEventListener('change', onUpdate);
  voiceQualitySelect.addEventListener('change', onUpdate);
}

/**
 * Read current quality multipliers from selects
 */
export function readQualityMultipliers(elements) {
  const {
    textModelSelect,
    imageResolutionSelect,
    imageQualitySelect,
    videoDurationSelect,
    avatarDurationSelect,
    voiceQualitySelect
  } = elements;

  const textMultiplier = getMultiplier(TEXT_MODELS, textModelSelect.value);
  const imageResolutionMultiplier = getMultiplier(IMAGE_RESOLUTIONS, imageResolutionSelect.value);
  const imageQualityMultiplier = getMultiplier(IMAGE_QUALITY, imageQualitySelect.value);
  const videoMultiplier = getDurationMultiplier(VIDEO_DURATIONS, videoDurationSelect.value, 5);
  const avatarMultiplier = getDurationMultiplier(AVATAR_DURATIONS, avatarDurationSelect.value, 30);
  const voiceMultiplier = getMultiplier(VOICE_QUALITY, voiceQualitySelect.value);

  return {
    text: textMultiplier,
    image: imageResolutionMultiplier * imageQualityMultiplier,
    video: videoMultiplier,
    avatar: avatarMultiplier,
    voice: voiceMultiplier
  };
}

/**
 * Calculate duration multiplier based on selected duration
 * Video/avatar pricing is per-second, so we multiply by duration
 */
function getDurationMultiplier(durationList, selectedId, defaultSeconds) {
  const duration = durationList.find(d => d.id === selectedId);
  return duration ? duration.seconds : defaultSeconds;
}

