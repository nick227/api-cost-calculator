/**
 * Modality Color Scheme
 * Unique colors for each AI modality to help users visually identify categories
 */

export const MODALITY_COLORS = {
  text: {
    primary: '#4fd1c5',      // Teal (current accent)
    secondary: '#38b2ac',
    gradient: 'linear-gradient(135deg, #4fd1c5 0%, #38b2ac 100%)',
    name: 'Text Generation'
  },
  image: {
    primary: '#9f7aea',      // Purple
    secondary: '#805ad5',
    gradient: 'linear-gradient(135deg, #9f7aea 0%, #805ad5 100%)',
    name: 'Image Generation'
  },
  video: {
    primary: '#f56565',      // Red/Pink
    secondary: '#e53e3e',
    gradient: 'linear-gradient(135deg, #f56565 0%, #e53e3e 100%)',
    name: 'Video Generation'
  },
  avatar: {
    primary: '#ed8936',      // Orange
    secondary: '#dd6b20',
    gradient: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)',
    name: 'Avatar Videos'
  },
  voice: {
    primary: '#48bb78',      // Green
    secondary: '#38a169',
    gradient: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
    name: 'Voice Synthesis'
  },
  stt: {
    primary: '#4299e1',      // Blue
    secondary: '#3182ce',
    gradient: 'linear-gradient(135deg, #4299e1 0%, #3182ce 100%)',
    name: 'Speech-to-Text'
  },
  music: {
    primary: '#ec4899',      // Pink
    secondary: '#db2777',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    name: 'Music Generation'
  },
  text3d: {
    primary: '#fbbf24',      // Yellow/Gold
    secondary: '#f59e0b',
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    name: 'Text-to-3D'
  }
};

/**
 * Get modality for a provider based on their pricing structure
 * @param {Object} provider - Provider object
 * @returns {string} Modality name
 */
export function getProviderModality(provider) {
  if (!provider.pricing) return 'text';
  const modalities = Object.keys(provider.pricing);
  return modalities[0] || 'text';
}

/**
 * Get color scheme for a modality
 * @param {string} modality - Modality name
 * @returns {Object} Color scheme
 */
export function getModalityColors(modality) {
  return MODALITY_COLORS[modality] || MODALITY_COLORS.text;
}

