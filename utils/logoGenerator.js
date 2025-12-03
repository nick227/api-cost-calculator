/**
 * Fallback Logo Generator
 * Creates canvas-based letter avatars with modality-specific colors
 */

import { getModalityColors } from '../data/modalityColors.js';

/**
 * Generate a fallback logo using canvas
 * @param {string} providerName - Provider name
 * @param {string} modality - Modality type
 * @returns {string} Data URL for canvas image
 */
export function generateFallbackLogo(providerName, modality) {
  const canvas = document.createElement('canvas');
  const size = 112; // 2x for retina
  canvas.width = size;
  canvas.height = size;
  
  const ctx = canvas.getContext('2d');
  const colors = getModalityColors(modality);
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, colors.primary);
  gradient.addColorStop(1, colors.secondary);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  
  // Add subtle pattern/texture
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.fillRect(0, 0, size, size / 2);
  
  // Draw first letter
  const firstLetter = providerName.charAt(0).toUpperCase();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 56px system-ui, -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(firstLetter, size / 2, size / 2);
  
  return canvas.toDataURL('image/png');
}

/**
 * Create a fallback logo element
 * @param {string} providerName - Provider name
 * @param {string} modality - Modality type
 * @returns {HTMLElement} Image element with generated logo
 */
export function createFallbackLogoElement(providerName, modality) {
  const img = document.createElement('img');
  img.src = generateFallbackLogo(providerName, modality);
  img.alt = `${providerName} logo`;
  img.className = 'modal-provider-logo modal-provider-logo-fallback';
  return img;
}

