    /**
     * Pricing tier configurations for different quality/size options
     * Last Updated: December 2, 2025
     */

    export const IMAGE_RESOLUTIONS = [
    { id: '512', label: '512×512', multiplier: 0.5, default: false },
    { id: '1024', label: '1024×1024', multiplier: 1.0, default: true },
    { id: '1024x1792', label: '1024×1792', multiplier: 1.5, default: false },
    { id: '1792x1024', label: '1792×1024', multiplier: 1.5, default: false }
    ];

    export const IMAGE_QUALITY = [
    { id: 'standard', label: 'Standard', multiplier: 1.0, default: true },
    { id: 'hd', label: 'HD', multiplier: 2.0, default: false }
    ];

export const VIDEO_DURATIONS = [
  { id: '5', label: '5 seconds', seconds: 5, default: true },
  { id: '10', label: '10 seconds', seconds: 10, default: false },
  { id: '30', label: '30 seconds', seconds: 30, default: false },
  { id: '60', label: '1 minute', seconds: 60, default: false }
];

export const AVATAR_DURATIONS = [
  { id: '15', label: '15 seconds', seconds: 15, default: false },
  { id: '30', label: '30 seconds', seconds: 30, default: true },
  { id: '60', label: '1 minute', seconds: 60, default: false },
  { id: '120', label: '2 minutes', seconds: 120, default: false }
];

export const TEXT_MODELS = [
  { id: 'fast', label: 'Fast (GPT-4o-mini/Flash)', multiplier: 0.05, default: false },
  { id: 'balanced', label: 'Balanced (GPT-5/Gemini 2.5 Pro)', multiplier: 1.0, default: true },
  { id: 'advanced', label: 'Advanced (o3/o3-mini)', multiplier: 2.5, default: false }
];

    export const VOICE_QUALITY = [
    { id: 'standard', label: 'Standard', multiplier: 1.0, default: true },
    { id: 'turbo', label: 'Turbo', multiplier: 0.65, default: false },
    { id: 'multilingual', label: 'Multilingual', multiplier: 1.3, default: false }
    ];

    /**
     * Get default option from a tier list
     */
    export function getDefaultOption(tierList) {
    return tierList.find(tier => tier.default) || tierList[0];
    }

    /**
     * Get multiplier for selected option
     */
    export function getMultiplier(tierList, selectedId) {
    const option = tierList.find(tier => tier.id === selectedId);
    return option ? option.multiplier : 1.0;
    }

