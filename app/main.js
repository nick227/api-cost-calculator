import { PROVIDERS_CONFIG } from '../data/providers.js';
import { PROVIDER_DETAILS } from '../data/providerDetails.js';
import { PricingTableModel } from '../models/PricingTableModel.js';
import { calculateUsage } from '../utils/usageCalculator.js';
import { setupLeftPanel, readUsageInputs } from '../ui/leftPanel.js';
import { setupQualitySettings, readQualityMultipliers } from '../ui/qualitySettings.js';
import { renderSummary } from '../ui/summaryCard.js';
import { renderModalitySections } from '../ui/modalityTable.js';
import { initProviderModal } from '../ui/providerModal.js';

class AppController {
  constructor() {
    this.elements = null;
    this.model = null;
  }

  getDOMElements() {
    const elements = {
      imageCountInput: document.getElementById('imageCountInput'),
      imageCheckbox: document.getElementById('imageCheckbox'),
      promptCheckbox: document.getElementById('promptCheckbox'),
      videoCheckbox: document.getElementById('videoCheckbox'),
      avatarCheckbox: document.getElementById('avatarCheckbox'),
      voiceCheckbox: document.getElementById('voiceCheckbox'),
      sttCheckbox: document.getElementById('sttCheckbox'),
      musicCheckbox: document.getElementById('musicCheckbox'),
      text3dCheckbox: document.getElementById('text3dCheckbox'),
      clearSelectionBtn: document.getElementById('clearSelectionBtn'),
      textModelSelect: document.getElementById('textModelSelect'),
      imageResolutionSelect: document.getElementById('imageResolutionSelect'),
      imageQualitySelect: document.getElementById('imageQualitySelect'),
      videoDurationSelect: document.getElementById('videoDurationSelect'),
      avatarDurationSelect: document.getElementById('avatarDurationSelect'),
      voiceQualitySelect: document.getElementById('voiceQualitySelect'),
      grandTotalEl: document.getElementById('grandTotal'),
      numberAssets: document.getElementById('numberAssets'),
      summaryBadgesEl: document.getElementById('summaryBadges'),
      selectedProvidersEl: document.getElementById('selectedProviders'),
      modalitiesGridEl: document.getElementById('modalitiesGrid')
    };

    const missing = Object.entries(elements)
      .filter(([_, el]) => !el)
      .map(([key]) => key);

    if (missing.length > 0) {
      throw new Error(`Missing required DOM elements: ${missing.join(', ')}`);
    }

    return elements;
  }

  init() {
    try {
      this.elements = this.getDOMElements();
      this.enhanceProvidersWithDetails();
      const usage = this.getUsageFromInputs();
      const qualityMultipliers = readQualityMultipliers(this.elements);
      this.model = new PricingTableModel(PROVIDERS_CONFIG, usage, qualityMultipliers);
      
      initProviderModal();
      this.setupEventHandlers();
      this.renderAll();
    } catch (error) {
      console.error('Failed to initialize app:', error);
      this.showError('Failed to initialize the application. Please refresh the page.');
    }
  }

  enhanceProvidersWithDetails() {
    PROVIDERS_CONFIG.forEach(provider => {
      if (PROVIDER_DETAILS[provider.id]) {
        provider.details = PROVIDER_DETAILS[provider.id];
      }
    });
  }

  showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = 'position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: #f56565; color: white; padding: 16px 24px; border-radius: 8px; z-index: 9999;';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
  }

  setupEventHandlers() {
    setupLeftPanel(this.elements, () => this.updateUsageAndRender());
    setupQualitySettings(this.elements, () => this.updateQualityAndRender());
    
    this.elements.clearSelectionBtn.addEventListener('click', () => {
      this.model.clearSelections();
      this.renderAll();
    });
  }

  getUsageFromInputs() {
    const { count, useImage, usePrompts, useVideo, useAvatar, useVoice, useSTT, useMusic, useText3D } = readUsageInputs(this.elements);
    return calculateUsage(count, useImage, usePrompts, useVideo, useAvatar, useVoice, useSTT, useMusic, useText3D);
  }

  updateUsageAndRender() {
    const usage = this.getUsageFromInputs();
    this.model.setUsage(usage);
    this.renderAll();
  }

  updateQualityAndRender() {
    const qualityMultipliers = readQualityMultipliers(this.elements);
    this.model.setQualityMultipliers(qualityMultipliers);
    this.renderAll();
  }

  renderAll() {
    const { grandTotalEl, numberAssets, summaryBadgesEl, modalitiesGridEl, selectedProvidersEl } = this.elements;
    
    renderSummary(this.model, grandTotalEl, summaryBadgesEl, selectedProvidersEl, numberAssets);
    renderModalitySections(this.model, modalitiesGridEl, (modality, providerId) => {
      this.model.toggleSelection(modality, providerId);
      this.renderAll();
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new AppController();
    app.init();
  });
} else {
  const app = new AppController();
  app.init();
}

