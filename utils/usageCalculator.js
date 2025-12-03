/**
 * Calculate usage across modalities based on pipeline configuration
 * @param {number} count - Number of units to generate
 * @param {boolean} useImage - Generate images
 * @param {boolean} usePrompts - Generate text prompts
 * @param {boolean} useVideo - Generate videos
 * @param {boolean} useAvatar - Generate avatar videos
 * @param {boolean} useVoice - Generate voice/audio (TTS)
 * @param {boolean} useSTT - Transcribe audio (STT)
 * @param {boolean} useMusic - Generate music (text-to-music)
 * @param {boolean} useText3D - Generate 3D models (text-to-3D)
 * @returns {{text: number, image: number, video: number, avatar: number, voice: number, stt: number, music: number, text3d: number}}
 */
export function calculateUsage(count, useImage, usePrompts, useVideo, useAvatar, useVoice, useSTT, useMusic, useText3D) {
  const baseCount = Math.max(0, count);
  const imageUnits = useImage ? baseCount : 0;
  const textUnits = usePrompts ? baseCount : 0;
  const videoUnits = useVideo ? baseCount : 0;
  const avatarUnits = useAvatar ? baseCount : 0;
  const voiceUnits = useVoice ? baseCount : 0;
  const sttUnits = useSTT ? baseCount : 0;
  const musicUnits = useMusic ? baseCount : 0;
  const text3dUnits = useText3D ? baseCount : 0;

  return {
    text: textUnits,
    image: imageUnits,
    video: videoUnits,
    avatar: avatarUnits,
    voice: voiceUnits,
    stt: sttUnits,
    music: musicUnits,
    text3d: text3dUnits
  };
}

